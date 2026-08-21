const { chromium } = require('playwright');

/* Recorre todas las rutas del sitemap y reporta errores de consola,
   fallos de hidratación y peticiones fallidas. Los errores de hidratación
   no se ven en una captura: hay que leer la consola para encontrarlos. */
(async () => {
  const base = process.argv[2] || 'http://localhost:3210';

  const sm = await (await fetch(`${base}/sitemap.xml`)).text();
  const rutas = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].replace('https://www.breezair.com.mx', '') || '/');

  const browser = await chromium.launch();
  const resumen = [];

  for (const ruta of rutas) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    const eventos = new Set();
    page.on('console', (m) => {
      if (m.type() === 'error') eventos.add(`error: ${m.text().slice(0, 110)}`);
      if (m.type() === 'warning' && !/Download the React DevTools/.test(m.text()))
        eventos.add(`aviso: ${m.text().slice(0, 110)}`);
    });
    page.on('pageerror', (e) => eventos.add(`excepción: ${e.message.slice(0, 110)}`));
    page.on('response', (r) => { if (r.status() >= 400) eventos.add(`${r.status()}: ${r.url().slice(0, 90)}`); });

    try {
      await page.goto(base + ruta, { waitUntil: 'domcontentloaded', timeout: 60000 });
      await page.waitForTimeout(2600);
    } catch (e) {
      eventos.add(`navegación: ${e.message.slice(0, 90)}`);
    }
    await page.close();

    const lista = [...eventos];
    resumen.push({ ruta, lista });
    process.stdout.write(lista.length ? 'x' : '.');
  }

  await browser.close();
  console.log('\n');
  const conFallos = resumen.filter((r) => r.lista.length);
  console.log(`rutas revisadas: ${resumen.length} · con incidencias: ${conFallos.length}\n`);
  conFallos.forEach((r) => {
    console.log(`  ${r.ruta}`);
    r.lista.forEach((e) => console.log(`      ${e}`));
  });
  if (!conFallos.length) console.log('  ninguna ruta con incidencias');
})();
