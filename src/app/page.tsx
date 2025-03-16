import AboutSection from "@/components/AboutSection";
import Career from "@/components/Career";

import HeroSection from "@/components/HeroSection";
import OurFocusSection from "@/components/OurFocusSection";
import Projects from "@/components/Projects";
import Services from "@/components/ServicesSection";

export default function Home() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <AboutSection />
            <OurFocusSection />
            <Services />
            <Projects />
            <Career />
        </main>
    );
}
