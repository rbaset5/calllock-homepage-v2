import { Separator } from "@/components/ui/separator";

const Solutions = () => {
  const benefits = [
    "Capture before competitors answer — 5-second response vs their 30-60 seconds",
    "Call back with context, not guessing — Service type, urgency, location already extracted",
    "Zero technical work required — 48-hour done-for-you setup, we handle everything",
    "Intelligence advantage on every callback — Full conversation history + structured data",
    "Works 24/7, even when you don't — Emergency at 11pm? Qualified and waiting for you in the morning"
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
              Your phone rings. We qualify. You close.
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
              Or... keep letting calls go to voicemail and hoping they'll wait.
              You could capture every lead before competitors even answer — or keep
              losing jobs to the guy who texts back in 10 seconds.
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
