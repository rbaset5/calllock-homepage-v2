import { Check } from "lucide-react";

const benefits = [
  "Less missed calls, more booked jobs",
  "Your phone works for you now",
  "Revenue you didn't know you were losing"
];

const Benefits = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="border-t-2 border-b-2 border-foreground py-12">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <Check className="w-5 h-5 text-accent-foreground" />
              </div>
              <p className="text-lg md:text-xl font-medium pt-1">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
