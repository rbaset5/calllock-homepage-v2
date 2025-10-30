import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            You're the boss, why are you still fixing tech issues?
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            It doesn't just annoy you. It slows you and your staff down. That's our job now.
          </p>
          <div className="space-y-4">
            <Button variant="outline" size="lg">
              Let us prove it*
            </Button>
            <p className="text-sm text-muted-foreground">
              * You have to promise us that you'll dump all your problems on us so that we can show you what we're made of.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <img 
            src={heroIllustration} 
            alt="Illustration of team members solving tech problems" 
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
