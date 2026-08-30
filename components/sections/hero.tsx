import Image from "next/image";
import { Button } from "../ui/button";
import { Container } from "../layout/container";
import { hero, siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center gap-12 overflow-hidden bg-surface-container-high pt-40 pb-12 md:flex-row md:pt-48 md:pb-24">
      <div className="bg-pattern-randomized pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
      <Container className="relative flex flex-col items-center gap-12 md:flex-row">
        <div className="z-10 flex-1 space-y-8">
          <div className="space-y-2">
            <p className="text-label-mono text-on-surface-variant">
              {hero.greeting}
            </p>
            <h1 className="font-heading-rounded text-on-surface">
              <span className="text-headline-xl-mobile font-normal md:text-headline-xl">
                {siteConfig.name},
              </span>{" "}
              <span className="block font-serif-accent text-[56px] leading-[1.05] font-bold text-indigo-800 italic md:text-[104px] md:leading-[1.05]">
                {hero.role}
              </span>
            </h1>
          </div>

          <p className="max-w-2xl text-label-mono text-on-surface-variant">
            {hero.subtitle}
          </p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              className="h-11 rounded-control px-6 text-sm"
              render={<a href={hero.primaryCta.href}>{hero.primaryCta.label}</a>}
            />
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              className="h-11 rounded-control border-outline-variant/50 bg-transparent px-6 text-sm text-on-surface"
              render={<a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>}
            />
          </div>
        </div>

        <div className="flex w-full max-w-100 flex-1 justify-center md:justify-end">
          {/* Polaroid frame: white card border (thick at the bottom, like a
              real Polaroid's caption strip), slight permanent tilt, a "tape"
              accent pinning the top-right corner. Static — no hover effect,
              b/w on every breakpoint. */}
          <div className="relative w-full max-w-sm rotate-8 rounded-sm bg-surface-container-lowest p-3 pb-10 shadow-xl">
            <div className="absolute -top-3 right-6 h-5 w-16 rotate-6 rounded-xs bg-surface-container-high/80 shadow-sm" />
            <div className="relative aspect-4/5 w-full overflow-hidden">
              <Image
                src="/philippe-aganh-hero.jpg"
                alt={siteConfig.name}
                fill
                sizes="(min-width: 768px) 384px, 100vw"
                priority
                className="object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
