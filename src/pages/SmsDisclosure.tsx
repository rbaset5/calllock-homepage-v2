import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

export default function SmsDisclosure() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold text-foreground border-b-4 border-primary pb-4 mb-6">
            SMS Communication Policy
          </h1>

          <p className="text-lg mb-6">
            <strong>Effective Date:</strong> November 3, 2025
          </p>

          <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <p className="text-lg">
              <strong>Quick Summary:</strong> When you call a business using CallLock's service and we miss your call, we'll send you a text message to help you schedule an appointment. You can reply to engage with us or text STOP to opt out at any time.
            </p>
          </div>

          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            How Our SMS Response System Works
          </h2>

          <p className="mb-4">
            CallLock provides automated SMS response services to home service businesses. Here's what happens when you call a business using our service:
          </p>

          <ol className="list-decimal pl-6 space-y-3 mb-8">
            <li>
              <strong>You call a business</strong> - When you place a call to a participating business, your phone number is provided to the business via Caller ID.
            </li>
            <li>
              <strong>If your call is missed</strong> - Within 5 seconds of a missed call, you'll receive an automated text message from the business.
            </li>
            <li>
              <strong>The SMS helps you schedule</strong> - Our system asks questions to understand your service needs and helps you book an appointment.
            </li>
            <li>
              <strong>You stay in control</strong> - You can reply to continue, call the business directly, or opt out at any time.
            </li>
          </ol>

          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            Your Consent to Receive Messages
          </h2>

          <p className="mb-4">
            When you call a business using CallLock's service, you consent to receive SMS responses in the following ways:
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-3">
            1. Implied Consent Through Your Call
          </h3>
          <p className="mb-4">
            By calling the business and providing your phone number via Caller ID, you initiate contact and establish a business relationship. Our SMS messages are <strong>direct transactional responses</strong> to your call - we're helping you complete the service request you initiated.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-3">
            2. Business Disclosure
          </h3>
          <p className="mb-4">
            Businesses using CallLock implement disclosure of SMS responses through:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Voicemail greetings mentioning text message responses</li>
            <li>Website privacy policies</li>
            <li>Business profile descriptions</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg mb-6 italic">
            <p>
              <strong>Example disclosure:</strong> "For faster service, we may respond to missed calls via text message. Reply STOP to opt out anytime."
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-3">
            3. First Message Transparency
          </h3>
          <p className="mb-6">
            Our initial SMS clearly identifies the business by name and explains we're responding to your missed call. You can immediately see who is texting and why.
          </p>

          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            What Types of Messages You'll Receive
          </h2>

          <p className="mb-4">
            Messages from CallLock-enabled businesses are <strong>transactional only</strong> and may include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Acknowledgment of your missed call</li>
            <li>Questions to understand your service needs</li>
            <li>Available appointment times</li>
            <li>Booking links to schedule service</li>
            <li>Business contact information for emergencies</li>
          </ul>

          <p className="mb-6">
            <strong>What you won't receive:</strong> Marketing messages, promotional offers, or unsolicited communications unrelated to your service request.
          </p>

          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            Message Frequency
          </h2>

          <p className="mb-4">
            Message frequency varies based on your interaction with the business:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Typical conversation:</strong> 3-5 messages to complete scheduling</li>
            <li><strong>You control the pace:</strong> Messages are sent in response to your replies</li>
            <li><strong>No ongoing campaigns:</strong> Messages stop after your appointment is scheduled or you opt out</li>
          </ul>

          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            How to Opt Out
          </h2>

          <p className="mb-4">
            You can stop receiving messages at any time using any of these methods:
          </p>

          <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg mb-6">
            <p className="font-semibold mb-3">Text any of these keywords:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>STOP</li>
              <li>UNSUBSCRIBE</li>
              <li>CANCEL</li>
              <li>QUIT</li>
              <li>END</li>
              <li>REMOVE</li>
            </ul>
            <p>You'll immediately receive a confirmation that you've been unsubscribed.</p>
          </div>

          <p className="mb-6">
            <strong>To restart messages:</strong> If you change your mind, simply reply <strong>START</strong> to resubscribe.
          </p>

          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            How to Get Help
          </h2>

          <p className="mb-4">If you need assistance:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Text HELP</strong> to receive support information and the business's phone number</li>
            <li><strong>Call the business directly</strong> using the phone number provided in messages</li>
            <li><strong>Contact CallLock support:</strong> <a href="mailto:support@calllock.com" className="text-primary hover:underline">support@calllock.com</a></li>
          </ul>

          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            Privacy & Data Protection
          </h2>

          <p className="mb-4">Your privacy is important to us:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Limited data collection:</strong> We only collect information necessary to facilitate appointment scheduling (phone number, service type, location, preferred times)</li>
            <li><strong>Secure storage:</strong> Your information is stored securely and never sold to third parties</li>
            <li><strong>Business relationship only:</strong> Your data is shared only with the business you called</li>
            <li><strong>Retention:</strong> Conversation history is retained for service quality and record-keeping purposes</li>
          </ul>

          <p className="mb-6">
            For complete privacy details, see our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
          </p>

          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            Message and Data Rates
          </h2>

          <p className="mb-6">
            <strong>Standard message and data rates may apply</strong> based on your mobile carrier plan. CallLock does not charge you for messages, but your carrier may charge standard SMS rates.
          </p>

          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            Regulatory Compliance
          </h2>

          <p className="mb-4">CallLock's SMS response system complies with:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Telephone Consumer Protection Act (TCPA)</strong> - Our messages qualify as transactional responses to customer-initiated calls</li>
            <li><strong>CTIA Messaging Principles and Best Practices</strong></li>
            <li><strong>Mobile carrier guidelines</strong> for A2P (Application-to-Person) messaging</li>
          </ul>

          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            Supported Carriers
          </h2>

          <p className="mb-6">
            This service works with all major U.S. mobile carriers, including AT&T, T-Mobile, Verizon, Sprint, and others. Landline phones cannot receive text messages.
          </p>

          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            Questions or Concerns?
          </h2>

          <p className="mb-4">
            If you have questions about our SMS communication policy or want to report an issue:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Email:</strong> <a href="mailto:support@calllock.com" className="text-primary hover:underline">support@calllock.com</a></li>
            <li><strong>Website:</strong> <a href="https://calllock.com" className="text-primary hover:underline">www.calllock.com</a></li>
          </ul>

          <div className="border-t pt-8 mt-12 text-sm text-muted-foreground">
            <p className="mb-4">
              <strong>For Businesses:</strong> If you're a business interested in implementing CallLock's missed call response system, please contact us for more information.
            </p>

            <p>
              <strong>Last Updated:</strong> November 3, 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
