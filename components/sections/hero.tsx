import { ArrowRight, Mail, TerminalSquare } from "lucide-react";
import { Button } from "../ui/button";
import { Container } from "../layout/container";
import { BackgroundBeams } from "../ui/background-beams";
import { hero, links } from "@/lib/site-config";

export function Hero() {
  return (
    // Toned a shade darker than the page background (not pure white/cream)
    // so the beams' thin colored strokes have something to contrast against.
    <section className="relative flex flex-col items-center gap-12 overflow-hidden bg-surface-container-high pt-40 pb-12 md:flex-row md:pt-48 md:pb-24">
      <BackgroundBeams />
      <Container className="relative flex flex-col items-center gap-12 md:flex-row">
        <div className="z-10 flex-1 space-y-8">
          <h1 className="text-headline-lg-mobile text-on-surface md:text-headline-xl">
            {hero.title}
          </h1>

          <p className="max-w-2xl text-label-mono text-on-surface-variant">
            {hero.subtitle}
          </p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              className="h-13 rounded-control px-8 text-base"
              render={
                <a href={hero.primaryCta.href}>
                  {hero.primaryCta.label} <ArrowRight className="h-4 w-4" />
                </a>
              }
            />
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              className="h-13 rounded-control border-outline-variant/50 bg-transparent px-8 text-base text-on-surface hover:bg-on-surface/5"
              render={
                <a href={hero.secondaryCta.href}>
                  {hero.secondaryCta.label} <Mail className="h-4 w-4" />
                </a>
              }
            />
          </div>

          <div className="flex gap-6 pt-8 text-label-mono text-on-surface-variant">
            <a href={links.github} className="transition-colors hover:text-primary-container">
              GITHUB
            </a>
            <a href={links.linkedin} className="transition-colors hover:text-primary-container">
              LINKEDIN
            </a>
            <a href={links.email} className="transition-colors hover:text-primary-container">
              EMAIL
            </a>
          </div>
        </div>

        <div className="relative hidden aspect-square w-full max-w-125 flex-1 md:block">
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary-container/10 to-transparent blur-3xl" />
          <div className="h-full w-full animate-[spin_60s_linear_infinite] rounded-full border border-dashed border-outline-variant/40" />
          <div className="absolute inset-8 animate-[spin_40s_linear_infinite_reverse] rounded-full border border-primary-container/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <TerminalSquare className="h-28 w-28 text-primary-container/50" strokeWidth={1} />
          </div>
        </div>
      </Container>
    </section>
  );
}
