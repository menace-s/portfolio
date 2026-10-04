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
  { label: "Savoir-faire", href: "#savoir-faire" },
  { label: "Stack technique", href: "#expertise" },
] as const;

export const hero = {
  greeting: "Salut, je suis",
  role: siteConfig.role,
  subtitle: "Développement Web · Test Automatisé · RPA · DevOps",
  primaryCta: { label: "Voir mon savoir-faire", href: "#savoir-faire" },
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

export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  /** Photo under public/savoir-faire/ (Unsplash) */
  image: string;
};

export const services: Service[] = [
  {
    id: "test-auto",
    number: "01",
    title: "Test automatisé",
    description:
      "Tests end-to-end web et mobile pour fiabiliser chaque livraison et détecter les régressions au plus tôt.",
    tags: ["Playwright", "Appium", "WebdriverIO"],
    image: "/savoir-faire/test-auto.jpg",
  },
  {
    id: "ci-cd",
    number: "02",
    title: "Intégration continue",
    description:
      "Pipelines CI/CD qui automatisent builds, tests et déploiements à chaque modification du code.",
    tags: ["Jenkins", "GitHub"],
    image: "/savoir-faire/ci-cd.jpg",
  },
  {
    id: "rpa",
    number: "03",
    title: "RPA",
    description:
      "Robots logiciels qui prennent en charge les tâches répétitives des processus métier.",
    tags: ["UiPath Studio"],
    image: "/savoir-faire/rpa.jpg",
  },
  {
    id: "dev-web",
    number: "04",
    title: "Développement web",
    description:
      "Applications web complètes, de l'interface au back-end, pensées pour être robustes et maintenables.",
    tags: ["Laravel", "Angular", "Next.js", "Spring Boot"],
    image: "/savoir-faire/dev-web.jpg",
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
