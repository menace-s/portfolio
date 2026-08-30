import { Container } from "./container";
import { footer } from "@/lib/site-config";

export function Footer() {
  return (
    <footer
      id="contact"
      className="w-full scroll-mt-24 border-t border-outline-variant/30 bg-surface-container-lowest py-12 md:scroll-mt-28"
    >
      <Container className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div>
          <p className="text-label-mono uppercase tracking-widest text-primary-container">
            {footer.prompt}
          </p>
          <p className="mt-4 text-label-mono text-on-surface-variant">
            {footer.copyright}
          </p>
        </div>
        <div className="flex gap-8">
          {footer.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-label-mono text-on-surface-variant underline-offset-4 transition-colors hover:text-primary-container hover:underline"
            >
              {social.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
