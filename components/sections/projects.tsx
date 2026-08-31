import {
  ArrowRight,
  Boxes,
  Gavel,
  Smartphone,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { Container } from "../layout/container";
import { FadeIn } from "../ui/fade-in";
import { projects, type Project } from "@/lib/site-config";

const ICONS: Record<Project["icon"], LucideIcon> = {
  stock: Boxes,
  auction: Gavel,
  mobile: Smartphone,
  hackathon: Trophy,
};

function ProjectVisual({ icon, number }: { icon: Project["icon"]; number: string }) {
  const Icon = ICONS[icon];
  return (
    <div className="relative h-64 overflow-hidden bg-surface-bright">
      <div className="absolute inset-0 bg-linear-to-br from-primary-container/15 via-transparent to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className="h-20 w-20 text-primary-container/40" strokeWidth={1} />
      </div>
      <div className="absolute inset-0 z-10 bg-linear-to-t from-surface-container to-transparent" />
      <div className="absolute right-4 top-4 z-20 rounded-full border border-primary-container/50 bg-surface/80 px-3 py-1 text-label-mono text-primary-container backdrop-blur-md">
        {number}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projets"
      className="scroll-mt-24 border-t border-outline-variant/30 bg-[#F9FAFB] py-16 md:py-20 md:scroll-mt-28"
    >
      <Container>
        <FadeIn className="mb-16">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-indigo-800" />
            <h2 className="font-heading-rounded text-headline-md font-bold text-on-surface md:text-headline-lg-mobile">
              Projets Récents
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <article className="glass-panel group overflow-hidden rounded-2xl border-outline-variant/40 bg-surface-container">
                <ProjectVisual icon={project.icon} number={project.number} />
                <div className="p-8">
                  <h3 className="mb-2 text-2xl font-bold text-on-surface">
                    {project.title}
                  </h3>
                  <p className="mb-6 h-20 overflow-hidden text-on-surface-variant">
                    {project.description}
                  </p>
                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-outline-variant/50 bg-surface-bright px-3 py-1 text-xs text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    className="inline-flex items-center gap-2 font-bold text-primary-container transition-all hover:gap-4"
                  >
                    Voir le projet <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
