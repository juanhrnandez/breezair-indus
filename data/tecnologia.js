/**
 * Contenido de las páginas de tecnología Breezair.
 *
 * Son los términos de marca de Seeley International —Chillcel®, MagIQtouch™,
 * WaterManager™, Prematuf™, Aquaflow— y hasta ahora el sitio no los usaba. Son
 * búsquedas de cola larga, con competencia casi nula en español y con intención
 * altísima: quien busca «Chillcel repuesto» o «MagIQtouch manual» ya tiene un
 * equipo o está a punto de comprarlo.
 *
 * Como distribuidor oficial, estas páginas son terreno propio: ningún revendedor
 * puede escribirlas con la misma autoridad.
 *
 * Cifras: sólo las que publica Seeley. Lo que no está verificado se plantea como
 * criterio de ingeniería, no como especificación.
 */

export const TECNOLOGIAS = [
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'chillcel-black-opal',
    nav: 'Paneles Chillcel®',
    linkTitle: 'Paneles Chillcel® Black Opal™ Mini-Cell',
    linkText: 'El medio de enfriamiento que define cuántos grados baja tu nave.',
    h1: 'Paneles Chillcel® Black Opal™ Mini-Cell',
    eyebrow: 'Medio de enfriamiento',
    subtitle:
      'Es la pieza donde ocurre físicamente el enfriamiento. Todo lo demás en el equipo existe para que el agua y el aire lleguen bien a estos paneles.',
    metaTitle: 'Paneles Chillcel® Black Opal Mini-Cell',
    metaDescription:
      'Qué son los paneles Chillcel® Black Opal™ Mini-Cell, cómo determinan la eficiencia de saturación y qué mantenimiento requieren.',
    keywords: [
      'chillcel breezair',
      'black opal mini-cell',
      'paneles enfriamiento evaporativo',
      'medio evaporativo breezair',
      'repuesto chillcel méxico',
      'eficiencia de saturación',
    ],
    queEs: {
      title: 'Qué es un panel Chillcel®',
      paragraphs: [
        'Un enfriador evaporativo no tiene compresor ni gas refrigerante. Lo que tiene es un bloque de material poroso permanentemente humedecido por el que se obliga a pasar el aire exterior. Al atravesarlo, parte del agua se evapora, y esa evaporación toma calor del propio aire: el aire sale más frío de lo que entró.',
        'Ese bloque es el panel, y en Breezair es el Chillcel®. Su geometría interna determina cuánta superficie de agua encuentra el aire en su recorrido, y por tanto cuánto se acerca la temperatura de salida al límite físico del proceso —la temperatura de bulbo húmedo del aire exterior—. Esa proximidad es lo que se mide como eficiencia de saturación.',
      ],
    },
    comoFunciona: {
      title: 'Qué aporta el diseño Mini-Cell',
      paragraphs: [
        'La versión Black Opal™ Mini-Cell rediseña la celda interna del panel para hacerla más pequeña y más densa. Seeley International declara que ese diseño **incrementa un 25 % la superficie de contacto** respecto al panel convencional y que alcanza **hasta un 21 % más de capacidad de enfriamiento** que los modelos anteriores. La tecnología está en trámite de patente.',
        'La consecuencia práctica es directa: con el mismo tamaño de equipo y el mismo consumo eléctrico, el aire sale más frío. Traducido a proyecto, significa menos equipos para cubrir la misma nave, o el mismo número de equipos alcanzando un salto térmico mayor.',
      ],
      puntos: [
        {
          title: 'Más superficie, mismo volumen',
          text: 'La celda más pequeña multiplica la superficie húmeda que el aire encuentra sin aumentar el tamaño físico del panel ni la resistencia al paso del aire hasta el punto de penalizar el caudal.',
        },
        {
          title: 'Eficiencia de saturación por encima del 90 %',
          text: 'En la gama industrial, el TBSi 580 declara 91.5 % de eficiencia de saturación. Es el porcentaje del salto teórico máximo que el equipo realmente aprovecha, y es la cifra que hay que comparar entre marcas, no el «hasta 87 % de ahorro».',
        },
        {
          title: 'El caudal de agua importa tanto como el panel',
          text: 'Un panel excelente mal irrigado enfría mal. Por eso el sistema de distribución de agua Aquaflow existe: su trabajo es que toda la superficie del panel esté mojada de forma uniforme, sin zonas secas por las que el aire pase sin enfriarse.',
        },
      ],
    },
    porQueImporta: {
      title: 'Qué significa esto en tu instalación',
      items: [
        {
          title: 'Define el número de equipos',
          text: 'La eficiencia de saturación entra directamente en el cálculo de cuántos equipos necesita tu nave. Un punto porcentual de diferencia se nota en el presupuesto cuando hablamos de decenas de unidades.',
        },
        {
          title: 'Es la pieza de mantenimiento principal',
          text: 'Los paneles son consumibles. Se incrustan con agua dura, se colmatan con polvo y pierden eficiencia con el tiempo. Su estado es lo primero que se revisa cuando una instalación «ya no enfría como antes».',
        },
        {
          title: 'Como distribuidor oficial tenemos el repuesto correcto',
          text: 'Un panel genérico de dimensiones parecidas no da la misma eficiencia y puede alterar el caudal de aire del equipo. El repuesto original mantiene la curva de rendimiento con la que se dimensionó la instalación.',
        },
      ],
    },
    datos: [
      { value: '+25 %', label: 'Superficie de contacto', note: 'Frente al panel convencional (Seeley International)' },
      { value: 'hasta +21 %', label: 'Capacidad de enfriamiento', note: 'Respecto a modelos anteriores' },
      { value: '91.5 %', label: 'Eficiencia de saturación TBSi 580', note: 'Dato de catálogo oficial' },
    ],
    faqs: [
      {
        q: '¿Cada cuánto se cambian los paneles Chillcel®?',
        a: 'No hay una cifra universal: depende de la dureza del agua, de las horas de operación y de la carga de polvo del ambiente. Los criterios de reemplazo son la pérdida de espesor, la incrustación mineral visible, el deterioro estructural del marco y la caída medible de eficiencia. En una instalación con agua tratada y mantenimiento regular la vida útil es de varios años.',
      },
      {
        q: '¿Puedo usar paneles genéricos en lugar de los originales?',
        a: 'Físicamente pueden caber, pero cambian dos cosas: la eficiencia de saturación y la resistencia al paso del aire. Lo primero reduce el enfriamiento y lo segundo altera el caudal con el que se dimensionó la instalación. El resultado suele ser una nave que enfría menos de lo proyectado con el mismo consumo eléctrico.',
      },
      {
        q: '¿Qué es la eficiencia de saturación y por qué importa más que el «% de ahorro»?',
        a: 'La eficiencia de saturación mide qué porcentaje del enfriamiento teóricamente posible logra el equipo, dadas las condiciones del aire exterior. Es una característica del equipo y se puede comparar entre marcas. El «porcentaje de ahorro energético» depende de con qué lo compares y de cómo operabas antes, así que no sirve para comparar equipos entre sí.',
      },
      {
        q: '¿El agua dura arruina los paneles?',
        a: 'La incrustación mineral es la causa más común de pérdida de eficiencia. Por eso los equipos integran el sistema WaterManager™, que vigila la calidad del agua del depósito y la renueva automáticamente. En zonas de agua especialmente dura conviene además un tratamiento previo, que se define en el proyecto.',
      },
    ],
    relacionados: ['tec-watermanager', 'tec-magiqtouch', 'productos', 'blog-mantenimiento', 'sector-naves-industriales'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'watermanager',
    nav: 'WaterManager™',
    linkTitle: 'WaterManager™: gestión automática del agua',
    linkText: 'El sistema que evita que el agua dura acabe con la eficiencia del equipo.',
    h1: 'WaterManager™: gestión automática de la calidad del agua',
    eyebrow: 'Gestión de agua',
    subtitle:
      'En un enfriador evaporativo el agua no se consume solamente: se concentra. Los minerales que deja atrás la evaporación son la causa número uno de pérdida de rendimiento, y este es el sistema que los controla.',
    metaTitle: 'WaterManager™: gestión del agua',
    metaDescription:
      'Cómo funciona el WaterManager™ de Breezair: control de calidad del agua, purga automática y protección de los paneles Chillcel®.',
    keywords: [
      'watermanager breezair',
      'purga automática enfriador evaporativo',
      'calidad agua enfriamiento evaporativo',
      'consumo de agua enfriador evaporativo',
      'incrustación paneles evaporativos',
    ],
    queEs: {
      title: 'El problema que resuelve',
      paragraphs: [
        'Cuando el agua se evapora, los minerales disueltos que llevaba no se van con ella: se quedan en el depósito. Ciclo tras ciclo, la concentración sube. Ese agua cada vez más mineralizada es la que se bombea sobre los paneles, donde deposita sales que endurecen el material, tapan sus poros y reducen la superficie disponible para evaporar.',
        'El resultado es una instalación que el primer verano enfría según proyecto y tres veranos después enfría notablemente menos, consumiendo lo mismo. Sin gestión de agua, el mantenimiento correctivo llega tarde y caro.',
      ],
    },
    comoFunciona: {
      title: 'Cómo trabaja el sistema',
      paragraphs: [
        'El WaterManager™ vigila permanentemente la calidad del agua del depósito y renueva automáticamente el volumen cuando hace falta. Seeley International describe su función como asegurar la vida útil del equipo con el mínimo mantenimiento, prolongando la vida de los paneles Chillcel® y de la bomba, y maximizando al mismo tiempo el ahorro de agua.',
        'La clave es ese doble objetivo, que es contradictorio si se resuelve mal. Purgar mucho mantiene el agua limpia pero desperdicia agua; purgar poco ahorra agua pero destruye los paneles. Un sistema automático que decide en función de la calidad medida acierta más que una purga programada por reloj.',
      ],
      puntos: [
        {
          title: 'Renovación por calidad, no por tiempo',
          text: 'La purga se activa según el estado real del agua. En un día húmedo, con poca evaporación, la concentración sube despacio y el sistema purga menos; en un día seco de mayo, purga más.',
        },
        {
          title: 'Protege dos consumibles a la vez',
          text: 'Los paneles y la bomba son las dos piezas que sufren con el agua mineralizada. Alargar su vida útil es donde el sistema devuelve la inversión.',
        },
        {
          title: 'Reduce la carga de mantenimiento manual',
          text: 'No elimina la limpieza periódica del depósito ni el análisis de agua, pero evita que la instalación dependa de que alguien se acuerde de purgar.',
        },
      ],
    },
    porQueImporta: {
      title: 'Lo que cambia en la operación',
      items: [
        {
          title: 'El consumo de agua es predecible',
          text: 'Entre el agua evaporada y la purgada, un equipo industrial consume del orden de decenas de litros por hora, y consume más cuanto más seco es el día —que es exactamente cuando más enfría—. Es un dato que entra en el cálculo del proyecto, no una sorpresa mensual.',
        },
        {
          title: 'La eficiencia se sostiene en el tiempo',
          text: 'Es la diferencia entre una instalación que rinde igual en su quinto año y otra que se degrada en silencio hasta que alguien se queja del calor.',
        },
        {
          title: 'No sustituye al tratamiento de agua',
          text: 'En zonas con agua muy dura el sistema gestiona la concentración, pero partir de mejor agua sigue siendo más barato que purgar constantemente. El tratamiento previo se evalúa caso por caso.',
        },
      ],
    },
    datos: [
      { value: 'Automática', label: 'Purga según calidad medida', note: 'No por temporizador' },
      { value: 'Continuo', label: 'Monitoreo del agua del depósito', note: 'Durante toda la operación' },
      { value: '2', label: 'Consumibles que protege', note: 'Paneles Chillcel® y bomba' },
    ],
    faqs: [
      {
        q: '¿Cuánta agua consume realmente un equipo industrial Breezair?',
        a: 'Del orden de decenas de litros por hora, variando con la temperatura y la humedad: cuanto más seco el aire, más agua evapora y más enfría. A eso se suma la purga que renueva el depósito. La cifra concreta para tu instalación sale del cálculo con los datos climáticos de tu localidad y las horas de operación previstas.',
      },
      {
        q: '¿Hay riesgo de legionela?',
        a: 'El enfriamiento evaporativo directo no pulveriza agua al aire que entra al edificio: el agua moja los paneles y lo que circula es aire. Es una diferencia importante frente a una torre de enfriamiento. Aun así, cualquier sistema con agua estancada requiere higiene: limpieza y sanitización periódicas del depósito, además de la renovación automática que hace el WaterManager™. Es parte del plan de mantenimiento.',
      },
      {
        q: '¿Qué pasa si el agua de mi zona es muy dura?',
        a: 'El sistema lo gestiona purgando con más frecuencia, lo que significa mayor consumo de agua. A partir de cierto nivel de dureza sale más barato tratar el agua de entrada que purgar continuamente. Es un cálculo que se hace en el proyecto con el análisis del agua local.',
      },
    ],
    relacionados: ['tec-chillcel-black-opal', 'tec-prematuf', 'blog-mantenimiento', 'productos', 'sector-industria-alimentaria'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'magiqtouch',
    nav: 'MagIQtouch™',
    linkTitle: 'MagIQtouch™: control centralizado',
    linkText: 'Un solo controlador para hasta 135 equipos, con zonificación y programación.',
    h1: 'MagIQtouch™: el control centralizado de la instalación',
    eyebrow: 'Control',
    subtitle:
      'Una nave con veinte equipos no se opera con veinte interruptores. El controlador es lo que convierte un conjunto de máquinas en una instalación gobernable.',
    metaTitle: 'MagIQtouch™: control centralizado',
    metaDescription:
      'El MagIQtouch™ opera hasta 135 equipos desde una pantalla táctil, con zonificación y programación horaria. Donde se materializa el ahorro.',
    keywords: [
      'magiqtouch breezair',
      'control enfriadores evaporativos',
      'controlador breezair méxico',
      'magiqtouch manual',
      'zonificación climatización industrial',
    ],
    queEs: {
      title: 'Qué hace el controlador',
      paragraphs: [
        'El MagIQtouch™ es el controlador de pared con pantalla táctil de Breezair. Desde un único punto gestiona la temperatura objetivo, la velocidad de los ventiladores, los modos de operación y la programación horaria de toda la instalación.',
        'Seeley International indica que un solo controlador puede operar **hasta 135 equipos** e incorpora un asistente de instalación integrado. Admite además un sensor de aire opcional, con el que la regulación deja de basarse sólo en la temperatura del punto donde está el controlador.',
      ],
    },
    comoFunciona: {
      title: 'Por qué el control decide el ahorro real',
      paragraphs: [
        'El consumo de un enfriador evaporativo no es fijo: depende de la velocidad a la que trabaje el ventilador. Los equipos Breezair usan motores con variador —inverter— que pueden operar por debajo del máximo, y la potencia consumida por un ventilador cae mucho más rápido que su velocidad.',
        'Eso significa que una instalación que trabaja al 70 % la mayor parte del día consume una fracción de lo que consumiría a plena marcha. Sin un control que module, el equipo funciona en todo o nada y ese margen se pierde. El controlador no es un accesorio de confort: es donde se materializa buena parte del ahorro que justifica el proyecto.',
      ],
      puntos: [
        {
          title: 'Programación por turno',
          text: 'La climatización arranca antes del turno y para cuando la nave queda vacía. En una planta con dos turnos y fin de semana parado, esa programación es dinero directo.',
        },
        {
          title: 'Zonificación',
          text: 'No todas las áreas necesitan lo mismo al mismo tiempo. Agrupar equipos por zona permite tratar intensamente el área de producción y dejar en mínimos el almacén.',
        },
        {
          title: 'Operación a velocidad reducida',
          text: 'Con el motor inverter, bajar la velocidad reduce el consumo de forma más que proporcional, y además baja el nivel sonoro. Es el modo en el que debería pasar la mayor parte de las horas.',
        },
        {
          title: 'Asistente de instalación',
          text: 'El wizard integrado guía la puesta en marcha y la configuración inicial, lo que reduce errores de arranque en instalaciones con muchos equipos.',
        },
      ],
    },
    porQueImporta: {
      title: 'Lo que hay que decidir en proyecto',
      items: [
        {
          title: 'Cuántas zonas y dónde',
          text: 'La zonificación se define con el plano de operación en la mano: turnos, áreas de trabajo permanente y áreas de paso. Es más barato definirlo antes de instalar que reagrupar después.',
        },
        {
          title: 'Dónde va el sensor',
          text: 'Un controlador que mide en un pasillo fresco mantendrá la nave más caliente de lo que crees. La ubicación del sensor de referencia es una decisión técnica, no de conveniencia de cableado.',
        },
        {
          title: 'Quién lo va a operar',
          text: 'Mantenimiento necesita saber qué hace cada modo. Una instalación bien configurada que nadie sabe operar acaba trabajando siempre al máximo, que es justo lo que se quería evitar.',
        },
      ],
    },
    datos: [
      { value: '135', label: 'Equipos por controlador', note: 'Máximo declarado por Seeley International' },
      { value: 'Táctil', label: 'Pantalla con asistente de instalación', note: 'Configuración guiada' },
      { value: 'Inverter', label: 'Motor de velocidad variable', note: 'El consumo cae más rápido que la velocidad' },
    ],
    faqs: [
      {
        q: '¿Se puede controlar la instalación por zonas?',
        a: 'Sí. Los equipos se agrupan en zonas y cada zona puede tener su propia temperatura objetivo y su propio horario. Es lo habitual en naves donde conviven producción, almacén y oficinas de planta, porque permite concentrar el gasto donde hay personal.',
      },
      {
        q: '¿Cuántos controladores necesita una nave grande?',
        a: 'Un solo MagIQtouch™ gestiona hasta 135 equipos, así que en la práctica el número de controladores lo decide la topología de la instalación y la comodidad de operación, no el límite técnico. En naves muy extensas se suele poner un punto de control por área operativa.',
      },
      {
        q: '¿Se integra con el sistema de gestión del edificio?',
        a: 'Depende de la configuración y del protocolo que use tu sistema. Es una de las preguntas que conviene plantear en la visita técnica, porque condiciona la especificación del control desde el principio.',
      },
      {
        q: '¿El equipo consume lo mismo a cualquier velocidad?',
        a: 'No, y esa es la razón de ser del control. Con motor inverter, la potencia que consume un ventilador cae mucho más rápido de lo que baja su velocidad. Operar a velocidad reducida la mayor parte del tiempo es donde se materializa buena parte del ahorro, y también donde el equipo es más silencioso.',
      },
    ],
    relacionados: ['tec-chillcel-black-opal', 'tec-watermanager', 'calculadora', 'sector-centros-de-distribucion', 'productos'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'prematuf',
    nav: 'Gabinete Prematuf™',
    linkTitle: 'Gabinete Prematuf™ anticorrosión',
    linkText: 'Por qué el gabinete de polímero importa en cubierta, intemperie y ambiente agresivo.',
    h1: 'Gabinete Prematuf™: construcción anticorrosión',
    eyebrow: 'Construcción',
    subtitle:
      'Un enfriador evaporativo vive en la azotea, expuesto al sol, a la lluvia y a su propia agua. El material del gabinete decide si sigue ahí en diez años.',
    metaTitle: 'Gabinete Prematuf™ anticorrosión',
    metaDescription:
      'El gabinete de polímero Prematuf™ no se corroe ni se oxida: por qué importa en cubierta, intemperie y ambientes industriales agresivos.',
    keywords: [
      'prematuf breezair',
      'gabinete anticorrosión enfriador',
      'enfriador evaporativo intemperie',
      'corrosión equipos climatización industrial',
      'breezair durabilidad',
    ],
    queEs: {
      title: 'El punto débil de los equipos de intemperie',
      paragraphs: [
        'Un enfriador evaporativo combina las tres condiciones que más castigan a un equipo metálico: está a la intemperie, opera con agua permanentemente y en muchas instalaciones industriales el aire que lo rodea lleva partículas o vapores agresivos. La corrosión no es un riesgo lejano, es el modo de fallo habitual.',
        'Cuando el gabinete se degrada no falla solo la carcasa: aparecen fugas, se deforman los alojamientos de los paneles, entra agua donde no debe y el equipo pierde estanqueidad y rendimiento mucho antes de que nadie decida sustituirlo.',
      ],
    },
    comoFunciona: {
      title: 'La respuesta de Breezair',
      paragraphs: [
        'Los equipos usan gabinete de polímero Prematuf™, que Seeley International describe como a prueba de corrosión: no se corroe ni se oxida. Al no ser metálico, el mecanismo de degradación que afecta a los equipos convencionales de intemperie simplemente no aplica.',
        'A esto se suma el sellado automático —el sistema AUTO de burletes— que cierra el equipo cuando no está en funcionamiento, evitando que la nave pierda aire por los conductos durante las horas de paro y protegiendo el interior del equipo cuando está detenido.',
      ],
      puntos: [
        {
          title: 'Instalación en cubierta sin penalización',
          text: 'El montaje en azotea es el más habitual porque simplifica el ducteo y libera espacio en planta. Con un gabinete que no se corroe, esa decisión no compromete la vida útil.',
        },
        {
          title: 'Ambientes industriales agresivos',
          text: 'Zonas costeras con salinidad, plantas químicas, procesos con vapores: son entornos donde un equipo metálico envejece rápido y donde el polímero mantiene la ventaja.',
        },
        {
          title: 'Sellado automático en paro',
          text: 'Cuando el equipo se detiene, el sellado impide que la nave respire por el conducto. Importa especialmente en instalaciones donde también hay calefacción en invierno.',
        },
      ],
    },
    porQueImporta: {
      title: 'Lo que hay que verificar en tu proyecto',
      items: [
        {
          title: 'Condiciones reales del emplazamiento',
          text: 'Salinidad, vapores de proceso, exposición solar y régimen de lluvias condicionan la especificación. Vale la pena declararlas en la visita técnica aunque parezcan obvias.',
        },
        {
          title: 'Accesos para mantenimiento',
          text: 'Un equipo que dura veinte años en cubierta necesita que alguien pueda llegar a él con seguridad. Las líneas de vida y los accesos se resuelven en proyecto, no después.',
        },
        {
          title: 'Términos de garantía para México',
          text: 'Seeley publica garantías extendidas sobre el gabinete de polímero en otros mercados. Las condiciones concretas aplicables en México conviene confirmarlas con nosotros por escrito antes de la compra.',
        },
      ],
    },
    datos: [
      { value: 'Polímero', label: 'Gabinete que no se corroe ni se oxida', note: 'Prematuf™, Seeley International' },
      { value: 'AUTO', label: 'Sellado automático en paro', note: 'Evita pérdidas por el conducto' },
      { value: 'Cubierta', label: 'Montaje habitual en azotea', note: 'Sin penalización por intemperie' },
    ],
    faqs: [
      {
        q: '¿Aguanta la instalación en zona costera?',
        a: 'El gabinete de polímero no sufre la corrosión salina que degrada a los equipos metálicos, lo que lo hace apropiado para ambientes con salinidad. Ahora bien, en litoral hay otra consideración más determinante: la humedad ambiente alta reduce el salto térmico que el enfriamiento evaporativo puede alcanzar. Ese es el factor a evaluar primero, con datos de bulbo húmedo locales.',
      },
      {
        q: '¿Cuánto dura un equipo Breezair en operación industrial?',
        a: 'Con mantenimiento correcto la vida útil se mide en más de una década. Los que marcan el ritmo de mantenimiento son los consumibles —paneles y bomba—, no la estructura. Las condiciones concretas de garantía aplicables en México te las damos por escrito con la cotización.',
      },
      {
        q: '¿Qué pasa con el equipo en la temporada en que no se usa?',
        a: 'El sellado automático cierra el paso de aire cuando el equipo está detenido, de modo que la nave no pierde aire por el conducto. Antes de un paro largo conviene además vaciar y limpiar el depósito, y a la vuelta revisar el estado de los paneles antes del arranque de temporada.',
      },
    ],
    relacionados: ['tec-watermanager', 'tec-chillcel-black-opal', 'blog-mantenimiento', 'sector-talleres-y-metalmecanica', 'productos'],
  },
];

export function getTecnologia(slug) {
  return TECNOLOGIAS.find((t) => t.slug === slug);
}

export function getTecnologiaSlugs() {
  return TECNOLOGIAS.map((t) => t.slug);
}
