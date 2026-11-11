import React from 'react';
import './LangSwitch.css';
import {Lang, useLang} from "../i18n/LanguageContext";

const OPTIONS: { value: Lang; label: string; name: string }[] = [
    {value: 'en', label: 'EN', name: 'English'},
    {value: 'fr', label: 'FR', name: 'Français'},
    {value: 'ar', label: 'ع', name: 'العربية'},
];

function LangSwitch({className = ''}: { className?: string }) {
    const {lang, setLang} = useLang();
    return (
        <div className={`lang-switch ${className}`} role="group" aria-label="Language / Langue / اللغة" dir="ltr">
            {OPTIONS.map(o => (
                <button key={o.value} type="button" lang={o.value} title={o.name}
                        aria-pressed={lang === o.value} onClick={() => setLang(o.value)}>
                    {o.label}
                </button>
            ))}
        </div>
    );
}

export default LangSwitch;
