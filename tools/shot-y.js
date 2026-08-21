const { chromium } = require('playwright');
/* Captura a una posición vertical concreta. Los localizadores por texto fallan
   cuando el título está partido entre varios elementos, que es lo habitual en
   este sitio; la posición es más fiable. */
(async () => {
  const [url, y, salida, ancho = 1440, alto = 900] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: +ancho, height: +alto } });
  await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await (typeof page !== 'undefined' ? page : p).waitForLoadState('load').catch(() => {});
  await (typeof page !== 'undefined' ? page : p).evaluate(() => document.fonts?.ready).catch(() => {});
  // Recorrer hasta el punto para que las animaciones de entrada disparen
  await p.evaluate(async (destino) => {
    const paso = window.innerHeight * 0.6;
    for (let cur = 0; cur < destino; cur += paso) {
      window.scrollTo(0, cur);
      await new Promise((r) => setTimeout(r, 500));
    }
    window.scrollTo(0, destino);
  }, +y);
  await p.waitForTimeout(2200);
  await p.screenshot({ path: salida });
  await b.close();
  console.log('→', salida);
})();
