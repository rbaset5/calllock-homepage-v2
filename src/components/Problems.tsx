import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import problemsImage from "@/assets/problems-illustration.png";

const problems = [
  "Something's always broken—because tech is fragile. And you're not an engineer.",
  "You keep getting locked out of accounts. Where is that password again?",
  "And your new hire needs to be set up with 47 different apps."
];

const Problems = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <img 
            src={problemsImage} 
            alt="Frustrated person dealing with technical problems at their computer"
            className="w-full h-auto"
          />
        </div>
        
        <div className="order-1 md:order-2 space-y-8">
          <div>
            <p className="text-sm uppercase tracking-wider mb-2 text-muted-foreground">
              You're a growing business.
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              But your day-to-day has some of this BS in it:
            </h2>
          </div>

          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive-foreground" />
                </div>
                <p className="text-lg md:text-xl pt-1">{problem}</p>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <p className="text-xl md:text-2xl font-medium mb-6">
              Imagine if you could delegate all these issues to a genie?
            </p>
            <Button variant="outline" size="lg">
              Get a free trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
