import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Every missed call is a customer calling your competitor instead.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            The average homeowner dials the next guy on Google in under 60 seconds. By the time you call back, they've "already found someone." We respond in 5 seconds and book the appointment before they've finished hanging up.
          </p>
          <div className="space-y-4">
            <Button variant="outline" size="lg">
              Let us prove it*
            </Button>
            <p className="text-sm text-muted-foreground">
              *Give us your worst week. The one where you're slammed and can't get to the phone. We'll show you exactly how many of those "missed opportunities" we can turn into booked jobs.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/hero-img.png"
            alt="CallLock missed call recovery hero"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
