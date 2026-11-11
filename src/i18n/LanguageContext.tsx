import React, {createContext, useCallback, useContext, useEffect, useState} from 'react';

export type Lang = 'en' | 'fr' | 'ar';

export const LANGS: Lang[] = ['en', 'fr', 'ar'];
export const isLang = (v: unknown): v is Lang => LANGS.includes(v as Lang);
export const isRtl = (lang: Lang) => lang === 'ar';

const STORAGE_KEY = 'lang';

function readInitialLang(): Lang {
    // 1. An explicit ?lang=fr / ?lang=en in the URL (shareable links).
    try {
        const fromUrl = new URLSearchParams(window.location.search).get('lang');
        if (isLang(fromUrl)) return fromUrl;
    } catch { /* ignore */ }
    // 2. The visitor's previous choice.
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (isLang(stored)) return stored;
    } catch { /* storage may be blocked */ }
    // 3. The browser language.
    const nav = (typeof navigator !== 'undefined' ? navigator.language || '' : '').toLowerCase();
    if (nav.startsWith('fr')) return 'fr';
    if (nav.startsWith('ar')) return 'ar';
    return 'en';
}

interface LanguageContextValue {
    lang: Lang;
    setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
    lang: 'en',
    setLang: () => undefined,
});

export function LanguageProvider({children}: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Lang>(readInitialLang);

    const setLang = useCallback((next: Lang) => {
        setLangState(next);
        try {
            window.localStorage.setItem(STORAGE_KEY, next);
        } catch { /* ignore */ }
    }, []);

    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = isRtl(lang) ? 'rtl' : 'ltr';
    }, [lang]);

    return (
        <LanguageContext.Provider value={{lang, setLang}}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLang = () => useContext(LanguageContext);

/** Pick the string (or object) for the current language from an {en, fr} pair. */
export function useT<T>(dict: Record<Lang, T>): T {
    const {lang} = useLang();
    return dict[lang];
}

/** The site owner's name as written in each language. */
export const FULL_NAME: Record<Lang, string> = {
    en: 'Ghazi Bouzazi',
    fr: 'Ghazi Bouzazi',
    ar: 'غازي البوزازي',
};
