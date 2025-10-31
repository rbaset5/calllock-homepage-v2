import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  "You're on a job. Phone rings. You can't answer. Customer calls the next guy on Google. You just lost $3,500.",
  "You're with a customer. Phone rings twice. By the time you call back 3 hours later, they \"already found someone.\" Another $2,800 gone.",
  "It's 7pm on a Thursday. Voicemail full. Emergency call goes unanswered. They're booking with your competitor at 7:03pm while you're having dinner."
];

const Problems = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 flex justify-center">
          <img
            src="/problem-img.png"
            alt="Missed call problems for trades businesses"
            className="w-full max-w-md"
          />
        </div>
        
        <div className="order-1 md:order-2 space-y-8">
          <div>
            <p className="text-sm uppercase tracking-wider mb-2 text-muted-foreground">
              You're running a good business.
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
              Imagine if every single one of those calls got handled in 5 seconds?
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
