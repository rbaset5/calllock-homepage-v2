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
    title: "Instant Response & Qualification",
    items: [
      "5-second SMS response to every missed call",
      "AI-powered qualification conversations (using Claude 3.5 Sonnet)",
      "Extracts service type, urgency, location, problem description, and preferred timing",
      "Unlimited conversations (no per-message fees)"
    ],
    expandedTitle: "+ What makes it different",
    expandedContent: ""
  },
  {
    id: "it-support",
    icon: <Laptop className="w-6 h-6" />,
    title: "Lead Management",
    items: [
      "Structured lead data delivered to Google Sheets",
      "Full conversation history for every lead",
      "Instant SMS to owner with complete lead details (name, phone, service type, urgency, location)",
      "Duplicate call prevention",
      "Searchable lead database"
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
      "Custom script configuration (business name, service types, service areas)",
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
