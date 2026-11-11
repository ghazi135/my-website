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
import {FULL_NAME, useLang, useT} from "../../i18n/LanguageContext";

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

const SERVICE_ICONS = [LayersOutlined, PhoneIphoneOutlined, PsychologyOutlined, CloudOutlined];
const NOW_ICONS = [ElectricCarOutlined, SchoolOutlined];
const STACK = ['Flutter', 'React', 'Spring Boot', 'LangGraph', 'Angular'];

const GITHUB = 'https://github.com/ghazi135';
const INSTAGRAM = 'https://www.instagram.com/ghazi.bouzazi/';

const TEXT = {
    en: {
        hi: 'Hi',
        im: "I'm",
        role: 'Senior Full-Stack & AI Software Engineer',
        lead: 'I design and build scalable applications — from mobile apps to multi-agent AI systems — with a strong focus on clean architecture, usability and high-quality user experiences.',
        viewCv: 'View my CV',
        getInTouch: 'Get in touch',
        whatIDo: 'What I do',
        services: [
            {title: 'Full-stack engineering', text: 'Enterprise web apps and APIs with React, Angular, Java/Spring Boot, C# and Python/FastAPI — built on clean, scalable architecture.'},
            {title: 'Mobile apps', text: 'Cross-platform iOS & Android apps with Flutter and React Native, from first commit to the stores.'},
            {title: 'AI & LLMOps', text: 'Multi-agent systems, hybrid RAG, evaluation pipelines and local LLM deployment (LangGraph, CrewAI, vLLM, Ollama).'},
            {title: 'DevOps & Cloud', text: 'Docker, Kubernetes, CI/CD pipelines, AWS and Google Cloud — shipping reliably to production.'},
        ],
        aboutMe: 'About me',
        about1: "I'm a Full-Stack Software Engineer, CTO, co-founder, and tech entrepreneur. I currently lead the technical vision of multiple projects, including Nova Metrics and I-RIIDE, where I work across backend architecture, mobile development, cloud infrastructure, and product strategy.",
        about2: "Originally from Tunisia and now based between France and Switzerland, I love mixing creativity and technology. When I'm not shipping features or reviewing code, you'll find me exploring new cities, working on photography projects, or sharing insights about tech, design, and entrepreneurship.",
        about3: ['I occasionally write about development, UI/UX, and my journey in building products. Feel free to check out my ', 'GitHub', ' for past work, or connect with me on ', 'Instagram', ' to discover my latest photos and behind-the-scenes content.'],
        rightNow: 'Right now',
        now: [
            {org: 'I-RIIDE', role: 'Co-founder · Senior Full Stack & AI Engineer', text: 'A mobility super-app bringing together parking, EV charging, car sharing, rentals, micro-mobility and Swiss public transport. I work across the mobile app, the B2B partner platform and the admin back office.'},
            {org: 'OpenClassrooms', role: 'Software Engineering Mentor', text: 'Mentoring software engineering students in Java and Angular, with code reviews and structured, actionable feedback.'},
        ],
        bannerTitle: 'Want the full story?',
        bannerText: 'My experience, skills and education — in English, French and Arabic.',
        openCv: 'Open my CV',
    },
    fr: {
        hi: 'Salut',
        im: 'je suis',
        role: 'Ingénieur Logiciel Senior Full-Stack & IA',
        lead: "Je conçois et développe des applications évolutives — des apps mobiles aux systèmes d'IA multi-agents — avec une attention particulière portée à l'architecture, à l'ergonomie et à la qualité de l'expérience utilisateur.",
        viewCv: 'Voir mon CV',
        getInTouch: 'Me contacter',
        whatIDo: 'Ce que je fais',
        services: [
            {title: 'Ingénierie full-stack', text: "Applications web d'entreprise et APIs avec React, Angular, Java/Spring Boot, C# et Python/FastAPI — sur une architecture propre et évolutive."},
            {title: 'Applications mobiles', text: "Apps iOS & Android multiplateformes avec Flutter et React Native, du premier commit jusqu'aux stores."},
            {title: 'IA & LLMOps', text: "Systèmes multi-agents, RAG hybride, pipelines d'évaluation et déploiement de LLM en local (LangGraph, CrewAI, vLLM, Ollama)."},
            {title: 'DevOps & Cloud', text: 'Docker, Kubernetes, pipelines CI/CD, AWS et Google Cloud — pour livrer en production en toute fiabilité.'},
        ],
        aboutMe: 'À propos de moi',
        about1: "Je suis ingénieur logiciel full-stack, CTO, co-fondateur et entrepreneur tech. Je pilote actuellement la vision technique de plusieurs projets, dont Nova Metrics et I-RIIDE, où j'interviens sur l'architecture back-end, le développement mobile, l'infrastructure cloud et la stratégie produit.",
        about2: "Originaire de Tunisie et aujourd'hui entre la France et la Suisse, j'aime mêler créativité et technologie. Quand je ne livre pas de nouvelles fonctionnalités ou ne relis pas du code, je pars explorer de nouvelles villes, je travaille sur des projets photo ou je partage mes réflexions sur la tech, le design et l'entrepreneuriat.",
        about3: ["J'écris de temps en temps sur le développement, l'UI/UX et mon parcours dans la création de produits. N'hésitez pas à jeter un œil à mon ", 'GitHub', ' pour mes travaux passés, ou à me suivre sur ', 'Instagram', ' pour découvrir mes dernières photos et les coulisses.'],
        rightNow: 'En ce moment',
        now: [
            {org: 'I-RIIDE', role: 'Co-fondateur · Senior Full Stack & AI Engineer', text: "Une super-app de mobilité réunissant parking, recharge électrique, autopartage, location, micro-mobilité et transports publics suisses. J'interviens sur l'app mobile, la plateforme B2B partenaires et le back-office admin."},
            {org: 'OpenClassrooms', role: 'Mentor en ingénierie logicielle', text: "J'accompagne des étudiants en ingénierie logicielle sur Java et Angular, avec des revues de code et des retours structurés et concrets."},
        ],
        bannerTitle: "Envie d'en savoir plus ?",
        bannerText: 'Mon expérience, mes compétences et ma formation — en français, en anglais et en arabe.',
        openCv: 'Ouvrir mon CV',
    },
    ar: {
        hi: 'مرحباً',
        im: 'أنا',
        role: 'مهندس برمجيات أول Full-Stack والذكاء الاصطناعي',
        lead: 'أصمّم وأطوّر تطبيقات قابلة للتوسّع — من تطبيقات الجوال إلى أنظمة الذكاء الاصطناعي متعددة الوكلاء — مع تركيز قوي على البنية النظيفة وسهولة الاستخدام وتجربة مستخدم عالية الجودة.',
        viewCv: 'سيرتي الذاتية',
        getInTouch: 'تواصل معي',
        whatIDo: 'ماذا أقدّم',
        services: [
            {title: 'هندسة Full-Stack', text: 'تطبيقات ويب وواجهات API للمؤسسات باستخدام React، Angular، Java/Spring Boot، C#، Python/FastAPI — مبنية على بنية نظيفة وقابلة للتوسّع.'},
            {title: 'تطبيقات الجوال', text: 'تطبيقات iOS، Android متعددة المنصات باستخدام Flutter، React Native، من أول سطر كود حتى النشر على المتاجر.'},
            {title: 'الذكاء الاصطناعي و LLMOps', text: 'أنظمة متعددة الوكلاء، و RAG هجين، وخطوط تقييم، ونشر النماذج اللغوية محلياً (LangGraph، CrewAI، vLLM، Ollama).'},
            {title: 'DevOps والسحابة', text: 'Docker، Kubernetes وخطوط CI/CD، AWS، Google Cloud — لإطلاق موثوق إلى بيئة الإنتاج.'},
        ],
        aboutMe: 'نبذة عني',
        about1: 'أنا مهندس برمجيات Full-Stack، ومدير تقني (CTO)، وشريك مؤسس، ورائد أعمال في مجال التكنولوجيا. أقود حالياً الرؤية التقنية لعدة مشاريع، منها Nova Metrics، I-RIIDE، حيث أعمل على بنية الواجهة الخلفية وتطوير تطبيقات الجوال والبنية التحتية السحابية واستراتيجية المنتج.',
        about2: 'أصلي من تونس وأعيش اليوم بين فرنسا وسويسرا، وأحب المزج بين الإبداع والتكنولوجيا. عندما لا أكون منشغلاً بإطلاق ميزات جديدة أو مراجعة الكود، ستجدني أستكشف مدناً جديدة، أو أعمل على مشاريع تصوير، أو أشارك أفكاري حول التكنولوجيا والتصميم وريادة الأعمال.',
        about3: ['أكتب أحياناً عن التطوير وتصميم UI/UX ورحلتي في بناء المنتجات. يمكنك الاطلاع على حسابي في ', 'GitHub', ' لرؤية أعمالي السابقة، أو متابعتي على ', 'Instagram', ' لاكتشاف أحدث صوري وما يدور خلف الكواليس.'],
        rightNow: 'حالياً',
        now: [
            {org: 'I-RIIDE', role: 'شريك مؤسس · مهندس أول Full Stack والذكاء الاصطناعي', text: 'تطبيق شامل للتنقّل يجمع بين مواقف السيارات وشحن السيارات الكهربائية ومشاركة السيارات والتأجير والتنقّل الخفيف ووسائل النقل العام السويسرية. أعمل على تطبيق الجوال ومنصة الشركاء B2B ولوحة الإدارة.'},
            {org: 'OpenClassrooms', role: 'مرشد في هندسة البرمجيات', text: 'أرشد طلاب هندسة البرمجيات في Java، Angular، من خلال مراجعات الكود وملاحظات منظّمة وعملية.'},
        ],
        bannerTitle: 'هل تريد معرفة المزيد؟',
        bannerText: 'خبرتي ومهاراتي وتعليمي — بالعربية والفرنسية والإنجليزية.',
        openCv: 'افتح سيرتي الذاتية',
    },
};

function About() {
    const t = useT(TEXT);
    const name = FULL_NAME[useLang().lang];
    const [a3Before, a3Github, a3Middle, a3Instagram, a3After] = t.about3;

    return (
        <Fade in timeout={{enter: 1200}}>
            <div className="Home">

                {/* ---------- Hero ---------- */}
                <section className="home-hero">
                    <div className="home-hero-text">
                        <p className="home-eyebrow">
                            {t.hi} <span className="wave" role="img" aria-label="wave">👋🏼</span> {t.im}
                        </p>
                        <h1 className="home-name">{name}</h1>
                        <p className="home-role">{t.role}</p>
                        <p className="home-lead">{t.lead}</p>

                        <div className="home-cta">
                            <Link className="home-btn home-btn-primary" to="/cv">
                                <DescriptionOutlined fontSize="small"/> {t.viewCv}
                            </Link>
                            <Link className="home-btn home-btn-ghost" to="/contact">
                                {t.getInTouch} <ArrowForward className="flip-rtl" fontSize="small"/>
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
                            <img src={picture} alt={name}/>
                        </div>
                        {STACK.map((s, i) => (
                            <span className={`home-float home-float-${i}`} key={s} aria-hidden="true">{s}</span>
                        ))}
                    </div>
                </section>

                {/* ---------- What I do ---------- */}
                <section className="home-section">
                    <h2 className="home-title"><span>01</span>{t.whatIDo}</h2>
                    <div className="home-services">
                        {t.services.map(({title, text}, i) => {
                            const Icon = SERVICE_ICONS[i];
                            return (
                                <article className="home-card home-service" key={i}>
                                    <span className="home-icon"><Icon/></span>
                                    <h3>{title}</h3>
                                    <p>{text}</p>
                                </article>
                            );
                        })}
                    </div>
                </section>

                {/* ---------- About ---------- */}
                <section className="home-section">
                    <h2 className="home-title"><span>02</span>{t.aboutMe}</h2>
                    <div className="home-about">
                        <p>{t.about1}</p>
                        <p>{t.about2}</p>
                        <p>
                            {a3Before}
                            <a href={GITHUB} target="_blank" rel="noreferrer noopener">{a3Github}</a>
                            {a3Middle}
                            <a href={INSTAGRAM} target="_blank" rel="noreferrer noopener">{a3Instagram}</a>
                            {a3After}
                        </p>
                    </div>
                </section>

                {/* ---------- Now ---------- */}
                <section className="home-section">
                    <h2 className="home-title"><span>03</span>{t.rightNow}</h2>
                    <div className="home-now">
                        {t.now.map(({org, role, text}, i) => {
                            const Icon = NOW_ICONS[i];
                            return (
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
                            );
                        })}
                    </div>

                    <div className="home-banner">
                        <div>
                            <h3>{t.bannerTitle}</h3>
                            <p>{t.bannerText}</p>
                        </div>
                        <Link className="home-btn home-btn-primary" to="/cv">
                            {t.openCv} <ArrowForward className="flip-rtl" fontSize="small"/>
                        </Link>
                    </div>
                </section>
            </div>
        </Fade>
    );
}

export default About;
