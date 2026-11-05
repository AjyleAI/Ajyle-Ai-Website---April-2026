import { Eyebrow, H2, Page, TextLink, section, wrap } from "./ui";
import { NotYet, Reviews, Start } from "./sections";

const promises = [
  ["You see the reasoning.", "No black-box AI. We'll always explain what a tool does, and why."],
  ["A person stays in charge.", "AI supports judgement. It never replaces it."],
  ["Measures come first.", "We agree what good looks like before anything is built."],
  ["It fits your business.", "There's no one-size-fits-all. What we put in place fits how you actually work."],
  ["You're not tied to us.", "Your team learns to run the next one themselves."],
];

export default function AboutPage() {
  return (
    <Page
      title="About Ajyle AI | Ade Shokoya"
      description="Ajyle AI is led by Ade Shokoya, who has spent over 20 years in change management. Since 2024, all his work has been on AI."
    >
      <section className="py-14 lg:py-[72px]" aria-labelledby="h1">
        <div className={wrap}>
          <div className="animate-rise"><Eyebrow>About</Eyebrow></div>
          <h1 id="h1" className="mt-5 max-w-[16ch] animate-rise font-display text-[clamp(40px,5.6vw,72px)] font-semibold leading-[1.04] tracking-[-0.035em] [animation-delay:.12s]">
            You know your business. We bring what's worked elsewhere.
          </h1>
          <p className="mt-6 max-w-[44ch] animate-rise text-xl leading-[1.55] text-slate [animation-delay:.24s]">
            Ajyle AI helps founder-led businesses get time back from AI, safely, one process at a time.
          </p>
        </div>
      </section>

      <section className={`bg-cloud ${section}`} aria-labelledby="ade-h">
        <div className={`${wrap} grid items-center gap-10 md:grid-cols-[4fr_8fr] md:gap-16`}>
          <img src="/ade-portrait.jpg" alt="Portrait of Ade Shokoya, founder of Ajyle AI" width={720} height={900} className="aspect-[4/5] w-full max-w-[300px] rounded object-cover object-[50%_25%] md:max-w-none" />
          <div>
            <Eyebrow>Who leads the work</Eyebrow>
            <H2 id="ade-h">Ade Shokoya</H2>
            <div className="mt-4 max-w-[46ch] space-y-4 text-slate">
              <p>Ade has spent over 20 years in change management and digital transformation. Since 2024, all his work has been on AI.</p>
              <p>Today he works with founder-led businesses getting ready for AI. He also works inside large transformation programmes, on data ownership and accountability.</p>
              <p>He's seen what makes change stick, and what makes it fade once the project ends. PACE is built on that.</p>
            </div>
            <TextLink to="https://www.linkedin.com/in/ade-shokoya/" external>Connect with Ade on LinkedIn</TextLink>
          </div>
        </div>
      </section>

      <section className={section} aria-labelledby="why-h">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16`}>
          <div>
            <Eyebrow>Why PACE exists</Eyebrow>
            <H2 id="why-h">The mistakes that led to PACE.</H2>
          </div>
          <figure>
            <blockquote className="space-y-4 border-l-2 border-teal pl-6 text-xl leading-[1.55]">
              <p>I've worked with businesses that spent a lot on AI tools, then found they didn't fit the work, or there was no clear use for them. Getting a return was hard. And the risks were easy to miss: data that hadn't been checked for accuracy, no clear owner, no AI policy or guardrails, and no way of seeing what the AI was doing.</p>
              <p>I'd seen the same patterns before, in digital and Agile transformation. PACE is built to help you avoid those mistakes before they cost you.</p>
            </blockquote>
            <figcaption className="mt-4 pl-6 font-display text-[15px] font-semibold">Ade Shokoya</figcaption>
          </figure>
        </div>
      </section>

      <section className={`border-t border-line ${section}`} aria-labelledby="count-h">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16`}>
          <div>
            <Eyebrow>What you can count on</Eyebrow>
            <H2 id="count-h">How we work with you.</H2>
          </div>
          <ul>
            {promises.map(([b, s]) => (
              <li key={b} className="border-t border-line py-4 last:border-b">
                <b className="block font-display text-lg font-semibold">{b}</b>
                <span className="text-[15px] text-slate">{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={wrap}>
          <Reviews />
        </div>
      </section>

      <NotYet />
      <Start />
    </Page>
  );
}
