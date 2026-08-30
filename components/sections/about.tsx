import { Container } from "../layout/container";
import { about, skills } from "@/lib/site-config";

export function About() {
  const [firstParagraph, ...restParagraphs] = about.paragraphs;
  const [before, after] = firstParagraph.split(about.highlight);

  return (
    <section
      id="parcours"
      className="scroll-mt-24 border-t border-outline-variant/30 bg-[#F9FAFB] py-24 md:py-32 md:scroll-mt-28"
    >
      <Container>
        <div className="mb-12 flex items-center gap-3">
          <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-indigo-800" />
          <h2 className="font-heading-rounded text-headline-md font-bold text-on-surface md:text-headline-lg-mobile">
            À propos
          </h2>
        </div>

        <div className="max-w-2xl space-y-6 text-body-lg text-on-surface-variant">
          <p>
            {before}
            <strong className="font-bold text-on-surface">{about.highlight}</strong>
            {after}
          </p>
          {restParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-16 max-w-2xl">
          <h3 className="mb-6 text-xl font-bold text-on-surface">Compétences</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border rounded-md border-indigo-100 bg-indigo-50 px-5 py-3 text-sm text-on-surface"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
