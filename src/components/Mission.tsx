const Mission = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-8">
          <img
            src="/solution-img.png"
            alt="Solution illustration"
            className="max-w-7xl"
          />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          We're here to fix the missed call problem.
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
          From the first ring to the booked appointment, we're replacing "I'll call you back" with "You're booked for Tuesday at 2pm." Built for trades businesses that are too busy making money to lose money.
        </p>
      </div>
    </section>
  );
};

export default Mission;
