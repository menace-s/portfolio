import { Bot, Bug, Globe, Workflow, type LucideIcon } from "lucide-react";
import { Container } from "../layout/container";
import { expertiseAreas, type ExpertiseArea } from "@/lib/site-config";

const ICONS: Record<ExpertiseArea["icon"], LucideIcon> = {
  web: Globe,
  test: Bug,
  rpa: Bot,
  devops: Workflow,
};

export function Expertise() {
  return (
    <section
      id="expertise"
      className="scroll-mt-24 border-t border-outline-variant/30 py-24 md:py-32 md:scroll-mt-28"
    >
      <Container>
        <div className="mb-16 flex items-center gap-3">
          <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-indigo-800" />
          <h2 className="font-heading-rounded text-headline-md font-bold text-on-surface md:text-headline-lg-mobile">
            Stack technique
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {expertiseAreas.map((area) => {
            const Icon = ICONS[area.icon];
            return (
              <div
                key={area.id}
                className="glass-panel glow-hover group flex h-full flex-col rounded-2xl bg-surface-container p-8 transition-all"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-outline-variant/50 bg-surface-bright transition-colors group-hover:border-primary-container">
                  <Icon className="h-5 w-5 text-primary-container" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-on-surface">
                  {area.title}
                </h3>
                <div className="mt-auto flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-outline-variant/50 px-3 py-1 text-[10px] font-medium tracking-wide text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
