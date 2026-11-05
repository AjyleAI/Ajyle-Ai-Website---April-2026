import { motion } from "motion/react";

export default function PrivacyPolicy() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="bg-white pt-[72px] font-sans-brand text-[17px] leading-[1.7] text-navy antialiased [&_strong]:font-semibold">
      <div className="mx-auto w-full max-w-[1240px] px-4 py-14 sm:px-6 lg:px-12 lg:py-[72px]">
        <motion.div {...fadeIn} className="max-w-[760px]">
          <h1 className="mb-6 font-display text-[clamp(40px,5.6vw,72px)] font-semibold leading-[1.04] tracking-[-0.035em]">Privacy Policy</h1>
          <p className="mb-12 text-xl leading-[1.55] text-slate">
            This policy explains what personal data Ajyle AI collects, how we use it, how long we keep it, and what your rights are. It covers our obligations under UK GDPR and the Data Protection Act 2018.
          </p>

          <section className="border-t border-line pt-8 pb-10">
            <h2 className="mb-4 font-display text-[clamp(26px,2.6vw,32px)] font-semibold leading-[1.2] tracking-[-0.02em]">1. Who We Are</h2>
            <p className="text-slate">
              Ajyle AI is a consultancy that helps small and mid-sized business owners adopt AI responsibly. We offer strategic advisory, training, and tools to help organisations make better decisions about AI.
            </p>
            <div className="mt-6 rounded border border-line-strong bg-cloud p-6">
              <p className="mb-1 font-display font-semibold">ALC Limited</p>
              <p className="text-slate">26 Station Road, Barnet, EN5 1QW, United Kingdom</p>
              <p className="mt-2 font-semibold">Email: info@ajyle.ai</p>
            </div>
          </section>

          <section className="border-t border-line pt-8 pb-10">
            <h2 className="mb-4 font-display text-[clamp(26px,2.6vw,32px)] font-semibold leading-[1.2] tracking-[-0.02em]">2. What Information We Collect</h2>
            <p className="mb-4 text-slate">
              We never sell your data. We only collect what we need to provide the service you've asked for.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="mt-6 mb-2 font-display text-[22px] font-semibold leading-[1.3]">a. Information you provide directly:</h3>
                <p className="text-slate">Your name, email address, business name, role, and preferences when you book a call, download a resource, or purchase a product. Any messages or questions you send us.</p>
              </div>
              <div>
                <h3 className="mt-6 mb-2 font-display text-[22px] font-semibold leading-[1.3]">b. Data collected automatically:</h3>
                <p className="text-slate">IP address, browser type, device information, and activity on our website (page views, time on site). We use Google Analytics, Meta Pixel, and similar tools to understand how our site is used and to run remarketing.</p>
              </div>
              <div>
                <h3 className="mt-6 mb-2 font-display text-[22px] font-semibold leading-[1.3]">c. Third-party integrations:</h3>
                <p className="text-slate">If you sign up via tools like Mailchimp, Calendly, or Stripe, those platforms may share relevant data with us to fulfil your request.</p>
              </div>
            </div>
          </section>

          <section className="border-t border-line pt-8 pb-10">
            <h2 className="mb-4 font-display text-[clamp(26px,2.6vw,32px)] font-semibold leading-[1.2] tracking-[-0.02em]">3. How We Use Your Data</h2>
            <p className="mb-4 text-slate">We use your data to:</p>
            <ul className="list-disc space-y-2 pl-6 text-slate">
              <li>Provide our services and respond to enquiries</li>
              <li>Improve site performance and user experience</li>
              <li>Send updates about courses, events, and tools (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-4 font-semibold">We do not use AI to profile or make automated decisions about you.</p>
          </section>

          <section className="border-t border-line pt-8 pb-10">
            <h2 className="mb-4 font-display text-[clamp(26px,2.6vw,32px)] font-semibold leading-[1.2] tracking-[-0.02em]">4. Lawful Basis for Processing</h2>
            <p className="mb-4 text-slate">Under UK GDPR, we process your data on one of the following grounds:</p>
            <ul className="list-disc space-y-2 pl-6 text-slate">
              <li><strong>Consent</strong>: for example, subscribing to our mailing list</li>
              <li><strong>Contractual obligation</strong>: for example, purchasing a product or service</li>
              <li><strong>Legitimate interest</strong>: for example, improving our services or preventing fraud</li>
              <li><strong>Legal compliance</strong>: for example, accounting or audit requirements</li>
            </ul>
          </section>

          <section className="border-t border-line pt-8 pb-10">
            <h2 className="mb-4 font-display text-[clamp(26px,2.6vw,32px)] font-semibold leading-[1.2] tracking-[-0.02em]">5. Your Rights</h2>
            <p className="mb-4 text-slate">You have the right to:</p>
            <ul className="list-disc space-y-2 pl-6 text-slate">
              <li>Access a copy of your personal data</li>
              <li>Correct inaccuracies</li>
              <li>Request deletion ("right to be forgotten")</li>
              <li>Restrict or object to processing</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with the ICO (Information Commissioner's Office)</li>
            </ul>
            <p className="mt-4 text-slate">To exercise any of these rights, contact: <span className="font-semibold">privacy@ajyle.ai</span></p>
          </section>

          <section className="border-t border-line pt-8 pb-10">
            <h2 className="mb-4 font-display text-[clamp(26px,2.6vw,32px)] font-semibold leading-[1.2] tracking-[-0.02em]">6. Data Retention</h2>
            <p className="text-slate">
              We only keep your data for as long as it's needed: to fulfil the purpose it was collected for, or to meet legal, accounting, or reporting obligations. If you unsubscribe or ask us to delete your data, we act promptly.
            </p>
          </section>

          <section className="border-t border-line pt-8 pb-10">
            <h2 className="mb-4 font-display text-[clamp(26px,2.6vw,32px)] font-semibold leading-[1.2] tracking-[-0.02em]">7. How We Protect Your Data</h2>
            <p className="mb-4 text-slate">We protect your data using:</p>
            <ul className="list-disc space-y-2 pl-6 text-slate">
              <li>SSL encryption</li>
              <li>Secure password management</li>
              <li>Two-factor authentication on critical systems</li>
              <li>Regular access audits and role-based controls</li>
            </ul>
          </section>

          <section className="border-t border-line pt-8 pb-10">
            <h2 className="mb-4 font-display text-[clamp(26px,2.6vw,32px)] font-semibold leading-[1.2] tracking-[-0.02em]">8. Third-Party Services & International Transfers</h2>
            <p className="mb-4 text-slate">
              We use tools including Stripe, Mailchimp, Google Analytics, and Calendly. Each has its own privacy policy and maintains GDPR compliance.
            </p>
            <p className="text-slate">
              Some data may be processed outside the UK or EEA, but only where adequate protection is in place or where appropriate safeguards (such as Standard Contractual Clauses) apply.
            </p>
          </section>

          <section className="border-t border-line pt-8 pb-10">
            <h2 className="mb-4 font-display text-[clamp(26px,2.6vw,32px)] font-semibold leading-[1.2] tracking-[-0.02em]">9. Cookies</h2>
            <p className="text-slate">
              We use cookies to analyse traffic, improve usability, and tailor content. You can manage cookie preferences through your browser settings. For full details, see our Cookie Policy.
            </p>
          </section>

          <section className="border-t border-line pt-8 pb-10">
            <h2 className="mb-4 font-display text-[clamp(26px,2.6vw,32px)] font-semibold leading-[1.2] tracking-[-0.02em]">10. Policy Updates</h2>
            <p className="text-slate">
              We may update this policy from time to time. If we do, we'll let you know by email or via a notice on our site.
            </p>
            <p className="mt-4 font-semibold">Last reviewed: 3 May 2025</p>
          </section>

          <section className="mt-6 rounded border border-line-strong bg-cloud p-6">
            <h2 className="mb-4 font-display text-[clamp(26px,2.6vw,32px)] font-semibold leading-[1.2] tracking-[-0.02em]">Questions?</h2>
            <p className="mb-4 text-slate">
              Email <a href="mailto:privacy@ajyle.ai" className="font-semibold text-navy underline">privacy@ajyle.ai</a>. We take data protection seriously and will respond promptly.
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
