import AboutSection from "@/components/AboutSection";
import Career from "@/components/Career";
import CoreBusiness from "@/components/CoreBusiness";
import CoreBusiness1 from "@/components/CoreBusinessCompnent/CoreBusiness1";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Services from "@/components/ServicesSection";

export default function Home() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <AboutSection />
            <CoreBusiness1 />
            <Services />
            <Projects />
            <Career />
        </main>
    );
}
