import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Does this work with ServiceTitan/Housecall Pro/[my specific software]?",
    answer: "Yeah. We integrate with whatever calendar you're using - Google, ServiceTitan, Housecall Pro, all of them. Appointments show up like you booked them yourself."
  },
  {
    question: "What's the contract length and can I cancel if it doesn't work out?",
    answer: "Month-to-month. Cancel anytime with 30 days notice. No setup fees."
  },
  {
    question: "What happens if the customer has a complex question the AI can't handle?",
    answer: "It hands off to you. Says \"That needs [your name]'s expertise - can I have them call you?\" You get notified immediately. Lead captured, nobody frustrated."
  }
];

const FAQ = () => {
  return (
    <>
      <div className="container mx-auto px-6">
        <Separator className="my-0" />
      </div>

      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">FAQ</h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <Separator className="my-0" />
      </div>
    </>
  );
};

export default FAQ;
