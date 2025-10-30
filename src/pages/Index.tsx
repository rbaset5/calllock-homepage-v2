import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Benefits from "@/components/Benefits";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Benefits />
        <Hero />
        <Problems />
      </main>
    </div>
  );
};

export default Index;
