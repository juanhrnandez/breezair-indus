const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await (typeof page !== 'undefined' ? page : p).waitForLoadState('load').catch(() => {});
  await (typeof page !== 'undefined' ? page : p).evaluate(() => document.fonts?.ready).catch(() => {});

  const sel = 'text=Nuestra Misión';
  const el = p.locator(sel).first();
  await el.scrollIntoViewIfNeeded();
  for (const espera of [0, 400, 1200, 2500]) {
    await p.waitForTimeout(espera === 0 ? 100 : espera);
    const info = await el.evaluate((n) => {
      const cont = n.closest('[style*="opacity"]') || n;
      const r = cont.getBoundingClientRect();
      return {
        opacity: getComputedStyle(cont).opacity,
        top: Math.round(r.top),
        alto: Math.round(r.height),
        enPantalla: r.top < window.innerHeight && r.bottom > 0,
      };
    });
    console.log(`  +${espera}ms  opacity=${info.opacity}  top=${info.top}  alto=${info.alto}  enPantalla=${info.enPantalla}`);
  }
  await b.close();
})();
