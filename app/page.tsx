import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Stack } from "@/components/sections/stack";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pb-32">
        <Hero />
        <About />
        <Services />
        <Stack />
      </main>
      <Footer />
    </>
  );
}
