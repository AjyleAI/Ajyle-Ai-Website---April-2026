import { useState, type FormEvent } from "react";
import { BookButton, Eyebrow, H2, Page, WORKSHOP_PRICE, section, wrap } from "./ui";

const steps = [
  ["We listen first.", "You tell us what's going on, and what you've already tried."],
  ["We ask a few questions.", "About the process, the people involved and what's at stake."],
  ["You get a straight answer.", "Whether PACE fits, and what we'd do first."],
];

const field =
  "mt-2 block w-full rounded border border-line-strong bg-white px-4 py-3 text-base text-navy outline-none transition-colors focus:border-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy";

export default function LetsTalkPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <Page
      title="Let's talk | Ajyle AI"
      description="Book a free 30-minute call, or send a message. Tell us the problem in your own words and get a straight answer on whether we can help."
    >
      <section className="py-14 lg:py-[72px]" aria-labelledby="h1">
        <div className={`${wrap} grid items-end gap-10 lg:grid-cols-[7fr_5fr] lg:gap-16`}>
          <div>
            <div className="animate-rise"><Eyebrow>Let's talk</Eyebrow></div>
            <h1 id="h1" className="mt-5 animate-rise font-display text-[clamp(40px,5.6vw,72px)] font-semibold leading-[1.04] tracking-[-0.035em] [animation-delay:.12s]">
              Tell us what's going on.
            </h1>
            <p className="mt-6 max-w-[42ch] animate-rise text-xl leading-[1.55] text-slate [animation-delay:.24s]">
              Book a free 30-minute call, or send a message. Either way, you'll get a straight answer on whether we can help.
            </p>
          </div>
          <div className="animate-rise [animation-delay:.36s]">
            <BookButton>Book a free call</BookButton>
            <p className="mt-3 text-[15px] text-slate">Prefer to write? Use the form below.</p>
          </div>
        </div>
      </section>

      <section className={`bg-cloud ${section}`} aria-labelledby="call-h">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16`}>
          <div>
            <Eyebrow>The first call</Eyebrow>
            <H2 id="call-h">What happens on the call.</H2>
          </div>
          <div>
            <ol>
              {steps.map(([b, s], i) => (
                <li key={b} className="grid grid-cols-[56px_1fr] gap-2 border-t border-line-strong py-4">
                  <span className="pt-0.5 font-display text-sm font-semibold text-slate">0{i + 1}</span>
                  <div>
                    <b className="block font-display text-lg font-semibold">{b}</b>
                    <span className="text-[15px] text-slate">{s}</span>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6 rounded border border-line-strong bg-white p-6">
              <span className="font-display text-sm font-semibold text-slate">Then, if it fits</span>
              <h3 className="mt-1.5 mb-2 flex flex-wrap justify-between gap-4 font-display text-[22px] font-semibold">
                A Discovery Workshop <span className="text-lg">{WORKSHOP_PRICE}</span>
              </h3>
              <p className="text-slate">Together we pick the first process and agree what good looks like.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={section} aria-labelledby="form-h">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16`}>
          <div>
            <Eyebrow>Prefer to write?</Eyebrow>
            <H2 id="form-h">Send a message.</H2>
            <p className="mt-4 max-w-[38ch] text-slate">Leading a larger organisation? Tell us a little about the programme in your message.</p>
          </div>
          <div>
            {status === "sent" ? (
              <div role="status" className="rounded border border-line-strong bg-cloud p-6">
                <p className="font-display text-xl font-semibold">Thanks, your message has been sent.</p>
                <p className="mt-2 text-slate">We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5" noValidate={false}>
                <label className="block font-display text-[15px] font-semibold">
                  Your name
                  <input required autoComplete="name" className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </label>
                <label className="block font-display text-[15px] font-semibold">
                  Work email
                  <input required type="email" autoComplete="email" className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </label>
                <label className="block font-display text-[15px] font-semibold">
                  What's going on?
                  <textarea required rows={6} className={field} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </label>
                <div className="flex flex-wrap items-center gap-5">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex min-h-[52px] items-center rounded bg-green px-7 font-display text-base font-semibold text-navy transition-colors hover:bg-green-dark disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending" : "Send message"}
                  </button>
                  <p className="text-sm text-slate">
                    We'll only use your details to reply.{" "}
                    <a href="https://www.ajyle.ai/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-navy underline">Privacy policy</a>
                  </p>
                </div>
                {status === "error" && (
                  <p role="alert" className="text-[15px] font-semibold text-[#B3261E]">That didn't send. Please try again, or book a call instead.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </Page>
  );
}
