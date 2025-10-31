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
    question: "So is this an MSP?",
    answer: "No. We're not managing your computers, servers, or network. We're solving one specific problem: missed calls. Think of us as your after-hours front desk that works 24/7 to make sure every call turns into a booked job."
  },
  {
    question: "What if I have more than 50 people?",
    answer: "CallLock is built specifically for small trades businesses—typically 1-10 people. If you're running a larger operation, our system is designed for the solo operator or small crew that can't afford to miss calls while they're on job sites."
  },
  {
    question: "Is there a trial?",
    answer: "Yes. We offer a 30-day money-back guarantee. If you don't see recovered revenue from previously missed calls in the first month, we'll refund you in full. No questions asked."
  },
  {
    question: "Do you manage cybersecurity?",
    answer: "No. We focus exclusively on missed call recovery and lead qualification. We're not an IT company—we're a conversion tool that turns missed calls into booked jobs."
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
