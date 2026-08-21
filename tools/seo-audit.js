const { chromium } = require('playwright');

/* Inventario real de señales SEO por ruta: JSON-LD, Open Graph, canonical
   y metadatos. Sin suposiciones: se lee lo que el servidor entrega. */
(async () => {
  const base = process.argv[2] || 'http://localhost:3210';
  const sm = await (await fetch(`${base}/sitemap.xml`)).text();
  const rutas = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].replace('https://www.breezair.com.mx', '') || '/');

  const b = await chromium.launch();
  const filas = [];

  for (const ruta of rutas) {
    const p = await b.newPage();
    await p.goto(base + ruta, { waitUntil: 'domcontentloaded', timeout: 60000 });
    const d = await p.evaluate(() => {
      const meta = (sel, attr = 'content') => document.querySelector(sel)?.getAttribute(attr) || null;
      const tipos = [];
      document.querySelectorAll('script[type="application/ld+json"]').forEach((s) => {
        try {
          const j = JSON.parse(s.textContent);
          (Array.isArray(j) ? j : [j]).forEach((o) => {
            const t = o['@type'];
            (Array.isArray(t) ? t : [t]).forEach((x) => x && tipos.push(x));
          });
        } catch { tipos.push('JSON-INVÁLIDO'); }
      });
      return {
        schemas: tipos,
        ogTitle: meta('meta[property="og:title"]'),
        ogDesc: meta('meta[property="og:description"]'),
        ogImage: meta('meta[property="og:image"]'),
        ogUrl: meta('meta[property="og:url"]'),
        ogType: meta('meta[property="og:type"]'),
        twCard: meta('meta[name="twitter:card"]'),
        twImage: meta('meta[name="twitter:image"]'),
        canonical: document.querySelector('link[rel=canonical]')?.href || null,
        desc: meta('meta[name="description"]'),
      };
    });
    await p.close();
    filas.push({ ruta, ...d });
    process.stdout.write('.');
  }
  await b.close();
  console.log('\n');

  const sinOgImage = filas.filter((f) => !f.ogImage);
  const sinOgTitle = filas.filter((f) => !f.ogTitle);
  const sinTwitter = filas.filter((f) => !f.twCard);
  const sinCanonical = filas.filter((f) => !f.canonical);
  const sinSchema = filas.filter((f) => !f.schemas.length);
  const invalidos = filas.filter((f) => f.schemas.includes('JSON-INVÁLIDO'));

  console.log(`rutas: ${filas.length}`);
  console.log(`  sin JSON-LD ......... ${sinSchema.length}`);
  console.log(`  JSON-LD inválido .... ${invalidos.length}`);
  console.log(`  sin canonical ....... ${sinCanonical.length}`);
  console.log(`  sin og:title ........ ${sinOgTitle.length}`);
  console.log(`  sin og:image ........ ${sinOgImage.length}`);
  console.log(`  sin twitter:card .... ${sinTwitter.length}`);

  const imgs = {};
  filas.forEach((f) => { if (f.ogImage) imgs[f.ogImage] = (imgs[f.ogImage] || 0) + 1; });
  console.log('\nimágenes og en uso:');
  Object.entries(imgs).forEach(([k, v]) => console.log(`  ${v.toString().padStart(3)}×  ${k.replace(base, '')}`));

  const tipos = {};
  filas.forEach((f) => f.schemas.forEach((t) => { tipos[t] = (tipos[t] || 0) + 1; }));
  console.log('\ntipos de schema:');
  Object.entries(tipos).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log(`  ${v.toString().padStart(3)}×  ${k}`));

  if (sinTwitter.length) { console.log('\nrutas sin twitter:card:'); sinTwitter.forEach((f) => console.log('  ' + f.ruta)); }
  if (sinOgImage.length) { console.log('\nrutas sin og:image:'); sinOgImage.forEach((f) => console.log('  ' + f.ruta)); }
})();
