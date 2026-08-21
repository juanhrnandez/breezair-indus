const { chromium } = require('playwright');

/* Captura páginas completas tras dejar que las animaciones de entrada
   terminen. Sin el recorrido previo, las secciones bajo el pliegue salen
   a medio aparecer y la captura no sirve para juzgar el diseño. */
(async () => {
  const [url, salida, ancho = 1440, alto = 900, completa = 'true'] = process.argv.slice(2);
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: +ancho, height: +alto },
    deviceScaleFactor: 1,
  });
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await (typeof page !== 'undefined' ? page : p).waitForLoadState('load').catch(() => {});
  await (typeof page !== 'undefined' ? page : p).evaluate(() => document.fonts?.ready).catch(() => {});

  if (completa === 'true') {
    await page.evaluate(async () => {
      const paso = window.innerHeight * 0.7;
      for (let y = 0; y < document.body.scrollHeight; y += paso) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 900));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 1400));
    });
  }
  await page.waitForTimeout(900);
  await page.screenshot({ path: salida, fullPage: completa === 'true' });
  await browser.close();
  console.log('→', salida);
})();
