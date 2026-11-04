import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BookButton, Eyebrow, H2, Lead, Page, TextLink, Tick, section, wrap } from "./ui";
import { HeroRing, NotYet, Principles, Start } from "./sections";

type Stage = { n: number; name: string; intro: string[]; happens: string[]; get: string[]; note?: string; extra?: boolean };

const STAGES: Stage[] = [
  {
    n: 1,
    name: "Prepare",
    intro: ["Turn “we want AI” into one specific process.", "Numbers, a named owner and guardrails are agreed before anything is built."],
    happens: [
      "We start with the problem in your words and find the process it lives in.",
      "We measure how that process runs today, so there's something real to compare against later.",
      "We find out what AI is already in use, including tools nobody signed off.",
      "We agree what's allowed, who owns it and who decides.",
      "We look at the worst case. If this goes wrong, what's the damage, and who would notice?",
      "We plan who'll look after it once it's live, and what that will cost. So you see the full cost before you commit.",
    ],
    get: [
      "A clear problem statement, tied to a named process",
      "Today's numbers for that process: time, cost, errors and rework",
      "A picture of the AI already in use, and a policy for it",
      "A named owner, plus a named owner for the people side",
      "A decision on how to proceed: use a tool you already have, buy one, build one, or fix the process without AI",
    ],
    note: "Fixing it without AI is a real outcome. We'll say so when it's the right one.",
  },
  {
    n: 2,
    name: "Act",
    intro: ["Try the change on real work, with the people who do that work, in small steps.", "Nothing reaches a customer until it has earned it."],
    happens: [
      "The change is set up and tested first, off to one side.",
      "Then it runs alongside the normal work, so its output can be compared with your team's.",
      "Next it goes live, with a person checking each output before it leaves.",
      "At least one person running it didn't volunteer. If it works for them, the evidence means something.",
      "The numbers that decide each step are agreed before the step starts.",
    ],
    get: ["A working change, tested on your real work by your people", "A written record of every go or no-go decision, and the reason for it"],
  },
  {
    n: 3,
    name: "Check",
    intro: [
      "Before anything is rolled out further, it's tested against the outcomes you set at the start.",
      "Has it solved the problem you came in with? Then you decide on the evidence: roll it out, adjust and go again, or stop.",
    ],
    happens: [
      "Results are compared with the numbers agreed before the work began.",
      "We check the change is being used, and that decisions about people are still fair and safe.",
      "Drift (performance slipping over time) and any new risk are reviewed as part of the evidence.",
      "The decision is made openly against the numbers, so nobody has to make it personal.",
    ],
    get: ["An honest answer to “did this do what we wanted?”", "A clear decision, with the evidence behind it"],
  },
  {
    n: 4,
    name: "Embed",
    intro: ["Once it's proven in one place, roll it out carefully to more teams.", "Keep going until it's simply how the work gets done."],
    happens: [
      "The change spreads to more teams in controlled steps, rather than all at once.",
      "Ways of working, roles and training are adjusted so the change holds.",
      "Your team learns to run PACE themselves for the next process.",
      "Ongoing monitoring for drift and new risk is set up, owned by named people in your team.",
    ],
    get: ["The change working across the business, beyond the pilot", "People who are confident using it", "Monitoring of live use that your team owns", "The ability to run the next process yourselves"],
    extra: true,
  },
];

const ROWS: [string, string, string][] = [
  ["Who it's for", "Founder-led businesses", "Larger organisations, 250+ staff"],
  ["Who oversees it", "Your leadership team", "Your existing risk or change committees"],
  ["Scope", "One process at a time", "Several processes running in parallel"],
  ["Governance language", "Plain English", "Linked to recognised AI management standards"],
];

export default function PacePage() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <Page
      title="How PACE works | Ajyle AI"
      description="PACE brings AI into your business one process at a time: Prepare, Act, Check, Embed. Guardrails first, and numbers to show it worked."
    >
      <section className="py-14 lg:py-[72px]" aria-labelledby="h1">
        <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[7fr_5fr] lg:gap-16`}>
          <div>
            <div className="animate-rise"><Eyebrow>How PACE works</Eyebrow></div>
            <h1 id="h1" className="mt-5 mb-6 animate-rise font-display text-[clamp(40px,5.6vw,72px)] font-semibold leading-[1.04] tracking-[-0.035em] [animation-delay:.12s]">
              One process at a time, with the guardrails set first.
            </h1>
            <p className="max-w-[40ch] animate-rise text-xl leading-[1.55] text-slate [animation-delay:.24s]">
              PACE is how founder-led businesses bring AI into their work, one process at a time. The guardrails come first, and the numbers show whether it worked.
            </p>
            <div className="mt-8 animate-rise [animation-delay:.36s]"><BookButton /></div>
          </div>
          <HeroRing />
        </div>
      </section>

      <section className={`bg-cloud ${section}`} aria-labelledby="for-h">
        <div className={`${wrap} grid gap-8 lg:grid-cols-[5fr_7fr] lg:gap-16`}>
          <div>
            <Eyebrow>Who it's for</Eyebrow>
            <H2 id="for-h">For businesses where getting AI wrong has real consequences.</H2>
          </div>
          <div className="self-end text-xl leading-[1.55] text-slate">
            <p>You hold customer records. You make decisions about applicants, clients or staff. And some of your work, a client or regulator might one day ask to see.</p>
            <p className="mt-4 font-semibold text-navy">Your sector matters less than what's at stake.</p>
          </div>
        </div>
      </section>

      <section className={section} aria-labelledby="stages-h">
        <div className={wrap}>
          <div className="max-w-[760px]">
            <Eyebrow>The four stages</Eyebrow>
            <H2 id="stages-h">Prepare. Act. Check. Embed.</H2>
            <Lead>Every stage has its own checks. A person reviews every output, whether AI produced it or not. Nothing moves forward until it's set up properly.</Lead>
          </div>

          {STAGES.map((s) => (
            <article key={s.name} id={s.name.toLowerCase()} className="mt-12 scroll-mt-24 border-t border-line pt-9" aria-labelledby={`st-${s.n}`}>
              <div className="grid gap-8 lg:grid-cols-[5fr_7fr] lg:gap-16">
                <div>
                  <span className="font-display text-sm font-semibold text-slate">Stage {s.n}</span>
                  <h3 id={`st-${s.n}`} className="mt-2 font-display text-[clamp(36px,4.6vw,60px)] font-semibold leading-none tracking-[-0.035em]">{s.name}</h3>
                  <div className="mt-5 max-w-[34ch] space-y-3 text-xl leading-[1.55]">
                    {s.intro.map((p) => <p key={p}>{p}</p>)}
                  </div>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="font-display text-sm font-semibold text-slate">What happens</h4>
                    <ul className="mt-3 space-y-3">
                      {s.happens.map((h) => (
                        <li key={h} className="border-t border-line pt-3 text-[15px] leading-[1.6]">{h}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-slate">What you get</h4>
                    <ul className="mt-3 space-y-3">
                      {s.get.map((g) => (
                        <li key={g} className="flex gap-3 border-t border-line pt-3 text-[15px] leading-[1.6]">
                          <span className="mt-0.5"><Tick size="sm" /></span>
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                    {s.note && <p className="mt-5 border-l-2 border-teal pl-4 text-[15px] font-semibold">{s.note}</p>}
                    {s.extra && (
                      <p className="mt-5 text-[15px] text-slate">
                        Training your team is part of Embed. <TextLink to="/training">How we train teams</TextLink>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Principles />

      <section className={`bg-cloud ${section} scroll-mt-16`} id="full" aria-labelledby="full-h">
        <div className={wrap}>
          <div className="max-w-[760px]">
            <Eyebrow>Two sizes</Eyebrow>
            <H2 id="full-h">One framework, two sizes.</H2>
            <Lead>The stages, principles and checks are the same in both. Only the depth changes.</Lead>
          </div>
          <div className="mt-9 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-navy font-display">
                  <th scope="col" className="w-[24%] py-3 pr-6 text-sm font-semibold text-slate"><span className="sr-only">Feature</span></th>
                  <th scope="col" className="py-3 pr-6 text-lg font-semibold">PACE Core</th>
                  <th scope="col" className="py-3 text-lg font-semibold">PACE Full <span className="text-sm font-medium text-slate">(working name)</span></th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map(([k, a, b]) => (
                  <tr key={k} className="border-b border-line-strong">
                    <th scope="row" className="py-4 pr-6 font-display text-sm font-semibold text-slate">{k}</th>
                    <td className="py-4 pr-6 text-[15px]">{a}</td>
                    <td className="py-4 text-[15px]">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[15px]">
            <b className="font-display font-semibold">Leading a larger organisation?</b>{" "}
            <TextLink to="/lets-talk">Talk to us about PACE Full</TextLink>
          </p>
        </div>
      </section>

      <NotYet />
      <Start />
    </Page>
  );
}
