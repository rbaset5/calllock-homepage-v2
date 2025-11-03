import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold text-foreground border-b-4 border-primary pb-4 mb-6">
            Privacy Policy
          </h1>

          <p className="text-lg mb-6">
            <strong>Effective Date:</strong> November 3, 2025
          </p>

          <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <p className="text-lg">
              This page is currently under construction. Our comprehensive Privacy Policy will be available soon.
            </p>
          </div>

          <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
            Contact Us
          </h2>

          <p className="mb-4">
            If you have questions about privacy at CallLock, please contact us:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Email:</strong> <a href="mailto:support@calllock.com" className="text-primary hover:underline">support@calllock.com</a></li>
            <li><strong>Website:</strong> <a href="https://calllock.com" className="text-primary hover:underline">www.calllock.com</a></li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
