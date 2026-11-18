// Screenshots + sanity checks of the built website (links, images, horizontal overflow).
//   node site/check-site.mjs [outDir]
import puppeteer from 'puppeteer-core';
import { mkdtempSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { BROWSER } from '../browser-path.mjs';
import { server } from './serve.mjs';

const OUT = process.argv[2] || mkdtempSync(join(tmpdir(), 'hc-site-'));
const PORT = 4174;
await new Promise(r => server.listen(PORT, r));
const base = `http://localhost:${PORT}`;
const browser = await puppeteer.launch({ executablePath: BROWSER, headless: true });
let failures = 0;
const check = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) failures++; };

const pages = ['/', '/buy/', '/thanks/', '/privacy/', '/terms/', '/refund/', '/tr/', '/tr/buy/', '/tr/thanks/', '/tr/privacy/', '/tr/terms/', '/tr/refund/'];
const p = await browser.newPage();
for (const path of pages) {
  for (const [w, h, tag] of [[1280, 800, 'desk'], [390, 844, 'mob']]) {
    await p.setViewport({ width: w, height: h });
    const res = await p.goto(base + path, { waitUntil: 'load' });
    // lazy images below the fold: force-load them before checking
    await p.evaluate(async () => {
      for (const i of document.images) i.loading = 'eager';
      await Promise.all([...document.images].map(i => i.decode().catch(() => {})));
    });
    const info = await p.evaluate(() => ({
      overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
      brokenImgs: [...document.images].filter(i => !i.complete || i.naturalWidth === 0).map(i => i.src),
      links: [...document.querySelectorAll('a[href^="/"]')].map(a => a.getAttribute('href'))
    }));
    check(res.status() === 200 && !info.overflow && !info.brokenImgs.length, `${path} [${tag}] 200, no horizontal scroll, images ok ${info.brokenImgs.join(' ')}`);
    for (const l of new Set(info.links)) {
      const r = await fetch(base + l.split('#')[0]);
      if (r.status !== 200) { check(false, `${path} → broken internal link ${l}`); }
    }
    if (path === '/' || path === '/tr/' || path === '/privacy/') {
      await p.screenshot({ path: join(OUT, `site${path.replace(/\//g, '_')}${tag}.png`), fullPage: tag === 'desk' && path !== '/privacy/' ? true : false });
    }
  }
}
await p.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'dark' }]);
await p.setViewport({ width: 1280, height: 800 });
await p.goto(base + '/', { waitUntil: 'load' });
await p.screenshot({ path: join(OUT, 'site_dark.png') });
await browser.close();
server.close();
console.log(failures ? `${failures} FAILURE(S)` : 'ALL PASSED', '→', OUT);
process.exit(failures ? 1 : 0);
