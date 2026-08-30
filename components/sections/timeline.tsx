import { Container } from "../layout/container";
import { timeline } from "@/lib/site-config";

export function Timeline() {
  return (
    <section
      id="parcours"
      className="scroll-mt-24 border-t border-outline-variant/30 py-24 md:py-32 md:scroll-mt-28"
    >
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-headline-lg-mobile text-on-surface md:text-headline-lg">
            Parcours
          </h2>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-0 left-[15px] top-0 w-px bg-outline-variant/40 md:left-1/2 md:-translate-x-1/2" />

          {timeline.map((item, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={item.year}
                className={`group relative mb-12 flex w-full pl-12 md:pl-0 ${
                  isEven ? "md:justify-start md:pl-[50%]" : "md:justify-end md:pr-[50%]"
                }`}
              >
                <div className="absolute left-[12px] top-1 z-10 h-[6px] w-[6px] rotate-45 transform border-2 border-outline-variant bg-surface transition-colors group-hover:border-primary-container group-hover:bg-primary-container md:left-1/2 md:-translate-x-1/2" />
                <div
                  className={`glass-panel rounded-2xl bg-surface-container p-6 md:w-[calc(100%-40px)] ${
                    isEven ? "md:ml-10" : "md:mr-10"
                  }`}
                >
                  <div className="mb-2 text-label-mono text-primary-container">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold text-on-surface">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant">{item.place}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
