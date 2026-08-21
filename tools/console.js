const { chromium } = require('playwright');
/* Recoge errores y avisos de consola y peticiones fallidas de una página. */
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  const eventos = [];
  p.on('console', (m) => {
    if (['error', 'warning'].includes(m.type())) eventos.push(`[${m.type()}] ${m.text().slice(0, 600)}`);
  });
  p.on('pageerror', (e) => eventos.push(`[pageerror] ${e.message.slice(0, 200)}`));
  p.on('requestfailed', (r) => eventos.push(`[request] ${r.url().slice(0, 120)} — ${r.failure()?.errorText}`));
  p.on('response', (r) => { if (r.status() >= 400) eventos.push(`[${r.status()}] ${r.url().slice(0, 120)}`); });

  await p.goto(process.argv[2], { waitUntil: 'domcontentloaded', timeout: 60000 });
  await p.waitForTimeout(4000);
  await b.close();
  console.log(process.argv[2]);
  if (!eventos.length) console.log('  sin incidencias');
  [...new Set(eventos)].forEach((e) => console.log('  ' + e));
})();
