import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Gavel, 
  GraduationCap, 
  BrainCircuit, 
  Hammer, 
  BadgeCheck, 
  CheckCircle2
} from "lucide-react";

const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCwn0V3ip-mKLyqCDUE4mxwAVxcqNEVykw2yKO0nW04fZYEWYwApntZ0N7AHc-T5bVnClaH01sWS4B5LSB4b-W5UkY8tAJDCmBLuSW0dBDuSUc-F1EtQntnJYQsH2M0nNOwQ3ul9z3rTDwdbS_1d16W_o_LaaVCsffZD5CXB4ShMXV48Bva-71HazUZsxmahscjilWx5BDzu0aQ8x84aGmp9Dfla9vnNjX8qjKi5q4OlbOee6adjChqle0tOjLcJ2avyT5djfTz";
const SOLUTION_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuA992aFR_1E9uGm-e7S-bWi05QNRkNnTUaJwNfYuYH1IfK9Zr3Us89Cdg-rbu4cd57AYyFg5SDVZVDbJq4QbTauVW8zIazLkt7Aoj0OklbCHgEWOJtMvJf7YVijgEEpYpgt0Axn-BgfHU82KwcW1WizKc2DfzvqcTkiBAR1zKwBp3KXCurw4W07FwEuM3iy9ue78AxIPf-Q4XH3JOzmBPslSGRoIhxPgNAmKFPBCfB3ocisT0wvy4BNGmGhAdJURWk7NDK6M9z5";
const FOUNDER_IMAGE = "/ade-shokoya.jpg";

import { BOOKING_URL } from "../constants";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-gradient relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid md:grid-cols-2 gap-12 items-center py-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/20 text-primary-container font-semibold text-sm mb-6 tracking-wider uppercase">
              SAFE AI. REAL GROWTH.
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tighter mb-8">
              Protected Growth through <span className="text-primary-container">Responsible AI.</span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mb-10 leading-relaxed">
              For founders and business leaders who want the growth AI promises, without the risks that come with it. Book a free 30-minute call to talk through your next move. No deck. No agenda. Just a straight conversation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-primary/20"
              >
                Book Free Consultation
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden md:block"
          >
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl"></div>
            <img 
              src={HERO_IMAGE} 
              alt="Corporate Office" 
              className="rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 object-cover aspect-[4/5] border border-white/10"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeIn}>
              <h2 className="font-headline text-4xl font-bold text-on-surface mb-8 tracking-tight">
                AI without oversight is a liability.
              </h2>
              <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                <p>
                  The rush to deploy AI has created a new kind of exposure. The real risk isn't falling behind, it's the reputational and legal fallout of systems no one is governing.
                </p>
                <p className="font-semibold text-on-surface">
                  We turn that exposure into a competitive edge.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6"
            >
              <motion.div variants={fadeIn} className="p-8 bg-surface-container-low rounded-xl border-l-4 border-error">
                <h3 className="font-bold text-xl mb-2 text-on-surface">Reputational Risk</h3>
                <p className="text-on-surface-variant">One hallucination or data breach can destroy decades of earned trust in minutes.</p>
              </motion.div>
              <motion.div variants={fadeIn} className="p-8 bg-surface-container-low rounded-xl border-l-4 border-primary">
                <h3 className="font-bold text-xl mb-2 text-on-surface">Legal Compliance</h3>
                <p className="text-on-surface-variant">Navigate evolving AI regulations before they become expensive obstacles for your operations.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Services Snapshot</h2>
            <div className="h-1 w-20 bg-primary-container"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              {...fadeIn}
              className="md:col-span-2 p-10 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <Gavel className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-headline text-2xl font-bold mb-4">AI Strategy & Governance</h3>
              <p className="text-on-surface-variant text-lg mb-6">
                A tailored roadmap that aligns AI adoption with your values, your obligations, and the way your business actually operates. We put the structure in place so you can move with confidence.
              </p>
              <a href="#" className="font-bold text-primary flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn more <ArrowRight size={20} />
              </a>
            </motion.div>

            <motion.div 
              {...fadeIn}
              className="p-10 bg-primary text-white rounded-xl shadow-lg flex flex-col"
            >
              <GraduationCap className="w-10 h-10 mb-6" />
              <h3 className="font-headline text-2xl font-bold mb-4">Training</h3>
              <p className="text-white/80 text-lg">
                Giving your team the literacy and practical skills to use AI responsibly and effectively.
              </p>
            </motion.div>

            <motion.div 
              {...fadeIn}
              className="p-10 bg-surface-container-lowest rounded-xl shadow-sm group"
            >
              <BrainCircuit className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-headline text-xl font-bold mb-4">Retained Advisory</h3>
              <p className="text-on-surface-variant">
                On-demand AI leadership for boards and senior teams that need strategic oversight without a full-time hire.
              </p>
            </motion.div>

            <motion.div 
              {...fadeIn}
              className="md:col-span-2 p-10 bg-surface-container-highest rounded-xl shadow-sm flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="flex-1">
                <Hammer className="w-10 h-10 text-primary mb-6" />
                <h3 className="font-headline text-2xl font-bold mb-4">Solution Builds</h3>
                <p className="text-on-surface-variant text-lg">
                  Custom AI systems built around your workflows, designed to be secure, reliable, and useful to your team from day one.
                </p>
              </div>
              <div className="w-full md:w-64 h-48 rounded-lg overflow-hidden shrink-0">
                <img 
                  src={SOLUTION_IMAGE} 
                  alt="Technology" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 bg-surface border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <motion.div {...fadeIn} className="text-center md:text-left">
              <div className="flex items-center gap-2 text-[#22c55e] mb-2 font-bold justify-center md:justify-start">
                <BadgeCheck size={20} className="fill-[#22c55e] text-white" />
                <span>The Ajyle Guarantee</span>
              </div>
              <h2 className="font-headline text-3xl font-bold">Risk-Free Collaboration</h2>
              <p className="text-on-surface-variant mt-2 max-w-3xl">
                Every engagement starts with a free consultation. No sales pressure. No commitment. Just a straight conversation to see if what we do matches what you need.
              </p>
            </motion.div>
            
            <motion.div 
              {...fadeIn}
              className="flex-1 max-w-xl"
            >
              <p className="text-xl font-medium text-on-surface leading-relaxed italic">
                Using AI already, or figuring out where to begin? We work with businesses across banking, retail, insurance, manufacturing, consulting, hospitality, and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Intro */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div 
            {...fadeIn}
            className="bg-surface rounded-2xl p-8 md:p-16 relative shadow-sm border border-outline-variant/5"
          >
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2">
                <img 
                  src={FOUNDER_IMAGE} 
                  alt="Ade Shokoya" 
                  className="rounded-xl object-cover aspect-square md:aspect-[3/4] shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:col-span-3">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Meet the Founder</span>
                <h2 className="font-headline text-4xl font-bold mb-6">Ade Shokoya</h2>
                <blockquote className="text-2xl font-medium text-on-surface leading-relaxed mb-8 italic">
                  "Speed gets the headlines. Trust builds the business."
                </blockquote>
                <p className="text-on-surface-variant text-lg mb-10">
                  Ade Shokoya has spent his career at the intersection of enterprise strategy and emerging technology. He works directly with founders and business leaders to cut through the noise around AI and build systems that are practical, governed, and built to last.
                </p>
                <Link 
                  to="/about" 
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  Our Story
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
