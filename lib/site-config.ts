/**
 * Single source of truth for site copy, navigation and external links.
 *
 * NOTE: `links` below are placeholders (per explicit request) — swap them
 * for the real profiles/CV as soon as they're available. Nothing else in
 * the codebase needs to change; every component reads from here.
 */

export const siteConfig = {
  name: "Philippe Aganh",
  role: "Ingénieur Logiciel",
  location: "Abidjan",
  title: "Philippe Aganh - Ingénieur Logiciel",
  description:
    "Portfolio de Philippe Aganh, ingénieur logiciel — développement web, test automatisé, RPA et DevOps.",
};

export const links = {
  github: "https://github.com/menace-s",
  linkedin: "https://www.linkedin.com/in/philippe-aganh-a58a83279/",
  email: "mailto:akolajeanphilippe@gmail.com",
  // Drop the actual file at public/cv-philippe-aganh.pdf — Next.js serves
  // everything under public/ from the site root, so this path just works
  // once it's there.
  cv: "/cv-philippe-aganh.pdf",
};

export const navItems = [
  { label: "À propos", href: "#parcours" },
  { label: "Projets", href: "#projets" },
  { label: "Stack technique", href: "#expertise" },
] as const;

export const hero = {
  greeting: "Salut, je suis",
  role: siteConfig.role,
  subtitle: "Développement Web · Test Automatisé · RPA · DevOps",
  primaryCta: { label: "Voir mes projets", href: "#projets" },
};

export type TechItem = {
  name: string;
  description: string;
  /** Key into the icon map in components/sections/stack.tsx */
  icon: string;
};

export type TechCategory = {
  id: string;
  label: string;
  items: TechItem[];
};

export const techStack: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      {
        name: "Angular",
        description: "Framework TypeScript pour applications web robustes et structurées",
        icon: "angular",
      },
      {
        name: "Next.js",
        description: "Framework React pour applications web rapides et full-stack",
        icon: "nextjs",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      {
        name: "Laravel",
        description: "Framework PHP élégant pour développement web rapide",
        icon: "laravel",
      },
      {
        name: "Spring Boot",
        description: "Framework Java pour microservices et applications d'entreprise",
        icon: "springboot",
      },
    ],
  },
  {
    id: "test-auto",
    label: "Test Auto",
    items: [
      {
        name: "Playwright",
        description: "Framework de test end-to-end moderne pour applications web",
        icon: "playwright",
      },
      {
        name: "Appium",
        description: "Automatisation de tests pour applications mobiles natives et hybrides",
        icon: "appium",
      },
      {
        name: "WebdriverIO",
        description: "Framework de test JavaScript pour automatisation web et mobile",
        icon: "webdriverio",
      },
    ],
  },
  {
    id: "rpa",
    label: "RPA",
    items: [
      {
        name: "UiPath",
        description: "Plateforme RPA pour automatiser les processus métier répétitifs",
        icon: "uipath",
      },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    items: [
      {
        name: "Jenkins",
        description: "Serveur d'intégration continue pour automatiser builds et déploiements",
        icon: "jenkins",
      },
      {
        name: "GitHub",
        description: "Hébergement Git et collaboration pour le versioning du code",
        icon: "github",
      },
    ],
  },
];

export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: "stock" | "auction" | "mobile" | "hackathon";
  href: string;
};

export const projects: Project[] = [
  {
    id: "gestion-stock",
    number: "01",
    title: "Gestion de stock",
    description:
      "Système complet de suivi d'inventaire avec alertes en temps réel et reporting automatisé pour optimiser la chaîne d'approvisionnement.",
    tags: ["Laravel", "MySQL"],
    icon: "stock",
    href: "#",
  },
  {
    id: "systeme-encheres",
    number: "02",
    title: "Système d’enchères",
    description:
      "Plateforme d'enchères en direct robuste gérant de fortes concurrences avec websockets pour des mises à jour instantanées.",
    tags: ["Laravel", "MySQL"],
    icon: "auction",
    href: "#",
  },
  {
    id: "automatisation-android",
    number: "03",
    title: "Automatisation Android",
    description:
      "Suite de tests E2E automatisés pour applications mobiles assurant une couverture exhaustive et une intégration continue fluide.",
    tags: ["Appium", "WebdriverIO", "TS"],
    icon: "mobile",
    href: "#",
  },
  {
    id: "hackathon-2025",
    number: "04",
    title: "Hackathon 2025",
    description:
      "Solution logicielle axée sur la prédiction et la prévention des risques utilisant des modèles d'analyse de données avancés.",
    tags: ["Prediction", "Prevention"],
    icon: "hackathon",
    href: "#",
  },
];

export const about = {
  highlight: "Master 2 en Génie Logiciel",
  paragraphs: [
    "Titulaire d’un Master 2 en Génie Logiciel de l'ESATIC, je suis passionné par la création de solutions numériques.",
    "Au fil de mon parcours, j’ai développé des compétences en développement web, tout en explorant le développement mobile, les tests automatisés et la RPA. J’ai eu l’occasion de travailler sur différents projets, qui m’ont permis de développer ma capacité à comprendre les besoins et à rechercher des solutions pertinentes.",
  ],
};

export const skills = [
  "Développement d'application Web",
  "Test automatisé",
  "Développement d'application Mobile",
  "RPA (Robotic Process Automation)",
  "DevOps et CI/CD"
];

export const footer = {
  prompt: "Un projet, une idée ou une opportunité ?",
  copyright: `© ${new Date().getFullYear()} ${siteConfig.name} - Tous droits réservés.`,
  socials: [
    { label: "LinkedIn", href: links.linkedin },
    { label: "GitHub", href: links.github },
    { label: "Email", href: links.email },
  ],
};
