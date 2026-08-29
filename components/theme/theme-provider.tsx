"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const STORAGE_KEY = "portfolio-theme";

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/**
 * Inline script injected before hydration so the correct `.dark` class is
 * present on <html> for the very first paint (avoids a light/dark flash).
 * Priority: stored preference > OS preference > dark (matches the primary
 * Stitch "Modern Yellow" screen this site is built from).
 */
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('${STORAGE_KEY}');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch (e) {}
})();
`;

/*
 * Theme lives outside React (a DOM class set by `themeInitScript`, mirrored
 * to localStorage), so it's read via a tiny external store rather than
 * useState+useEffect. `useSyncExternalStore` is the React-blessed way to
 * bridge state like this: it renders `getServerSnapshot` ("dark") during
 * SSR/hydration to guarantee the first client render matches the server
 * markup, then transparently swaps in the real client value right after —
 * no hydration-mismatch warning, no manual "mounted" flag.
 */
let currentTheme: Theme =
  typeof document !== "undefined" && !document.documentElement.classList.contains("dark")
    ? "light"
    : "dark";
const listeners = new Set<() => void>();

function getSnapshot(): Theme {
  return currentTheme;
}

function getServerSnapshot(): Theme {
  return "dark";
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function applyTheme(next: Theme) {
  currentTheme = next;
  document.documentElement.classList.toggle("dark", next === "dark");
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // localStorage unavailable (private mode, etc.) — theme just won't persist.
  }
  listeners.forEach((listener) => listener());
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = useCallback(() => {
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
