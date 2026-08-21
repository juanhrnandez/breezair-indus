const { chromium } = require('playwright');

/* Comprueba, en un navegador real y tras desplazar la página entera, si queda
   contenido atrapado en opacidad cero. Es la prueba que el volcado de DOM no
   puede dar: hay que scrollear para que los observadores disparen. */
(async () => {
  const url = process.argv[2] || 'http://localhost:3000/';
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await (typeof page !== 'undefined' ? page : p).waitForLoadState('load').catch(() => {});
  await (typeof page !== 'undefined' ? page : p).evaluate(() => document.fonts?.ready).catch(() => {});
  if (process.argv[3] === 'lento') await page.evaluate(() => { window.__pasoLento = true; });

  // Recorrer la página como lo haría una persona
  await page.evaluate(async () => {
    const paso = window.innerHeight * 0.7;
    for (let y = 0; y < document.body.scrollHeight; y += paso) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 130));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 900));
  });
  await page.waitForTimeout(1200);

  const ocultos = await page.evaluate(() => {
    const out = [];
    document.querySelectorAll('body *').forEach((el) => {
      const cs = getComputedStyle(el);
      if (parseFloat(cs.opacity) > 0.02) return;
      if (cs.display === 'none' || cs.visibility === 'hidden') return;
      const t = (el.textContent || '').trim();
      if (t.length < 12) return;
      // Ignorar los que están ocultos porque su padre lo está
      if (el.parentElement && parseFloat(getComputedStyle(el.parentElement).opacity) <= 0.02) return;
      out.push({ texto: t.slice(0, 70), clases: (el.className || '').toString().slice(0, 60) });
    });
    return out;
  });

  console.log(`${url}\n  elementos con contenido en opacidad 0: ${ocultos.length}`);
  ocultos.slice(0, 14).forEach((o) => console.log(`    · ${o.texto}`));
  await browser.close();
})();
