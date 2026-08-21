const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(process.argv[2], { waitUntil: 'domcontentloaded', timeout: 60000 });
  await (typeof page !== 'undefined' ? page : p).waitForLoadState('load').catch(() => {});
  await (typeof page !== 'undefined' ? page : p).evaluate(() => document.fonts?.ready).catch(() => {});
  const secciones = await p.evaluate(() =>
    [...document.querySelectorAll('section')].map((s) => ({
      y: Math.round(s.getBoundingClientRect().top + window.scrollY),
      alto: Math.round(s.getBoundingClientRect().height),
      texto: (s.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 56),
    }))
  );
  console.log(`secciones: ${secciones.length}, alto total: ${await p.evaluate(() => document.body.scrollHeight)}`);
  secciones.forEach((s) => console.log(`  y=${String(s.y).padStart(6)}  h=${String(s.alto).padStart(5)}  ${s.texto}`));
  await b.close();
})();
