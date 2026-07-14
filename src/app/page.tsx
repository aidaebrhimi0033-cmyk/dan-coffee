import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Menu } from "@/components/sections/Menu";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Reservation } from "@/components/sections/Reservation";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
