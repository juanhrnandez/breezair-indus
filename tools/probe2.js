const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await (typeof page !== 'undefined' ? page : p).waitForLoadState('load').catch(() => {});
  await (typeof page !== 'undefined' ? page : p).evaluate(() => document.fonts?.ready).catch(() => {});
  const el = p.locator('text=Nuestra Misión').first();
  await el.scrollIntoViewIfNeeded();
  await p.waitForTimeout(3000);
  const cadena = await el.evaluate((n) => {
    const out = [];
    let cur = n;
    while (cur && cur !== document.body) {
      out.push({
        tag: cur.tagName.toLowerCase(),
        cls: (cur.className || '').toString().slice(0, 46),
        op: getComputedStyle(cur).opacity,
        inline: cur.getAttribute('style')?.slice(0, 50) || '',
      });
      cur = cur.parentElement;
    }
    return out;
  });
  cadena.forEach((c) => console.log(`  op=${c.op}  <${c.tag}> ${c.cls}  [${c.inline}]`));
  await b.close();
})();
