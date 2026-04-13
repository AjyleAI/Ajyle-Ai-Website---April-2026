import { motion } from "motion/react";

export default function PrivacyPolicy() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div {...fadeIn} className="prose prose-lg max-w-none">
          <h1 className="font-headline text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-on-surface-variant text-lg mb-8">
            This policy explains what personal data Ajyle AI collects, how we use it, how long we keep it, and what your rights are. It covers our obligations under UK GDPR and the Data Protection Act 2018.
          </p>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4">1. Who We Are</h2>
            <p className="text-on-surface-variant">
              Ajyle AI is a consultancy that helps small and mid-sized business owners adopt AI responsibly. We offer strategic advisory, training, and tools to help organisations make better decisions about AI.
            </p>
            <div className="mt-4 p-6 bg-surface-container-low rounded-xl border border-outline-variant/10">
              <p className="font-bold mb-1">ALC Limited</p>
              <p className="text-on-surface-variant">26 Station Road, Barnet, EN5 1QW, United Kingdom</p>
              <p className="text-primary font-medium mt-2">Email: info@ajyle.ai</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4">2. What Information We Collect</h2>
            <p className="text-on-surface-variant mb-4">
              We never sell your data. We only collect what we need to provide the service you've asked for.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">a. Information you provide directly:</h3>
                <p className="text-on-surface-variant">Your name, email address, business name, role, and preferences when you book a call, download a resource, or purchase a product. Any messages or questions you send us.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">b. Data collected automatically:</h3>
                <p className="text-on-surface-variant">IP address, browser type, device information, and activity on our website (page views, time on site). We use Google Analytics, Meta Pixel, and similar tools to understand how our site is used and to run remarketing.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">c. Third-party integrations:</h3>
                <p className="text-on-surface-variant">If you sign up via tools like Mailchimp, Calendly, or Stripe, those platforms may share relevant data with us to fulfil your request.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4">3. How We Use Your Data</h2>
            <p className="text-on-surface-variant mb-4">We use your data to:</p>
            <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
              <li>Provide our services and respond to enquiries</li>
              <li>Improve site performance and user experience</li>
              <li>Send updates about courses, events, and tools (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-4 font-medium text-primary">We do not use AI to profile or make automated decisions about you.</p>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4">4. Lawful Basis for Processing</h2>
            <p className="text-on-surface-variant mb-4">Under UK GDPR, we process your data on one of the following grounds:</p>
            <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
              <li><strong>Consent</strong> — e.g. subscribing to our mailing list</li>
              <li><strong>Contractual obligation</strong> — e.g. purchasing a product or service</li>
              <li><strong>Legitimate interest</strong> — e.g. improving our services or preventing fraud</li>
              <li><strong>Legal compliance</strong> — e.g. accounting or audit requirements</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4">5. Your Rights</h2>
            <p className="text-on-surface-variant mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
              <li>Access a copy of your personal data</li>
              <li>Correct inaccuracies</li>
              <li>Request deletion ("right to be forgotten")</li>
              <li>Restrict or object to processing</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with the ICO (Information Commissioner's Office)</li>
            </ul>
            <p className="mt-4 text-on-surface-variant">To exercise any of these rights, contact: <span className="text-primary font-medium">privacy@ajyle.ai</span></p>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4">6. Data Retention</h2>
            <p className="text-on-surface-variant">
              We only keep your data for as long as it's needed — to fulfil the purpose it was collected for, or to meet legal, accounting, or reporting obligations. If you unsubscribe or ask us to delete your data, we act promptly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4">7. How We Protect Your Data</h2>
            <p className="text-on-surface-variant mb-4">We protect your data using:</p>
            <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
              <li>SSL encryption</li>
              <li>Secure password management</li>
              <li>Two-factor authentication on critical systems</li>
              <li>Regular access audits and role-based controls</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4">8. Third-Party Services & International Transfers</h2>
            <p className="text-on-surface-variant mb-4">
              We use tools including Stripe, Mailchimp, Google Analytics, and Calendly. Each has its own privacy policy and maintains GDPR compliance.
            </p>
            <p className="text-on-surface-variant">
              Some data may be processed outside the UK or EEA, but only where adequate protection is in place or where appropriate safeguards (such as Standard Contractual Clauses) apply.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4">9. Cookies</h2>
            <p className="text-on-surface-variant">
              We use cookies to analyse traffic, improve usability, and tailor content. You can manage cookie preferences through your browser settings. For full details, see our Cookie Policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4">10. Policy Updates</h2>
            <p className="text-on-surface-variant">
              We may update this policy from time to time. If we do, we'll let you know by email or via a notice on our site.
            </p>
            <p className="mt-4 font-bold">Last reviewed: 3 May 2025</p>
          </section>

          <section className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10">
            <h2 className="font-headline text-2xl font-bold mb-4">Questions?</h2>
            <p className="text-on-surface-variant mb-4">
              Email <a href="mailto:privacy@ajyle.ai" className="text-primary font-bold hover:underline">privacy@ajyle.ai</a>. We take data protection seriously and will respond promptly.
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
