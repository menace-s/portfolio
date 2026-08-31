import { Container } from "../layout/container";
import { TracingBeam } from "../ui/tracing-beam";
import { FadeIn } from "../ui/fade-in";
import { about, skills } from "@/lib/site-config";

export function About() {
  const [firstParagraph, ...restParagraphs] = about.paragraphs;
  const [before, after] = firstParagraph.split(about.highlight);

  return (
    <section
      id="parcours"
      className="scroll-mt-24 border-t border-outline-variant/30 bg-[#F9FAFB] py-16 md:py-20 md:scroll-mt-28"
    >
      <Container>
        <FadeIn className="mb-12 flex items-center gap-3">
          <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-indigo-800" />
          <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-indigo-800" />
          <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-indigo-800" />
          <h2 className="font-heading-rounded text-headline-md font-bold text-on-surface md:text-headline-lg-mobile">
            À propos
          </h2>
        </FadeIn>

        <TracingBeam className="pl-6 md:pl-10">
          <FadeIn delay={0.1} className="max-w-2xl space-y-6 text-body-lg text-on-surface-variant">
            <p>
              {before}
              <strong className="font-bold text-on-surface">{about.highlight}</strong>
              {after}
            </p>
            {restParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </FadeIn>

          <FadeIn delay={0.2} className="mt-16 max-w-2xl">
            <h3 className="mb-6 text-xl font-bold text-on-surface">Compétences</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <FadeIn key={skill} as="span" delay={0.2 + index * 0.05}>
                  <span className="inline-block rounded-md border border-indigo-100 bg-indigo-50 px-5 py-3 text-sm text-on-surface">
                    {skill}
                  </span>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </TracingBeam>
      </Container>
    </section>
  );
}
