import { BookButton, Eyebrow, Page, wrap } from "./ui";
import { FullBand, Founder, HeroRing, NotYet, PaceStory, Principles, Start, WhoFor } from "./sections";

export default function HomePage() {
  return (
    <Page
      title="AI you can stand behind | Ajyle AI"
      description="Bring AI into your business one process at a time, with guardrails set first and numbers that show whether it worked."
    >
      <section className="py-14 lg:py-[72px]" aria-labelledby="h1">
        <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[7fr_5fr] lg:gap-16`}>
          <div>
            <div className="animate-rise"><Eyebrow>For founder-led businesses</Eyebrow></div>
            <h1 id="h1" className="mt-5 mb-6 animate-rise font-display text-[clamp(44px,6.6vw,88px)] font-semibold leading-[1.02] tracking-[-0.04em] [animation-delay:.12s]">
              AI you can stand behind.
            </h1>
            <p className="max-w-[38ch] animate-rise text-xl leading-[1.55] text-slate [animation-delay:.24s]">
              Pick one process that's eating your team's time. Bring AI into it safely, with guardrails set first and numbers that show whether it worked.
            </p>
            <div className="mt-8 flex animate-rise flex-wrap items-center gap-6 [animation-delay:.36s]">
              <BookButton />
              <p className="max-w-[26ch] text-[15px] text-slate">A free 30-minute call. You'll get an honest view on whether we can help.</p>
            </div>
          </div>
          <HeroRing />
        </div>
      </section>
      <WhoFor />
      <PaceStory />
      <Principles />
      <NotYet />
      <Founder />
      <Start />
      <FullBand />
    </Page>
  );
}
