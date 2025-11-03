import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Benefits from "@/components/Benefits";
import Partners from "@/components/Partners";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import ValueProposition from "@/components/ValueProposition";
import Solutions from "@/components/Solutions";
import FAQ from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Problems />
        <Partners />
        <Mission />
        <Services />
        <ValueProposition />
        <Solutions />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
