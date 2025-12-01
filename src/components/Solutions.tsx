import { Separator } from "@/components/ui/separator";

const Solutions = () => {
  const benefits = [
    "Capture before competitors answer — 5-second callback vs their 30-60 seconds",
    "Show up ready to work, not sell — Appointment already booked with service details",
    "Zero technical work required — 48-hour done-for-you setup, we handle everything",
    "Intelligence advantage on every job — Full conversation history + customer context",
    "Works 24/7, even when you don't — Emergency at 11pm? Booked and waiting for you in the morning"
  ];

  return (
    <>
      <div className="container mx-auto px-6">
        <Separator className="my-0" />
      </div>

      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Your phone rings. We book. You close.
            </h2>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1">•</span>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src="/text-message.png"
              alt="Text message conversation with customer"
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-12 items-center">
          <div className="flex justify-start">
            <img
              src="/conclusion-img.png"
              alt="Alternative solution illustration"
              className="max-w-[250px] object-contain"
            />
          </div>

          <div className="flex-1 space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed">
              You could capture every lead and book them before competitors even answer—or keep losing jobs to the guy who picks up in 10 seconds.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <Separator className="my-0" />
      </div>
    </>
  );
};

export default Solutions;
