import { Container } from "./container";
import { footer } from "@/lib/site-config";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full scroll-mt-24 bg-black py-12 md:scroll-mt-28"
    >
      <div className="absolute inset-x-0 top-0 h-0.5" aria-hidden="true" />

      <Container className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div>
          <p className="text-label-mono uppercase tracking-widest text-white">
            {footer.prompt}
          </p>
          <p className="mt-4 text-label-mono text-white/60">{footer.copyright}</p>
        </div>
        <div className="flex gap-8">
          {footer.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-label-mono text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {social.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
