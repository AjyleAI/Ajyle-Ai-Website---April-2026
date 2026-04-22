
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
  Award,
  Users
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
              Your team is already using AI. The question is whether it's working for you — or quietly creating risk.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
              We work with SME founders and business leaders who want to move fast on AI without the legal, reputational, or operational exposure that comes with getting it wrong. No tools pushed. No jargon. Just a clear plan and someone to build it with you.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 group hover:shadow-xl hover:shadow-primary/20 transition-all"
              >
                Book a Free 30-Minute Call <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
          </motion.div>
        </div>
      </section>

      {/* Entry Points */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24 pb-12">
        <motion.div {...fadeIn} className="mb-12">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4 text-on-surface">Not sure where to start? Pick the right first step.</h2>
          <p className="text-on-surface-variant">Low-risk, high-impact ways to find out where AI fits in your business.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Mini Sprint */}
          <motion.div {...fadeIn} className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/15 flex flex-col justify-between hover:bg-surface-container transition-colors group">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Bolt size={24} />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-3">Mini Discovery Sprint</h3>
              <p className="text-on-surface-variant mb-6">A focused half-day to map your biggest AI opportunity, cut through the noise, and leave with a clear next step.</p>
            </div>
            <div>
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 group transition-all"
              >
                Book a Free 30-Minute Call <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
              <p className="text-on-surface-variant mb-6">We go deeper into a specific problem, build a realistic roadmap, and scope what implementation looks like.</p>
            </div>
            <div>
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-surface-container text-primary rounded-lg font-bold flex items-center justify-center gap-2 group hover:bg-primary hover:text-white transition-all"
              >
                Book a Free 30-Minute Call <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
              <h3 className="font-headline text-2xl font-bold mb-3">Full-Day Workshop</h3>
              <p className="text-white/80 mb-6">A full working day to map, plan, and begin. You leave with a scoped build and a clear month-one delivery.</p>
            </div>
            <div className="relative z-10">
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-white text-primary rounded-lg font-bold flex items-center justify-center hover:bg-surface-container-lowest transition-all"
              >
                Book a Free 30-Minute Call <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
        
        <p className="text-sm text-on-surface-variant text-center font-medium opacity-70">
          All workshops are pay on satisfaction. If we don't deliver what we agreed, you don't pay.
        </p>
      </section>

      {/* How we help */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">Three problems we solve every week</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Responsible AI adoption built around how your business actually operates.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Problem 1 */}
            <motion.div {...fadeIn} className="bg-surface p-8 rounded-2xl border border-outline-variant/10 flex flex-col">
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6">
                <Settings2 size={24} />
              </div>
              <h3 className="font-headline text-2xl font-extrabold mb-4 leading-tight">Your team is using AI tools nobody approved.</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Staff are using free ChatGPT accounts, personal Copilot access, and browser plugins on client work. You find out when something goes wrong. We help you get ahead of it, with governance that fits how your business actually operates, not a policy document nobody reads.
              </p>
            </motion.div>

            {/* Problem 2 */}
            <motion.div {...fadeIn} className="bg-surface p-8 rounded-2xl border border-outline-variant/10 flex flex-col">
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6">
                <Bolt size={24} />
              </div>
              <h3 className="font-headline text-2xl font-extrabold mb-4 leading-tight">Manual work is eating your capacity and AI feels too risky to touch.</h3>
              <p className="text-on-surface-variant leading-relaxed">
                You know there are processes that could run faster. You're just not sure which ones to automate, what to trust, or how to avoid creating new problems while solving old ones. We scope it, build it, and hand it over working.
              </p>
            </motion.div>

            {/* Problem 3 */}
            <motion.div {...fadeIn} className="bg-surface p-8 rounded-2xl border border-outline-variant/10 flex flex-col">
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6">
                <MonitorCheck size={24} />
              </div>
              <h3 className="font-headline text-2xl font-extrabold mb-4 leading-tight">You want to move quickly on AI but you can't afford to get it wrong.</h3>
              <p className="text-on-surface-variant leading-relaxed">
                The risk isn't using AI. The risk is using it without oversight. We build the responsible adoption layer that lets you move fast without the exposure, so when a client, regulator, or board asks what your AI policy is, you have a real answer.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ongoing AI Delivery & Training */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ongoing AI Delivery */}
            <motion.div {...fadeIn} className="bg-surface-container p-8 md:p-12 rounded-2xl border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-3xl font-extrabold mb-6 text-on-surface">Need someone to build it with you, month on month?</h3>
                <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed mb-8">
                  <p>
                    Some problems need more than a workshop. They need someone embedded, researching, building, testing, and iterating alongside your team. That's what our delivery retainer is for.
                  </p>
                  <p>
                    Every month, something gets built. Not meetings. Not strategy decks. A working output. Could be an automated workflow, a lead qualification system, a custom AI tool for your team, or a phase of something larger. The scope is agreed before we start.
                  </p>
                  <p className="font-bold text-on-surface text-base">
                    We'll talk through the right tier on the call.
                  </p>
                </div>
              </div>
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:shadow-lg transition-all text-center flex items-center justify-center gap-2"
              >
                Book a Free 30-Minute Call <ArrowRight size={20} />
              </a>
            </motion.div>

            {/* Training */}
            <motion.div {...fadeIn} className="bg-surface-container p-8 md:p-12 rounded-2xl border border-outline-variant/10 flex flex-col justify-between relative overflow-hidden">
              <div>
                <h3 className="font-headline text-3xl font-extrabold mb-6 text-on-surface">Training for teams of 10 or more</h3>
                <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed mb-8">
                  <p>
                    If you're running a larger organisation and need your people to use AI confidently and responsibly, we run bespoke training built around your workflows, your risk profile, and your team's actual starting point.
                  </p>
                  <p>
                    Not a generic course. Not a half-day of slides. We get into the actual work your people do.
                  </p>
                  <p className="font-bold text-on-surface text-base">
                    Get in touch and we'll scope what makes sense.
                  </p>
                </div>
              </div>
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all text-center"
              >
                Book a Free 30-Minute Call
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solopreneur / Founder Section */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <motion.div 
            {...fadeIn}
            className="bg-surface p-8 md:p-16 rounded-3xl border border-outline-variant/10 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
              <Users size={320} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Users size={20} />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">For Solopreneurs & Small Teams</span>
              </div>

              <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-8 text-on-surface leading-tight">
                Most founders we speak to tried it alone first.
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                  <p>
                    They picked a tool, ran a few experiments, got mixed results, and got stuck. Not because they weren't capable. Because AI adoption without a clear strategy is genuinely hard to get right on your own.
                  </p>
                  <p>
                    Every engagement starts the same way: a 30-minute call to understand where you're stuck and whether there's a real fit.
                  </p>
                </div>
                <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                  <p>
                    No pitch. Just a straight conversation about the reality of what you're trying to build and how to get there safely.
                  </p>
                  
                  <div className="pt-4">
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg bg-gradient-to-r from-primary to-primary-container hover:shadow-xl hover:shadow-primary/20 transition-all group"
                    >
                      Book a Free 30-Minute Call <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Guarantee Section Moved Higher */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 py-12">
        <motion.div 
          {...fadeIn}
          className="bg-[#057a44] text-white p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl shadow-[#057a44]/20"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="relative z-10">
            <Award className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="font-headline text-4xl font-extrabold mb-6">You only pay if it delivers.</h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto text-white/90">
              Every workshop comes with a simple commitment. If we don't deliver what we agreed, you don't pay. Full stop. We've worked this way since day one because it's the only arrangement that makes sense when you're asking someone to trust you with their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#057a44] px-8 py-4 rounded-lg font-extrabold text-lg shadow-xl hover:bg-surface-container-lowest transition-all active:scale-95"
              >
                Book a Free 30-Minute Call
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
              q: "How long before I see something actually working?",
              a: "It depends on what we're building. A contained automation can be live in three to four weeks. A more complex workflow might phase across two to three months. We're honest about timelines from the start. You'll know what month one delivers before you commit to anything."
            },
            {
              q: "What if my team pushes back on using it?",
              a: "It happens. We build adoption into the process, not as an afterthought. That means involving the right people early, keeping solutions close to existing workflows, and making it easy to use from day one. We don't hand over a tool and disappear."
            },
            {
              q: "How is this different from hiring a freelancer or using an agency?",
              a: "A freelancer builds something and hands it over. You're left owning a system you may not fully understand. An agency charges a project fee and moves on. We stay. Every month we're building, reviewing, and refining alongside you. The knowledge stays in your business, not ours."
            },
            {
              q: "What happens after the Discovery Workshop? Am I committed to anything?",
              a: "No. The workshop is a standalone engagement. At the end, you'll have a clear picture of your AI opportunity and a scoped next step. Whether you work with us after that is entirely your call. Most people do. But there's no contract attached to a workshop."
            },
            {
              q: "Do you work with businesses outside regulated industries?",
              a: "Yes. We work across professional services, finance, recruitment, marketing, and more. The governance challenges we solve exist in most sectors. If your team is using AI on real work, the questions we answer are relevant."
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
