import type {Lang} from '../i18n/LanguageContext';

export type {Lang};

export interface CvGroup {
    icon: string;
    title: string;
    bullets: string[];
}

export interface CvExperience {
    title: string;
    company: string;
    period: string;
    location: string;
    summary?: string;
    bullets: string[];
    groups?: CvGroup[];
}

export interface CvEducation {
    title: string;
    school: string;
    period: string;
    location: string;
    bullets: string[];
}

export type SkillIcon = 'backend' | 'frontend' | 'ai' | 'devops' | 'architecture' | 'methods';

export interface CvContent {
    headline: string;
    sections: {
        profile: string;
        skills: string;
        languages: string;
        experience: string;
        education: string;
        strengths: string;
        interests: string;
    };
    ui: {
        current: string;
        previous: string;
        next: string;
    };
    profile: string;
    skills: { icon: SkillIcon; label: string; items: string[] }[];
    languages: { name: string; level: string; note?: string }[];
    experience: CvExperience[];
    education: CvEducation[];
    strengths: string[];
    interests: string[];
}

export const cvContent: Record<Lang, CvContent> = {
    en: {
        headline: 'Senior Full-Stack & AI Software Engineer | DevOps & LLMOps & RAG',
        sections: {
            profile: 'Profile',
            skills: 'Core skills',
            languages: 'Languages',
            experience: 'Professional experience',
            education: 'Education',
            strengths: 'Professional strengths',
            interests: 'Interests',
        },
        ui: {current: 'Current', previous: 'Previous', next: 'Next'},
        profile:
            "Senior Full-Stack & AI Software Engineer with EQF Level 7 (Master's equivalent) credentials and proven expertise in designing, " +
            'scaling, and deploying enterprise applications and multi-agent AI systems. Strong track record bridging full-stack development, ' +
            'cloud-native DevOps, and LLMOps (Agentic AI, Hybrid RAG, evaluation pipelines, and local LLM deployment). Experienced tech ' +
            'lead and co-founder skilled at driving engineering standards, production reliability, and team execution.',
        skills: [
            {icon: 'backend', label: 'Back-end', items: ['Java 8/11/17', 'Spring Boot', 'C#', 'Python / FastAPI', 'Node.js']},
            {icon: 'frontend', label: 'Front-end & mobile', items: ['Angular', 'React', 'React Native', 'Flutter', 'TypeScript', 'JavaScript']},
            {icon: 'ai', label: 'AI & LLM Stack', items: ['Agentic AI', 'LangChain', 'LangGraph', 'CrewAI', 'RAG', 'LlamaIndex', 'Qdrant', 'pgvector', 'Function Calling / Tool Use']},
            {icon: 'devops', label: 'DevOps & LLMOps', items: ['Docker', 'Kubernetes', 'GitLab CI/CD', 'Jenkins', 'AWS', 'Google Cloud', 'Terraform', 'vLLM', 'Ollama', 'LangSmith', 'Ragas', 'Guardrails']},
            {icon: 'architecture', label: 'Architecture & Data', items: ['Microservices', 'CQRS', 'REST / SOAP / GraphQL', 'SQL', 'Oracle', 'PostgreSQL', 'NoSQL', 'Vector Databases']},
            {icon: 'methods', label: 'Methods', items: ['Agile', 'Kanban', 'Git Flow', 'Jira', 'Confluence']},
        ],
        languages: [
            {name: 'French', level: 'C2'},
            {name: 'Arabic', level: 'C2'},
            {name: 'English', level: 'C1'},
            {name: 'German', level: 'A1', note: 'in progress'},
        ],
        experience: [
            {
                title: 'Co-founder · Senior Full Stack & AI Engineer',
                company: 'I-RIIDE',
                period: 'Sept. 2024 – present',
                location: 'Fribourg, Switzerland',
                summary: 'i-riide is a mobility super-app bringing together parking, EV charging, car sharing, rentals, micro-mobility and Swiss public transport. I work across the whole product: the mobile app, the B2B partner platform and the admin back office.',
                bullets: [],
                groups: [
                    {
                        icon: '📱',
                        title: 'Mobile app (Flutter, iOS & Android)',
                        bullets: [
                            'Lead contributor: 1,250+ commits, shipped through v2.0.7',
                            'CFF/SBB integration: journey planning, ticketing, and a redesign of the trip search',
                            'Rental companies and fleets (QOAD, iBiola, MyRentCar) and roaming EV charging via Hubject (OICP)',
                            'Unified map, peer-to-peer parking and car sharing, bookings, chat, wallet and refunds, loyalty and contests, notifications',
                            'iOS Live Activities and Android floating overlays for live tracking',
                            'Security: wallet, bookings and rental credentials moved server-side',
                            '5 languages (EN, FR, DE, IT, ES)',
                        ],
                    },
                    {
                        icon: '💼',
                        title: 'Partner platform (React, TypeScript)',
                        bullets: [
                            'Built a B2B SaaS dashboard from scratch to manage cars, parking spaces, charging stations and two-wheelers',
                            'Stripe subscriptions, plan-based restrictions, invoicing and payouts',
                            'Public booking pages with Stripe payment and real-time tracking',
                            "Team management, partner–renter chat, support, and a Business Wallet that lets companies fund their employees' mobility",
                        ],
                    },
                    {
                        icon: '🛠️',
                        title: 'Admin back office (React, Ant Design)',
                        bullets: [
                            'Moderation of users, partners, listings and bookings',
                            'Fraud, finance and support monitoring, audit logs, loyalty, contests, vouchers and push campaigns',
                        ],
                    },
                ],
            },
            {
                title: 'Software Engineering Mentor & Technical Evaluator',
                company: 'OpenClassrooms',
                period: 'Feb. 2024 – present',
                location: 'Fully Remote',
                bullets: [
                    'Technical Mentorship: Mentored and coached software engineering students in Java and Angular, conducting technical code reviews and delivering structured, actionable feedback.',
                    "Skill Development: Fostered students' technical proficiency, critical thinking, and collaborative team-working practices to prepare them for industry standards.",
                ],
            },
            {
                title: 'Chief Technical Officer',
                company: 'Nova Metrics',
                period: 'Feb. 2024 – Dec. 2025',
                location: 'Fribourg, Switzerland',
                bullets: [
                    'Technical Leadership: Led the architecture, design, and full-stack development of enterprise solutions using React, React Native, and Java/Spring Boot.',
                    'Engineering Management: Defined the overall technology strategy, supervised cross-functional engineering teams, and coordinated technical delivery with key business stakeholders.',
                ],
            },
            {
                title: 'Senior Software & Infrastructure Engineer (Medical Data Systems)',
                company: 'SmartGene',
                period: 'Sept. 2023 – Feb. 2024',
                location: 'Lausanne, Switzerland',
                bullets: [
                    'Full-Stack Development: Engineered and enhanced a medical and genetic data management application using React, Angular, Java 11, Spring Boot, and PostgreSQL.',
                    'DevOps & Infrastructure: Maintained and optimized core infrastructure and deployment workflows using Kubernetes, Docker, Ansible, and GitLab CI/CD pipelines.',
                ],
            },
            {
                title: 'Senior Full-Stack & Cloud Engineer (Mission-Critical Nuclear Systems)',
                company: 'QIM INFO',
                period: 'Dec. 2022 – June 2023',
                location: 'Grenoble, France',
                bullets: [
                    'Nuclear Energy Systems Development: Engineered core features using Java, Spring Boot, Groovy, and Angular for a field intervention management platform at EDF, led by Atos.',
                    'Full-Stack & Cloud DevOps: Developed Java and Vue.js applications while implementing robust continuous testing and deployment pipelines using Docker, Artifactory, GitLab CI/CD, and AWS.',
                ],
            },
            {
                title: 'Full Stack Developer – Apprenticeship',
                company: 'Hardis Group',
                period: 'Sept. 2020 – Dec. 2022',
                location: 'Grenoble, France',
                bullets: [
                    'Migrated AngularJS applications to React for Schneider Electric and conducted a migration study from AngularJS/PHP to React/ASP.NET for INSEE.',
                    'Developed Angular/Python (FastAPI) and Angular/Spring Boot applications utilizing CQRS architecture.',
                ],
            },
            {
                title: 'Full Stack Developer – Freelance',
                company: 'BeWeb SA',
                period: 'Apr. 2019 – Oct. 2020',
                location: 'Geneva, Switzerland',
                bullets: [
                    'Migrated AngularJS components to Angular 9 and PHP REST APIs to Node.js/Express.js.',
                    'Worked in an Agile environment using SQL, Oracle, TypeScript, JavaScript, Jira, Git, and Bitbucket.',
                ],
            },
            {
                title: 'PowerShell / SQL Developer – Freelance',
                company: 'CEGID',
                period: 'Dec. 2018 – Apr. 2019',
                location: 'Lyon, France',
                bullets: ['Automated MS SQL to Oracle data migration using PowerShell scripts.'],
            },
        ],
        education: [
            {
                title: 'Master of Science Equivalent in Software Engineering (EQF Level 7)',
                school: 'OpenClassrooms',
                period: 'Mar. 2026 – Jul. 2026',
                location: 'Paris, France',
                bullets: ['Demonstrates mastery in full-stack software engineering, lead project execution, and end-to-end DevOps deployment with CI/CD and cloud orchestration.'],
            },
            {
                title: 'DevOps Foundation Certificate (Level 1) — Reference: OSOCV1',
                school: 'ORSYS',
                period: 'Apr. 2023 – May 2023',
                location: 'Grenoble, France',
                bullets: ['DevOps culture, automation, continuous integration and delivery (CI/CD), Kanban, IT performance measurement, and continuous improvement.'],
            },
            {
                title: "Full-Stack Software Engineer (Bachelor's Degree Level / EQF Level 6)",
                school: 'OpenClassrooms',
                period: 'Sept. 2020 – Nov. 2021',
                location: 'Paris, France',
                bullets: ['Java, Spring Boot, Angular, React, APIs, microservices, Docker, Kubernetes, CI/CD, databases, and project management.'],
            },
            {
                title: 'High School Diploma in Science and Industrial Technologies',
                school: 'Lycée Briffaut',
                period: '2014 – 2015',
                location: 'Valence, France',
                bullets: [
                    'Specialization: Electronic and Information Systems.',
                    'Focus: Sciences and Technologies for Industry and Sustainable Development.',
                ],
            },
        ],
        strengths: ['Technical', 'Leadership', 'Mentoring', 'Autonomy', 'Problem Solving', 'Adaptability', 'Collaboration', 'Agile Mindset'],
        interests: ['Photography', 'Travel & Exploration', 'Languages & Cultures', 'Sport'],
    },
    fr: {
        headline: 'Ingénieur Logiciel Senior Full-Stack & IA | DevOps & LLMOps',
        sections: {
            profile: 'Profil',
            skills: 'Compétences clés',
            languages: 'Langues',
            experience: 'Expérience professionnelle',
            education: 'Formation',
            strengths: 'Atouts professionnels',
            interests: "Centres d'intérêt",
        },
        ui: {current: 'Actuel', previous: 'Précédent', next: 'Suivant'},
        profile:
            "Ingénieur logiciel Senior Full-Stack & IA titulaire d'un diplôme de niveau 7 EQF (équivalent Master), avec une expertise éprouvée " +
            "dans la conception, la mise à l'échelle et le déploiement d'applications d'entreprise et de systèmes d'IA multi-agents. " +
            "Solide expérience combinant développement full-stack, DevOps cloud-native et LLMOps (IA agentique, RAG hybride, pipelines " +
            "d'évaluation et déploiement de LLM locaux). Tech lead expérimenté, reconnu pour sa capacité à piloter les normes d'ingénierie, " +
            "la fiabilité en production et l'exécution d'équipe.",
        skills: [
            {icon: 'backend', label: 'Back-end', items: ['Java 8/11/17', 'Spring Boot', 'C#', 'Python / FastAPI', 'Node.js']},
            {icon: 'frontend', label: 'Front-end & mobile', items: ['Angular', 'React', 'React Native', 'Flutter', 'TypeScript', 'JavaScript']},
            {icon: 'ai', label: 'IA & Stack LLM', items: ['IA Agentique', 'LangChain', 'LangGraph', 'CrewAI', 'RAG', 'LlamaIndex', 'Qdrant', 'pgvector', 'Appels de fonctions / Tool Use']},
            {icon: 'devops', label: 'DevOps & LLMOps', items: ['Docker', 'Kubernetes', 'GitLab CI/CD', 'Jenkins', 'AWS', 'Google Cloud', 'Terraform', 'vLLM', 'Ollama', 'LangSmith', 'Ragas', 'Guardrails']},
            {icon: 'architecture', label: 'Architecture & Données', items: ['Microservices', 'CQRS', 'REST / SOAP / GraphQL', 'SQL', 'Oracle', 'PostgreSQL', 'NoSQL', 'Bases de données vectorielles']},
            {icon: 'methods', label: 'Méthodes', items: ['Agile', 'Kanban', 'Git Flow', 'Jira', 'Confluence']},
        ],
        languages: [
            {name: 'Français', level: 'C2'},
            {name: 'Arabe', level: 'C2'},
            {name: 'Anglais', level: 'C2'},
            {name: 'Allemand', level: 'A1', note: 'en cours'},
        ],
        experience: [
            {
                title: 'Co-fondateur · Senior Full Stack & AI Engineer',
                company: 'I-RIIDE',
                period: 'Sept. 2024 – présent',
                location: 'Fribourg, Suisse',
                summary: "i-riide est une super-app de mobilité réunissant parking, recharge électrique, autopartage, location, micro-mobilité et transports publics suisses. J'interviens sur tout le produit : app mobile, plateforme B2B partenaires et back-office admin.",
                bullets: [],
                groups: [
                    {
                        icon: '📱',
                        title: 'App mobile (Flutter, iOS & Android)',
                        bullets: [
                            "Contributeur principal : 1 250+ commits, livrés jusqu'à la v2.0.7",
                            'Intégration CFF/SBB : itinéraires, billetterie, refonte de la recherche de trajets',
                            'Loueurs et flottes (QOAD, iBiola, MyRentCar) et recharge en itinérance via Hubject (OICP)',
                            'Carte unifiée, parking et autopartage entre particuliers, réservations, chat, portefeuille et remboursements, fidélité et concours, notifications',
                            'Live Activities iOS et overlays flottants Android pour le suivi en direct',
                            'Sécurité : portefeuille, réservations et identifiants de location passés côté serveur',
                            '5 langues (EN, FR, DE, IT, ES)',
                        ],
                    },
                    {
                        icon: '💼',
                        title: 'Plateforme partenaires (React, TypeScript)',
                        bullets: [
                            "Création de zéro d'un dashboard SaaS B2B pour gérer voitures, parkings, bornes et deux-roues",
                            'Abonnements Stripe, restrictions par offre, facturation et versements',
                            'Pages de réservation publiques avec paiement Stripe et suivi en temps réel',
                            "Gestion d'équipe, chat partenaire-locataire, support, et Business Wallet pour que les entreprises financent la mobilité de leurs employés",
                        ],
                    },
                    {
                        icon: '🛠️',
                        title: 'Back-office admin (React, Ant Design)',
                        bullets: [
                            'Modération des utilisateurs, partenaires, annonces et réservations',
                            "Suivi fraude, finances et support, journaux d'audit, fidélité, concours, bons et campagnes push",
                        ],
                    },
                ],
            },
            {
                title: 'Mentor en Ingénierie Logicielle & Évaluateur Technique',
                company: 'OpenClassrooms',
                period: 'Fév. 2024 – présent',
                location: 'Distanciel',
                bullets: [
                    "Mentorat technique : Accompagnement et coaching d'étudiants en ingénierie logicielle sur Java et Angular, réalisation de revues de code techniques et retours structurés et constructifs.",
                    "Développement des compétences : Renforcement de la maîtrise technique, de l'esprit critique et des pratiques collaboratives des étudiants pour les préparer aux exigences de l'industrie.",
                ],
            },
            {
                title: 'Chief Technical Officer',
                company: 'Nova Metrics',
                period: 'Fév. 2024 – Déc. 2025',
                location: 'Fribourg, Suisse',
                bullets: [
                    "Leadership technique : Pilotage de l'architecture, de la conception et du développement full-stack de solutions d'entreprise avec React, React Native et Java/Spring Boot.",
                    "Management d'ingénierie : Définition de la stratégie technologique globale, supervision des équipes d'ingénierie pluridisciplinaires et coordination des livrables techniques avec les parties prenantes.",
                ],
            },
            {
                title: 'Ingénieur Senior Logiciel & Infrastructure (Systèmes de Données Médicales)',
                company: 'SmartGene',
                period: 'Sept. 2023 – Fév. 2024',
                location: 'Lausanne, Suisse',
                bullets: [
                    "Développement Full-Stack : Conception et amélioration d'une application de gestion de données médicales et génétiques utilisant React, Angular, Java 11, Spring Boot et PostgreSQL.",
                    "DevOps & Infrastructure : Maintien et optimisation de l'infrastructure centrale et des flux de déploiement à l'aide de Kubernetes, Docker, Ansible et pipelines GitLab CI/CD.",
                ],
            },
            {
                title: 'Ingénieur Senior Full-Stack & Cloud (Systèmes Nucléaires Critiques)',
                company: 'QIM INFO',
                period: 'Déc. 2022 – Juin 2023',
                location: 'Grenoble, France',
                bullets: [
                    "Développement de Systèmes d'Énergie Nucléaire : Développement de fonctionnalités clés en Java, Spring Boot, Groovy et Angular pour une plateforme de gestion d'interventions de terrain chez EDF, pilotée par Atos.",
                    "DevOps Full-Stack & Cloud : Développement d'applications Java et Vue.js avec mise en place de chaînes de tests et de déploiement continus à l'aide de Docker, Artifactory, GitLab CI/CD et AWS.",
                ],
            },
            {
                title: 'Développeur Full Stack – Alternance',
                company: 'Hardis Group',
                period: 'Sept. 2020 – Déc. 2022',
                location: 'Grenoble, France',
                bullets: [
                    "Migration d'applications AngularJS vers React pour Schneider Electric et étude de migration AngularJS/PHP vers React/ASP.NET pour l'INSEE.",
                    "Développement d'applications Angular/Python (FastAPI) et Angular/Spring Boot exploitant une architecture CQRS.",
                ],
            },
            {
                title: 'Développeur Full Stack – Freelance',
                company: 'BeWeb SA',
                period: 'Avr. 2019 – Oct. 2020',
                location: 'Genève, Suisse',
                bullets: [
                    "Migration de composants AngularJS vers Angular 9 et d'APIs REST PHP vers Node.js/Express.js.",
                    'Travail en environnement Agile avec SQL, Oracle, TypeScript, JavaScript, Jira, Git et Bitbucket.',
                ],
            },
            {
                title: 'Développeur PowerShell / SQL – Freelance',
                company: 'CEGID',
                period: 'Déc. 2018 – Avr. 2019',
                location: 'Lyon, France',
                bullets: ['Automatisation de la migration de données MS SQL vers Oracle au moyen de scripts PowerShell.'],
            },
        ],
        education: [
            {
                title: 'Équivalent Master of Science en Ingénierie Logicielle (Niveau 7 EQF)',
                school: 'OpenClassrooms',
                period: 'Mars 2021 – Juil. 2022',
                location: 'Paris, France',
                bullets: ["Maîtrise avancée de l'ingénierie logicielle full-stack, de la direction de projet et du déploiement DevOps de bout en bout avec CI/CD et orchestration cloud."],
            },
            {
                title: 'Certificat DevOps Foundation (Niveau 1) — Référence : OSOCV1',
                school: 'ORSYS',
                period: 'Avr. 2023 – Mai 2023',
                location: 'Grenoble, France',
                bullets: ['Culture DevOps, automatisation, intégration et livraison continues (CI/CD), Kanban, mesure de la performance IT et amélioration continue.'],
            },
            {
                title: 'Développeur Logiciel Full-Stack (Niveau Bachelor / Niveau 6 EQF)',
                school: 'OpenClassrooms',
                period: 'Sept. 2020 – Nov. 2021',
                location: 'Paris, France',
                bullets: ['Java, Spring Boot, Angular, React, APIs, microservices, Docker, Kubernetes, CI/CD, bases de données et gestion de projet.'],
            },
            {
                title: 'Baccalauréat Général & Technologique STI2D',
                school: 'Lycée Briffaut',
                period: '2014 – 2015',
                location: 'Valence, France',
                bullets: [
                    'Spécialité : Systèmes Électroniques et Numériques.',
                    "Domaine : Sciences et Technologies de l'Industrie et du Développement Durable.",
                ],
            },
        ],
        strengths: ['Technique', 'Leadership', 'Mentorat', 'Autonomie', 'Résolution de problèmes', 'Adaptabilité', 'Collaboration', 'Esprit Agile'],
        interests: ['Photographie', 'Voyages & Découvertes', 'Langues & Cultures', 'Sport'],
    },
    ar: {
        headline: 'مهندس برمجيات أول Full-Stack والذكاء الاصطناعي | DevOps، LLMOps، RAG',
        sections: {
            profile: 'الملف الشخصي',
            skills: 'المهارات الأساسية',
            languages: 'اللغات',
            experience: 'الخبرة المهنية',
            education: 'التعليم',
            strengths: 'نقاط القوة المهنية',
            interests: 'الاهتمامات',
        },
        ui: {current: 'حالياً', previous: 'السابق', next: 'التالي'},
        profile:
            'مهندس برمجيات أول في Full-Stack والذكاء الاصطناعي، حاصل على مؤهل من المستوى السابع في الإطار الأوروبي للمؤهلات ' +
            '(EQF 7، ما يعادل الماجستير)، وذو خبرة مثبتة في تصميم تطبيقات المؤسسات وأنظمة الذكاء الاصطناعي متعددة الوكلاء ' +
            'وتوسيعها ونشرها. سجل حافل في الجمع بين تطوير Full-Stack وممارسات DevOps السحابية و LLMOps (الذكاء الاصطناعي ' +
            'الوكيلي، RAG الهجين، خطوط التقييم، ونشر النماذج اللغوية محلياً). قائد تقني وشريك مؤسس متمرّس في إرساء معايير ' +
            'الهندسة وضمان موثوقية بيئة الإنتاج وقيادة الفرق نحو التنفيذ.',
        skills: [
            {icon: 'backend', label: 'الواجهة الخلفية', items: ['Java 8/11/17', 'Spring Boot', 'C#', 'Python / FastAPI', 'Node.js']},
            {icon: 'frontend', label: 'الواجهة الأمامية والجوال', items: ['Angular', 'React', 'React Native', 'Flutter', 'TypeScript', 'JavaScript']},
            {icon: 'ai', label: 'الذكاء الاصطناعي ونماذج اللغة', items: ['الذكاء الاصطناعي الوكيلي', 'LangChain', 'LangGraph', 'CrewAI', 'RAG', 'LlamaIndex', 'Qdrant', 'pgvector', 'استدعاء الدوال / Tool Use']},
            {icon: 'devops', label: 'DevOps، LLMOps', items: ['Docker', 'Kubernetes', 'GitLab CI/CD', 'Jenkins', 'AWS', 'Google Cloud', 'Terraform', 'vLLM', 'Ollama', 'LangSmith', 'Ragas', 'Guardrails']},
            {icon: 'architecture', label: 'البنية والبيانات', items: ['Microservices', 'CQRS', 'REST / SOAP / GraphQL', 'SQL', 'Oracle', 'PostgreSQL', 'NoSQL', 'قواعد البيانات المتجهية']},
            {icon: 'methods', label: 'المنهجيات', items: ['Agile', 'Kanban', 'Git Flow', 'Jira', 'Confluence']},
        ],
        languages: [
            {name: 'الفرنسية', level: 'C2'},
            {name: 'العربية', level: 'C2'},
            {name: 'الإنجليزية', level: 'C1'},
            {name: 'الألمانية', level: 'A1', note: 'قيد التعلّم'},
        ],
        experience: [
            {
                title: 'شريك مؤسس · مهندس أول Full Stack والذكاء الاصطناعي',
                company: 'I-RIIDE',
                period: 'سبتمبر 2024 – حتى الآن',
                location: 'فريبورغ، سويسرا',
                summary: 'i-riide تطبيق شامل (super-app) للتنقّل يجمع بين مواقف السيارات، وشحن السيارات الكهربائية، ومشاركة السيارات، والتأجير، والتنقّل الخفيف، ووسائل النقل العام السويسرية. أعمل على المنتج بأكمله: تطبيق الجوال، ومنصة الشركاء B2B، ولوحة الإدارة.',
                bullets: [],
                groups: [
                    {
                        icon: '📱',
                        title: 'تطبيق الجوال (Flutter، iOS، Android)',
                        bullets: [
                            'المساهم الرئيسي: أكثر من 1,250 commit، حتى الإصدار v2.0.7',
                            'التكامل مع CFF/SBB: تخطيط الرحلات، وإصدار التذاكر، وإعادة تصميم البحث عن الرحلات',
                            'شركات التأجير والأساطيل (QOAD، iBiola، MyRentCar) والشحن عبر التجوال من خلال Hubject (OICP)',
                            'خريطة موحّدة، ومشاركة المواقف والسيارات بين الأفراد، والحجوزات، والمحادثة، والمحفظة والمبالغ المستردّة، وبرامج الولاء والمسابقات، والإشعارات',
                            'Live Activities على iOS والنوافذ العائمة على Android للتتبّع المباشر',
                            'الأمان: نقل منطق المحفظة والحجوزات وبيانات اعتماد التأجير إلى الخادم',
                            '5 لغات (EN، FR، DE، IT، ES)',
                        ],
                    },
                    {
                        icon: '💼',
                        title: 'منصة الشركاء (React، TypeScript)',
                        bullets: [
                            'بناء لوحة تحكّم SaaS للشركات (B2B) من الصفر لإدارة السيارات والمواقف ومحطات الشحن والدراجات',
                            'اشتراكات Stripe، وقيود حسب الباقة، والفوترة، وتحويل المستحقات',
                            'صفحات حجز عامة مع الدفع عبر Stripe والتتبّع في الوقت الفعلي',
                            'إدارة الفرق، والمحادثة بين الشريك والمستأجر، والدعم، و Business Wallet لتمكين الشركات من تمويل تنقّل موظفيها',
                        ],
                    },
                    {
                        icon: '🛠️',
                        title: 'لوحة الإدارة (React، Ant Design)',
                        bullets: [
                            'الإشراف على المستخدمين والشركاء والإعلانات والحجوزات',
                            'متابعة الاحتيال والمالية والدعم، وسجلات التدقيق، والولاء، والمسابقات، والقسائم، وحملات الإشعارات',
                        ],
                    },
                ],
            },
            {
                title: 'مرشد في هندسة البرمجيات ومقيّم تقني',
                company: 'OpenClassrooms',
                period: 'فبراير 2024 – حتى الآن',
                location: 'عن بُعد',
                bullets: [
                    'الإرشاد التقني: توجيه طلاب هندسة البرمجيات وتدريبهم على Java، Angular، وإجراء مراجعات تقنية للكود وتقديم ملاحظات منظّمة وقابلة للتطبيق.',
                    'تنمية المهارات: تعزيز الكفاءة التقنية والتفكير النقدي وممارسات العمل الجماعي لدى الطلاب لإعدادهم لمعايير سوق العمل.',
                ],
            },
            {
                title: 'المدير التقني (CTO)',
                company: 'Nova Metrics',
                period: 'فبراير 2024 – ديسمبر 2025',
                location: 'فريبورغ، سويسرا',
                bullets: [
                    'القيادة التقنية: قيادة البنية والتصميم والتطوير الكامل لحلول المؤسسات باستخدام React، React Native، Java/Spring Boot.',
                    'الإدارة الهندسية: وضع الاستراتيجية التقنية الشاملة، والإشراف على فرق هندسية متعددة التخصصات، وتنسيق التسليمات التقنية مع أصحاب المصلحة.',
                ],
            },
            {
                title: 'مهندس أول للبرمجيات والبنية التحتية (أنظمة البيانات الطبية)',
                company: 'SmartGene',
                period: 'سبتمبر 2023 – فبراير 2024',
                location: 'لوزان، سويسرا',
                bullets: [
                    'تطوير Full-Stack: تطوير وتحسين تطبيق لإدارة البيانات الطبية والجينية باستخدام React، Angular، Java 11، Spring Boot، PostgreSQL.',
                    'DevOps والبنية التحتية: صيانة وتحسين البنية التحتية الأساسية ومسارات النشر باستخدام Kubernetes، Docker، Ansible وخطوط GitLab CI/CD.',
                ],
            },
            {
                title: 'مهندس أول Full-Stack وسحابة (أنظمة نووية حرجة)',
                company: 'QIM INFO',
                period: 'ديسمبر 2022 – يونيو 2023',
                location: 'غرونوبل، فرنسا',
                bullets: [
                    'تطوير أنظمة الطاقة النووية: تطوير ميزات أساسية باستخدام Java، Spring Boot، Groovy، Angular لمنصة إدارة التدخّلات الميدانية لدى EDF، بقيادة Atos.',
                    'Full-Stack، DevOps سحابي: تطوير تطبيقات Java، Vue.js مع إنشاء خطوط اختبار ونشر مستمرّة باستخدام Docker، Artifactory، GitLab CI/CD، AWS.',
                ],
            },
            {
                title: 'مطوّر Full Stack – تدريب بالتناوب',
                company: 'Hardis Group',
                period: 'سبتمبر 2020 – ديسمبر 2022',
                location: 'غرونوبل، فرنسا',
                bullets: [
                    'ترحيل تطبيقات AngularJS إلى React لصالح Schneider Electric، وإعداد دراسة ترحيل من AngularJS/PHP إلى React/ASP.NET لصالح INSEE.',
                    'تطوير تطبيقات Angular/Python (FastAPI)، Angular/Spring Boot باستخدام بنية CQRS.',
                ],
            },
            {
                title: 'مطوّر Full Stack – عمل حرّ',
                company: 'BeWeb SA',
                period: 'أبريل 2019 – أكتوبر 2020',
                location: 'جنيف، سويسرا',
                bullets: [
                    'ترحيل مكوّنات AngularJS إلى Angular 9 وواجهات REST من PHP إلى Node.js/Express.js.',
                    'العمل في بيئة Agile باستخدام SQL، Oracle، TypeScript، JavaScript، Jira، Git، Bitbucket.',
                ],
            },
            {
                title: 'مطوّر PowerShell / SQL – عمل حرّ',
                company: 'CEGID',
                period: 'ديسمبر 2018 – أبريل 2019',
                location: 'ليون، فرنسا',
                bullets: ['أتمتة ترحيل البيانات من MS SQL إلى Oracle باستخدام سكربتات PowerShell.'],
            },
        ],
        education: [
            {
                title: 'ما يعادل ماجستير العلوم في هندسة البرمجيات (المستوى 7 EQF)',
                school: 'OpenClassrooms',
                period: 'مارس 2026 – يوليو 2026',
                location: 'باريس، فرنسا',
                bullets: ['إتقان هندسة البرمجيات Full-Stack، وقيادة تنفيذ المشاريع، والنشر الكامل عبر DevOps مع CI/CD وتنسيق الخدمات السحابية.'],
            },
            {
                title: 'شهادة DevOps Foundation (المستوى 1) — المرجع: OSOCV1',
                school: 'ORSYS',
                period: 'أبريل 2023 – مايو 2023',
                location: 'غرونوبل، فرنسا',
                bullets: ['ثقافة DevOps، والأتمتة، والتكامل والتسليم المستمرّان (CI/CD)، و Kanban، وقياس أداء تقنية المعلومات، والتحسين المستمر.'],
            },
            {
                title: 'مطوّر برمجيات Full-Stack (مستوى البكالوريوس / المستوى 6 EQF)',
                school: 'OpenClassrooms',
                period: 'سبتمبر 2020 – نوفمبر 2021',
                location: 'باريس، فرنسا',
                bullets: ['Java، Spring Boot، Angular، React وواجهات API والخدمات المصغّرة و Docker، Kubernetes، CI/CD وقواعد البيانات وإدارة المشاريع.'],
            },
            {
                title: 'بكالوريا العلوم والتقنيات الصناعية (STI2D)',
                school: 'Lycée Briffaut',
                period: '2014 – 2015',
                location: 'فالانس، فرنسا',
                bullets: [
                    'التخصص: الأنظمة الإلكترونية والرقمية.',
                    'المجال: علوم وتقنيات الصناعة والتنمية المستدامة.',
                ],
            },
        ],
        strengths: ['الكفاءة التقنية', 'القيادة', 'الإرشاد', 'الاستقلالية', 'حلّ المشكلات', 'القدرة على التكيّف', 'التعاون', 'عقلية Agile'],
        interests: ['التصوير الفوتوغرافي', 'السفر والاستكشاف', 'اللغات والثقافات', 'الرياضة'],
    },
};
