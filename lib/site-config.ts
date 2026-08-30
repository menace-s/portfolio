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

// TODO: remplacer par les vraies URLs / le vrai CV dès qu'ils sont disponibles.
export const links = {
  github: "#",
  linkedin: "#",
  twitter: "#",
  email: "#",
  cv: "#",
};

export const navItems = [
  { label: "Expertise", href: "#expertise" },
  { label: "Projets", href: "#projets" },
  { label: "Parcours", href: "#parcours" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  greeting: "Bonjour, je suis",
  role: siteConfig.role,
  subtitle: "Développement Web · Test Automatisé · RPA · DevOps",
  primaryCta: { label: "Voir mes projets", href: "#projets" },
  secondaryCta: { label: "Me contacter", href: "#contact" },
};

export type ExpertiseArea = {
  id: string;
  title: string;
  icon: "web" | "test" | "rpa" | "devops";
  tags: string[];
};

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: "web",
    title: "Web",
    icon: "web",
    tags: ["Angular", "Next.js", "Laravel", "Spring Boot"],
  },
  {
    id: "test",
    title: "Test",
    icon: "test",
    tags: ["Playwright", "Appium", "WebdriverIO"],
  },
  {
    id: "rpa",
    title: "RPA",
    icon: "rpa",
    tags: ["UiPath"],
  },
  {
    id: "devops",
    title: "Qualité / DevOps",
    icon: "devops",
    tags: ["Jenkins", "CI/CD"],
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

export type TimelineItem = {
  year: string;
  title: string;
  place: string;
};

export const timeline: TimelineItem[] = [
  { year: "2026", title: "Master Ingénierie Logicielle", place: "ESATIC" },
  { year: "2024", title: "Licence Informatique", place: "ESATIC" },
  { year: "2021", title: "Baccalauréat", place: "Lycée Classique" },
];

export const process = [
  "Comprendre",
  "Concevoir",
  "Développer",
  "Tester",
  "Automatiser",
  "Améliorer",
] as const;

export const footer = {
  prompt: "Un projet, une idée ou une opportunité ?",
  copyright: `© ${new Date().getFullYear()} ${siteConfig.name} — Invisible Expert. Built with precision.`,
  socials: [
    { label: "LinkedIn", href: links.linkedin },
    { label: "GitHub", href: links.github },
    { label: "Twitter", href: links.twitter },
  ],
};
