import React from 'react';
import './project.css';
import {Fade} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import NorthEast from '@mui/icons-material/NorthEast';
import {ProjectInfo, projectInfo} from "../../constants/projectConstants";
import {useLang, useT} from "../../i18n/LanguageContext";

const TEXT = {
    en: {
        eyebrow: 'Projects',
        title: "Things I've built",
        lead: 'From a mobility super-app in production to the back-ends, full-stack apps and microservices that shaped how I build software.',
        featured: 'Featured',
        more: 'More projects',
        website: 'Visit website',
        code: 'View code',
        logo: 'logo',
    },
    fr: {
        eyebrow: 'Projets',
        title: "Ce que j'ai construit",
        lead: "D'une super-app de mobilité en production aux back-ends, applications full-stack et microservices qui ont façonné ma façon de développer.",
        featured: 'À la une',
        more: 'Autres projets',
        website: 'Voir le site',
        code: 'Voir le code',
        logo: 'logo',
    },
    ar: {
        eyebrow: 'المشاريع',
        title: 'ما قمت ببنائه',
        lead: 'من تطبيق تنقّل شامل قيد التشغيل، إلى الواجهات الخلفية وتطبيقات Full-Stack والخدمات المصغّرة التي شكّلت طريقتي في تطوير البرمجيات.',
        featured: 'مميّز',
        more: 'مشاريع أخرى',
        website: 'زيارة الموقع',
        code: 'عرض الكود',
        logo: 'شعار',
    },
};

type Text = typeof TEXT.en;

function ProjectLinkButton({project, primary, t}: { project: ProjectInfo; primary?: boolean; t: Text }) {
    const isSite = project.link.kind === 'website';
    const label = isSite ? t.website : t.code;
    return (
        <a className={`proj-btn ${primary ? 'proj-btn-primary' : 'proj-btn-ghost'}`}
           href={project.link.href} target="_blank" rel="noreferrer noopener"
           aria-label={`${label} — ${project.title}`}>
            {isSite ? <>{label} <NorthEast className="flip-rtl" fontSize="small"/></>
                : <><GitHubIcon fontSize="small"/> {label}</>}
        </a>
    );
}

function Stack({items}: { items: string[] }) {
    return (
        <ul className="proj-stack">
            {items.map(s => <li key={s}>{s}</li>)}
        </ul>
    );
}

function Project() {
    const t = useT(TEXT);
    const {lang} = useLang();
    const featured = projectInfo.filter(p => p.featured);
    const others = projectInfo.filter(p => !p.featured);

    return (
        <Fade in timeout={{enter: 1200}}>
            <div className="Project">

                <header className="proj-head">
                    <p className="proj-eyebrow"><span className="proj-dot"/>{t.eyebrow}</p>
                    <h1>{t.title}</h1>
                    <p className="proj-lead">{t.lead}</p>
                </header>

                {featured.map(p => (
                    <article className="proj-featured" key={p.id}>
                        <div className="proj-media proj-media-featured">
                            <img src={p.image} alt={`${p.title} ${t.logo}`}/>
                        </div>
                        <div className="proj-featured-body">
                            <span className="proj-badge">{t.featured}</span>
                            <h2>{p.title}</h2>
                            <span className="proj-tagline">{p.tagline[lang]}</span>
                            <p>{p.description[lang]}</p>
                            <Stack items={p.stack[lang]}/>
                            <ProjectLinkButton project={p} primary t={t}/>
                        </div>
                    </article>
                ))}

                <h2 className="proj-title"><span>{String(others.length).padStart(2, '0')}</span>{t.more}</h2>

                <div className="proj-grid">
                    {others.map(p => (
                        <article className="proj-card" key={p.id}>
                            <div className="proj-media">
                                <img src={p.image} alt={`${p.title} ${t.logo}`} loading="lazy"/>
                            </div>
                            <div className="proj-card-body">
                                <h3>{p.title}</h3>
                                <span className="proj-tagline">{p.tagline[lang]}</span>
                                <p>{p.description[lang]}</p>
                                <Stack items={p.stack[lang]}/>
                                <ProjectLinkButton project={p} t={t}/>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </Fade>
    );
}

export default Project;
