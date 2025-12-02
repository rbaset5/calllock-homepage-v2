import { Laptop, Globe, Bot } from "lucide-react";

interface ServiceData {
  id: string;
  icon: React.ReactNode;
  title: string;
  items: string[];
  expandedTitle: string;
  expandedContent: string;
}

const services: ServiceData[] = [
  {
    id: "automation-ai",
    icon: <Bot className="w-6 h-6" />,
    title: "Instant Callback & Booking",
    items: [
      "5-second callback—before they've finished dialing your competitor",
      "Natural conversation that books the job (not a robotic phone tree)",
      "Extracts service type, urgency, location, and books the appointment",
      "Works with your existing calendar"
    ],
    expandedTitle: "+ What makes it different",
    expandedContent: ""
  },
  {
    id: "it-support",
    icon: <Laptop className="w-6 h-6" />,
    title: "Appointment Management",
    items: [
      "Booked appointments delivered directly to your calendar",
      "Full conversation summary for every booking",
      "Instant SMS to you with appointment details (customer name, service type, time)",
      "Handles rescheduling and cancellations",
      "Searchable booking history"
    ],
    expandedTitle: "+ The intelligence layer",
    expandedContent: ""
  },
  {
    id: "website-domain",
    icon: <Globe className="w-6 h-6" />,
    title: "Setup & Support",
    items: [
      "48-hour implementation (done-for-you)",
      "Custom conversation setup (business name, service types, service areas, availability)",
      "Technical support (2-hour response during business hours)",
      "Monthly performance reports"
    ],
    expandedTitle: "+ The automation magic",
    expandedContent: ""
  }
];

const ServiceCard = ({ service }: { service: ServiceData }) => {
  return (
    <div className="border-2 border-foreground rounded-lg p-6 bg-card flex flex-col">
      <div className="w-12 h-12 rounded-lg border-2 border-foreground flex items-center justify-center mb-4">
        {service.icon}
      </div>

      <h3 className="text-xl font-bold mb-4">{service.title}</h3>

      <ul className="space-y-2 mb-6 flex-grow">
        {service.items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-xs text-muted-foreground mt-4">{service.expandedContent}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
