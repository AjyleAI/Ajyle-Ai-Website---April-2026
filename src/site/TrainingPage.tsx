import { Link } from "react-router-dom";
import { BookButton, Eyebrow, H2, Lead, Page, TextLink, Tick, section, wrap } from "./ui";

const wins = [
  ["Lead generation that doesn't drain your team", "Outreach emails, LinkedIn messages and follow-ups, drafted and personalised faster, with your team checking each one before it goes."],
  ["Client proposals, done faster", "Brief the AI properly and a first draft can be ready before the meeting starts."],
  ["Admin off your plate", "Meeting notes, summaries, internal updates and routine emails. Tasks that ate afternoons get done faster."],
  ["Your numbers, making sense", "Sales figures, spreadsheets and pipeline reports. Ask the question in plain English and get a first read you can check."],
];

const gaps = [
  ["No tailoring", "The same session goes to a law firm, a manufacturer and a marketing agency. Your team spends the day filtering out what doesn't apply."],
  ["No measurement", "If nobody measures where people started or follows up afterwards, there's no way to know whether anything changed."],
  ["No change in how people work", "Confidence goes up in the room. Back at the office, people go back to how they worked before."],
];

const steps = [
  ["A free 30-minute call", "We get to know your team, your industry and what you're trying to change. Then we tell you honestly whether a workshop is the right fit."],
  ["A workshop shaped around you", "Before the day, we agree what your team will be able to do by the end. On the day, we work through your own tools, workflows and AI policy."],
  ["A check-in 30 days later", "We check in at the end of the session and again 30 days later, with attendees and with you. You see what's sticking and what's still getting in the way."],
];

// Items line up row by row with the matching line in the other card (null leaves a row empty).
const formats: { name: string; length: string; fit: string; items: (string | null)[] }[] = [
  {
    name: "Half-day workshop",
    length: "3 to 4 hours",
    fit: "Right if your team is new to structured AI use, or you want a focused starting point.",
    items: [
      "Agreed AI skills, for example writing prompts that work, spotting made-up answers, and knowing when not to use AI",
      "Shaped around your tool stack and AI policy",
      "Laptops open, working on real tasks throughout",
      "How to use AI, when to use it, and what data is safe",
      "Responsible use and governance included as standard",
      "Measurement at the end of the session and 30 days later",
    ],
  },
  {
    name: "Full-day workshop",
    length: "6 to 7 hours",
    fit: "Right for mixed-experience teams, or when you need to cover more than one department.",
    items: [
      "Agreed skills plus an agreed outcome to work towards, for example an automated workflow or a rebuilt process",
      "Deeper coverage of AI policy, data boundaries and responsible use by role",
      "Everything in the half-day, with more time to practise and apply",
      "Breakout exercises across different roles",
      "Responsible use and governance included as standard",
      "Measurement at the end of the session and 30 days later",
    ],
  },
];

const prices = [
  { name: "Half day", price: "From £1,200", who: "Up to 10 people, online or in person. About £120 a head for a team of 10.", items: ["Agreed outcomes before the day", "Tailored to your industry and tool stack", "Laptops open, working on real tasks", "Before and after survey", "30-day follow-up with attendees and you"] },
  { name: "Full day", price: "From £2,000", who: "Up to 10 people, online or in person", items: ["Everything in the half day", "More time to practise and apply", "Deeper coverage of AI policy, data boundaries and responsible use by role"] },
  { name: "Bigger teams and fully bespoke", price: "Priced to scope", who: "From 11 people to several hundred", items: ["Hands-on sessions run across several groups", "Information-led briefings and talks for large audiences", "Sessions built around your own use cases, with custom exercises and materials", "Tell us what you need and we'll scope it with you"] },
];

// Existing approved testimonials, kept word for word.
const quotes = [
  { q: "Ade provided our team with some solid hands-on AI training. He is a very good teacher and has completely transformed how the team works today. We've booked him twice now, and will do so again. Highly recommend.", who: "Petrus Van Staden, CEO, Biscuit Pet Care" },
  { q: "We had an excellent 4-hr AI Build workshop with Ade to quickly bring us up to speed with using AI to save time on daily tasks. With Ade's prepared prompts and Claude skills, Ade helped us train AI with the business context, connecting to email, crm, trello boards, finance apps and more for brilliant results, in the required tone of voice.", who: "Dilawar, Head of IT" },
  { q: "Our work processes are now completely transformed and Ai enabled thanks to Ade’s coaching and we are ready to level up again thanks to his recent phenomenal workshop. Highly recommend him for both training and consulting services.", who: "Dr. Andrea Taylor-Cummings, CEO & Founder, Performance Coach | TEDx Speaker" },
];

const faqs = [
  ["What if my team has never used AI before?", "That's fine. We find out where your team is before we design the session. If experience is mixed, we design it to work for both ends. The aim is that newcomers keep up and experienced users still learn something new."],
  ["How is this different from an off-the-shelf AI course?", "An off-the-shelf course is built to be delivered to anyone. Before your session, we learn your industry, your tools, your AI policy and the workflows your team uses. The session is shaped around that."],
  ["What do attendees do during the session?", "They use AI on real tasks, on the tools your team already has. By the end, each person knows how to use those tools, when to reach for them, and what data is safe to work with."],
  ["How does the 30-day check-in work?", "We send a short survey to attendees and to you. We ask what's changed: which tools people use, what's saving time and what still isn't clicking. You get a summary of the results."],
  ["Is this right for a small team?", "Yes. Half-day sessions for up to 10 people start from £1,200 + VAT, online or in person. A team of three gets the same tailoring as a team of ten, at the same price."],
  ["Can you train a much larger group?", "Yes. Some sessions are for several hundred people. Larger groups can have hands-on sessions run across several groups, or an information-led briefing. Get in touch and we'll scope it with you."],
  ["Can we book sessions for different departments?", "Yes. Some organisations run a session for one team first, then bring us back for others. The free call is the place to work out what makes sense."],
  ["How far ahead do I need to book?", "We usually need two to three weeks to shape your session properly. If you have a sooner date in mind, get in touch and we'll tell you what's possible."],
  ["Do you work with businesses outside London?", "Yes. We run sessions online wherever you are, and in person across the UK. For in-person sessions outside London, travel is billed at cost, and we'll tell you exactly what before you commit."],
  ["How do I make the case for this internally?", "After the session you'll have before and after survey data, plus the 30-day summary. That gives you something concrete to take to your leadership team. We can talk through how to frame it on the free call."],
];

export default function TrainingPage() {
  return (
    <Page
      title="AI training for teams | Ajyle AI"
      description="Half-day or full-day AI workshops shaped around your team's tools, workflows and AI policy, with a check-in 30 days later. From £1,200 + VAT, online or in person."
    >
      {/* Hero */}
      <section className="py-14 lg:py-[72px]" aria-labelledby="h1">
        <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[7fr_5fr] lg:gap-16`}>
          <div>
            <div className="animate-rise"><Eyebrow>AI training for teams</Eyebrow></div>
            <h1 id="h1" className="mt-5 mb-6 animate-rise font-display text-[clamp(40px,5.6vw,72px)] font-semibold leading-[1.04] tracking-[-0.035em] [animation-delay:.12s]">
              Your team has AI tools. Help them use them well.
            </h1>
            <p className="max-w-[42ch] animate-rise text-xl leading-[1.55] text-slate [animation-delay:.24s]">
              A half-day or full-day workshop shaped around your tools, workflows and AI policy. Your people leave knowing how to use AI, when to use it, and what data is safe.
            </p>
            <div className="mt-8 flex animate-rise flex-wrap items-center gap-6 [animation-delay:.36s]">
              <BookButton>Book a free call</BookButton>
              <p className="max-w-[24ch] text-[15px] text-slate">The call is free. Half-day sessions from £1,200 + VAT, online or in person.</p>
            </div>
          </div>
          <figure className="animate-rise [animation-delay:.3s]">
            <img src="/ade-workshop.jpg" alt="Ade working alongside a group of business owners at their laptops during a workshop" width={958} height={345} className="aspect-[4/3] w-full rounded object-cover object-[60%_50%]" />
            <figcaption className="mt-3 text-sm text-slate">Laptops open, real tasks, from the first hour.</figcaption>
          </figure>
        </div>
      </section>

      {/* What changes */}
      <section className={`bg-cloud ${section}`} aria-labelledby="wins-h">
        <div className={wrap}>
          <Eyebrow>What changes</Eyebrow>
          <H2 id="wins-h">Work your team does every week, done faster.</H2>
          <div className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
            {wins.map(([h, p]) => (
              <div key={h} className="border-t-2 border-navy pt-5">
                <h3 className="font-display text-lg font-semibold leading-[1.35]">{h}</h3>
                <p className="mt-2 text-[15px] text-slate">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why training doesn't stick */}
      <section className={section} aria-labelledby="gap-h">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16`}>
          <div>
            <Eyebrow>Why courses don't stick</Eyebrow>
            <H2 id="gap-h">It felt like a great day. So why has nothing changed?</H2>
            <Lead>When training is generic and nobody follows up, people nod along and go back to how they worked before.</Lead>
          </div>
          <ol className="self-end">
            {gaps.map(([b, s], i) => (
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

      {/* How it works */}
      <section className={`border-t border-line ${section}`} id="how-it-works" aria-labelledby="how-h">
        <div className={wrap}>
          <Eyebrow>How it works</Eyebrow>
          <H2 id="how-h">Three steps. The first one's free.</H2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map(([h, p], i) => (
              <li key={h} className="border-t border-line pt-5">
                <span className="font-display text-sm font-semibold text-slate">0{i + 1}</span>
                <h3 className="mt-1.5 font-display text-[22px] font-semibold leading-[1.3]">{h}</h3>
                <p className="mt-2 text-slate">{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Formats */}
      <section className={`bg-cloud ${section}`} aria-labelledby="fmt-h">
        <div className={wrap}>
          <Eyebrow>Session formats</Eyebrow>
          <H2 id="fmt-h">Half-day or full-day.</H2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-y-0">
            {formats.map((f) => (
              <article key={f.name} className="grid rounded border border-line-strong bg-white px-7 py-4 md:row-span-8 md:grid-rows-subgrid">
                <div className="flex flex-wrap items-baseline justify-between gap-3 pt-3">
                  <h3 className="font-display text-[22px] font-semibold leading-[1.3]">{f.name}</h3>
                  <span className="font-display text-sm font-semibold text-slate">{f.length}</span>
                </div>
                <p className="mt-2 pb-3 text-slate">{f.fit}</p>
                {f.items.map((it, i) =>
                  it ? (
                    <p key={it} className="flex gap-3 border-t border-line py-3 text-[15px] leading-[1.6]">
                      <span className="mt-0.5"><Tick size="sm" /></span>
                      <span>{it}</span>
                    </p>
                  ) : (
                    <span key={`empty-${i}`} aria-hidden="true" className="hidden border-t border-line md:block" />
                  )
                )}
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-[70ch] text-[15px] text-slate">
            Sessions run online or in person, at the same price. Attendees need laptops and access to the tools they use for work. We confirm the content with you before the day.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className={section} aria-labelledby="price-h">
        <div className={wrap}>
          <Eyebrow>Pricing</Eyebrow>
          <H2 id="price-h">What it costs.</H2>
          <Lead>Every hands-on session includes tailoring before the day, delivery, and follow-up measurement.</Lead>
          <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-y-0">
            {prices.map((p) => (
              <article key={p.name} className="flex flex-col border-t-2 border-navy pt-5 md:row-span-5 md:grid md:grid-rows-subgrid md:gap-0">
                <h3 className="font-display text-lg font-semibold leading-[1.35]">{p.name}</h3>
                <p className="mt-1 font-display text-[28px] font-semibold tracking-[-0.02em]">{p.price}{p.price.startsWith("From") && <span className="text-base font-medium text-slate"> + VAT</span>}</p>
                {p.who ? <p className="text-[15px] text-slate">{p.who}</p> : <span aria-hidden="true" />}
                <ul className="mt-4 space-y-2.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-3 text-[15px] leading-[1.6]">
                      <span className="mt-0.5"><Tick size="sm" /></span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                {p.price === "Priced to scope" ? (
                  <div className="mt-3"><TextLink to="/lets-talk">Talk to us about your team</TextLink></div>
                ) : <span aria-hidden="true" />}
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-[70ch] text-[15px] text-slate">
            Online and in person cost the same. For in-person sessions outside London, travel is billed at cost. All prices exclude VAT. Every booking starts with a free call, and you'll get a straight answer on cost before you commit.
          </p>
          <div className="mt-8"><BookButton>Book a free call</BookButton></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`bg-cloud ${section}`} aria-labelledby="q-h">
        <div className={wrap}>
          <Eyebrow>What clients say</Eyebrow>
          <H2 id="q-h">What they said after.</H2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {quotes.map((q) => (
              <figure key={q.who} className="border-t border-line-strong pt-5">
                <blockquote className="font-display text-[17px] font-medium leading-[1.55] text-slate">{q.q}</blockquote>
                <figcaption className="mt-4 font-display text-[15px] font-semibold">{q.who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Ade */}
      <section className={section} aria-labelledby="ade-h">
        <div className={`${wrap} grid items-center gap-10 md:grid-cols-[4fr_8fr] md:gap-16`}>
          <img src="/ade-portrait.jpg" alt="Portrait of Ade Shokoya, founder of Ajyle AI" width={720} height={900} loading="lazy" className="aspect-[4/5] w-full max-w-[300px] rounded object-cover object-[50%_25%] md:max-w-none" />
          <div>
            <Eyebrow>Who runs the workshop</Eyebrow>
            <H2 id="ade-h">Ade Shokoya</H2>
            <div className="mt-4 max-w-[46ch] space-y-4 text-slate">
              <p>Ade has spent over 20 years in digital transformation, change management and Agile. Since 2024, all his work has been on AI.</p>
              <p>He's seen AI put in front of people with no training and no guidance on what they should and shouldn't do with it. These workshops are built to close that gap.</p>
              <p>He arrives with questions rather than a deck, and designs the session from what he learns.</p>
            </div>
            <dl className="mt-8 grid max-w-[520px] grid-cols-2 gap-6 border-t border-line pt-6">
              <div className="flex flex-col">
                <dt className="text-[15px] text-slate">Years in digital transformation, change management and Agile</dt>
                <dd className="order-first font-display text-[clamp(30px,9vw,40px)] font-semibold leading-none tracking-[-0.03em]">20+</dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-[15px] text-slate">People trained in AI</dt>
                <dd className="order-first font-display text-[clamp(30px,9vw,40px)] font-semibold leading-none tracking-[-0.03em]">10,000+</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Shaped around you */}
      <section className={`relative bg-navy text-white ${section}`} aria-labelledby="fit-h">
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-teal to-green" aria-hidden="true" />
        <div className={`${wrap} grid items-end gap-8 lg:grid-cols-2 lg:gap-16`}>
          <div>
            <Eyebrow light>Shaped around you</Eyebrow>
            <h2 id="fit-h" className="mt-3 font-display text-[clamp(30px,3.6vw,46px)] font-semibold leading-[1.12] tracking-[-0.025em]">
              Start with one team. Bring in others when they're ready.
            </h2>
          </div>
          <div>
            <p className="max-w-[44ch] text-xl leading-[1.55] text-[#DCE3F0]">
              Every session stands on its own. We shape each one around your people, your tools and your timing. That could be one team, or a whole organisation.
            </p>
            <Link to="/lets-talk" className="mt-4 inline-block border-b-2 border-teal pt-[13px] pb-1 font-display text-[15px] font-semibold text-white no-underline hover:border-white">
              Talk to us about your team
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={section} aria-labelledby="faq-h">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16`}>
          <div>
            <Eyebrow>Questions</Eyebrow>
            <H2 id="faq-h">Answered honestly.</H2>
            <div className="mt-8"><BookButton>Book a free call</BookButton></div>
          </div>
          <div>
            {faqs.map(([q, a]) => (
              <details key={q} className="group border-t border-line last:border-b">
                <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-6 py-3 font-display text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {q}
                  <span aria-hidden="true" className="text-2xl font-normal text-slate transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="pb-5 text-slate">{a}</p>
              </details>
            ))}
            <p className="mt-6 text-[15px] text-slate">
              Something else? <TextLink to="/lets-talk">Send us a message</TextLink>
            </p>
          </div>
        </div>
      </section>
    </Page>
  );
}
