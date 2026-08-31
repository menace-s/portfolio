"use client";

import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { siAppium, siUipath, siWebdriverio } from "simple-icons";
import { Container } from "../layout/container";
import { techStack } from "@/lib/site-config";

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

// devicon covers the mainstream frameworks; keyed to the `icon` field in
// site-config's techStack.
const DEVICON_SLUGS: Record<string, string> = {
  angular: "angular/angular-original",
  nextjs: "nextjs/nextjs-original",
  laravel: "laravel/laravel-original",
  springboot: "spring/spring-original",
  jenkins: "jenkins/jenkins-original",
  playwright: "playwright/playwright-original",
  github: "github/github-original",
};

// devicon has no entry for these (RPA/mobile-test tooling) — fall back to
// simple-icons' brand marks instead.
const BRAND_ICONS: Record<string, { path: string; hex: string; title: string }> = {
  appium: siAppium,
  webdriverio: siWebdriverio,
  uipath: siUipath,
};

function TechLogo({ icon }: { icon: string }) {
  const deviconSlug = DEVICON_SLUGS[icon];
  if (deviconSlug) {
    return (
      <img src={`${DEVICON_BASE}/${deviconSlug}.svg`} alt="" className="w-[70px]" />
    );
  }

  const brand = BRAND_ICONS[icon];
  if (!brand) return null;

  return (
    <svg role="img" viewBox="0 0 24 24" className="w-[70px]" fill={`#${brand.hex}`}>
      <title>{brand.title}</title>
      <path d={brand.path} />
    </svg>
  );
}

export function Stack() {
  const [activeId, setActiveId] = useState(techStack[0].id);
  const activeCategory = techStack.find((category) => category.id === activeId) ?? techStack[0];
  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollTabs = (direction: 1 | -1) => {
    tabsRef.current?.scrollBy({ left: direction * 140, behavior: "smooth" });
  };

  return (
    <section
      id="expertise"
      className="scroll-mt-24 border-t border-outline-variant/30 bg-[#F9FAFB] py-16 md:py-20 md:scroll-mt-28"
    >
      <Container>
        <div className="mb-12 flex items-center gap-3">
          <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-indigo-800" />
          <h2 className="font-heading-rounded text-headline-md font-bold text-on-surface md:text-headline-lg-mobile">
            Stack technique
          </h2>
        </div>

        <div className="mb-12 flex items-center gap-2 border-b border-outline-variant/30">
          <button
            type="button"
            aria-label="Catégories précédentes"
            onClick={() => scrollTabs(-1)}
            className="shrink-0 rounded-full p-1 text-on-surface-variant hover:bg-on-surface/5 hover:text-on-surface sm:hidden"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div ref={tabsRef} className="flex flex-1 gap-6 overflow-x-auto scroll-smooth">
            {techStack.map((category) => {
              const isActive = category.id === activeId;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveId(category.id)}
                  className={`flex shrink-0 items-center gap-2 border-b-2 pb-3 text-sm font-semibold whitespace-nowrap transition-colors ${
                    isActive
                      ? "border-indigo-800 text-on-surface"
                      : "border-transparent text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            aria-label="Catégories suivantes"
            onClick={() => scrollTabs(1)}
            className="shrink-0 rounded-full p-1 text-on-surface-variant hover:bg-on-surface/5 hover:text-on-surface sm:hidden"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-4">
          {activeCategory.items.map((item) => (
            <div key={item.name} className="flex flex-col items-center text-center">
              <TechLogo icon={item.icon} />
              <h3 className="mt-4 text-base font-bold text-on-surface">{item.name}</h3>
              <p className="mt-2 max-w-50 text-sm text-on-surface-variant">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
