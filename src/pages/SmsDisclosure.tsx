import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { CheckCircle2, XCircle, Info } from "lucide-react";

export default function SmsDisclosure() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold text-foreground border-b-4 border-primary pb-4 mb-6">
            Updated SMS Communication Policy
          </h1>

          <p className="text-sm text-muted-foreground mb-2">For calllock.com/sms-terms</p>
          <p className="text-lg mb-6">
            <strong>Effective Date:</strong> November 13, 2025
          </p>

          {/* Quick Summary */}
          <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <h2 className="text-2xl font-bold text-foreground mt-0 mb-4">Quick Summary</h2>
            <p className="text-lg mb-0">
              When you call a business using CallLock's service and we miss your call, we'll send you <strong>one text message</strong> asking if you'd like to schedule via text. <strong>You must reply YES</strong> to continue - only then will you receive scheduling messages. You can reply STOP at any time to opt out.
            </p>
          </div>

          {/* How Our SMS Response System Works */}
          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            How Our SMS Response System Works
          </h2>

          <p className="mb-4">
            CallLock provides automated SMS response services to home service businesses. Here's what happens when you call a business using our service:
          </p>

          <ol className="list-decimal pl-6 space-y-3 mb-8">
            <li>
              <strong>You call a business</strong> - When you place a call to a participating business, your phone number is provided to the business via standard Caller ID.
            </li>
            <li>
              <strong>If your call is missed</strong> - Within 5 seconds of a missed call, you'll receive <strong>one automated text message</strong> from the business.
            </li>
            <li>
              <strong>You choose whether to continue</strong> - The message asks if you'd like to schedule via text and requires you to reply YES (or similar affirmative response) to continue.
            </li>
            <li>
              <strong>If you reply YES</strong> - Our system asks questions to understand your service needs and helps you book an appointment through a short conversation.
            </li>
            <li>
              <strong>You stay in control</strong> - You can reply to continue the conversation, call the business directly instead, ignore the message, or text STOP to opt out at any time.
            </li>
          </ol>

          {/* Your Consent to Receive Messages */}
          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            Your Consent to Receive Messages
          </h2>

          <p className="mb-6">
            CallLock operates on a clear <strong>two-step consent model</strong>:
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-3">
            Step 1: You Initiate Contact
          </h3>
          <p className="mb-6">
            When you call a business using CallLock's service, you initiate a business relationship by requesting service. Your phone number is provided to the business through standard Caller ID.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-3">
            Step 2: You Provide Express Consent via SMS Reply
          </h3>

          <p className="mb-4">After a missed call, you receive <strong>ONE initial message</strong> that:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Identifies the business by name</li>
            <li>Explains we're responding to your missed call</li>
            <li>Asks if you'd like to schedule via text</li>
            <li><strong>Requires you to reply YES to continue</strong></li>
            <li>Includes message frequency, cost, and opt-out information</li>
            <li>Provides a link to these terms</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
            <p className="font-semibold mb-2">
              Your reply of YES (or similar affirmative response like "Y", "Sure", "OK", etc.) constitutes express written consent to receive appointment scheduling messages.
            </p>
            <p className="mb-0">
              <strong>Without your YES reply, no additional messages will be sent.</strong>
            </p>
          </div>

          <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">What This Means:</h4>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>The initial message is a one-time notification</strong> about your service request status</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>Only customers who reply YES</strong> receive additional scheduling messages</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>Your affirmative reply is logged</strong> with a timestamp as your consent record</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>You can reply STOP at any time</strong> to revoke consent immediately</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>You can simply ignore the message</strong> if you prefer to call back instead</span>
            </li>
          </ul>

          <h4 className="text-xl font-semibold text-foreground mt-8 mb-3">Example Consent Flow:</h4>
          <div className="bg-muted p-6 rounded-lg mb-6 space-y-4">
            <div>
              <p className="font-semibold mb-2">Initial Message (requires no consent):</p>
              <p className="italic bg-white dark:bg-slate-800 p-3 rounded border-l-4 border-primary">
                "[BUSINESS NAME]: Missed your call! Reply YES to get your service scheduled via text. Msg frequency varies. Msg&data rates apply. STOP to opt-out. calllock.com/sms-terms"
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">You reply:</p>
              <p className="italic bg-white dark:bg-slate-800 p-3 rounded">"YES"</p>
            </div>
            <div>
              <p className="font-semibold mb-2">System confirms:</p>
              <p className="italic bg-white dark:bg-slate-800 p-3 rounded">
                "Great! Now you'll receive 3-5 messages to complete scheduling."
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">Any time:</p>
              <p className="italic bg-white dark:bg-slate-800 p-3 rounded">
                You can reply "STOP" to immediately opt out.
              </p>
            </div>
          </div>

          {/* Additional Business Disclosures */}
          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-3">
            Additional Business Disclosures (Supplementary)
          </h3>
          <p className="mb-4">
            Some businesses using CallLock also provide advance notice through:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Voicemail greetings:</strong> "For faster service, we may respond to missed calls via text"</li>
            <li><strong>Website privacy policies</strong> mentioning SMS coordination for missed calls</li>
            <li><strong>Business profile descriptions</strong> on directories and websites</li>
          </ul>
          <p className="mb-6">
            These are courtesy notices to inform you in advance, but your <strong>express consent is your YES reply to our initial message</strong>.
          </p>

          {/* You Are Always In Control */}
          <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
            <h3 className="text-2xl font-semibold text-foreground mt-0 mb-3">You Are Always In Control</h3>
            <ul className="space-y-2 mb-0">
              <li><strong>Ignore the initial message</strong> = No follow-up messages sent</li>
              <li><strong>Reply YES</strong> = You consent to a scheduling conversation</li>
              <li><strong>Reply STOP anytime</strong> = Immediate opt-out, no more messages</li>
              <li><strong>Call the business directly</strong> = Your choice, you're never required to use SMS</li>
            </ul>
          </div>

          {/* What Types of Messages You'll Receive */}
          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            What Types of Messages You'll Receive
          </h2>

          <p className="mb-4">
            Messages from CallLock-enabled businesses are transactional and limited to appointment scheduling:
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-500" />
            You WILL Receive:
          </h3>

          <p className="mb-2 font-semibold">Initial notification (1 message):</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Acknowledgment of your missed call</li>
            <li>Request for consent to continue via text</li>
            <li>All required disclosures (frequency, cost, opt-out, terms)</li>
          </ul>

          <p className="mb-2 font-semibold">If you consent (reply YES), you'll receive:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Questions to understand your service needs (2-3 messages)</li>
            <li>Available appointment time options (1 message)</li>
            <li>Booking confirmation links (1 message)</li>
            <li>Emergency contact information if needed (1 message if applicable)</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3 flex items-center gap-2">
            <XCircle className="w-6 h-6 text-red-600 dark:text-red-500" />
            You Will NOT Receive:
          </h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Marketing messages or promotional offers</li>
            <li>Messages unrelated to your service request</li>
            <li>Any messages if you don't reply YES to the initial notification</li>
            <li>Ongoing campaigns or recurring messages after scheduling is complete</li>
            <li>Messages from businesses you didn't call</li>
          </ul>

          {/* Message Frequency */}
          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            Message Frequency
          </h2>

          <p className="mb-4">
            Message frequency varies based on your interaction with the business:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Before consent:</strong> 1 message (the initial notification)</li>
            <li><strong>After consent (typical conversation):</strong> 3-5 messages total to complete scheduling</li>
            <li><strong>You control the pace:</strong> Messages are sent in response to your replies</li>
            <li><strong>No ongoing campaigns:</strong> Messages stop after your appointment is scheduled or you opt out</li>
            <li><strong>Maximum:</strong> You will not receive more than 10 messages in any single conversation</li>
          </ul>

          {/* How to Opt Out */}
          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            How to Opt Out
          </h2>

          <p className="mb-4">
            You can stop receiving messages at any time using any of these methods:
          </p>

          <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg mb-6">
            <p className="font-semibold mb-3">Text any of these keywords:</p>
            <ul className="grid grid-cols-2 gap-2 mb-4">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <strong>STOP</strong>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <strong>UNSUBSCRIBE</strong>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <strong>CANCEL</strong>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <strong>QUIT</strong>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <strong>END</strong>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <strong>REMOVE</strong>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <strong>OPTOUT</strong>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <strong>STOPALL</strong>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <strong>REVOKE</strong>
              </li>
            </ul>
            <p className="mb-2">You'll immediately receive a confirmation message that you've been unsubscribed:</p>
            <p className="italic bg-white dark:bg-slate-800 p-3 rounded mb-0">
              "You have successfully been unsubscribed. You will not receive any more messages from this number. Reply START to resubscribe."
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">To restart messages:</h3>
          <p className="mb-6">
            If you change your mind later, simply reply <strong>START</strong> to resubscribe.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Other ways to stop messages:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Simply stop replying</strong> - the conversation will end naturally</li>
            <li><strong>Call the business directly</strong> using the phone number provided in messages</li>
            <li><strong>Block the number</strong> on your phone (though we'd prefer you use STOP so we can honor your preference properly)</li>
          </ul>

          {/* How to Get Help */}
          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            How to Get Help
          </h2>

          <p className="mb-4">If you need assistance:</p>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li><strong>Text HELP</strong> to receive support information and the business's phone number</li>
            <li><strong>Call the business directly</strong> using the phone number provided in messages</li>
            <li><strong>Contact CallLock support:</strong> <a href="mailto:support@calllock.com" className="text-primary hover:underline">support@calllock.com</a></li>
          </ol>

          <p className="mb-8">
            When you text HELP, you'll receive:
          </p>
          <div className="bg-muted p-4 rounded-lg mb-8 italic">
            "Reply STOP to unsubscribe. Msg&Data Rates May Apply."
          </div>

          {/* Privacy & Data Protection */}
          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            Privacy & Data Protection
          </h2>

          <p className="mb-4">Your privacy is important to us. Here's how we protect your information:</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What Information We Collect:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Phone number (from Caller ID when you call)</li>
            <li>Service type you're requesting</li>
            <li>Service location/address</li>
            <li>Preferred appointment times</li>
            <li>Text message conversation history</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How We Use Your Information:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Only to facilitate appointment scheduling</strong> with the business you called</li>
            <li>To improve our service quality</li>
            <li>To maintain records for customer service purposes</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How We Protect Your Information:</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>Secure storage:</strong> All data is encrypted and stored securely</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>Never sold:</strong> Your information is NEVER sold to third parties or marketers</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>Limited sharing:</strong> Your data is shared only with the specific business you called</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>Limited retention:</strong> Conversation history is retained for 90 days for service quality and record-keeping, then archived or deleted</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Your Privacy Rights:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Access:</strong> Request a copy of your data by emailing support@calllock.com</li>
            <li><strong>Deletion:</strong> Request deletion of your data (subject to legal retention requirements)</li>
            <li><strong>Correction:</strong> Request corrections to inaccurate data</li>
            <li><strong>Opt-out:</strong> Stop receiving messages anytime (reply STOP)</li>
          </ul>

          <p className="mb-8">
            For complete privacy details, see our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
          </p>

          {/* Message and Data Rates */}
          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            Message and Data Rates
          </h2>

          <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg mb-4">
            <p className="font-semibold mb-0">
              <strong>Standard message and data rates may apply</strong> based on your mobile carrier plan.
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>CallLock does not charge you for messages</li>
            <li>Your mobile carrier may charge standard SMS rates based on your plan</li>
            <li>Most modern phone plans include unlimited texting</li>
            <li>Contact your carrier if you have questions about your plan's SMS rates</li>
            <li>International numbers may incur additional charges</li>
          </ul>

          {/* Regulatory Compliance */}
          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            Regulatory Compliance
          </h2>

          <p className="mb-4">CallLock's SMS response system complies with:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Telephone Consumer Protection Act (TCPA)</strong> - Our messages are transactional responses to customer-initiated calls with express consent via YES reply</li>
            <li><strong>CTIA Messaging Principles and Best Practices</strong> - Industry standards for A2P messaging</li>
            <li><strong>A2P 10DLC Registration</strong> - Registered with The Campaign Registry (TCR) for US carriers</li>
            <li><strong>Mobile carrier guidelines</strong> for Application-to-Person (A2P) messaging</li>
            <li><strong>CAN-SPAM Act</strong> - Though not marketing, we follow best practices</li>
            <li><strong>FCC Rules</strong> - Federal Communications Commission regulations for automated text messaging</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Our Registration:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Campaign Type:</strong> Delivery Notification (appointment scheduling coordination)</li>
            <li><strong>Verification:</strong> This disclosure page serves as our publicly verifiable CTA (Call to Action)</li>
            <li><strong>Consent Records:</strong> All opt-ins are logged with timestamps for regulatory audit</li>
          </ul>

          {/* Supported Carriers */}
          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            Supported Carriers
          </h2>

          <p className="mb-4">
            This service works with <strong>all major U.S. mobile carriers</strong>, including:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>AT&T</li>
            <li>T-Mobile</li>
            <li>Verizon</li>
            <li>Sprint</li>
            <li>US Cellular</li>
            <li>Regional and MVNO carriers</li>
          </ul>
          <p className="mb-8">
            <strong>Note:</strong> Landline phones cannot receive text messages.
          </p>

          {/* Sample Messages */}
          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            Sample Messages
          </h2>

          <p className="mb-4">Here are examples of the types of messages you might receive:</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Initial Notification (Before Consent):</h3>
          <div className="bg-muted p-4 rounded-lg mb-6 italic">
            "[BUSINESS NAME]: Missed your call! Reply YES to get your service scheduled via text. Msg frequency varies. Msg&data rates apply. STOP to opt-out. calllock.com/sms-terms"
          </div>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">After You Reply YES:</h3>
          <div className="space-y-4 mb-6">
            <div className="bg-muted p-4 rounded-lg italic">
              "Great! What service do you need? Reply: 1-Emergency, 2-Routine service, 3-Estimate. Reply STOP anytime to opt-out."
            </div>
            <div className="bg-muted p-4 rounded-lg italic">
              "Got it! What's the service address? Please include city and state so we can coordinate the right technician."
            </div>
            <div className="bg-muted p-4 rounded-lg italic">
              "Perfect! Available appointment times: Tomorrow 9am-12pm or 1pm-4pm. Book here: [BOOKING_LINK]. Reply STOP to opt-out."
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Emergency Messages:</h3>
          <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg mb-8 italic">
            "URGENT: For emergencies call [PHONE_NUMBER] now. Someone will respond within 15 minutes. If no callback, please call directly."
          </div>

          {/* Questions or Concerns */}
          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            Questions or Concerns?
          </h2>

          <p className="mb-4">
            If you have questions about our SMS communication policy or want to report an issue:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Email:</strong> <a href="mailto:support@calllock.com" className="text-primary hover:underline">support@calllock.com</a></li>
            <li><strong>Website:</strong> <a href="https://calllock.com" className="text-primary hover:underline">www.calllock.com</a></li>
            <li><strong>Mailing Address:</strong> [Your business address - add when available]</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Common Questions:</h3>

          <div className="space-y-6 mb-8">
            <div>
              <p className="font-semibold mb-2">Q: Why did I receive a text when I just wanted to call?</p>
              <p className="mb-0">A: We send one initial message to help you if your call was missed. You can ignore it and call back, or reply YES if texting is easier.</p>
            </div>

            <div>
              <p className="font-semibold mb-2">Q: Is this spam?</p>
              <p className="mb-0">A: No. We only text people who called the business first. You must reply YES to continue receiving messages.</p>
            </div>

            <div>
              <p className="font-semibold mb-2">Q: How do I stop receiving messages?</p>
              <p className="mb-0">A: Reply STOP at any time. You'll immediately be unsubscribed.</p>
            </div>

            <div>
              <p className="font-semibold mb-2">Q: Who sees my information?</p>
              <p className="mb-0">A: Only the specific business you called. We never sell your data.</p>
            </div>

            <div>
              <p className="font-semibold mb-2">Q: Will I be charged for messages?</p>
              <p className="mb-0">A: CallLock doesn't charge you, but your carrier's standard SMS rates may apply (most plans include unlimited texting).</p>
            </div>
          </div>

          {/* For Businesses */}
          <div className="bg-muted/50 border-t-4 border-primary p-6 rounded-b-lg mb-8">
            <h2 className="text-2xl font-semibold text-foreground mt-0 mb-3">For Businesses</h2>
            <p className="mb-3">
              If you're a business interested in implementing CallLock's missed call response system, please contact us for more information:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-0">
              <li><strong>Email:</strong> <a href="mailto:sales@calllock.com" className="text-primary hover:underline">sales@calllock.com</a></li>
              <li><strong>Website:</strong> <a href="https://calllock.com/business" className="text-primary hover:underline">www.calllock.com/business</a></li>
            </ul>
          </div>

          {/* Document Information */}
          <div className="border-t pt-8 mt-12 text-sm text-muted-foreground">
            <h3 className="text-lg font-semibold text-foreground mb-4">Document Information</h3>
            <ul className="space-y-2 mb-6">
              <li><strong>Last Updated:</strong> November 13, 2025</li>
              <li><strong>Effective Date:</strong> November 13, 2025</li>
              <li><strong>Version:</strong> 2.0 (Updated for A2P 10DLC compliance)</li>
              <li><strong>Document URL:</strong> https://calllock.com/sms-terms</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-4">Changes from Previous Version</h3>
            <p className="mb-2"><strong>November 13, 2025 - Version 2.0:</strong></p>
            <ul className="space-y-1 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                <span>Clarified that express consent is obtained via YES reply to initial message</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                <span>Removed "implied consent via Caller ID" language (TCPA compliance)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                <span>Added clear two-step consent model explanation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                <span>Enhanced privacy and data protection disclosures</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                <span>Added sample message examples</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                <span>Clarified message frequency and types</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                <span>Added A2P 10DLC registration information</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                <span>Improved opt-out instructions and examples</span>
              </li>
            </ul>

            <p className="text-center pt-6 border-t">
              <strong>© 2025 CallLock. All rights reserved.</strong>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
