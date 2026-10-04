import Image from "next/image";
import { Container } from "../layout/container";
import { FadeIn } from "../ui/fade-in";
import { services, type Service } from "@/lib/site-config";

function ServiceVisual({ image, title, number }: Pick<Service, "image" | "title" | "number">) {
  return (
    <div className="relative h-64 overflow-hidden bg-surface-bright">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 z-10 bg-linear-to-t from-surface-container to-transparent" />
      <div className="absolute right-4 top-4 z-20 rounded-full border border-primary-container/50 bg-surface/80 px-3 py-1 text-label-mono text-primary-container backdrop-blur-md">
        {number}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section
      id="savoir-faire"
      className="scroll-mt-24 border-t border-outline-variant/30 bg-[#F9FAFB] py-16 md:py-20 md:scroll-mt-28"
    >
      <Container>
        <FadeIn className="mb-16">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-indigo-800" />
            <h2 className="font-heading-rounded text-headline-md font-bold text-on-surface md:text-headline-lg-mobile">
              Savoir-faire
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              <article className="glass-panel group h-full overflow-hidden rounded-2xl border-outline-variant/40 bg-surface-container">
                <ServiceVisual image={service.image} title={service.title} number={service.number} />
                <div className="p-8">
                  <h3 className="mb-2 text-2xl font-bold text-on-surface">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-on-surface-variant">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-outline-variant/50 bg-surface-bright px-3 py-1 text-xs text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
