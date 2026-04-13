import { motion } from "motion/react";
import { 
  ArrowRight, 
  Bolt, 
  Clock, 
  Rocket, 
  BarChart3, 
  Settings2, 
  MonitorCheck,
  CheckCircle2,
  BadgeCheck,
  Award
} from "lucide-react";

const HERO_IMAGE = "https://lh3.googleusercontent.com/d/1pUZaPzclA_FOPUx_d0xty-ikWWuz6-Xj";
const DASHBOARD_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCIyHijMxDBpjc4KOUWJT_V8lDM6mthmkghgmmsy4Js6ZhCIMcE4B82FUJ7whuKB-TksiQJdXT75iz5bjfIvWmbOZVMB2TbA5wcKatWp14BU45cXlepyst0ZEuaf6zkDgM1amqMj5W2ztG-LlNC0zDe63lnhen8E7hMsMo43Zq_cVzbQrRYZCSwBLxqvpuvEj1qi-40TDK_SyvKb_6u26QO5-jPA-J_9VHrHxxlSp72_4UcBD6TGYRRU7sn5u0YqJlbI8-e1awl";
const TEAM_IMAGE = "https://lh3.googleusercontent.com/d/15duvFyw7Z7Y9hCJCxQojNzu776E52AfH";

import { BOOKING_URL } from "../constants";

export default function Solutions() {
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="inline-block px-4 py-1.5 rounded-lg bg-[#e2f6ed] text-[#065f46] font-bold text-sm mb-6 tracking-wide">
              FOR SME FOUNDERS & LEADERS
            </span>
            <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface mb-6 leading-tight">
              AI that delivers <span className="text-primary">measurable ROI</span>, not just hype.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
              AI adoption without a clear plan is expensive guesswork. We work with founders and business leaders to deploy AI that fits your workflows, protects your operations, and builds a measurable competitive edge.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 group hover:shadow-xl hover:shadow-primary/20 transition-all"
              >
                Start with a Discovery Sprint <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-3 px-6 py-4 rounded-lg bg-[#e2f6ed] border border-[#065f46]/10">
                <BadgeCheck className="text-[#00d166]" size={20} />
                <span className="text-[#065f46] font-bold text-sm">100% Pay-on-Satisfaction Guarantee</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-surface-container-highest">
              <img 
                src={HERO_IMAGE} 
                alt="Business Leaders" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-highest p-8 rounded-xl shadow-xl max-w-[240px]">
              <p className="font-headline font-bold text-primary text-3xl mb-1">25%</p>
              <p className="text-sm font-medium text-on-surface-variant mb-2">Average efficiency gain for our micro-SME clients in the first 90 days.</p>
              <p className="text-[10px] uppercase tracking-wider text-on-surface-variant/50 font-bold">Based on internal client data, 2024–2025.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Entry Points */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <motion.div {...fadeIn} className="mb-12">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4 text-on-surface">Immediate Entry Points</h2>
          <p className="text-on-surface-variant">Low-risk, high-impact ways to find out where AI fits in your business.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mini Sprint */}
          <motion.div {...fadeIn} className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/15 flex flex-col justify-between hover:bg-surface-container transition-colors group">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Bolt size={24} />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-3">Mini Discovery Sprint</h3>
              <p className="text-on-surface-variant mb-6">Identify your top 3 highest-leverage AI opportunities in a fast-paced, 90-minute strategic session. Stop wondering where to start and get a clear roadmap.</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-on-surface mb-6">£500</p>
              <p className="text-sm text-on-surface-variant mb-4 font-medium">Book a free 15-min intro call. If it's a fit, we lock in your session.</p>
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 group transition-all"
              >
                Claim Your Sprint <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Half Day */}
          <motion.div {...fadeIn} className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/15 flex flex-col justify-between hover:bg-surface-container transition-colors group">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Clock size={24} />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-3">Half-Day Deep Dive</h3>
              <p className="text-on-surface-variant mb-6">We go deep into a specific department’s workflow to build a custom automation roadmap. You leave with a blueprint for immediate implementation.</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-on-surface mb-6">£750</p>
              <p className="text-sm text-on-surface-variant mb-4 font-medium">Quick call first. We scope it together, then confirm your place.</p>
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 font-bold text-primary border-b-2 border-primary/20 hover:border-primary transition-all flex justify-between items-center"
              >
                Book a Free Intro Call <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          {/* Full Day */}
          <motion.div {...fadeIn} className="bg-primary text-white p-8 rounded-xl shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Rocket size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                <Rocket size={24} />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-3">Full-Day Implementation Workshop</h3>
              <p className="text-white/80 mb-6">Zero fluff. We spend a full day with your team to architect a fully-vetted AI implementation plan. We solve the technical hurdles so you can execute with confidence.</p>
            </div>
            <div className="relative z-10">
              <p className="text-3xl font-extrabold mb-6">£1,300 - £1,500</p>
              <p className="text-sm text-white/80 mb-4 font-medium">Let's talk before you commit. 15 minutes to make sure this is the right fit.</p>
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-white text-primary rounded-lg font-bold flex items-center justify-center hover:bg-surface-container-lowest transition-all"
              >
                Book a Free Intro Call <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How we help */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">How we help</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Scalable solutions designed to grow with your business, from initial strategy to custom-built Agentic AI workflows.</p>
          </motion.div>
          
          <div className="space-y-12">
            {/* Phase 01 */}
            <motion.div {...fadeIn} className="bg-surface p-8 md:p-12 rounded-2xl border border-outline-variant/10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4">Phase 01</span>
                <h3 className="font-headline text-3xl font-extrabold mb-6">A Clear, Risk-Free Path to Implementation</h3>
                <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                  Businesses don't stall because of the wrong tools. They stall because there's no clear plan behind the deployment. We change that with our AIM Framework, a structured approach that gives every AI initiative the right guardrails.
                </p>
                <ul className="space-y-4">
                  {[
                    { icon: <BarChart3 size={20} />, title: "Analyse", text: "We audit your current workflows to pinpoint exactly where AI will save time." },
                    { icon: <Settings2 size={20} />, title: "Implement", text: "We deploy high-leverage AI systems designed to drive immediate efficiency." },
                    { icon: <MonitorCheck size={20} />, title: "Monitor", text: "Ongoing oversight to keep your systems secure and performing." }
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <div className="text-primary mt-1">{item.icon}</div>
                      <div><span className="font-bold">{item.title}:</span> {item.text}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden aspect-video shadow-lg">
                <img src={DASHBOARD_IMAGE} alt="Dashboard" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </motion.div>

            {/* Phase 02 */}
            <motion.div {...fadeIn} className="bg-surface p-8 md:p-12 rounded-2xl border border-outline-variant/10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-xl overflow-hidden aspect-video shadow-lg">
                <img src={TEAM_IMAGE} alt="Training" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block px-3 py-1 rounded bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4">Phase 02</span>
                <h3 className="font-headline text-3xl font-extrabold mb-6">Turn Your Team Into AI-Power Users</h3>
                <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                  AI is only an advantage if your people use it effectively. We build the internal capability your team needs to use AI with confidence, without creating business risk.
                </p>
                <div className="bg-surface-container p-6 rounded-lg mb-8 border-l-4 border-primary">
                  <p className="text-sm font-semibold uppercase text-primary tracking-wider mb-2">Standard Day Rate</p>
                  <p className="text-3xl font-extrabold">£1,850</p>
                </div>
                <p className="text-sm text-on-surface-variant italic font-medium">
                  Day rate covers your full team. No per-head pricing. Modules are built around your specific operational needs.
                </p>
              </div>
            </motion.div>

            {/* Phase 03 & 04 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div {...fadeIn} className="bg-surface p-8 md:p-12 rounded-2xl border border-outline-variant/10 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 rounded bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4">Continuous Value</span>
                  <h3 className="font-headline text-3xl font-extrabold mb-6">Continuous AI Oversight & Strategic Direction</h3>
                  <p className="text-on-surface-variant text-lg mb-8">
                    New tools emerge daily. We stay on top of the market so you don’t have to, ensuring your AI strategy remains profitable and secure.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-on-surface-variant">
                      <CheckCircle2 size={16} className="text-tertiary" /> Packages from £625/month
                    </li>
                    <li className="flex items-center gap-2 text-on-surface-variant">
                      <CheckCircle2 size={16} className="text-tertiary" /> <span className="font-bold text-on-surface">25% Hour Rollover</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-on-surface-variant mb-4 font-medium">Let's find the right fit for your team.</p>
                <a 
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all text-center flex items-center justify-center gap-2"
                >
                  Explore Monthly Options <ArrowRight size={20} />
                </a>
              </motion.div>

              <motion.div {...fadeIn} className="bg-surface p-8 md:p-12 rounded-2xl border border-outline-variant/10 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4">BUILT FOR YOUR BUSINESS</span>
                  <h3 className="font-headline text-3xl font-extrabold mb-6">Custom AI Systems Built to Your Exact Workflows</h3>
                  <p className="text-on-surface-variant text-lg mb-8">
                    We build AI systems that automate your team's most repetitive tasks, turning manual bottlenecks into instant output.
                  </p>
                  <p className="text-sm text-on-surface-variant mb-8 font-medium">Priced to your workflow. Every build is scoped before we quote.</p>
                </div>
                <a 
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-on-surface text-white font-bold rounded-lg hover:bg-primary transition-all relative z-10 text-center"
                >
                  Discuss Your Build
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Solopreneur / Founder Section */}
      <section className="py-24" style={{ backgroundColor: "#F4F8FC" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <motion.div {...fadeIn}>
            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-8 text-on-surface">
              Running it yourself? We've worked with founders at every stage.
            </h2>
            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
              <p>
                A lot of the businesses we work with started as one person trying to figure out which AI tools were worth using, and whether they were using them well. No team to delegate to. No budget for a six-month project. Just a founder who needed to move faster without getting it wrong.
              </p>
              <p>
                If that's where you are, we can still help. The work looks different — more focused, built around what you actually need right now — and the investment reflects that.
              </p>
              <p>
                Every engagement starts with a conversation. You tell us what's going on. We tell you what would make the most difference. From there we agree a scope that makes sense for your stage, your time, and your budget.
              </p>
              <p>
                No assumption made about what you can or can't spend. Just an honest conversation about whether it's the right fit.
              </p>
            </div>
            <div className="mt-10">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg hover:brightness-110 transition-all"
                style={{ backgroundColor: "#00A6FB" }}
              >
                Book a free 30-minute call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 py-32">
        <motion.div 
          {...fadeIn}
          className="bg-[#00d166] text-white p-12 rounded-2xl text-center relative overflow-hidden shadow-2xl shadow-[#00d166]/20"
        >
          <div className="relative z-10">
            <Award className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="font-headline text-4xl font-extrabold mb-6">Our "Results-First" Guarantee</h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              For all workshops and advisory sprints, you only pay once you're 100% satisfied with the deliverables. If we don't deliver what we promised, you don't pay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#00d166] px-8 py-4 rounded-lg font-extrabold text-lg shadow-xl hover:bg-surface-container-lowest transition-colors"
              >
                Book Discovery Workshop
              </a>
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Speak to an Advisor
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-24 border-t border-outline-variant/10">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">Questions your AI investment actually answers</h2>
          <p className="text-on-surface-variant text-lg">The things business leaders ask us before they book a call. Answered honestly.</p>
        </motion.div>

        <div className="space-y-8">
          {[
            {
              q: "Do I need a technical team to work with you?",
              a: "No. Most of our clients don't have one. We work directly with founders and their existing teams. You don't need to understand the technology."
            },
            {
              q: "How is the Mini Discovery Sprint different from a full workshop?",
              a: "The Sprint is a focused 90-minute session. You leave with your top AI opportunities identified and a clear starting point. The Full-Day Workshop builds the full implementation plan so your team can move forward with confidence."
            },
            {
              q: "What does \"pay on satisfaction\" actually mean?",
              a: "If you're not satisfied with the deliverables, you don't pay. No small print. We scope every engagement carefully before we start, and we only take on work we know we can deliver."
            },
            {
              q: "How quickly will we see results?",
              a: "Some clients see efficiency gains within the first 30 days. The pace depends on what you're implementing and how ready your team is. The Sprint or Workshop gives you a roadmap with honest timelines built in."
            },
            {
              q: "We're already using AI tools. Can you still help?",
              a: "Yes, and this is usually where the real exposure sits. Tools in use with no governance, no clear ownership, and no oversight are a liability. We help you assess what you have, tighten the controls, and build on it properly."
            },
            {
              q: "Do you work with businesses outside of regulated sectors?",
              a: "Absolutely. Our clients span retail, hospitality, consulting, tech, media, and more. Responsible AI adoption matters in every sector."
            },
            {
              q: "What happens after the workshop?",
              a: "You get a clear implementation roadmap. Some clients move forward independently. Others bring us in for retained advisory or a custom build. There's no pressure to do either."
            },
            {
              q: "Is this just training, or do you actually implement?",
              a: "Both. We offer standalone training, but we also design and build AI systems around your workflows. You can start with a Sprint and scale from there, or come to us with a specific build already in mind."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              {...fadeIn}
              transition={{ delay: idx * 0.05 }}
              className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10"
            >
              <h3 className="font-headline text-xl font-bold mb-4 flex items-start gap-4">
                <span className="text-primary shrink-0">Q:</span>
                {item.q}
              </h3>
              <p className="text-on-surface-variant leading-relaxed flex items-start gap-4">
                <span className="text-tertiary font-bold shrink-0">A:</span>
                {item.a}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
