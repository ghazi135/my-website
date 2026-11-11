import React from 'react';
import './About.css';
import Fade from '@mui/material/Fade';
import {SvgIcon} from "@mui/material";
import {Link} from "react-router-dom";
import picture from "../../assets/profile-picture.jpg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowForward from '@mui/icons-material/ArrowForward';
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined';
import LayersOutlined from '@mui/icons-material/LayersOutlined';
import PhoneIphoneOutlined from '@mui/icons-material/PhoneIphoneOutlined';
import PsychologyOutlined from '@mui/icons-material/PsychologyOutlined';
import CloudOutlined from '@mui/icons-material/CloudOutlined';
import ElectricCarOutlined from '@mui/icons-material/ElectricCarOutlined';
import SchoolOutlined from '@mui/icons-material/SchoolOutlined';

// Custom TikTok Icon Component
const TikTokIcon = (props: any) => (
    <SvgIcon {...props} viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </SvgIcon>
);

const SOCIALS = [
    {label: 'Instagram', href: 'https://www.instagram.com/ghazi.bouzazi/', Icon: InstagramIcon},
    {label: 'LinkedIn', href: 'https://www.linkedin.com/in/ghazi-bouzazi/', Icon: LinkedInIcon},
    {label: 'GitHub', href: 'https://github.com/ghazi135', Icon: GitHubIcon},
    {label: 'TikTok', href: 'https://www.tiktok.com/@ghazibouzazi', Icon: TikTokIcon},
    {label: 'Email', href: 'mailto:gbouzazi@gmail.com', Icon: MailOutlineIcon},
];

const SERVICES = [
    {
        Icon: LayersOutlined,
        title: 'Full-stack engineering',
        text: 'Enterprise web apps and APIs with React, Angular, Java/Spring Boot, C# and Python/FastAPI — built on clean, scalable architecture.',
    },
    {
        Icon: PhoneIphoneOutlined,
        title: 'Mobile apps',
        text: 'Cross-platform iOS & Android apps with Flutter and React Native, from first commit to the stores.',
    },
    {
        Icon: PsychologyOutlined,
        title: 'AI & LLMOps',
        text: 'Multi-agent systems, hybrid RAG, evaluation pipelines and local LLM deployment (LangGraph, CrewAI, vLLM, Ollama).',
    },
    {
        Icon: CloudOutlined,
        title: 'DevOps & Cloud',
        text: 'Docker, Kubernetes, CI/CD pipelines, AWS and Google Cloud — shipping reliably to production.',
    },
];

const NOW = [
    {
        Icon: ElectricCarOutlined,
        org: 'I-RIIDE',
        role: 'Co-founder · Senior Full Stack & AI Engineer',
        text: 'A mobility super-app bringing together parking, EV charging, car sharing, rentals, micro-mobility and Swiss public transport. I work across the mobile app, the B2B partner platform and the admin back office.',
    },
    {
        Icon: SchoolOutlined,
        org: 'OpenClassrooms',
        role: 'Software Engineering Mentor',
        text: 'Mentoring software engineering students in Java and Angular, with code reviews and structured, actionable feedback.',
    },
];

const STACK = ['Flutter', 'React', 'Spring Boot', 'LangGraph', 'Angular'];

function About() {
    return (
        <Fade in timeout={{enter: 1200}}>
            <div className="Home">

                {/* ---------- Hero ---------- */}
                <section className="home-hero">
                    <div className="home-hero-text">
                        <p className="home-eyebrow">
                            Hi <span className="wave" role="img" aria-label="wave">👋🏼</span> I'm
                        </p>
                        <h1 className="home-name">Ghazi Bouzazi</h1>
                        <p className="home-role">Senior Full-Stack &amp; AI Software Engineer</p>
                        <p className="home-lead">
                            I design and build scalable applications — from mobile apps to multi-agent AI
                            systems — with a strong focus on clean architecture, usability and high-quality
                            user experiences.
                        </p>

                        <div className="home-cta">
                            <Link className="home-btn home-btn-primary" to="/cv">
                                <DescriptionOutlined fontSize="small"/> View my CV
                            </Link>
                            <Link className="home-btn home-btn-ghost" to="/contact">
                                Get in touch <ArrowForward fontSize="small"/>
                            </Link>
                        </div>

                        <ul className="home-socials">
                            {SOCIALS.map(({label, href, Icon}) => (
                                <li key={label}>
                                    <a href={href} aria-label={label} title={label}
                                       target="_blank" rel="noreferrer noopener">
                                        <Icon/>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="home-photo-wrap">
                        <div className="home-photo">
                            <img src={picture} alt="Ghazi Bouzazi"/>
                        </div>
                        {STACK.map((s, i) => (
                            <span className={`home-float home-float-${i}`} key={s} aria-hidden="true">{s}</span>
                        ))}
                    </div>
                </section>

                {/* ---------- What I do ---------- */}
                <section className="home-section">
                    <h2 className="home-title"><span>01</span>What I do</h2>
                    <div className="home-services">
                        {SERVICES.map(({Icon, title, text}) => (
                            <article className="home-card home-service" key={title}>
                                <span className="home-icon"><Icon/></span>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* ---------- About ---------- */}
                <section className="home-section">
                    <h2 className="home-title"><span>02</span>About me</h2>
                    <div className="home-about">
                        <p>
                            I'm a Full-Stack Software Engineer, CTO, co-founder, and tech entrepreneur. I currently
                            lead the technical vision of multiple projects, including Nova Metrics and I-RIIDE, where
                            I work across backend architecture, mobile development, cloud infrastructure, and product
                            strategy.
                        </p>
                        <p>
                            Originally from Tunisia and now based between France and Switzerland, I love mixing
                            creativity and technology. When I'm not shipping features or reviewing code, you'll find
                            me exploring new cities, working on photography projects, or sharing insights about tech,
                            design, and entrepreneurship.
                        </p>
                        <p>
                            I occasionally write about development, UI/UX, and my journey in building products. Feel
                            free to check out my <a href="https://github.com/ghazi135" target="_blank"
                                                    rel="noreferrer noopener">GitHub</a> for past work, or connect
                            with me on <a href="https://www.instagram.com/ghazi.bouzazi/" target="_blank"
                                          rel="noreferrer noopener">Instagram</a> to discover my latest photos and
                            behind-the-scenes content.
                        </p>
                    </div>
                </section>

                {/* ---------- Now ---------- */}
                <section className="home-section">
                    <h2 className="home-title"><span>03</span>Right now</h2>
                    <div className="home-now">
                        {NOW.map(({Icon, org, role, text}) => (
                            <article className="home-card home-now-card" key={org}>
                                <div className="home-now-head">
                                    <span className="home-icon"><Icon/></span>
                                    <div>
                                        <h3>{org}</h3>
                                        <span className="home-now-role">{role}</span>
                                    </div>
                                </div>
                                <p>{text}</p>
                            </article>
                        ))}
                    </div>

                    <div className="home-banner">
                        <div>
                            <h3>Want the full story?</h3>
                            <p>My experience, skills and education — in English and French.</p>
                        </div>
                        <Link className="home-btn home-btn-primary" to="/cv">
                            Open my CV <ArrowForward fontSize="small"/>
                        </Link>
                    </div>
                </section>
            </div>
        </Fade>
    );
}

export default About;
