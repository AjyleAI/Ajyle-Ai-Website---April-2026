// Writes a static copy of dist/index.html for pages that need their own
// <head> (title, description, canonical, social preview tags). The React app
// still loads and runs on top, so behaviour is identical. Without this, a
// single-page app serves the home page tags to link-preview crawlers.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ORIGIN = "https://www.ajyle.ai";
const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const PAGES = [
  {
    route: "hidden-cost",
    title: "Hidden Cost Audit | What Is Manual Work Costing You?",
    description:
      "Answer six quick questions and get one number: what manual work costs your business each year. Free, private, and nothing is saved.",
    ogTitle: "Hidden Cost Audit: what is manual work costing your business?",
    image: `${ORIGIN}/hidden-cost/og-image.png`,
    imageAlt: "Hidden Cost Audit from Ajyle AI. Six questions, ninety seconds, one number.",
    noscript:
      "The Hidden Cost Audit needs JavaScript to calculate your number. Please turn it on, or visit ajyle.ai to get in touch.",
  },
  {
    route: "pace",
    title: "How PACE Works | Ajyle AI",
    description:
      "PACE brings AI into your business one process at a time: Prepare, Act, Check, Embed. Guardrails first, and numbers to show it worked.",
    ogTitle: "How PACE Works: one process at a time, with the guardrails set first",
    image: `${ORIGIN}/og-image.png`,
    imageAlt: "Ajyle AI. AI you can stand behind.",
    noscript: "This page needs JavaScript. Please turn it on, or visit ajyle.ai/lets-talk to get in touch.",
    siteFonts: true,
  },
  {
    route: "about",
    title: "About Ajyle AI | Ade Shokoya",
    description:
      "Ajyle AI is led by Ade Shokoya, who has spent over 20 years in change management. Since 2024, all of that work has been on AI.",
    ogTitle: "About Ajyle AI: you know your business, we bring what's worked elsewhere",
    image: `${ORIGIN}/og-image.png`,
    imageAlt: "Ajyle AI. AI you can stand behind.",
    noscript: "This page needs JavaScript. Please turn it on, or visit ajyle.ai/lets-talk to get in touch.",
    siteFonts: true,
  },
  {
    route: "lets-talk",
    title: "Contact Us | Ajyle AI",
    description:
      "Book a free 30-minute call, or send a message. Tell us the problem in your own words and get a straight answer on whether we can help.",
    ogTitle: "Contact Ajyle AI: book a free 30-minute call or send a message",
    image: `${ORIGIN}/og-image.png`,
    imageAlt: "Ajyle AI. AI you can stand behind.",
    noscript: "This page needs JavaScript. Please turn it on to book a call or send a message.",
    siteFonts: true,
  },
  {
    route: "training",
    title: "AI training for teams | Ajyle AI",
    description:
      "Half-day or full-day AI workshops shaped around your team's tools, workflows and AI policy, with a check-in 30 days later. From £1,400.",
    ogTitle: "AI training for teams, shaped around your tools and AI policy",
    image: `${ORIGIN}/og-image.png`,
    imageAlt: "Ajyle AI. AI you can stand behind.",
    noscript: "This page needs JavaScript. Please turn it on, or visit ajyle.ai/lets-talk to get in touch.",
    siteFonts: true,
  },
];

const html = readFileSync(join("dist", "index.html"), "utf8");

for (const p of PAGES) {
  const url = `${ORIGIN}/${p.route}`;
  let out = html
    .replace(/<title>[\s\S]*?<\/title>/, "")
    .replace(/<meta name="(title|description|keywords|robots)"[^>]*>/g, "")
    .replace(/<link rel="canonical"[^>]*>/g, "")
    .replace(/<meta property="og:[^"]*"[^>]*>/g, "")
    .replace(/<meta name="twitter:[^"]*"[^>]*>/g, "")
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: p.title,
    description: p.description,
    url,
    inLanguage: "en-GB",
    isPartOf: { "@type": "WebSite", name: "Ajyle AI", url: ORIGIN },
    publisher: { "@type": "Organization", name: "Ajyle AI", url: ORIGIN },
  };

  const head = `
    <title>${esc(p.title)}</title>
    <meta name="title" content="${esc(p.title)}" />
    <meta name="description" content="${esc(p.description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:site_name" content="Ajyle AI" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:title" content="${esc(p.ogTitle)}" />
    <meta property="og:description" content="${esc(p.description)}" />
    <meta property="og:image" content="${p.image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${esc(p.imageAlt)}" />
${p.siteFonts ? "" : `
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="${FONT_URL}" data-ryt-font="1" media="print" onload="this.media='all'" />
    <noscript><link rel="stylesheet" href="${FONT_URL}" /></noscript>`}
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  `;
  out = out.replace("</head>", `${head}</head>`);
  out = out.replace('<div id="root"></div>', `<div id="root"></div>\n    <noscript><p style="font:18px/1.6 sans-serif;padding:24px;max-width:480px;margin:0 auto">${esc(p.noscript)}</p></noscript>`);

  const dir = join("dist", p.route);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), out);
  console.log(`prerendered /${p.route}`);
}
