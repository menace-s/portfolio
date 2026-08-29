import { Container } from "../layout/container";
import { process } from "@/lib/site-config";

export function Process() {
  return (
    <section className="border-y border-outline-variant/30 bg-surface-container-lowest py-24 md:py-32">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-headline-lg-mobile text-on-surface md:text-headline-lg">
            Méthode de travail
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {process.map((step, index) => (
            <div key={step} className="flex flex-col items-center p-4 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary-container/50 text-lg text-label-mono text-primary-container">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h4 className="font-bold text-on-surface">{step}</h4>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
