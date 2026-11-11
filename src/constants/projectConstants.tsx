import SafetyNet from '../assets/safetyNet.png';
import Mediscreen from '../assets/mediscreen.png';
import PayMyBuddy from '../assets/payMyBuddy.jpg';
import Fusescrum from '../assets/fuzeScrum.png';
import IRiide from '../assets/i.png';
import {Lang} from "../i18n/LanguageContext";

type Localized<T> = Record<Lang, T>;

export interface ProjectLink {
    kind: 'website' | 'code';
    href: string;
}

export interface ProjectInfo {
    id: string;
    title: string;
    image: string;
    tagline: Localized<string>;
    description: Localized<string>;
    stack: Localized<string[]>;
    link: ProjectLink;
    featured?: boolean;
}

const same = <T, >(value: T): Localized<T> => ({en: value, fr: value, ar: value});

export const projectInfo: ProjectInfo[] = [
    {
        id: 'i-riide',
        title: 'i-riide',
        image: IRiide,
        tagline: {
            en: 'Mobility super-app · Co-founder',
            fr: 'Super-app de mobilité · Co-fondateur',
            ar: 'تطبيق تنقّل شامل · شريك مؤسس',
        },
        description: {
            en: 'A shared mobility platform reshaping cities through shared access. The goal is to make car ownership ' +
                'optional in urban Europe by creating seamless access to shared vehicles, parking, charging, and bikes. ' +
                'Less space wasted, fewer emissions, and more freedom.',
            fr: "Une plateforme de mobilité partagée qui transforme la ville grâce à l'accès partagé. L'objectif : rendre " +
                "la possession d'une voiture facultative en Europe urbaine, en offrant un accès simple à des véhicules " +
                "partagés, au parking, à la recharge et aux vélos. Moins d'espace gaspillé, moins d'émissions et plus de liberté.",
            ar: 'منصة للتنقّل المشترك تعيد تشكيل المدن من خلال الوصول المشترك. الهدف هو جعل امتلاك السيارة أمراً ' +
                'اختيارياً في المدن الأوروبية، عبر توفير وصول سلس إلى المركبات المشتركة ومواقف السيارات والشحن ' +
                'والدراجات. مساحة مهدرة أقل، وانبعاثات أقل، وحرية أكبر.',
        },
        stack: same(['Flutter', 'React', 'TypeScript', 'Firebase', 'Stripe']),
        link: {kind: 'website', href: 'https://i-riide.com/about-us/'},
        featured: true,
    },
    {
        id: 'fusescrum',
        title: 'FuseScrum',
        image: Fusescrum,
        tagline: {
            en: 'Mentoring platform · Product design',
            fr: 'Plateforme de mentorat · Conception produit',
            ar: 'منصة إرشاد · تصميم المنتج',
        },
        description: {
            en: 'An application that connects a mentor with a student, to support them in their professional field, ' +
                'help them improve their skills and feel confident.',
            fr: "Une application qui met en relation un mentor et un étudiant, pour l'accompagner dans son domaine " +
                "professionnel, l'aider à progresser et à prendre confiance.",
            ar: 'تطبيق يربط بين مرشد وطالب لمرافقته في مجاله المهني، ومساعدته على تطوير مهاراته واكتساب الثقة بالنفس.',
        },
        stack: {
            en: ['Specifications', 'Requirements analysis', 'UML', 'Adobe XD'],
            fr: ['Cahier des charges', 'Analyse des besoins', 'UML', 'Adobe XD'],
            ar: ['دفتر الشروط', 'تحليل الاحتياجات', 'UML', 'Adobe XD'],
        },
        link: {kind: 'code', href: 'https://github.com/ghazi135/P3-OC'},
    },
    {
        id: 'safetynet',
        title: 'Safety Net',
        image: SafetyNet,
        tagline: {
            en: 'Emergency alerts API · Back-end',
            fr: "API d'alertes d'urgence · Back-end",
            ar: 'واجهة API لتنبيهات الطوارئ · Back-end',
        },
        description: {
            en: 'A back-end built from scratch that sends information to emergency services. In a fire, it lists the ' +
                'people in the building and their phone numbers; in a hurricane, it collects the numbers of everyone ' +
                'nearby to text them; in a flood, it gives responders the potential victims, their ages and medical ' +
                'history (treatments, allergies).',
            fr: "Un back-end développé de zéro qui transmet des informations aux services d'urgence. En cas d'incendie, " +
                "il liste les personnes présentes dans le bâtiment et leurs numéros ; en cas d'ouragan, il récupère les " +
                "numéros de tous les habitants de la zone pour leur envoyer un SMS ; en cas d'inondation, il fournit aux " +
                'secours les victimes potentielles, leur âge et leurs antécédents médicaux (traitements, allergies).',
            ar: 'واجهة خلفية مبنية من الصفر ترسل المعلومات إلى خدمات الطوارئ. في حالة الحريق، تعرض قائمة الأشخاص ' +
                'الموجودين في المبنى وأرقام هواتفهم؛ وفي حالة الإعصار، تجمع أرقام جميع السكان القريبين لإرسال رسائل ' +
                'نصية إليهم؛ وفي حالة الفيضان، تزوّد فرق الإنقاذ بالضحايا المحتملين وأعمارهم وتاريخهم الطبي (العلاجات والحساسية).',
        },
        stack: same(['Java', 'Spring Boot']),
        link: {kind: 'code', href: 'https://github.com/ghazi135/P5-OC'},
    },
    {
        id: 'paymybuddy',
        title: 'Pay My Buddy',
        image: PayMyBuddy,
        tagline: {
            en: 'Money transfer app · Full-stack',
            fr: "Transfert d'argent · Full-stack",
            ar: 'تطبيق تحويل الأموال · Full-stack',
        },
        description: {
            en: 'An application that lets customers transfer money to manage their finances or pay their friends.',
            fr: "Une application qui permet aux clients de transférer de l'argent pour gérer leurs finances ou payer leurs amis.",
            ar: 'تطبيق يتيح للعملاء تحويل الأموال لإدارة شؤونهم المالية أو الدفع لأصدقائهم.',
        },
        stack: same(['Spring Boot', 'Thymeleaf', 'MySQL']),
        link: {kind: 'code', href: 'https://github.com/ghazi135/P6-OC'},
    },
    {
        id: 'mediscreen',
        title: 'Mediscreen',
        image: Mediscreen,
        tagline: {
            en: 'Health-tech · Microservices',
            fr: 'E-santé · Microservices',
            ar: 'الصحة الرقمية · الخدمات المصغّرة',
        },
        description: {
            en: 'A medical application that lets practitioners screen and follow up their patients, to identify those ' +
                'at risk of diabetes.',
            fr: 'Une application médicale qui permet aux praticiens de dépister et de suivre leurs patients, afin ' +
                "d'identifier ceux à risque de diabète.",
            ar: 'تطبيق طبي يتيح للأطباء فحص مرضاهم ومتابعتهم، لتحديد المعرّضين لخطر الإصابة بالسكري.',
        },
        stack: same(['Spring Boot', 'Angular 12', 'MySQL', 'NoSQL', 'Docker']),
        link: {kind: 'code', href: 'https://github.com/ghazi135/P9-OC'},
    },
];
