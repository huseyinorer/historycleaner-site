// Builds the static website into website/ and regenerates privacy-policy.txt.
//   cd tools && npm run site
// Deploy the CONTENTS of website/ to the web root of historycleaner.app.
import { mkdirSync, writeFileSync, rmSync, copyFileSync, existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE } from './site.config.mjs';
import { PAGES, LEGAL } from './content.mjs';
import { iconSvg } from '../icons/icon.mjs';

const ROOT = fileURLToPath(new URL('../../', import.meta.url));
const HERE = fileURLToPath(new URL('./', import.meta.url));
const OUT = join(ROOT, 'website');
const warnings = [];

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const sellerText = SITE.sellerName || '[SELLER LEGAL NAME]';
if (!SITE.sellerName) warnings.push('sellerName is empty — required by Paddle (Terms/Privacy/Refund/footer).');
const cws = SITE.cwsUrl || 'https://chromewebstore.google.com/search/History%20Domain%20Cleaner';
if (!SITE.cwsUrl) warnings.push('cwsUrl is empty — "Add to Chrome" links point to a store search instead of the listing.');

function fill(s, html = true) {
  const seller = html && !SITE.sellerName ? `<mark class="todo">${sellerText}</mark>` : (html ? esc(sellerText) : sellerText);
  const email = html ? `<a href="mailto:${SITE.email}">${SITE.email}</a>` : SITE.email;
  return String(s).replace(/\{seller\}/g, seller).replace(/\{email\}/g, email)
    .replace(/\{price\}/g, SITE.price).replace(/\{refundDays\}/g, SITE.refundDays)
    .replace(/\{trialDays\}/g, SITE.trialDays).replace(/\{domain\}/g, SITE.domain);
}

const base = l => (l === 'en' ? '/' : `/${l}/`);
const paddleReady = !!(SITE.paddle?.clientToken && SITE.paddle?.priceId);
if (!paddleReady) warnings.push('paddle.clientToken / paddle.priceId empty — /buy/ shows "purchases open soon".');
else if (SITE.paddle.environment !== 'production') warnings.push('paddle.environment is "sandbox" — test payments only. Switch to "production" before launch.');
const fmtDate = (l, iso) => new Intl.DateTimeFormat(l, { dateStyle: 'long' }).format(new Date(iso + 'T12:00:00'));

function layout({ L, path, title, desc, body, altPath, head = '' }) {
  const url = `https://${SITE.domain}${path}`;
  const enPath = L.lang === 'en' ? path : altPath, trPath = L.lang === 'tr' ? path : altPath;
  return `<!doctype html>
<html lang="${L.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="en" href="https://${SITE.domain}${enPath}">
<link rel="alternate" hreflang="tr" href="https://${SITE.domain}${trPath}">
<link rel="alternate" hreflang="x-default" href="https://${SITE.domain}${enPath}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="https://${SITE.domain}/assets/og.png">
<meta property="og:url" content="${url}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/icon.svg" type="image/svg+xml">
<link rel="icon" href="/assets/icon32.png" sizes="32x32">
<link rel="apple-touch-icon" href="/assets/icon128.png">
<link rel="stylesheet" href="/assets/site.css">
${head}
</head>
<body>
<header class="top"><div class="wrap top-in">
  <a class="brand" href="${base(L.lang)}">${iconSvg({ size: 28 })}<span>History Domain Cleaner</span></a>
  <nav>
    <a href="${base(L.lang)}#features">${L.nav.features}</a>
    <a href="${base(L.lang)}#pricing">${L.nav.pricing}</a>
    <a href="${base(L.lang)}#faq">${L.nav.faq}</a>
    <a class="lang" href="${altPath}" hreflang="${L.other}" lang="${L.other}">${L.otherLabel}</a>
    <a class="btn btn-sm" href="${cws}">${L.nav.install}</a>
  </nav>
</div></header>
${body}
<footer class="foot"><div class="wrap foot-in">
  <span>© ${new Date().getFullYear()} ${SITE.sellerName ? esc(SITE.sellerName) : '<mark class="todo">[SELLER LEGAL NAME]</mark>'} · History Domain Cleaner</span>
  <span class="foot-links">
    <a href="${base(L.lang)}privacy/">${L.footer.privacy}</a>
    <a href="${base(L.lang)}terms/">${L.footer.terms}</a>
    <a href="${base(L.lang)}refund/">${L.footer.refund}</a>
    <a href="mailto:${SITE.email}">${SITE.email}</a>
  </span>
</div></footer>
</body>
</html>
`;
}

function home(L) {
  const shot = n => `/assets/shots/${L.lang}-${n}.png`;
  const proCta = paddleReady
    ? `<a class="btn" href="${base(L.lang)}buy/">${L.pricing.pro.cta} — ${SITE.price}</a>`
    : `<span class="btn btn-ghost" aria-disabled="true">${L.pricing.pro.ctaNone}</span>`;
  const body = `
<main>
<section class="hero"><div class="wrap hero-in">
  <div class="hero-copy">
    <p class="eyebrow">${L.hero.eyebrow}</p>
    <h1>${L.hero.title}</h1>
    <p class="lead">${L.hero.sub}</p>
    <div class="ctas"><a class="btn" href="${cws}">${L.hero.cta}</a><a class="btn btn-ghost" href="#pricing">${L.hero.cta2}</a></div>
    <p class="note">${L.hero.note}</p>
  </div>
  <div class="hero-shot"><img src="${shot(1)}" width="380" alt="" fetchpriority="high"></div>
</div></section>

<section id="features" class="section"><div class="wrap">
  <h2>${L.features.title}</h2>
  <div class="grid">${L.features.items.map(([i, h, p]) => `
    <article class="card"><div class="ico" aria-hidden="true">${i}</div><h3>${h}</h3><p>${p}</p></article>`).join('')}
  </div>
</div></section>

${L.show.map((s, i) => `
<section class="section show ${i % 2 ? 'rev' : ''}"><div class="wrap show-in">
  <div class="show-copy"><h2>${s.title}</h2><p class="lead">${s.text}</p></div>
  <div class="show-shot"><img src="${shot(s.img)}" width="380" alt="" loading="lazy"></div>
</div></section>`).join('')}

<section class="section privacy-band"><div class="wrap">
  <h2>${L.privacy.title}</h2>
  <ul class="checks">${L.privacy.items.map(x => `<li>${x}</li>`).join('')}</ul>
  <p><a href="${base(L.lang)}privacy/">${L.privacy.link} →</a></p>
</div></section>

<section id="pricing" class="section"><div class="wrap">
  <h2>${L.pricing.title}</h2>
  <p class="lead center">${L.pricing.sub}</p>
  <div class="plans">
    <article class="plan">
      <h3>${L.pricing.free.name}</h3>
      <p class="price">${L.pricing.free.price}</p>
      <ul class="checks">${L.pricing.free.items.map(x => `<li>${x}</li>`).join('')}</ul>
      <a class="btn btn-ghost" href="${cws}">${L.pricing.free.cta}</a>
    </article>
    <article class="plan plan-pro">
      <h3>${L.pricing.pro.name}</h3>
      <p class="price">${fill(L.pricing.pro.price)} <span>${L.pricing.pro.per}</span></p>
      <ul class="checks">${L.pricing.pro.items.map(x => `<li>${x}</li>`).join('')}</ul>
      ${proCta}
      <p class="small">${fill(L.pricing.pro.trial)}</p>
    </article>
  </div>
</div></section>

<section id="faq" class="section"><div class="wrap narrow">
  <h2>${L.faq.title}</h2>
  ${L.faq.items.map(([q, a]) => `<details class="faq"><summary>${q}</summary><p>${fill(a)}</p></details>`).join('')}
</div></section>
</main>`;
  return layout({ L, path: base(L.lang), altPath: base(L.other), title: L.meta.title, desc: L.meta.desc, body });
}

function legalPage(L, key) {
  const sections = LEGAL[L.lang][key];
  const title = L.legalTitles[key];
  const body = `
<main class="section legal"><div class="wrap narrow">
  <p><a href="${base(L.lang)}">${L.back}</a></p>
  <h1>${title}</h1>
  <p class="muted">${L.updated}: ${fmtDate(L.lang, SITE.lastUpdated)}</p>
  ${sections.map(s => `<h2>${fill(s.h)}</h2>${s.p.map(p => `<p>${fill(p)}</p>`).join('')}`).join('\n  ')}
</div></main>`;
  return layout({ L, path: `${base(L.lang)}${key}/`, altPath: `${base(L.other)}${key}/`, title: `${title} — History Domain Cleaner`, desc: `${title} — History Domain Cleaner`, body });
}

function buyPage(L) {
  const B = L.buy;
  const path = `${base(L.lang)}buy/`;
  const checkout = paddleReady ? `
<script src="https://cdn.paddle.com/paddle/v2/paddle.js"></script>
<script>
  (function () {
    var cfg = ${JSON.stringify({ env: SITE.paddle.environment, token: SITE.paddle.clientToken, priceId: SITE.paddle.priceId, locale: L.lang, successUrl: `https://${SITE.domain}${base(L.lang)}thanks/` })};
    if (cfg.env === 'sandbox') Paddle.Environment.set('sandbox');
    Paddle.Initialize({ token: cfg.token });
    function open() {
      Paddle.Checkout.open({
        items: [{ priceId: cfg.priceId, quantity: 1 }],
        settings: { displayMode: 'overlay', theme: matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light', locale: cfg.locale, successUrl: cfg.successUrl }
      });
    }
    document.getElementById('checkoutBtn').addEventListener('click', open);
  })();
</script>` : '';
  const body = `
<main class="section"><div class="wrap narrow buy">
  <p><a href="${base(L.lang)}#pricing">${L.back}</a></p>
  <h1>${B.title}</h1>
  <p class="lead">${fill(B.sub)}</p>
  <ul class="checks">${B.items.map(x => `<li>${fill(x)}</li>`).join('')}</ul>
  ${paddleReady
    ? `<p><button id="checkoutBtn" class="btn" type="button">${B.cta} — ${SITE.price}</button></p><p class="small">${B.secure}</p><p>${B.how}</p>`
    : `<p class="notice">${fill(B.soon)}</p>`}
</div></main>`;
  return layout({ L, path, altPath: `${base(L.other)}buy/`, title: `${B.title} — ${SITE.price}`, desc: fill(B.sub, false), body, head: checkout });
}

function thanksPage(L) {
  const T = L.thanks;
  const body = `
<main class="section"><div class="wrap narrow buy">
  <h1>${T.title}</h1>
  <ol class="steps">${T.steps.map(x => `<li>${x}</li>`).join('')}</ol>
  <p class="small">${fill(T.help)}</p>
  <p><a href="${base(L.lang)}">${L.back}</a></p>
</div></main>`;
  return layout({ L, path: `${base(L.lang)}thanks/`, altPath: `${base(L.other)}thanks/`, title: T.title, desc: T.title, body, head: '<meta name="robots" content="noindex">' });
}

function write(rel, content) {
  const f = join(OUT, rel);
  mkdirSync(dirname(f), { recursive: true });
  writeFileSync(f, content);
}

// ---------- build ----------
rmSync(OUT, { recursive: true, force: true });
for (const L of Object.values(PAGES)) {
  const prefix = L.lang === 'en' ? '' : `${L.lang}/`;
  write(`${prefix}index.html`, home(L));
  for (const key of ['privacy', 'terms', 'refund']) write(`${prefix}${key}/index.html`, legalPage(L, key));
  write(`${prefix}buy/index.html`, buyPage(L));
  write(`${prefix}thanks/index.html`, thanksPage(L));
}
write('404.html', layout({ L: PAGES.en, path: '/404.html', altPath: '/tr/', title: 'Not found — History Domain Cleaner', desc: '', body: '<main class="section"><div class="wrap narrow"><h1>Page not found</h1><p><a href="/">← Home</a></p></div></main>' }));
write('CNAME', SITE.domain + '\n');
write('robots.txt', `User-agent: *\nAllow: /\nSitemap: https://${SITE.domain}/sitemap.xml\n`);
const urls = ['/', '/buy/', '/privacy/', '/terms/', '/refund/', '/tr/', '/tr/buy/', '/tr/privacy/', '/tr/terms/', '/tr/refund/'];
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>https://${SITE.domain}${u}</loc><lastmod>${SITE.lastUpdated}</lastmod></url>`).join('\n')}\n</urlset>\n`);

// assets
mkdirSync(join(OUT, 'assets', 'shots'), { recursive: true });
copyFileSync(join(HERE, 'site.css'), join(OUT, 'assets', 'site.css'));
writeFileSync(join(OUT, 'assets', 'icon.svg'), iconSvg({ size: 96 }));
for (const s of [32, 128]) copyFileSync(join(ROOT, 'icons', `icon${s}.png`), join(OUT, 'assets', `icon${s}.png`));
copyFileSync(join(ROOT, 'store-assets', 'global', 'promo-marquee.png'), join(OUT, 'assets', 'og.png'));
for (const l of ['en', 'tr']) for (const n of [1, 2, 3, 5]) {
  const src = join(HERE, 'shots', `${l}-${n}.png`);
  if (!existsSync(src)) throw new Error(`Missing ${src} — run "npm run store-assets" first.`);
  copyFileSync(src, join(OUT, 'assets', 'shots', `${l}-${n}.png`));
}

// privacy-policy.txt (English) from the same source as the website
const txt = [
  'PRIVACY POLICY - History Domain Cleaner',
  '========================================',
  '',
  `Last Updated: ${fmtDate('en', SITE.lastUpdated)}`,
  `Canonical version: https://${SITE.domain}/privacy/`,
  '',
  ...LEGAL.en.privacy.flatMap(s => [fill(s.h, false).toUpperCase(), ...s.p.map(p => fill(p, false)), ''])
].join('\n');
writeFileSync(join(ROOT, 'privacy-policy.txt'), txt);

console.log(`Built website/ (${urls.length} pages + 404) and privacy-policy.txt`);
for (const w of warnings) console.log('⚠ ' + w);
