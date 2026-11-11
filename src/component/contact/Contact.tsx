import React, {useEffect, useRef, useState} from 'react';
import './Contact.css';
import {Fade, SvgIcon} from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import ContentCopyOutlined from '@mui/icons-material/ContentCopyOutlined';
import CheckOutlined from '@mui/icons-material/CheckOutlined';
import ArrowOutward from '@mui/icons-material/NorthEast';
import SendOutlined from '@mui/icons-material/SendOutlined';
import {useT} from "../../i18n/LanguageContext";

const TikTokIcon = (props: any) => (
    <SvgIcon {...props} viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </SvgIcon>
);

const EMAIL = 'gbouzazi@gmail.com';

const CHANNELS = [
    {name: 'LinkedIn', handle: 'in/ghazi-bouzazi', href: 'https://www.linkedin.com/in/ghazi-bouzazi/', Icon: LinkedInIcon},
    {name: 'GitHub', handle: '@ghazi135', href: 'https://github.com/ghazi135', Icon: GitHubIcon},
    {name: 'Instagram', handle: '@ghazi.bouzazi', href: 'https://www.instagram.com/ghazi.bouzazi/', Icon: InstagramIcon},
    {name: 'TikTok', handle: '@ghazibouzazi', href: 'https://www.tiktok.com/@ghazibouzazi', Icon: TikTokIcon},
];

const TEXT = {
    en: {
        eyebrow: 'Contact',
        title: "Let's build something together",
        lead: "Got an interesting project you're working on, or just want to say hi? I'd love to hear from you.",
        label: 'The best way to reach me',
        send: 'Send an email',
        copy: 'Copy address',
        copied: 'Copied!',
        copiedSr: 'Email address copied to clipboard',
        findMe: 'Or find me on',
        channels: [
            'Professional network, roles and collaborations.',
            'Code, side projects and past work.',
            'Photography and behind-the-scenes content.',
            'Short videos about tech, design and life.',
        ],
    },
    fr: {
        eyebrow: 'Contact',
        title: 'Construisons quelque chose ensemble',
        lead: "Un projet intéressant en cours, ou simplement envie de dire bonjour ? Je serais ravi d'avoir de vos nouvelles.",
        label: 'Le meilleur moyen de me joindre',
        send: 'Envoyer un e-mail',
        copy: "Copier l'adresse",
        copied: 'Copiée !',
        copiedSr: 'Adresse e-mail copiée dans le presse-papiers',
        findMe: 'Ou retrouvez-moi sur',
        channels: [
            'Réseau professionnel, opportunités et collaborations.',
            'Code, projets personnels et travaux passés.',
            'Photographie et coulisses.',
            'Vidéos courtes sur la tech, le design et la vie.',
        ],
    },
    ar: {
        eyebrow: 'تواصل',
        title: 'لنبنِ شيئاً معاً',
        lead: 'هل لديك مشروع مثير تعمل عليه، أو تريد فقط إلقاء التحية؟ يسعدني أن أسمع منك.',
        label: 'أفضل طريقة للتواصل معي',
        send: 'أرسل بريداً إلكترونياً',
        copy: 'نسخ العنوان',
        copied: 'تم النسخ!',
        copiedSr: 'تم نسخ عنوان البريد الإلكتروني',
        findMe: 'أو تجدني على',
        channels: [
            'الشبكة المهنية والفرص والتعاون.',
            'الكود والمشاريع الجانبية والأعمال السابقة.',
            'التصوير الفوتوغرافي وما خلف الكواليس.',
            'فيديوهات قصيرة عن التكنولوجيا والتصميم والحياة.',
        ],
    },
};

function Contact() {
    const t = useT(TEXT);
    const [copied, setCopied] = useState(false);
    const timer = useRef<number>();

    useEffect(() => () => window.clearTimeout(timer.current), []);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            window.clearTimeout(timer.current);
            timer.current = window.setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${EMAIL}`;
        }
    };

    return (
        <Fade in timeout={{enter: 1200}}>
            <div className="Contact">

                <header className="contact-head">
                    <p className="contact-eyebrow"><span className="contact-dot"/>{t.eyebrow}</p>
                    <h1>{t.title}</h1>
                    <p className="contact-lead">{t.lead}</p>
                </header>

                <section className="contact-email">
                    <div className="contact-email-main">
                        <span className="contact-icon contact-icon-lg"><MailOutlineIcon/></span>
                        <div>
                            <p className="contact-label">{t.label}</p>
                            <a className="contact-address" href={`mailto:${EMAIL}`} dir="ltr">{EMAIL}</a>
                        </div>
                    </div>
                    <div className="contact-email-actions">
                        <a className="contact-btn contact-btn-primary" href={`mailto:${EMAIL}`}>
                            <SendOutlined fontSize="small"/> {t.send}
                        </a>
                        <button type="button" className="contact-btn contact-btn-ghost" onClick={copyEmail}>
                            {copied
                                ? <><CheckOutlined fontSize="small"/> {t.copied}</>
                                : <><ContentCopyOutlined fontSize="small"/> {t.copy}</>}
                        </button>
                        <span className="visually-hidden" aria-live="polite">
                            {copied ? t.copiedSr : ''}
                        </span>
                    </div>
                </section>

                <section>
                    <h2 className="contact-title">{t.findMe}</h2>
                    <div className="contact-channels">
                        {CHANNELS.map(({name, handle, href, Icon}, i) => (
                            <a className="contact-card" key={name} href={href}
                               target="_blank" rel="noreferrer noopener">
                                <div className="contact-card-head">
                                    <span className="contact-icon"><Icon/></span>
                                    <ArrowOutward className="contact-arrow flip-rtl" fontSize="small"/>
                                </div>
                                <h3>{name}</h3>
                                <span className="contact-handle" dir="ltr">{handle}</span>
                                <p>{t.channels[i]}</p>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </Fade>
    );
}

export default Contact;
