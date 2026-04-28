import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Laptop, 
  ShieldCheck, 
  Target, 
  Users, 
  Zap,
  MessageSquare,
  BarChart3,
  Search,
  Check
} from "lucide-react";
import { BOOKING_URL } from "../constants";

const ADE_IMAGE = "/ade-shokoya.jpg";
const ADE_COCKPIT_IMAGE = "/ade-cockpit.jpg";
const ADE_WORKSHOP_SESSION = "/ade-workshop.jpg"; // Use the user's uploaded image

export default function Training() {
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
    <main className="pt-12 overflow-x-hidden">
      {/* SECTION 1 — HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-[4.5rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              AI Training Workshops
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-8 leading-[1.1]"
            >
              Your team has the tools. But a lot of them are still stuck on <span className="text-primary-container">how to use them well.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-on-surface-variant mb-12 leading-relaxed bg-[#f0f7ff] p-6 rounded-xl border-l-4 border-primary max-w-5xl"
            >
              A half or fullday workshop shaped around your actual tools, workflows, and AI policy can help fix that. Your people leave knowing how to use AI, when to use it, and exactly what data is safe to work with.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 items-center"
            >
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all"
              >
                Book a free discovery call <ArrowRight size={20} />
              </a>
              <a 
                href="#how-it-works"
                className="text-on-surface font-bold flex items-center gap-2 hover:text-primary transition-colors"
              >
                See how it works ↓
              </a>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-sm text-on-surface-variant font-medium"
            >
              The discovery call is free. No obligation. Half-day sessions from £1,400.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative flex flex-col justify-between pt-12 lg:pt-14 pb-4 lg:pb-[3.75rem]"
          >
            {/* Soft Background Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#f9f3f0] rounded-full blur-3xl -z-10"></div>
            
            {/* Structured Card Cluster - No Overlap */}
            <div className="relative w-full flex flex-col gap-6 lg:gap-0 lg:justify-between h-full items-center lg:items-stretch pt-4 pb-0">
              {/* Card 1 */}
              <motion.div 
                initial={{ y: 20, opacity: 0, rotate: -1 }}
                animate={{ y: 0, opacity: 1, rotate: -1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02, rotate: 0 }}
                className="relative w-full lg:w-64 bg-white p-5 rounded-xl shadow-lg shadow-black/5 border border-outline-variant/10 z-20 lg:self-start lg:ml-0"
              >
                <div className="w-6 h-1 bg-[#ef4444] mb-3 rounded-full"></div>
                <h3 className="font-headline font-bold text-on-surface mb-1.5 leading-tight text-base">Lead generation that doesn't drain your team</h3>
                <p className="text-[13px] text-on-surface-variant leading-relaxed">
                  Outreach emails, LinkedIn messages, follow-up sequences. Drafted and personalised in a fraction of the time.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ y: 20, opacity: 0, rotate: 1 }}
                animate={{ y: 0, opacity: 1, rotate: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02, rotate: 0 }}
                className="relative w-full lg:w-64 bg-white p-5 rounded-xl shadow-lg shadow-black/5 border border-outline-variant/10 z-10 lg:self-end lg:mr-4"
              >
                <div className="w-6 h-1 bg-[#1a1a1a] mb-3 rounded-full"></div>
                <h3 className="font-headline font-bold text-on-surface mb-1.5 leading-tight text-base">Client proposals, done faster</h3>
                <p className="text-[13px] text-on-surface-variant leading-relaxed">
                  Brief the AI properly and a first draft is ready before the meeting starts. Your team spends less time formatting.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ y: 20, opacity: 0, rotate: -0.5 }}
                animate={{ y: 0, opacity: 1, rotate: -0.5 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02, rotate: 0 }}
                className="relative w-full lg:w-64 bg-white p-5 rounded-xl shadow-lg shadow-black/5 border border-outline-variant/10 z-30 lg:self-start lg:ml-4"
              >
                <div className="w-6 h-1 bg-[#f59e0b] mb-3 rounded-full"></div>
                <h3 className="font-headline font-bold text-on-surface mb-1.5 leading-tight text-base">Admin off your plate</h3>
                <p className="text-[13px] text-on-surface-variant leading-relaxed">
                  Meeting notes, summaries, internal updates, routine correspondence. Tasks that used to eat afternoons get done faster.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div 
                initial={{ y: 20, opacity: 0, rotate: 0.5 }}
                animate={{ y: 0, opacity: 1, rotate: 0.5 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02, rotate: 0 }}
                className="relative w-full lg:w-64 bg-white p-5 rounded-xl shadow-lg shadow-black/5 border border-outline-variant/10 z-20 lg:self-end lg:mr-0"
              >
                <div className="w-6 h-1 bg-[#3b82f6] mb-3 rounded-full"></div>
                <h3 className="font-headline font-bold text-on-surface mb-1.5 leading-tight text-base">Your numbers, actually making sense</h3>
                <p className="text-[13px] text-on-surface-variant leading-relaxed">
                  Sales figures, spreadsheet data, pipeline reports. Ask the question in plain English. Get a clear read quickly.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — WHO IT'S FOR */}
      <section className="bg-surface-container-low pt-16 md:pt-24 pb-1">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-1">
            <motion.div {...fadeIn}>
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Built for people with real work to do</span>
              <h2 className="font-headline text-4xl md:text-6xl font-extrabold mb-8 leading-[1.1] tracking-tight">
                If you've tried AI and thought "that's not quite right for us", <span className="text-primary-container">this is for you.</span>
              </h2>
              <div className="space-y-6 text-xl text-on-surface-variant">
                <p className="leading-relaxed">
                  A lot of AI training is built for big teams with big budgets and a dedicated tech function. You're running a business. You need something that fits how you actually work, not a course built for someone else.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/10 bg-surface-container-highest">
                <img 
                  src={ADE_WORKSHOP_SESSION} 
                  alt="Professional workshop session with laptops and collaboration" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                    <p className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">Live Interactive Workshop</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="initial"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Your industry. Your tools. Your team's actual experience level. Nothing generic.", icon: <ShieldCheck className="w-8 h-8" /> },
              { title: "Practical from the first hour. Laptops open. Real tasks on real tools. No passive learning.", icon: <Laptop className="w-8 h-8" /> },
              { title: "Responsible by default. Safe use, governance, and oversight built in. Not an optional extra.", icon: <Target className="w-8 h-8" /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeIn}
                className="bg-white p-8 rounded-2xl border border-outline-variant/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="font-bold text-on-surface text-lg leading-relaxed">{item.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — THE PROBLEM */}
      <section className="pt-16 pb-24 max-w-7xl mx-auto px-6 md:px-8">
        <motion.div {...fadeIn} className="mb-16 text-center mx-auto">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Why your team went on a course and came back the same</span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-6 leading-tight">You book it. People feel good. <br/><span className="text-primary-container">Two weeks later, nothing's changed.</span></h2>
          <p className="text-xl text-on-surface-variant leading-relaxed max-w-4xl mx-auto">
            Most training is designed to be easy to deliver, not easy to apply. Generic slides. No context. No follow-up. Your team sits through it, nods along, and goes back to doing what they were doing before.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "No tailoring", body: "The same session goes to a law firm, a manufacturer, and a marketing agency. Generic content produces generic results. Your team spends the day filtering out what doesn't apply to them." },
            { label: "No measurement", body: "Nobody checks whether anything changed. No baseline. No follow-up. No data. The trainer moves on and you're left hoping it worked." },
            { label: "No behaviour change", body: "Confidence goes up in the room. Adoption stays flat back at the office. Training that doesn't change how people work is expensive downtime." }
          ].map((card, idx) => (
            <motion.div 
              key={idx} 
              {...fadeIn} 
              transition={{ delay: idx * 0.1 }}
              className="bg-surface-container-highest p-8 rounded-xl border-t-4 border-primary"
            >
              <h3 className="font-headline font-bold text-xl mb-4">{card.label}</h3>
              <p className="text-on-surface-variant leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — HOW IT WORKS */}
      <section id="how-it-works" className="bg-on-surface text-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div {...fadeIn} className="max-w-3xl mb-20 text-center mx-auto">
            <span className="text-primary-container font-bold tracking-widest uppercase text-xs mb-4 block">How it works</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-6 text-white">Three steps. The first one's free.</h2>
            <p className="text-xl text-white/70 leading-relaxed shadow-white">
              We don't run a session until we know your team. What we learn from you informs every part of the day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-white/10 -z-0"></div>
            {[
              { 
                step: "01",
                heading: "Discovery call", 
                body: "A free 30-minute call to understand your team, your industry, and what you're trying to change. No agenda. No pitch. We listen, ask a few questions, and tell you honestly whether a workshop is the right fit." 
              },
              { 
                step: "02",
                heading: "Your workshop, shaped around you", 
                body: "Before the day, we tell you exactly what your team will be able to do by the end of it. No surprises. On the day, we work through your actual tool stack, workflows, and AI policy. Your team leaves knowing how to use the tools, when to reach for them, and what data they can and can't work with." 
              },
              { 
                step: "03",
                heading: "30 days later, we check in", 
                body: "At the end of the session and again 30 days later, we check in. With attendees and with you. We find out what's sticking, what's shifted, and what's still getting in the way. If something bigger surfaces, we'll tell you. No sales call needed." 
              }
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.2 }}
                className="relative z-10"
              >
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-6 border-4 border-on-surface">
                  {step.step}
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">{step.heading}</h3>
                <p className="text-white/70 leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="mt-20 p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
            <p className="text-lg italic text-white/80">
              For some organisations, the workshop is enough. For others, it opens a bigger conversation. Scroll down to see what that can look like. There's no pressure either way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — SESSION FORMATS */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <motion.div {...fadeIn} className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Session formats</span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Half-day or full-day. <br/><span className="text-primary-container">Here's how to know which one is right for you.</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <motion.div {...fadeIn} className="bg-surface-container-low p-8 md:p-12 rounded-3xl border border-outline-variant/10 flex flex-col h-full">
            <h3 className="font-headline text-3xl font-bold mb-4">Half-day Workshop</h3>
            <p className="text-primary font-bold mb-8 bg-primary/5 p-4 rounded-lg inline-block">
              3 to 4 hours. Right if your team is new to structured AI use or you want a focused starting point.
            </p>
            <ul className="space-y-4 mb-auto">
              {[
                "Your team leaves with agreed AI skills, for example: writing prompts that actually work, reducing hallucinations, knowing when to use AI and when not to",
                "Shaped around your tool stack and AI policy",
                "Laptops required, your team works on real tasks throughout",
                "Covers how to use AI, when to use it, and what data is safe",
                "Responsible use and governance included as standard",
                "Measurement at end of session and 30 days later",
                "In-person"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start text-on-surface-variant">
                  <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div {...fadeIn} className="bg-surface-container p-8 md:p-12 rounded-3xl border-2 border-primary shadow-xl flex flex-col h-full relative">
            <div className="absolute top-0 right-0 bg-primary text-white px-6 py-2 rounded-bl-3xl font-bold text-sm uppercase tracking-widest">Most Popular</div>
            <h3 className="font-headline text-3xl font-bold mb-4">Full-day Workshop</h3>
            <p className="text-primary font-bold mb-8 bg-primary/5 p-4 rounded-lg inline-block">
              6 to 7 hours. Right for mixed-experience teams or you need to cover multiple departments.
            </p>
            <ul className="space-y-4 mb-auto">
              {[
                "Your team leaves with agreed AI skills plus an agreed outcome, for example: an automated workflow, a rebuilt process, or an agentic task your team now owns and runs",
                "Everything in the half-day, plus more time to practise and apply",
                "Right for mixed-experience teams or multiple departments",
                "Deeper coverage of AI policy, data boundaries, and responsible use by role",
                "Breakout exercises across different roles",
                "Measurement at end of session and 30 days later",
                "In-person"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start text-on-surface">
                  <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div {...fadeIn} className="mt-12 text-center text-on-surface-variant font-medium max-w-4xl mx-auto">
          <p>
            Logistics: All sessions are in-person. Attendees need laptops and access to the tools they use for their work. We confirm the session content with you before the day.
          </p>
        </motion.div>
      </section>

      {/* SECTION 6 — PRICING */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center mb-16">
          <motion.div {...fadeIn}>
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Transparent pricing</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-6">Transparent. <span className="text-primary-container">No games.</span></h2>
            <p className="text-xl text-on-surface-variant max-w-4xl mx-auto">
              Every session includes pre-session tailoring, delivery, and follow-up measurement. What you see is what you pay.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Pricing Card 1 */}
          <motion.div {...fadeIn} className="bg-white p-8 rounded-2xl border border-outline-variant/10 shadow-sm flex flex-col">
            <h3 className="font-headline text-2xl font-bold mb-2">Discovery Call</h3>
            <p className="text-4xl font-extrabold text-on-surface mb-6">Free</p>
            <ul className="space-y-4 mb-8 text-on-surface-variant text-left">
              {[
                "We understand your team and your goals",
                "You find out whether a workshop is right for you",
                "No pitch, no pressure"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2 items-center">
                  <Check size={18} className="text-primary" /> {item}
                </li>
              ))}
            </ul>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="mt-auto w-full py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all text-center">
              Book your free call
            </a>
          </motion.div>

          {/* Pricing Card 2 */}
          <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-2xl border border-outline-variant/10 shadow-sm flex flex-col">
            <h3 className="font-headline text-2xl font-bold mb-2">Small Group</h3>
            <p className="text-4xl font-extrabold text-on-surface mb-2">From £1,400</p>
            <p className="font-bold text-primary mb-6">Up to 8 attendees</p>
            <ul className="space-y-4 mb-8 text-on-surface-variant text-left">
              {[
                "You know exactly what your team will be able to do, before the day",
                "Pre-session tailoring to your industry and tool stack",
                "Half-day delivery, in-person",
                "Before and after survey",
                "30-day follow-up with attendees and you"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <Check size={18} className="text-primary shrink-0 mt-1" /> <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="mt-auto w-full py-3 bg-primary text-white font-bold rounded-lg hover:shadow-lg transition-all text-center">
              Enquire about this option
            </a>
          </motion.div>

          {/* Pricing Card 3 */}
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-2xl border border-outline-variant/10 shadow-sm flex flex-col">
            <h3 className="font-headline text-2xl font-bold mb-2">Standard Group</h3>
            <p className="text-4xl font-extrabold text-on-surface mb-2">From £2,000</p>
            <p className="font-bold text-primary mb-6">9 to 15 attendees</p>
            <ul className="space-y-4 mb-8 text-on-surface-variant text-left">
              {[
                "Everything in the small group option",
                "Right for larger or mixed-experience teams"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <Check size={18} className="text-primary shrink-0 mt-1" /> <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="mt-auto w-full py-3 bg-primary text-white font-bold rounded-lg hover:shadow-lg transition-all text-center">
              Enquire about this option
            </a>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-4">
          <p className="font-bold text-on-surface">Full-day upgrade. Extend any session to a full day for more depth and practice time.</p>
          <p className="text-sm text-on-surface-variant">
            All prices exclude VAT. Travel outside London may be additional. Get in touch and we'll give you a straight answer on cost before you commit to anything.
          </p>
        </div>
      </section>

      {/* SECTION 7 — TESTIMONIALS */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <motion.div {...fadeIn} className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">What clients say</span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-6 text-on-surface">What they said after.</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "I had the privilege of attending a masterclass led by Ade on AI transformation, and it was nothing short of transformative. I walked away with a deep understanding of its capabilities and, more importantly, how to implement it meaningfully in my business.",
              attribution: "Pearl U, Founder"
            },
            {
              quote: "Ade's training programme was very in depth, but gave time and space for novices to get an understanding of how AI works and the implications of not getting up to speed with this ever changing field. I have learnt so much and been amazed at how much can be done using this technology.",
              attribution: "Vi, Start-up Founder, Wellness and Healthcare"
            },
            {
              quote: "Our work processes are now completely transformed and AI enabled thanks to Ade’s coaching and we are ready to level up again thanks to his recent phenomenal workshop. Highly recommend him for both training and consulting services.",
              attribution: "Dr. Andrea Taylor-Cummings, CEO & Founder, Performance Coach | TEDx Speaker"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              {...fadeIn} 
              transition={{ delay: idx * 0.1 }}
              className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 flex flex-col"
            >
              <div className="text-primary mb-6 flex gap-1">
                <Zap size={20} className="fill-current" />
                <Zap size={20} className="fill-current" />
                <Zap size={20} className="fill-current" />
              </div>
              <p className="text-lg italic text-on-surface leading-relaxed mb-8 flex-grow">"{item.quote}"</p>
              <div className="pt-6 border-t border-outline-variant/10">
                <p className="font-bold text-on-surface">{item.attribution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 8 — ABOUT ADE */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative group">
                <img src={ADE_COCKPIT_IMAGE} alt="Ade" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-4xl font-headline font-bold mb-2">Ade Shokoya</p>
                  <p className="text-primary-container font-medium uppercase tracking-widest text-sm">AI Strategist & Consultant</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn}>
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Who you're working with</span>
              <h2 className="font-headline text-5xl font-extrabold mb-8">I'm Ade.</h2>
              <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed mb-10">
                <p>
                  I'm an AI strategist and consultant based in the UK. I've spent 20 years working in digital transformation and change management across banking, finance, retail, manufacturing, media, insurance, gaming, government, tech, FMCG, and more. Not as an observer. In the trenches, implementing change with real teams under real pressure.
                </p>
                <p>
                  I've been inside organisations where AI was put in front of people with no governance, no training, and no clear guidance on what they should and shouldn't be doing with it. Staff left to figure it out alone. That's what Ajyle AI exists to fix.
                </p>
                <p>
                  Every workshop I run is shaped around your team specifically. I don't arrive with a deck. I arrive with questions, and we design the session from what I learn.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-6 rounded-2xl border border-outline-variant/10 shadow-sm flex flex-col justify-center">
                  <p className="text-primary font-headline font-bold text-4xl mb-1">20+</p>
                  <p className="text-sm text-on-surface-variant font-medium uppercase tracking-wider">Years in Digital Transformation</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-outline-variant/10 shadow-sm flex flex-col justify-center">
                  <p className="text-primary font-headline font-bold text-4xl mb-1">12+</p>
                  <p className="text-sm text-on-surface-variant font-medium uppercase tracking-wider">Industries & Sectors</p>
                </div>
                <div className="bg-on-surface text-white p-6 rounded-2xl shadow-xl flex flex-col justify-center sm:col-span-2 relative overflow-hidden">
                  <div className="relative z-10">
                    <p className="text-primary-container font-headline font-bold text-4xl mb-1">7,000+</p>
                    <p className="text-sm text-white/70 font-medium uppercase tracking-wider">Professionals Trained in Responsible AI</p>
                  </div>
                  <Zap className="absolute right-0 bottom-0 text-white/5 w-32 h-32 -mr-8 -mb-8" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — THE PATHWAY */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeIn}>
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">For those who want to go further</span>
            <h2 className="font-headline text-4xl font-extrabold mb-6 leading-tight">
              The workshop is the start. Some teams use it to go much deeper into <span className="text-primary-container">how AI fits their business.</span>
            </h2>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Many organisations find that a well-run workshop surfaces questions they didn't know they had. If the 30-day check-in reveals something bigger, we'll tell you. A workflow gap. A governance issue. A question about where AI should and shouldn't be used. There's no obligation and no rush. The data from your session does the talking.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="initial"
            className="space-y-4"
          >
            {[
              { heading: "AI Training Workshop", body: "Where it starts.", icon: <CheckCircle2 /> },
              { heading: "30-Day Check-In", body: "What changed. What stuck. What's still hard.", icon: <Users /> },
              { heading: "Discovery Workshop", body: "A structured diagnostic of where AI fits in your organisation.", icon: <Search /> },
              { heading: "Deeper Support", body: "Retainers, ongoing training, or further development as your needs grow.", icon: <BarChart3 /> }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 flex items-center gap-6 group hover:translate-x-2 transition-transform"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Step {idx + 1}: {step.heading}</h4>
                  <p className="text-sm text-on-surface-variant">{step.body}</p>
                </div>
              </motion.div>
            ))}
            <p className="text-xs text-on-surface-variant mt-6 p-4 bg-surface-container-highest rounded-lg italic">
              Each stage only happens when it makes sense. There's no sales script. If something bigger surfaces in your 30-day data, you'll know about it before we speak.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 10 — FAQ */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Most common questions</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-4 text-on-surface">Answered honestly.</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "What if my team has never used AI before?",
                a: "That's fine. We find out exactly where your team is before we design the session. If experience levels are mixed, some people using AI daily, others not at all, we design the session to work for both. Nobody gets left behind and nobody gets bored."
              },
              {
                q: "How is this different from an off-the-shelf AI course?",
                a: "Most AI courses are built to be delivered to anyone. This isn't. Before your session, we spend time understanding your industry, your tool stack, your AI policy, and the workflows your team actually uses. The session is shaped around that. Your team isn't sitting through content built for someone else."
              },
              {
                q: "What do attendees actually do during the session?",
                a: "They use AI on real tasks, on the tools your team already has. By the end, every attendee knows how to use those tools, when to reach for them, and what data is and isn't safe to work with. That's what they take back on Monday. Not notes. Not good intentions. Actual capability."
              },
              {
                q: "How does the 30-day check-in work?",
                a: "We send a short survey to attendees and to you. We ask what's changed: what tools people are using, what's saving time, what's still not clicking. You get a summary of the results. If the data surfaces something bigger, we'll flag it. No sales call needed."
              },
              {
                q: "Is this right for a small team?",
                a: "Yes. Sessions run for up to 8 people at £1,400, and up to 15 at £2,000. If your team is smaller than 8, that's absolutely fine. The session is still fully tailored and the price stays the same. Some of the most focused sessions we run are with small teams."
              },
              {
                q: "Can we book sessions for different departments separately?",
                a: "Yes. Some organisations run a session for one team first, then bring us back for others. The discovery call is the right place to work out what makes sense for your business."
              },
              {
                q: "How far in advance do I need to book?",
                a: "We typically need two to three weeks to shape your session properly. If you have a date in mind sooner than that, get in touch and we'll tell you what's possible."
              },
              {
                q: "Do you work with businesses outside London?",
                a: "Yes. We travel for in-person sessions across the UK. Travel costs outside London may apply. We'll tell you exactly what that looks like before you commit to anything."
              },
              {
                q: "How do I make the case for this internally?",
                a: "After the session, you'll have before-and-after survey data and a 30-day follow-up summary. That gives you something concrete to take upward. Not just \"we did training\" but \"here's what changed.\" If you want to talk through how to frame it for your MD or leadership team, that's part of the discovery call."
              }
            ].map((faq, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                className="bg-white p-8 rounded-2xl border border-outline-variant/10 shadow-sm"
              >
                <div className="flex gap-4 items-start">
                  <HelpCircle className="text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-headline font-bold text-xl mb-4">{faq.q}</h3>
                    <p className="text-on-surface-variant leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="mt-20 text-center">
            <a 
              href={BOOKING_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-primary text-white px-10 py-5 rounded-xl font-bold text-xl hover:shadow-2xl transition-all"
            >
              Book a free discovery call <ArrowRight size={24} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

