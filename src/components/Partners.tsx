const partners = [
  "HubSpot Partner",
  "Google",
  "Microsoft",
  "agorapulse",
  "Zoho"
];

const Partners = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="border-2 border-foreground rounded-lg p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="text-center">
              <p className="text-lg font-medium text-muted-foreground">{partner}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
