import React from 'react';
import {Link} from "react-router-dom";
import './Error.css';
import {useT} from "../../i18n/LanguageContext";

const TEXT = {
    en: {message: 'oops, something went wrong', back: 'Back to home'},
    fr: {message: "oups, quelque chose s'est mal passé", back: "Retour à l'accueil"},
    ar: {message: 'عذراً، حدث خطأ ما', back: 'العودة إلى الصفحة الرئيسية'},
};

const Error = () => {
    const t = useT(TEXT);
    return (
        <div className='error-container'>
            <div className='error-text'>
                <h1>
                    {t.message}{' '}
                    <span role='img' aria-label='confused'>
            😨
          </span>
                </h1>
                <Link className='error-link' to='/'>{t.back}</Link>
            </div>
        </div>
    );
};

export default Error;
