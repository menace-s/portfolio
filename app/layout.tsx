import type { Metadata } from "next";
import { Geist, Instrument_Serif, JetBrains_Mono, Poppins } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// Rounded, friendly geometric sans reserved for the Hero headline — the rest
// of the site keeps Geist Sans (see --font-heading-rounded in globals.css).
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

// Serif accent used only for the Hero role line ("Ingénieur Logiciel") —
// real italic design, not a synthesized fake italic.
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: "/JP.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${jetbrainsMono.variable} ${poppins.variable} ${instrumentSerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="bg-dot-grid flex min-h-full flex-col overflow-x-hidden bg-background text-on-background">
        {children}
      </body>
    </html>
  );
}
