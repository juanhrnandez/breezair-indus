/**
 * Datos de la empresa: fuente única.
 *
 * Antes de esto el sitio declaraba tres años de fundación distintos a Google
 * —1999 en /nosotros, 2008 en /contacto y 2010 en la portada— y dos cifras de
 * experiencia, «25+» y «15+», que llegaban a coincidir en la misma pantalla.
 * Un prospecto que compara dos páginas encuentra la contradicción, y con ella
 * se va la credibilidad del resto.
 *
 * Los años de experiencia se calculan, no se escriben: «25+» se queda obsoleto
 * solo, la resta no.
 *
 * PENDIENTE DE CONFIRMAR: se tomó 1999 por ser el año que más se repetía en el
 * contenido original y el único que aparece en prosa. Si el año correcto es
 * otro, cambiarlo aquí lo corrige en todo el sitio y en los datos estructurados.
 */

export const FUNDACION = 1999;

/** Años cumplidos desde la fundación, redondeados hacia abajo a la decena de 5. */
export function aniosExperiencia() {
  const anios = new Date().getFullYear() - FUNDACION;
  return Math.floor(anios / 5) * 5; // 27 → «25+», y no hay que tocarlo cada año
}

export const EXPERIENCIA_TEXTO = `${aniosExperiencia()}+ años`;

/**
 * Cifras que el sitio presenta como logros.
 * Son las que ya publicaba el contenido original; conviene que ventas las
 * confirme antes de que salgan a producción.
 */
export const CIFRAS = {
  proyectos: '500+',
  clientes: '50+',
  ahorroPromedio: '87 %',
};

export const EMPRESA = {
  nombre: 'CG International',
  marca: 'Breezair Industrial México',
  fundacion: FUNDACION,
  ciudad: 'Ciudad de México',
  pais: 'MX',
};
