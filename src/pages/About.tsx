import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Users, 
  UserCheck, 
  Star,
  StarHalf,
  ShieldAlert,
  ArrowRight,
  MessageSquare,
  AlertCircle,
  Zap
} from "lucide-react";

const PORTRAIT_IMAGE = "https://lh3.googleusercontent.com/d/1fws9z-el2YHNk0CdD8opLEfsdrjAzX5F";

import { BOOKING_URL } from "../constants";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="pt-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">FOUNDER & LEAD ADVISOR</span>
            <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight mb-8 text-on-surface leading-tight">
              We help companies adopt AI <span className="text-primary-container">they can trust.</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10">
              Building AI is the easy part. Making sure it's safe, your team knows how to use it, and someone stays accountable. That's where most businesses need support.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg text-sm font-bold">
                <ShieldCheck className="text-primary" size={18} /> Safe Systems
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg text-sm font-bold">
                <Users className="text-primary" size={18} /> Trained Teams
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg text-sm font-bold">
                <UserCheck className="text-primary" size={18} /> Human-in-the-Loop
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img src={PORTRAIT_IMAGE} alt="Ade Shokoya" className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div {...fadeIn} className="max-w-3xl">
            <h2 className="font-headline text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-2xl text-on-surface-variant leading-relaxed italic">
              The future of business isn't automated. It's <span className="text-[#00d166] font-bold">augmented</span>. We make responsible AI practical for founders, leaders, and the teams they rely on, in every sector where getting it wrong has real consequences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Protected Growth */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="font-headline text-4xl font-bold mb-4">Protected Growth</h2>
            <p className="text-on-surface-variant max-w-2xl">
              These are the challenges we hear most from businesses like yours.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeIn} className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
              <AlertCircle className="text-primary mb-6" size={32} />
              <h4 className="font-headline text-2xl font-bold mb-4">AI is already in the business. Nobody owns it yet.</h4>
              <p className="text-on-surface-variant mb-6">Tools in use, no policy, no clear owner. It holds together until it doesn't. We help you put the right structure in place before you're dealing with the fallout.</p>
            </motion.div>

            <motion.div {...fadeIn} className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
              <Users className="text-primary mb-6" size={32} />
              <h4 className="font-headline text-2xl font-bold mb-4">AI adoption is happening. The training hasn't caught up.</h4>
              <p className="text-on-surface-variant">Adoption without preparation is just risk with a new name. We build the capability your people need to use AI responsibly. Not just quickly.</p>
            </motion.div>

            <motion.div {...fadeIn} className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
              <Zap className="text-primary mb-6" size={32} />
              <h4 className="font-headline text-2xl font-bold mb-4">The pace of AI is outrunning your ability to make decisions about it.</h4>
              <p className="text-on-surface-variant">New tools, pressure to keep up, oversight that can't move as fast as the technology. We help you find the right pace. Fast enough to stay competitive, structured enough to stay in control.</p>
            </motion.div>
          </div>
          
          <motion.div {...fadeIn} className="mt-16 bg-on-surface text-white p-12 rounded-2xl relative overflow-hidden">
            <div className="max-w-2xl relative z-10">
              <h3 className="font-headline text-3xl font-bold mb-6">Not Every Project Is the Right Fit</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Some work we choose not to take on. AI should serve people, not replace human judgement where the stakes are serious. Protected Growth means growth you can sustain and stand behind.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10">
              <ShieldCheck size={300} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div {...fadeIn} className="mb-16 flex items-center gap-4">
            <h2 className="font-headline text-3xl font-bold">What Clients Say</h2>
            <div className="flex text-[#058a45]">
              {[...Array(4)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              <StarHalf size={20} fill="currentColor" />
            </div>
            <span className="text-sm font-bold text-on-surface-variant">4.6 | 21 reviews on Trustpilot</span>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                text: "I learned more about AI in four hours than I have over the last four years. The session was excellent.", 
                author: "Carlton Nembhard", 
                role: "Director at CAS Bridging" 
              },
              { 
                text: "Ade is our AI guru. He challenges mindsets, helps us overcome fears of new technology, and shows us step by step how to use it effectively.", 
                author: "Dr. Andrea Taylor-Cummings", 
                role: "Performance Coach | TEDx Speaker" 
              },
              { 
                text: "Ajyle AI makes AI feel accessible and genuinely exciting, breaking down complex ideas into clear, practical steps.", 
                author: "Rachel", 
                role: "Business owner, UK" 
              },
              { 
                text: "The half-day session has given me confidence to begin applying AI tools in our business. I'm genuinely excited to see how we can grow with these learnings.", 
                author: "Lanre G",
                role: "Regenerative Architect & Business Leader" 
              }
            ].map((t) => (
              <motion.div key={t.author} {...fadeIn} className="bg-surface p-8 rounded-xl shadow-sm">
                <p className="text-lg text-on-surface-variant leading-relaxed mb-6 italic">"{t.text}"</p>
                <p className="font-bold text-on-surface">{t.author}</p>
                <p className="text-sm text-on-surface-variant">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <motion.div {...fadeIn}>
            <h2 className="font-headline text-4xl font-bold mb-8">Ready to see what responsible AI looks like for your business?</h2>
            <p className="text-xl text-on-surface-variant mb-12">
              Book a free 30-minute call. No deck, no agenda. A straight conversation about whether we're the right fit.
            </p>
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all"
            >
              Book Free Consultation
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-primary-container text-on-primary-container rounded-full shadow-2xl flex items-center justify-center glass-nav border border-white/20 z-50 hover:scale-110 transition-transform active:scale-95">
        <MessageSquare size={28} />
      </button>
    </main>
  );
}
