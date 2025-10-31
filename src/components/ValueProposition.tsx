import { Keyboard, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const ValueProposition = () => {
  const benefits = [
    "⚡ Instant response to every missed call (5 seconds guaranteed)",
    "📱 Owner SMS alerts with qualified lead details (no need to check sheets)",
    "🤖 AI qualification (service type, urgency, location, timing)",
    "💬 Unlimited conversations included",
    "📊 Google Sheets storage with full history",
    "🔧 Technical support + monthly AI improvements",
    "📈 Performance monitoring + reports",
    "🛡️ TCPA compliance built-in",
    "💰 One-time: 48-hour setup, 30-day guarantee"
  ];

  return (
    <>
      <div className="container mx-auto px-6">
        <Separator className="my-0" />
      </div>

      <section className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="border-2 border-foreground rounded-lg p-8 md:p-12 bg-white space-y-6">

            <div className="flex justify-start mb-4">
              <div className="w-16 h-16 rounded-lg border-2 border-foreground flex items-center justify-center">
                <Keyboard className="w-8 h-8" />
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 rounded bg-green-600 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                What you get every month:
              </h2>
            </div>

            <ul className="space-y-3 text-left max-w-xl mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span>•</span>
                  <span className="text-lg">{benefit.split(' ')[0]}</span>
                  <span>{benefit.split(' ').slice(1).join(' ')}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-start">
              <Button variant="outline" size="lg">
                Get a free trial
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ValueProposition;
