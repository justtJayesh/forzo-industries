import About from "@/components/About";
import Career from "@/components/Career";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <About />
            <Services />
            <Projects />
            <Career />
        </main>
    );
}
