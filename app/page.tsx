import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Expertise } from "@/components/sections/expertise";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pb-32">
        <Hero />
        <About />
        <Projects />
        <Expertise />
      </main>
      <Footer />
    </>
      <Footer />
    </>
  );
}
