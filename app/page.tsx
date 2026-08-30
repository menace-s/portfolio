import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Expertise } from "@/components/sections/expertise";
import { Projects } from "@/components/sections/projects";
import { Timeline } from "@/components/sections/timeline";
import { Process } from "@/components/sections/process";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Expertise } from "@/components/sections/expertise";
import { Projects } from "@/components/sections/projects";
import { Timeline } from "@/components/sections/timeline";
import { Process } from "@/components/sections/process";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pb-32">
        <Hero />
        <Expertise />
        <Projects />
        <Timeline />
        <Process />
      </main>
      <Footer />
    </>
      <Footer />
    </>
  );
}
