const { chromium } = require('playwright');
/* Captura la ventana centrada en una sección concreta. Más fiable que recortar
   una captura completa a ciegas: la altura de página cambia con cada edición. */
(async () => {
  const [url, texto, salida, ancho = 1440, alto = 900] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: +ancho, height: +alto } });
  await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await (typeof page !== 'undefined' ? page : p).waitForLoadState('load').catch(() => {});
  await (typeof page !== 'undefined' ? page : p).evaluate(() => document.fonts?.ready).catch(() => {});
  const el = p.locator(`text=${texto}`).first();
  await el.scrollIntoViewIfNeeded();
  await p.evaluate(() => window.scrollBy(0, -180));
  await p.waitForTimeout(2200);
  await p.screenshot({ path: salida });
  await b.close();
  console.log('→', salida);
})();
