import React from 'react';
import './Resume.css';
import {Fade} from "@mui/material";
import {FULL_NAME, useLang} from "../../i18n/LanguageContext";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StorageOutlined from '@mui/icons-material/StorageOutlined';
import DevicesOutlined from '@mui/icons-material/DevicesOutlined';
import PsychologyOutlined from '@mui/icons-material/PsychologyOutlined';
import CloudOutlined from '@mui/icons-material/CloudOutlined';
import AccountTreeOutlined from '@mui/icons-material/AccountTreeOutlined';
import ViewKanbanOutlined from '@mui/icons-material/ViewKanbanOutlined';
import picture from "../../assets/profile-picture.jpg";
import {cvContent, SkillIcon} from "../../constants/cvConstants";
import LangSwitch from "../LangSwitch";
import Timeline, {TimelineItem} from "./Timeline";

const SKILL_ICONS: Record<SkillIcon, React.ElementType> = {
    backend: StorageOutlined,
    frontend: DevicesOutlined,
    ai: PsychologyOutlined,
    devops: CloudOutlined,
    architecture: AccountTreeOutlined,
    methods: ViewKanbanOutlined,
};

const CEFR = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

function Resume() {
    const {lang} = useLang();
    const cv = cvContent[lang];
    const name = FULL_NAME[lang];

    // Data is stored newest-first; the timelines read left (oldest) to right (newest).
    const experience: TimelineItem[] = [...cv.experience].reverse().map(e => ({
        id: e.company + e.period, title: e.title, org: e.company,
        period: e.period, location: e.location, bullets: e.bullets,
        summary: e.summary, groups: e.groups,
    }));
    const education: TimelineItem[] = [...cv.education].reverse().map(e => ({
        id: e.title, title: e.title, org: e.school,
        period: e.period, location: e.location, bullets: e.bullets,
    }));

    return (
        <Fade in timeout={{enter: 1200}}>
            <div className="Resume" lang={lang}>

                <header className="cv-hero">
                    <LangSwitch className="cv-lang"/>

                    <div className="cv-avatar">
                        <img src={picture} alt={name}/>
                    </div>
                    <div className="cv-hero-text">
                        <h1>{name}</h1>
                        <p className="cv-headline">{cv.headline}</p>
                        <div className="cv-contact">
                            <a className="cv-pill" href="mailto:gbouzazi@gmail.com">
                                <MailOutlineIcon fontSize="small"/> gbouzazi@gmail.com
                            </a>
                            <a className="cv-pill" href="https://www.linkedin.com/in/ghazi-bouzazi/"
                               target="_blank" rel="noreferrer noopener">
                                <LinkedInIcon fontSize="small"/> LinkedIn
                            </a>
                        </div>
                    </div>
                </header>

                <section className="cv-section">
                    <h2 className="cv-title"><span>01</span>{cv.sections.profile}</h2>
                    <p className="cv-profile">{cv.profile}</p>
                </section>

                <section className="cv-section">
                    <h2 className="cv-title"><span>02</span>{cv.sections.experience}</h2>
                    <Timeline idPrefix="exp" items={experience} labels={cv.ui}/>
                </section>

                <section className="cv-section">
                    <h2 className="cv-title"><span>03</span>{cv.sections.skills}</h2>
                    <div className="cv-skills">
                        {cv.skills.map(skill => {
                            const Icon = SKILL_ICONS[skill.icon];
                            return (
                                <div className="cv-card cv-skill" key={skill.label}>
                                    <div className="cv-skill-head">
                                        <span className="cv-skill-icon"><Icon/></span>
                                        <h3>{skill.label}</h3>
                                    </div>
                                    <ul className="cv-chips">
                                        {skill.items.map(s => <li key={s}>{s}</li>)}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section className="cv-section">
                    <h2 className="cv-title"><span>04</span>{cv.sections.education}</h2>
                    <Timeline idPrefix="edu" items={education} labels={cv.ui}/>
                </section>

                <div className="cv-split">
                    <section className="cv-section cv-card">
                        <h2 className="cv-subtitle">{cv.sections.languages}</h2>
                        <ul className="cv-langs">
                            {cv.languages.map(l => {
                                const rank = CEFR.indexOf(l.level) + 1;
                                return (
                                    <li key={l.name}>
                                        <div className="cv-lang-row">
                                            <span>{l.name}{l.note && <em> · {l.note}</em>}</span>
                                            <strong>{l.level}</strong>
                                        </div>
                                        <div className="cv-meter" role="img" aria-label={`${l.name} ${l.level}`}>
                                            {CEFR.map((c, i) => <span key={c} className={i < rank ? 'on' : ''}/>)}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </section>

                    <section className="cv-section cv-card">
                        <h2 className="cv-subtitle">{cv.sections.strengths}</h2>
                        <ul className="cv-chips cv-chips-lg">
                            {cv.strengths.map(s => <li key={s}>{s}</li>)}
                        </ul>
                        <h2 className="cv-subtitle cv-subtitle-gap">{cv.sections.interests}</h2>
                        <ul className="cv-chips cv-chips-lg">
                            {cv.interests.map(s => <li key={s}>{s}</li>)}
                        </ul>
                    </section>
                </div>
            </div>
        </Fade>
    );
}

export default Resume;
