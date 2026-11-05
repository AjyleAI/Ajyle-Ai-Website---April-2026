import { useEffect, useRef, useState } from "react";
import { BookButton, Eyebrow, H2, Lead, Stars, TextLink, Tick, TRUSTPILOT_URL, WORKSHOP_PRICE, section, wrap } from "./ui";

/* ---------- PACE ring (echoes the logo's arcs) ---------- */
const NAMES = ["Prepare", "Act", "Check", "Embed"];
const LETTERS = ["P", "A", "C", "E"];

export function PaceRing({ lit, label }: { lit: number; label: string }) {
  const c = 200, r = 150, gap = 9;
  const rad = (d: number) => (d * Math.PI) / 180;
  return (
    <svg viewBox="-40 -40 480 480" className="h-full w-full overflow-visible" role="img" aria-label={label}>
      <defs>
        <linearGradient id="paceGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00A6FB" />
          <stop offset="1" stopColor="#00C853" />
        </linearGradient>
      </defs>
      {NAMES.map((name, i) => {
        const a0 = rad(-90 + i * 90 + gap), a1 = rad(-90 + (i + 1) * 90 - gap), am = rad(-90 + i * 90 + 45);
        const d = `M${c + r * Math.cos(a0)} ${c + r * Math.sin(a0)} A${r} ${r} 0 0 1 ${c + r * Math.cos(a1)} ${c + r * Math.sin(a1)}`;
        const ag = rad(-90 + (i + 1) * 90);
        return (
          <g key={name}>
            <path d={d} fill="none" strokeWidth={14} strokeLinecap="round" stroke={i < lit ? "url(#paceGrad)" : "#DDE4EF"} style={{ transition: "stroke .5s" }} />
            <text x={c + (r + 46) * Math.cos(am)} y={c + (r + 46) * Math.sin(am)} textAnchor="middle" dominantBaseline="middle" className="fill-navy font-display text-[15px] font-semibold">
              {name}
            </text>
            <text x={c + (r - 44) * Math.cos(am)} y={c + (r - 44) * Math.sin(am)} textAnchor="middle" dominantBaseline="central" className="fill-navy font-display text-[30px] font-semibold">
              {LETTERS[i]}
            </text>
            {i < 3 && <circle cx={c + r * Math.cos(ag)} cy={c + r * Math.sin(ag)} r={9} fill="#fff" stroke="#1C2D5C" strokeWidth={2.5} />}
          </g>
        );
      })}
      <text x={c} y={c - 10} textAnchor="middle" className="fill-slate font-display text-[15px] font-semibold">ONE</text>
      <text x={c} y={c + 18} textAnchor="middle" className="fill-navy font-display text-[22px] font-semibold">process</text>
    </svg>
  );
}

export function HeroRing() {
  const [lit, setLit] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setLit(4);
    const timers = [0, 1, 2, 3].map((i) => window.setTimeout(() => setLit(i + 1), 600 + i * 450));
    return () => timers.forEach(clearTimeout);
  }, []);
  return (
    <div className="aspect-square w-full max-w-[320px] justify-self-start lg:max-w-[460px] lg:justify-self-end">
      <PaceRing lit={lit} label="PACE: Prepare, Act, Check, Embed, with a review point between each stage" />
    </div>
  );
}

/* ---------- Home: who it's for ---------- */
const situations = [
  ["Your team may already be saving time with AI tools.", "You'd like to know which ones, and what customer information has gone into them."],
  ["AI could help with decisions about people.", "Applicants, clients, staff. Before it touches those decisions, you want to be sure it's fair."],
  ["Someone may ask how a decision was made.", "A client or a regulator, one day. You want the answer written down already."],
];

export function WhoFor() {
  return (
    <section className={`bg-cloud ${section}`} aria-labelledby="who-h">
      <div className={wrap}>
        <Eyebrow>Who it's for</Eyebrow>
        <H2 id="who-h">You want the time back. You can't afford to get it wrong.</H2>
        <Lead>That's the bind when your work involves customer data or decisions about people.</Lead>
        <div className="mt-10 border-t border-line-strong">
          {situations.map(([h, p], i) => (
            <div key={h} className="grid gap-2 border-b border-line-strong py-[22px] md:grid-cols-[80px_5fr_6fr] md:items-baseline md:gap-8">
              <span className="font-display text-sm font-semibold text-slate">0{i + 1}</span>
              <h3 className="font-display text-[22px] font-semibold leading-[1.3] tracking-[-0.01em]">{h}</h3>
              <p className="text-slate">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PACE scroll story ---------- */
const stages = [
  { name: "Prepare", text: "Turn “we want AI” into one process. Measure what it costs you today, name an owner and agree the guardrails.", rp: "Guardrails agreed before anything is built." },
  { name: "Act", text: "Try the change on real work, with your people, in small steps. Nothing reaches a customer until it's earned it.", rp: "Every go or no-go decision is written down." },
  { name: "Check", text: "Compare the results with the numbers from the start. Then decide on the evidence: roll it out, adjust, or stop.", rp: "The decision is made against the numbers, so nobody has to make it personal." },
  { name: "Embed", text: "Roll it out team by team until it's how the work gets done. Then your team can run the next one without us.", rp: "" },
];

export function PaceStory() {
  const [cur, setCur] = useState(0);
  const ringRef = useRef<HTMLDivElement>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const wide = window.innerWidth >= 1024;
      const rr = ringRef.current?.getBoundingClientRect();
      const target = wide && rr ? rr.top + rr.height / 2 : window.innerHeight / 2;
      let best = 0, bd = Infinity;
      stageRefs.current.forEach((s, i) => {
        if (!s) return;
        const b = s.getBoundingClientRect();
        const d = Math.abs(b.top + b.height / 2 - target);
        if (d < bd) { bd = d; best = i; }
      });
      setCur(best);
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", update); };
  }, []);

  return (
    <section className={section} id="pace" aria-labelledby="pace-h">
      <div className={wrap}>
        <div className="max-w-[760px]">
          <Eyebrow>How it works</Eyebrow>
          <H2 id="pace-h">PACE. One process at a time, done properly.</H2>
          <Lead>Four stages, each with its own checks. A person reviews every output, whether AI produced it or not.</Lead>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:flex lg:h-[calc(100vh-120px)] lg:max-h-[560px] lg:flex-col lg:justify-center lg:self-start">
            <div ref={ringRef} className="hidden aspect-square w-full max-w-[420px] lg:block">
              <PaceRing lit={cur + 1} label={`PACE progress: stage ${cur + 1} of 4, ${NAMES[cur]}`} />
            </div>
            <p className="flex items-center gap-2.5 text-[15px] text-slate lg:mt-6">
              <span aria-hidden="true" className="inline-block h-[18px] w-[18px] rounded-full border-[2.5px] border-navy" />
              Review point. Nothing moves on until it's set up properly.
            </p>
          </div>
          <div>
            {stages.map((s, i) => (
              <div
                key={s.name}
                ref={(el) => { stageRefs.current[i] = el; }}
                className={`flex flex-col justify-center border-t border-line py-7 transition-opacity duration-400 lg:min-h-[min(46vh,420px)] ${
                  i === cur ? "lg:opacity-100" : "lg:opacity-40"
                }`}
              >
                <span className="font-display text-sm font-semibold text-slate">Stage {i + 1}</span>
                <h3 className="mt-2 mb-3.5 font-display text-[clamp(36px,4.6vw,60px)] font-semibold leading-none tracking-[-0.035em]">{s.name}</h3>
                <p className="max-w-[32ch] text-xl leading-[1.55]">{s.text}</p>
                {s.rp && (
                  <p className="mt-5 flex items-center gap-3 text-[15px] text-slate">
                    <Tick />
                    <span><b className="font-semibold text-navy">Review point.</b> {s.rp}</span>
                  </p>
                )}
              </div>
            ))}
            <TextLink to="/pace">See how each stage works</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Principles ---------- */
const rules = [
  ["Guardrails before anything is built.", "What's allowed, who owns it and who decides. Agreed first."],
  ["Start small enough to be wrong.", "If it's wrong, the cost is small and contained."],
  ["The numbers decide.", "We agree up front what good looks like. Then the numbers do the talking."],
  ["People before tools, sceptics included.", "The people who doubt it get a say too, so the evidence means something."],
  ["You keep the capability, or it didn't work.", "Your team learns to run the next one themselves."],
];

export function Principles() {
  return (
    <section className={`border-t border-line ${section}`} aria-labelledby="rules-h">
      <div className={`${wrap} grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16`}>
        <div>
          <Eyebrow>How we work</Eyebrow>
          <H2 id="rules-h">Five rules we don't bend.</H2>
          <p className="mt-7 max-w-[24ch] font-display text-2xl font-medium leading-[1.45] tracking-[-0.01em]">
            We bring the experience. You know your business. We work it out together, inside your constraints.
          </p>
        </div>
        <ol className="list-none">
          {rules.map(([b, s], i) => (
            <li key={b} className="grid grid-cols-[56px_1fr] gap-2 border-t border-line py-4 last:border-b">
              <span className="pt-0.5 font-display text-sm font-semibold text-slate">0{i + 1}</span>
              <div>
                <b className="block font-display text-lg font-semibold">{b}</b>
                <span className="text-[15px] text-slate">{s}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Not yet ---------- */
export function NotYet() {
  return (
    <section className={`relative bg-navy text-white ${section}`} aria-labelledby="ny-h">
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-teal to-green" aria-hidden="true" />
      <div className={`${wrap} grid items-center gap-8 lg:grid-cols-2 lg:gap-16`}>
        <p className="font-display text-[clamp(72px,11vw,152px)] font-light leading-[.9] tracking-[-0.05em]" aria-hidden="true">
          Not yet.
        </p>
        <div>
          <h2 id="ny-h" className="font-display text-[clamp(26px,2.6vw,32px)] font-semibold leading-[1.2] tracking-[-0.02em]">
            We'll tell you if it's too soon for AI.
          </h2>
          <p className="mt-4 max-w-[42ch] text-xl leading-[1.55] text-[#DCE3F0]">
            Sometimes the basics need sorting first, like clean data or a clear owner. If so, we'll say so before you spend money on AI, and show you what to fix.
          </p>
          <p className="mt-3 max-w-[42ch] text-xl leading-[1.55] text-[#DCE3F0]">
            And if a process can be fixed without AI at all, we'll tell you that too.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reviews (editorial pull quotes) ---------- */
// Word for word from Trustpilot (or the previous site's approved testimonials). Never edit a reviewer's words.
export type Review = { text: string; name: string; who?: string };

export const HOME_REVIEWS: Review[] = [
  { text: "Ade provided our team with some solid hands-on AI training. He is a very good teacher and has completely transformed how the team works today. We've booked him twice now, and will do so again. Highly recommend.", name: "Petrus Van Staden", who: "CEO, Biscuit Pet Care" },
  { text: "We had an excellent 4-hr AI Build workshop with Ade to quickly bring us up to speed with using AI to save time on daily tasks. With Ade's prepared prompts and Claude skills, Ade helped us train AI with the business context, connecting to email, crm, trello boards, finance apps and more for brilliant results, in the required tone of voice.", name: "Dilawar", who: "Head of IT" },
  { text: "Our work processes are now completely transformed and Ai enabled thanks to Ade\u2019s coaching and we are ready to level up again thanks to his recent phenomenal workshop. Highly recommend him for both training and consulting services.", name: "Dr. Andrea Taylor-Cummings", who: "CEO & Founder, Performance Coach | TEDx Speaker" },
];

export const ABOUT_REVIEWS: Review[] = [
  { text: "I had the privilege of attending a masterclass led by Ade on AI transformation, and it was nothing short of transformative. I walked away with a deep understanding of its capabilities and, more importantly, how to implement it meaningfully in my business.", name: "Pearl U", who: "Founder" },
  { text: "Ade's training programme was very in depth, but gave time and space for novices to get an understanding of how AI works and the implications of not getting up to speed with this ever changing field. I have learnt so much and been amazed at how much can be done using this technology.", name: "Vi", who: "Start-up Founder, Wellness and Healthcare" },
  { text: "Very informative it has given me a new tool to use which would help with my everyday workload", name: "Pedro Carmichael" },
];

export function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <div className="mt-14 border-t border-line pt-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>What clients say</Eyebrow>
          <h2 className="mt-3 font-display text-[clamp(26px,2.6vw,32px)] font-semibold leading-[1.2] tracking-[-0.02em]">What they said after.</h2>
        </div>
        <a href={TRUSTPILOT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-slate no-underline hover:text-navy">
          <span aria-hidden="true" className="inline-grid h-4 w-4 place-items-center bg-[#00B67A] text-[11px] text-white">{"\u2605"}</span>
          Read every review on Trustpilot
        </a>
      </div>
      <div className="mt-10">
        {reviews.map((r) => (
          <figure key={r.name} className="grid gap-4 border-t border-line py-8 last:border-b md:grid-cols-[260px_1fr] md:gap-16">
            <figcaption>
              <Stars />
              <b className="mt-2 block font-display text-[17px] font-semibold">{r.name}</b>
              {r.who && <span className="mt-0.5 block text-sm text-slate">{r.who}</span>}
            </figcaption>
            <blockquote className="max-w-[48ch] border-l-[3px] border-teal pl-6 font-display text-[clamp(19px,1.8vw,24px)] font-normal italic leading-[1.5] tracking-[-0.01em] md:pl-7">
              {r.text}
            </blockquote>
          </figure>
        ))}
      </div>
    </div>
  );
}

/* ---------- Founder + reviews ---------- */
export function Founder() {
  return (
    <section className={section} id="about" aria-labelledby="f-h">
      <div className={wrap}>
        <div className="grid items-center gap-10 md:grid-cols-[4fr_8fr] md:gap-16">
          <img src="/ade-portrait.jpg" alt="Portrait of Ade Shokoya, founder of Ajyle AI" width={720} height={900} loading="lazy" className="aspect-[4/5] w-full max-w-[300px] rounded object-cover object-[50%_25%] md:max-w-none" />
          <div>
            <Eyebrow>Who leads the work</Eyebrow>
            <H2 id="f-h">Ade Shokoya</H2>
            <p className="mt-4 max-w-[44ch] text-slate">Ade has spent over 20 years helping organisations change how they work. Since 2024, all his work has been on AI.</p>
            <p className="mt-4 max-w-[44ch] text-slate">He works alongside your team, in plain English, on the processes you actually run.</p>
            <TextLink to="/about">More about Ade</TextLink>
          </div>
        </div>
        <Reviews reviews={HOME_REVIEWS} />
      </div>
    </section>
  );
}

/* ---------- How to start ---------- */
export function Start({ workshopLead = "" }: { workshopLead?: string }) {
  return (
    <section className={`bg-cloud ${section}`} id="start" aria-labelledby="s-h">
      <div className={`${wrap} grid items-start gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16`}>
        <div>
          <Eyebrow>How to start</Eyebrow>
          <H2 id="s-h">Start with a conversation.</H2>
          <Lead>Tell us the problem in your own words. We'll be straight about whether PACE fits.</Lead>
          <div className="mt-8">
            <BookButton />
          </div>
        </div>
        <ol className="relative list-none pl-11">
          <span className="absolute top-3.5 bottom-3.5 left-[11px] w-0.5 bg-gradient-to-b from-teal to-green" aria-hidden="true" />
          {[
            { k: "First", h: "A free 30-minute call", p: "Free", t: "We listen, ask a few questions and give you an honest answer on whether we can help." },
            { k: "Then, if it fits", h: "A Discovery Workshop", p: WORKSHOP_PRICE, t: `${workshopLead}Together we pick the first process and agree what good looks like.` },
          ].map((s, i) => (
            <li key={s.h} className={`relative ${i === 0 ? "pb-7" : ""}`}>
              <span className="absolute top-1 -left-11 h-6 w-6 rounded-full border-[2.5px] border-navy bg-white" aria-hidden="true" />
              <span className="font-display text-sm font-semibold text-slate">{s.k}</span>
              <h3 className="mt-1.5 mb-2 flex flex-wrap justify-between gap-4 font-display text-[22px] font-semibold leading-[1.3]">
                {s.h} <span className="text-lg">{s.p}</span>
              </h3>
              <p className="max-w-[46ch] text-slate">{s.t}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Larger organisations band ---------- */
export function FullBand() {
  return (
    <section className="border-b border-line bg-white py-10" aria-label="For larger organisations">
      <div className={`${wrap} flex flex-wrap items-center justify-between gap-6`}>
        <p className="max-w-[70ch]">
          <b className="font-display font-semibold">Larger organisation?</b> PACE Full uses the same stages, run through your existing risk or change committees.
        </p>
        <TextLink to="/pace#full">PACE for larger organisations</TextLink>
      </div>
    </section>
  );
}
