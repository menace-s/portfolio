"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./container";
import { ThemeToggle } from "../theme/theme-toggle";
import { links, navItems, siteConfig } from "@/lib/site-config";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Scrim: dims the page behind the open mobile menu and closes it on tap.
          The nav itself is `fixed`, so it sits outside document flow — the
          panel below overlays page content rather than pushing it down, and
          needs a solid (not glass/translucent) background so hero copy
          underneath doesn't show through it illegibly. */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-on-background/40 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <div className="fixed top-4 z-50 w-full px-4 md:top-6">
        <Container className="px-0!">
          <nav className="glass-panel w-full rounded-3xl shadow-xl md:rounded-full">
            <div className="flex h-16 items-center justify-between px-6 md:px-8">
              <a
                href="#"
                className="text-body-md font-bold tracking-tighter text-on-surface"
              >
                {siteConfig.name}
              </a>

              <div className="hidden gap-2 md:flex">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-4 py-2 text-body-md text-on-surface-variant transition-all hover:bg-on-surface/5 hover:text-primary-container"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <ThemeToggle />
                <a
                  href={links.cv}
                  className="hidden items-center justify-center gap-2 rounded-full bg-primary-container px-6 py-2 font-bold text-on-primary-container transition-opacity hover:opacity-90 md:flex"
                >
                  Télécharger CV
                </a>
                <button
                  type="button"
                  onClick={() => setIsOpen((v) => !v)}
                  aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                  aria-expanded={isOpen}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface md:hidden"
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {isOpen && (
              <div className="flex flex-col gap-1 rounded-b-3xl border-t border-outline-variant/30 bg-surface px-6 py-4 md:hidden">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-xl px-3 py-3 text-body-md text-on-surface-variant transition-colors hover:bg-on-surface/5 hover:text-primary-container"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={links.cv}
                  onClick={closeMenu}
                  className="mt-2 flex items-center justify-center rounded-full bg-primary-container px-6 py-3 font-bold text-on-primary-container"
                >
                  Télécharger CV
                </a>
              </div>
            )}
          </nav>
        </Container>
      </div>
    </>
  );
}
