/**
 * Contenido de las páginas de solución por sector.
 *
 * Cada entrada genera una página en /soluciones/[slug] con su propio H1,
 * metadatos, contenido técnico, FAQ (que alimenta el JSON-LD de FAQPage) y
 * bloque de enlaces internos.
 *
 * Criterio de redacción: responder la pregunta real que trae el visitante,
 * incluida la incómoda —cuándo el enfriamiento evaporativo NO es la solución—.
 * Esa honestidad es lo que hace que la página sirva de referencia y no de
 * folleto, y es también lo que Google premia con posición.
 *
 * Las cifras se presentan como reglas de dimensionamiento típicas, nunca como
 * garantía: el cálculo definitivo siempre lo firma un ingeniero sobre la
 * instalación real.
 */

export const SECTORES = [
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'naves-industriales',
    nav: 'Naves industriales',
    linkTitle: 'Climatización de naves industriales',
    linkText: 'Cómo enfriar plantas de manufactura de gran volumen sin disparar el recibo de luz.',
    h1: 'Climatización de naves industriales y plantas de manufactura',
    eyebrow: 'Manufactura',
    subtitle:
      'Enfriar una nave de 5,000 m² con aire acondicionado convencional cuesta lo que cuesta una línea de producción entera. El enfriamiento evaporativo resuelve el confort térmico del personal con una fracción del consumo eléctrico.',
    metaTitle: 'Climatización de naves industriales',
    metaDescription:
      'Enfriamiento evaporativo para naves industriales y plantas de manufactura en México, con una fracción del consumo del aire acondicionado.',
    keywords: [
      'climatización naves industriales',
      'enfriamiento naves industriales méxico',
      'aire acondicionado nave industrial',
      'enfriar planta de manufactura',
      'ventilación industrial evaporativa',
      'reducir temperatura nave industrial',
    ],
    problema: {
      title: 'El problema: una nave industrial no se climatiza como una oficina',
      paragraphs: [
        'Una nave de manufactura combina tres cosas que hacen inviable el aire acondicionado convencional: un volumen enorme, envolvente poco aislada y fuentes internas de calor que no se apagan —hornos, prensas, compresores, motores, iluminación—. Refrigerar ese aire y volver a refrigerarlo es una lucha contra la física que se paga cada mes en el recibo de CFE.',
        'El resultado habitual es que la nave simplemente no se climatiza. Se instalan ventiladores de techo que mueven aire caliente, y en los meses de mayor temperatura la planta opera con el personal a 35 °C o más. El costo no aparece en una factura, aparece en productividad, en errores, en rotación y en incapacidades por golpe de calor.',
      ],
      datos: [
        { value: '20–30 %', label: 'Caída de productividad por encima de 30 °C', note: 'Rango documentado en trabajo manual sostenido' },
        { value: '4–6', label: 'Renovaciones/hora de un sistema de AC típico', note: 'Insuficiente para una nave con carga térmica interna' },
        { value: '30–60', label: 'Renovaciones/hora de un sistema evaporativo', note: 'Barre el calor en lugar de intentar refrigerarlo' },
      ],
    },
    solucion: {
      title: 'Por qué el enfriamiento evaporativo sí funciona en una nave',
      paragraphs: [
        'El planteamiento es distinto: en lugar de enfriar y recircular el mismo aire, se introduce continuamente aire exterior enfriado por evaporación y se expulsa el aire caliente del interior. La nave se comporta como un espacio ventilado, no como una caja sellada.',
        'Eso cambia la ecuación energética por completo. Un equipo Breezair mueve del orden de 17,000 m³/h consumiendo alrededor de 1.1 a 1.5 kW: aproximadamente lo mismo que un par de secadoras de pelo, para tratar el aire de una superficie que un sistema de refrigeración cubriría con decenas de kilowatts.',
      ],
      puntos: [
        {
          title: 'La carga térmica interna deja de acumularse',
          text: 'Con 30 a 60 renovaciones por hora, el calor de hornos, motores y personal sale de la nave en lugar de sumarse al del día anterior. En procesos con calor localizado es frecuente combinar el enfriamiento general con descarga dirigida a los puestos de trabajo.',
        },
        {
          title: 'Aire 100 % exterior, filtrado',
          text: 'Nada se recircula. En naves con humos de soldadura, partículas o vapores de proceso, ese barrido continuo mejora la calidad del aire respirable al mismo tiempo que baja la temperatura, algo que un sistema de recirculación no puede ofrecer.',
        },
        {
          title: 'Las puertas de andén dejan de ser un problema',
          text: 'En un sistema refrigerado, cada apertura de portón tira el aire acondicionado a la calle. Un sistema evaporativo funciona precisamente a base de renovar aire, así que la operación logística normal no lo penaliza.',
        },
        {
          title: 'Instalación sin obra mayor',
          text: 'Los equipos se montan en cubierta o en muro con ductos cortos. No hace falta cuarto de máquinas, ni líneas de refrigerante, ni la subestación eléctrica que exigiría un sistema de refrigeración equivalente.',
        },
      ],
    },
    diseno: {
      title: 'Las tres decisiones que definen si la instalación funciona',
      items: [
        {
          title: 'Área de salida de aire',
          text: 'Es el error de diseño más común y el más caro. Si entra aire y no tiene por dónde salir, el sistema se ahoga y no enfría. Como regla de dimensionamiento se prevé alrededor de 1 m² de área libre de salida por cada 10,000 m³/h introducidos: extractores estáticos, louvers, ventanas altas o portones controlados.',
        },
        {
          title: 'Distribución, no potencia',
          text: 'Diez equipos bien repartidos enfrían mejor que quince concentrados en un extremo. El diseño parte del plano de planta, de la ubicación de los puestos de trabajo y de las fuentes de calor, no de una regla de watts por metro cuadrado.',
        },
        {
          title: 'Calidad del agua',
          text: 'El agua dura incrusta los paneles y baja la eficiencia. Los equipos Breezair integran gestión automática de purga y monitoreo de la calidad del agua; en zonas con agua especialmente dura conviene además prever un tratamiento previo.',
        },
      ],
    },
    cuandoNo: {
      title: 'Cuándo el enfriamiento evaporativo no es la respuesta',
      paragraphs: [
        'Preferimos decirlo antes de la visita técnica: hay naves donde esta tecnología no es la solución correcta, y proponerla igualmente sólo acaba en un cliente descontento.',
      ],
      casos: [
        'Procesos que exigen humedad relativa baja y controlada: electrónica sensible, algunas líneas farmacéutica, papel, materiales higroscópicos.',
        'Espacios que deben permanecer herméticos por control de contaminación o por presión diferencial.',
        'Naves donde no es viable abrir área de salida de aire suficiente y no puede modificarse la envolvente.',
        'Zonas de litoral con humedad muy alta de forma sostenida, donde el salto térmico alcanzable se reduce; ahí la solución suele ser mixta y hay que evaluarla con datos de bulbo húmedo locales.',
      ],
    },
    faqs: [
      {
        q: '¿Cuánto baja la temperatura dentro de una nave industrial?',
        a: 'Depende del bulbo húmedo del aire exterior, no de la temperatura que marca el termómetro. En condiciones secas —el interior del país, el Bajío, el norte— es habitual un salto de 8 a 12 °C respecto al exterior. En ambientes húmedos el salto se reduce, aunque la sensación térmica mejora también por el movimiento de aire. El cálculo se hace con los datos climáticos de tu localidad.',
      },
      {
        q: '¿Cuántos equipos necesita una nave de 3,000 m²?',
        a: 'La cifra sale del volumen de la nave y de las renovaciones por hora objetivo, no de la superficie. Para una nave de 3,000 m² con 7 metros de altura y un objetivo de 30 renovaciones por hora hablamos del orden de 630,000 m³/h, que se reparten entre los equipos según su capacidad y la distribución de la planta. Es exactamente el cálculo que hacemos en la propuesta técnica.',
      },
      {
        q: '¿Cuánta agua consume el sistema?',
        a: 'Un equipo industrial consume del orden de 10 a 40 litros por hora según la temperatura y la humedad del día: cuanto más seco el aire, más evapora y más enfría. Es agua que se evapora, no que se descarga, salvo la purga automática que mantiene la calidad del circuito.',
      },
      {
        q: '¿Sirve si la nave tiene portones abiertos todo el día?',
        a: 'Sí, y es una de sus ventajas frente al aire acondicionado. El sistema trabaja renovando aire, así que la apertura de andenes no destruye la inversión como ocurre con un sistema refrigerado. De hecho, esos portones suelen formar parte del área de salida de aire prevista en el diseño.',
      },
      {
        q: '¿Qué mantenimiento requiere?',
        a: 'Revisión y limpieza de paneles, verificación del sistema de distribución de agua y limpieza del depósito, con una frecuencia que depende de la calidad del agua y de las horas de operación. Es un mantenimiento sensiblemente más simple y barato que el de un sistema de refrigeración con compresores y refrigerantes.',
      },
    ],
    relacionados: ['sector-centros-de-distribucion', 'sector-talleres-y-metalmecanica', 'producto-tbsi', 'calculadora', 'blog-eficiencia'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'centros-de-distribucion',
    nav: 'Centros de distribución',
    linkTitle: 'Climatización de centros de distribución y almacenes',
    linkText: 'Confort térmico en naves logísticas con andenes en operación continua.',
    h1: 'Climatización de centros de distribución, almacenes y naves logísticas',
    eyebrow: 'Logística',
    subtitle:
      'Un almacén es el peor escenario posible para el aire acondicionado: techos altos, superficie enorme y portones que se abren cientos de veces al día. Es, en cambio, el escenario ideal para el enfriamiento evaporativo.',
    metaTitle: 'Climatización de centros de distribución',
    metaDescription:
      'Enfriamiento evaporativo para centros de distribución y almacenes: confort en picking y andenes sin que los portones tiren la inversión.',
    keywords: [
      'climatización centros de distribución',
      'enfriar almacén industrial',
      'aire acondicionado nave logística',
      'ventilación almacén méxico',
      'confort térmico centro distribución',
      'enfriamiento evaporativo logística',
    ],
    problema: {
      title: 'El problema: calor acumulado donde más se trabaja',
      paragraphs: [
        'En un centro de distribución el calor se estratifica: sube y se queda bajo la cubierta, que a su vez se calienta con el sol y devuelve radiación hacia abajo. En los pasillos de picking, a la altura donde efectivamente trabaja la gente, la temperatura de la tarde supera con facilidad la del exterior.',
        'A eso se suma la carga interna que nadie contabiliza: montacargas, bandas transportadoras, iluminación, equipos de carga de baterías y el propio metabolismo de decenas de operadores moviéndose durante ocho horas. Y todo ello en una nave cuyos portones se abren y cierran de forma continua.',
      ],
      datos: [
        { value: '+5 a +8 °C', label: 'Diferencia típica entre exterior y zona alta', note: 'Estratificación bajo cubierta sin ventilación' },
        { value: 'Cientos', label: 'Aperturas de andén al día', note: 'Cada una anula el aire acondicionado convencional' },
        { value: 'Horas pico', label: 'El calor coincide con el turno de mayor volumen', note: 'Tarde de verano y cierre de rutas' },
      ],
    },
    solucion: {
      title: 'Por qué encaja con la operación logística',
      paragraphs: [
        'El enfriamiento evaporativo no intenta sellar la nave: introduce aire exterior enfriado y desplaza el aire caliente hacia afuera. En un edificio que por definición está abierto, esa es la única estrategia que sobrevive a la operación real.',
        'Además, el sistema puede zonificarse. No hace falta climatizar 40,000 m² de estantería: se concentra el caudal en las áreas de picking, packing, andenes y puestos fijos, donde está la gente, y se dejan sin tratar las zonas de almacenamiento puro.',
      ],
      puntos: [
        {
          title: 'Enfriamiento por zonas de trabajo',
          text: 'El presupuesto se dirige a donde hay personas. Un mismo almacén puede tener tratamiento intensivo en packing y sólo ventilación en pasillos de reserva, con un costo total muy inferior al de climatizar todo el volumen.',
        },
        {
          title: 'Los andenes no penalizan la inversión',
          text: 'Con un sistema refrigerado, cada portón abierto tira dinero a la calle. Aquí la renovación de aire es el mecanismo de funcionamiento, así que la operación normal de carga y descarga no reduce la eficacia.',
        },
        {
          title: 'Menos carga eléctrica contratada',
          text: 'Al no haber compresores, la demanda eléctrica es una fracción de la de un sistema refrigerado equivalente. En muchos casos evita tener que ampliar la subestación, un costo oculto que suele decidir el proyecto.',
        },
        {
          title: 'Compatible con almacenamiento de producto seco',
          text: 'El aumento de humedad relativa es moderado y controlable con un diseño correcto de renovaciones. Para producto sensible a la humedad se define qué zonas quedan fuera del alcance del sistema.',
        },
      ],
    },
    diseno: {
      title: 'Claves del diseño en una nave logística',
      items: [
        {
          title: 'Mapear dónde está la gente, no dónde está el producto',
          text: 'El primer plano que pedimos es el de puestos de trabajo y flujos de operación. Determina la ubicación de los equipos y suele reducir el número necesario respecto a un enfoque de cobertura total.',
        },
        {
          title: 'Aprovechar la altura para la salida de aire',
          text: 'Los extractores estáticos o los louvers en la parte alta de la nave hacen de chimenea: el aire caliente ya está arriba, sólo hay que darle salida. Es la manera más barata de resolver el área de escape que el sistema necesita.',
        },
        {
          title: 'Coordinar con protección contra incendios',
          text: 'La instalación en cubierta y las aperturas de ventilación deben revisarse contra el diseño de rociadores y de extracción de humos. Se resuelve en proyecto, pero hay que plantearlo desde el principio.',
        },
      ],
    },
    cuandoNo: {
      title: 'Dónde no lo recomendamos',
      paragraphs: [
        'En logística hay dos casos claros en los que esta tecnología no es la adecuada.',
      ],
      casos: [
        'Almacenamiento con control estricto de humedad relativa: farmacéutica, electrónica, tabaco, papel, algunos alimentos secos.',
        'Cámaras de frío o zonas de temperatura controlada, que son un problema de refrigeración y no de confort térmico.',
        'Naves sin posibilidad de habilitar área de salida de aire y sin margen para modificar la cubierta o la fachada.',
      ],
    },
    faqs: [
      {
        q: '¿El enfriamiento evaporativo humedece la mercancía?',
        a: 'No de forma perceptible cuando el sistema está bien dimensionado. El aire sale de los paneles enfriado y con mayor humedad relativa, pero al mezclarse con el volumen de la nave y renovarse de 20 a 40 veces por hora la humedad se mantiene en rangos normales de confort. Para producto sensible a la humedad se excluye esa zona del diseño.',
      },
      {
        q: '¿Se puede climatizar sólo el área de picking?',
        a: 'Sí, y en la mayoría de proyectos logísticos es lo que recomendamos. Concentrar el caudal en picking, packing y andenes reduce de forma importante el número de equipos y el consumo, sin sacrificar el confort donde realmente hay personal.',
      },
      {
        q: '¿Cómo afecta a los montacargas eléctricos y su zona de carga?',
        a: 'La ventilación continua favorece a las áreas de carga de baterías, que necesitan renovación de aire por la generación de hidrógeno. Es una zona que conviene revisar en el diseño porque suele tener requisitos propios de ventilación normativa.',
      },
      {
        q: '¿Cuánto tarda la instalación en una nave en operación?',
        a: 'El montaje se hace por fases y en su mayor parte sobre cubierta, sin interferir con el piso de operación. El plazo depende del número de equipos y de las adecuaciones eléctricas y de salida de aire; se define en la propuesta técnica junto con el plan de obra.',
      },
    ],
    relacionados: ['sector-naves-industriales', 'sector-industria-alimentaria', 'producto-tbsi', 'calculadora', 'blog-caso-exito'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'industria-alimentaria',
    nav: 'Industria alimentaria',
    linkTitle: 'Climatización para industria alimentaria',
    linkText: 'Confort térmico en plantas de alimentos y bebidas con aire 100 % exterior filtrado.',
    h1: 'Climatización para plantas de alimentos y bebidas',
    eyebrow: 'Alimentos y bebidas',
    subtitle:
      'En una planta de alimentos el calor no sólo incomoda: acelera procesos que no deberían acelerarse y complica el cumplimiento de las condiciones de trabajo. El aire 100 % exterior filtrado, sin recirculación, juega a favor.',
    metaTitle: 'Climatización para industria alimentaria',
    metaDescription:
      'Enfriamiento evaporativo para plantas de alimentos y bebidas: aire 100 % exterior filtrado, sin recirculación y sin gases refrigerantes.',
    keywords: [
      'climatización industria alimentaria',
      'enfriamiento planta de alimentos',
      'ventilación industria alimentaria méxico',
      'aire acondicionado planta de bebidas',
      'confort térmico procesamiento alimentos',
    ],
    problema: {
      title: 'El problema: calor de proceso en un entorno que exige higiene',
      paragraphs: [
        'Hornos, túneles de cocción, autoclaves, líneas de pasteurización, lavado con agua caliente: la industria alimentaria genera calor de proceso de forma continua y concentrada. Ese calor se queda en la planta y convierte áreas enteras en puestos de trabajo penosos.',
        'La respuesta intuitiva —recircular aire refrigerado— choca de frente con el requisito higiénico. Recircular es mover el aire de una zona a otra, con lo que eso implica en un entorno donde el control de contaminación cruzada es parte del sistema de inocuidad.',
      ],
      datos: [
        { value: '100 %', label: 'Aire exterior, sin recirculación', note: 'Nada del aire de proceso vuelve a la planta' },
        { value: 'Continua', label: 'Renovación durante todo el turno', note: 'Diluye calor, vapor y olores de proceso' },
        { value: 'Sin HFC', label: 'No usa gases refrigerantes', note: 'Sólo agua y aire' },
      ],
    },
    solucion: {
      title: 'Por qué el aire 100 % exterior es una ventaja aquí',
      paragraphs: [
        'La característica que en otros sectores es simplemente eficiente, en alimentaria es un argumento de proceso: el sistema no recircula nada. Toma aire del exterior, lo filtra, lo enfría por evaporación y lo introduce; el aire de la planta sale al exterior arrastrando calor, vapor y olores.',
        'Esa renovación permanente diluye la carga térmica y la humedad de proceso al mismo tiempo, y evita el escenario de un sistema de recirculación transportando aire entre zonas de distinto nivel de riesgo.',
      ],
      puntos: [
        {
          title: 'Sin gases refrigerantes en el circuito',
          text: 'El sistema enfría con agua. En una planta de alimentos eso elimina de raíz la preocupación por fugas de refrigerante sobre líneas de producto y simplifica el análisis de peligros.',
        },
        {
          title: 'Filtración del aire de entrada',
          text: 'El aire exterior pasa por los paneles y por la etapa de filtración antes de entrar. La especificación del nivel de filtración se define según la zona y su clasificación higiénica.',
        },
        {
          title: 'Alivio para las zonas calientes',
          text: 'Hornos, empaque en caliente, lavado de equipo: son áreas donde el enfriamiento localizado tiene un efecto inmediato en el confort del operador y en la rotación de personal.',
        },
        {
          title: 'Materiales preparados para lavado y ambiente húmedo',
          text: 'La gama industrial Breezair usa gabinetes con tratamiento anticorrosión, pensados para instalaciones expuestas a intemperie y ambientes agresivos.',
        },
      ],
    },
    diseno: {
      title: 'Consideraciones específicas del sector',
      items: [
        {
          title: 'Zonificación por nivel higiénico',
          text: 'No todas las áreas se tratan igual. Zonas de producto expuesto, zonas de empaque y zonas de servicio tienen requisitos distintos de aire, y el diseño debe respetar los diferenciales de presión previstos en el sistema de inocuidad.',
        },
        {
          title: 'Higiene del circuito de agua',
          text: 'El depósito y la distribución de agua forman parte del plan de limpieza. Los equipos integran monitoreo de calidad de agua y purga automática; el protocolo de sanitización se define junto con el equipo de calidad de la planta.',
        },
        {
          title: 'Compatibilidad con áreas de humedad controlada',
          text: 'Salas de secado, cámaras de maduración o zonas de producto higroscópico se dejan fuera del alcance del sistema o se resuelven con otra tecnología. Se define en la etapa de proyecto.',
        },
      ],
    },
    cuandoNo: {
      title: 'Dónde no aplica',
      paragraphs: [
        'En alimentaria la línea es especialmente clara y conviene trazarla desde el principio.',
      ],
      casos: [
        'Salas con humedad relativa especificada por proceso: secado, maduración, chocolatería, panificación en fases concretas.',
        'Áreas de producto expuesto que operan bajo sobrepresión con aire tratado y filtración absoluta.',
        'Cámaras de refrigeración y congelación, que son un problema de refrigeración, no de confort.',
        'Zonas donde el sistema de inocuidad prohíba la introducción directa de aire exterior sin tratamiento adicional.',
      ],
    },
    faqs: [
      {
        q: '¿Es compatible con un sistema HACCP o de inocuidad certificado?',
        a: 'Se integra como cualquier otro sistema de manejo de aire: entra en el análisis de peligros, con sus puntos de control sobre calidad de agua, filtración de entrada y limpieza del circuito. El hecho de no recircular aire y de no usar gases refrigerantes suele simplificar ese análisis frente a un sistema de refrigeración convencional. La validación final siempre corresponde al equipo de calidad de la planta.',
      },
      {
        q: '¿Sube la humedad de la planta y eso afecta al producto?',
        a: 'El aire sale de los paneles con mayor humedad relativa, pero con una renovación adecuada la humedad de la planta se mantiene en rangos de confort. Las áreas con humedad especificada por proceso se excluyen del alcance en el diseño. Es una de las primeras cosas que se definen en la visita técnica.',
      },
      {
        q: '¿Qué mantenimiento higiénico requiere el circuito de agua?',
        a: 'Limpieza y sanitización periódicas del depósito y del sistema de distribución, además del control de calidad del agua que el equipo realiza de forma automática con purga programada. La frecuencia se ajusta a la dureza del agua local y a los protocolos de la planta.',
      },
      {
        q: '¿Se puede instalar en una planta que ya está en operación?',
        a: 'Sí. El montaje se concentra en cubierta y fachada, y se planifica por fases y por zonas para no interferir con las líneas en producción. Los trabajos que afectan al interior se programan en paros o cambios de turno.',
      },
    ],
    relacionados: ['sector-centros-de-distribucion', 'sector-naves-industriales', 'producto-exs', 'calculadora', 'blog-mantenimiento'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'talleres-y-metalmecanica',
    nav: 'Talleres y metalmecánica',
    linkTitle: 'Climatización de talleres y metalmecánica',
    linkText: 'Calor radiante de soldadura, fundición y maquinado: enfriamiento y renovación de aire.',
    h1: 'Climatización de talleres, soldadura y metalmecánica',
    eyebrow: 'Metalmecánica',
    subtitle:
      'Soldadura, corte, fundición y maquinado concentran calor radiante y humos en el mismo lugar donde está el operador. El enfriamiento evaporativo ataca las dos cosas a la vez: baja la temperatura y renueva el aire.',
    metaTitle: 'Climatización de talleres y metalmecánica',
    metaDescription:
      'Enfriamiento evaporativo para talleres de soldadura, fundición y metalmecánica: baja la temperatura y renueva el aire del puesto de trabajo.',
    keywords: [
      'climatización taller industrial',
      'enfriar taller de soldadura',
      'ventilación metalmecánica',
      'enfriamiento fundición méxico',
      'extracción humos soldadura enfriamiento',
      'aire acondicionado taller mecánico',
    ],
    problema: {
      title: 'El problema: calor radiante donde está la persona',
      paragraphs: [
        'En metalmecánica el calor no está repartido: está concentrado en el puesto de trabajo. Un arco de soldadura, un horno de tratamiento térmico o una máquina de corte por plasma radian directamente sobre el operador, que además trabaja con equipo de protección personal que impide disipar el calor corporal.',
        'La climatización convencional no llega a este escenario. Refrigerar el volumen de un taller abierto, con portones y ventilación forzada de humos, es tirar dinero. Y el ventilador de pedestal sólo mueve aire caliente sobre una persona que ya está sobrecalentada.',
      ],
      datos: [
        { value: 'Radiante', label: 'El calor va directo al operador', note: 'No se resuelve enfriando el volumen total' },
        { value: 'EPP', label: 'Careta, mandil y guantes impiden disipar', note: 'La sensación térmica real supera a la medida' },
        { value: 'Humos', label: 'El aire debe renovarse, no recircularse', note: 'Un sistema cerrado agrava el problema' },
      ],
    },
    solucion: {
      title: 'Enfriamiento dirigido más renovación de aire',
      paragraphs: [
        'La estrategia correcta en un taller no es climatizar el edificio: es entregar aire fresco donde está la persona y sacar el aire cargado. El enfriamiento evaporativo hace las dos cosas con el mismo equipo.',
        'El aire enfriado se dirige hacia los puestos de trabajo mediante ductos o difusores orientables, generando movimiento de aire sobre el operador —lo que mejora la sensación térmica muy por encima del descenso de temperatura medido— mientras el aire cargado de humos y calor sale por la parte alta.',
      ],
      puntos: [
        {
          title: 'Descarga orientada al puesto',
          text: 'El caudal se dirige a las estaciones de soldadura, bancos de trabajo y cabinas de máquina. Es la forma más eficiente de gastar el presupuesto: enfriar personas, no metros cúbicos vacíos.',
        },
        {
          title: 'Complementa la extracción localizada',
          text: 'La extracción de humos saca aire del taller y necesita reponerlo desde algún lado. Si esa reposición no está prevista, entra aire caliente por las rendijas. El sistema evaporativo aporta aire de reposición ya enfriado y filtrado.',
        },
        {
          title: 'Resiste el ambiente del taller',
          text: 'Polvo metálico, chispa, humedad y producto químico. Los gabinetes con tratamiento anticorrosión y el mantenimiento sencillo de los paneles se comportan mejor aquí que un equipo de refrigeración con serpentines expuestos.',
        },
        {
          title: 'Sin obra ni ampliación eléctrica',
          text: 'La mayoría de talleres no tiene margen en su acometida para un sistema refrigerado. Un sistema evaporativo dimensionado para el mismo espacio suele caber en la capacidad instalada existente.',
        },
      ],
    },
    diseno: {
      title: 'Cómo se plantea la instalación',
      items: [
        {
          title: 'Primero el mapa de puestos y de fuentes de calor',
          text: 'Se ubican las estaciones de trabajo, las máquinas que radian calor y los recorridos del personal. Ese plano define la posición y la orientación de las descargas.',
        },
        {
          title: 'Balance con la extracción existente',
          text: 'Si el taller ya tiene extracción de humos, hay que calcular el aire de reposición para que los dos sistemas trabajen juntos y no uno contra el otro.',
        },
        {
          title: 'Puertas y portones como parte del sistema',
          text: 'En un taller los portones suelen estar abiertos. Bien planteados, son el área de salida de aire que el sistema necesita y no un problema a resolver.',
        },
      ],
    },
    cuandoNo: {
      title: 'Casos en los que no lo proponemos',
      paragraphs: [
        'Hay procesos de taller donde el aumento de humedad es incompatible con el trabajo.',
      ],
      casos: [
        'Cabinas de pintura y áreas de curado, que tienen requisitos propios de temperatura y humedad controladas.',
        'Salas de metrología o de instrumentos calibrados con condiciones ambientales especificadas.',
        'Zonas de almacenamiento de acero acabado o herramienta sensible a la oxidación sin protección.',
        'Talleres completamente cerrados sin posibilidad de habilitar salida de aire.',
      ],
    },
    faqs: [
      {
        q: '¿La humedad adicional oxida las piezas y la herramienta?',
        a: 'Con un diseño correcto la humedad relativa se mantiene en rangos normales de confort y el aire está en movimiento constante, que es precisamente la condición que evita la condensación. Las zonas de almacenamiento de acabado o de herramienta de precisión se dejan fuera del alcance del sistema si hay preocupación específica.',
      },
      {
        q: '¿Sustituye a la extracción de humos de soldadura?',
        a: 'No, son sistemas complementarios y ambos son necesarios. La extracción localizada captura el humo en el origen, que es lo que exige la normativa de seguridad. El sistema evaporativo aporta el aire de reposición enfriado que esa extracción necesita para funcionar bien.',
      },
      {
        q: '¿Funciona en un taller con portones abiertos?',
        a: 'Sí. A diferencia del aire acondicionado, el sistema trabaja renovando aire, así que un portón abierto no anula la inversión: forma parte del recorrido previsto del aire.',
      },
      {
        q: '¿Se puede enfriar sólo una zona del taller?',
        a: 'Es lo más habitual y lo más rentable. Se concentran los equipos sobre las estaciones de trabajo con mayor carga térmica y mayor permanencia de personal, y se deja el resto del taller con ventilación general.',
      },
    ],
    relacionados: ['sector-naves-industriales', 'sector-espacios-comerciales', 'producto-icon', 'calculadora', 'blog-eficiencia'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'agroindustria',
    nav: 'Agroindustria',
    linkTitle: 'Climatización agroindustrial y de granjas',
    linkText: 'Control térmico en granjas, invernaderos y naves de producción animal.',
    h1: 'Climatización agroindustrial: granjas, invernaderos y naves de producción',
    eyebrow: 'Agroindustria',
    subtitle:
      'En producción animal y vegetal el calor no es una cuestión de confort: es una variable productiva. El estrés térmico se mide directamente en conversión alimenticia, en postura y en rendimiento de cultivo.',
    metaTitle: 'Climatización agroindustrial y de granjas',
    metaDescription:
      'Enfriamiento evaporativo para granjas, invernaderos y naves agroindustriales: control del estrés térmico en los días que deciden la temporada.',
    keywords: [
      'climatización granjas méxico',
      'enfriamiento evaporativo avícola',
      'estrés térmico producción animal',
      'enfriamiento invernadero',
      'ventilación granja porcina',
      'cooling agroindustrial',
    ],
    problema: {
      title: 'El problema: el estrés térmico se paga en producción',
      paragraphs: [
        'Por encima de su zona de confort térmico, un animal reduce el consumo de alimento y desvía energía a disipar calor. La consecuencia es directa y medible: menor ganancia de peso, caída de postura, peor conversión alimenticia y aumento de la mortalidad en los picos de calor.',
        'En invernadero el efecto es equivalente sobre la planta: por encima del rango óptimo se cierran estomas, se frena la fotosíntesis y se pierde calidad y calibre. En ambos casos, un verano mal gestionado se lleva el margen de la temporada.',
      ],
      datos: [
        { value: 'Directo', label: 'El calor impacta la conversión alimenticia', note: 'Menor consumo, menor ganancia' },
        { value: 'Picos', label: 'La mortalidad se concentra en olas de calor', note: 'Días concretos, pérdida concentrada' },
        { value: 'Estacional', label: 'El equipo se amortiza en la temporada crítica', note: 'Se dimensiona para el peor escenario del año' },
      ],
    },
    solucion: {
      title: 'Por qué el enfriamiento evaporativo domina en agroindustria',
      paragraphs: [
        'Es la tecnología de referencia del sector, y por buenas razones: la producción animal ya requiere renovación de aire constante para controlar amoniaco, humedad y polvo. Añadir enfriamiento evaporativo a ese flujo de aire aprovecha una infraestructura que en muchos casos ya existe.',
        'Además, el ambiente de una granja o un invernadero suele tolerar bien —o incluso agradecer— el aumento de humedad relativa que otros sectores tienen que vigilar.',
      ],
      puntos: [
        {
          title: 'Se suma a la ventilación que ya necesitas',
          text: 'La nave de producción ya mueve aire por razones sanitarias. El enfriamiento evaporativo trata ese mismo aire de entrada, con lo que el costo incremental por grado de descenso es muy bajo.',
        },
        {
          title: 'Consumo eléctrico compatible con el medio rural',
          text: 'Muchas instalaciones agroindustriales tienen acometidas limitadas o dependen de generación propia. La diferencia de demanda frente a un sistema refrigerado es lo que hace la solución viable.',
        },
        {
          title: 'Sólo agua y aire',
          text: 'Sin gases refrigerantes ni circuitos a presión. En una explotación distribuida, con mantenimiento propio, la simplicidad del sistema es un valor operativo.',
        },
        {
          title: 'Dimensionado para el pico, no para el promedio',
          text: 'El sistema se calcula contra los días críticos del año, que son los que concentran la pérdida productiva. Es la lógica inversa a la de una oficina.',
        },
      ],
    },
    diseno: {
      title: 'Puntos críticos del proyecto',
      items: [
        {
          title: 'Recorrido del aire de un extremo a otro',
          text: 'En naves de producción animal el patrón habitual es entrada por un frente y extracción por el opuesto, de forma que el aire barre toda la nave. La ubicación de entradas y extractores define la uniformidad del ambiente.',
        },
        {
          title: 'Humedad relativa como límite operativo',
          text: 'Hay un punto en el que más humedad deja de ayudar al animal aunque baje la temperatura. El diseño trabaja con el índice de temperatura-humedad de la especie, no sólo con grados.',
        },
        {
          title: 'Calidad y disponibilidad de agua',
          text: 'En el medio rural el agua suele ser dura y su suministro no siempre es constante. Ambas cosas condicionan el tratamiento previo y el dimensionado del depósito.',
        },
      ],
    },
    cuandoNo: {
      title: 'Límites a considerar',
      paragraphs: [
        'La tecnología encaja bien en el sector, pero no en cualquier condición.',
      ],
      casos: [
        'Regiones con humedad relativa alta sostenida durante toda la temporada cálida, donde el salto térmico alcanzable es pequeño.',
        'Instalaciones sin suministro de agua fiable durante los meses críticos.',
        'Procesos de secado o almacenamiento de grano, donde el aumento de humedad es contraproducente.',
        'Espacios que requieren temperatura fija y controlada por debajo de la de bulbo húmedo ambiente.',
      ],
    },
    faqs: [
      {
        q: '¿Cuánta humedad tolera una nave avícola o porcina?',
        a: 'El criterio no es la humedad por sí sola sino el índice combinado de temperatura y humedad de la especie y su etapa productiva. Por eso el diseño no persigue el máximo descenso de temperatura posible, sino el punto donde el índice combinado es más favorable para el animal. Es un cálculo que se hace con los datos climáticos de la zona.',
      },
      {
        q: '¿Se puede integrar con la ventilación e instalación existente?',
        a: 'En la mayoría de casos sí, y es el escenario más rentable. Si la nave ya tiene extracción y entradas de aire dimensionadas, el sistema evaporativo trata el aire de entrada aprovechando esa infraestructura. Se evalúa en la visita técnica.',
      },
      {
        q: '¿Qué pasa si falla el suministro de agua en plena ola de calor?',
        a: 'El equipo sigue funcionando como ventilación forzada, moviendo aire sin enfriamiento evaporativo. Por eso el dimensionado del depósito y la fiabilidad del suministro son parte del proyecto en instalaciones rurales.',
      },
      {
        q: '¿Sirve para invernaderos?',
        a: 'Sí, es una aplicación clásica del enfriamiento evaporativo, normalmente combinada con la estrategia de ventilación y sombreo del propio invernadero. El diseño depende del cultivo, de su rango óptimo y de las condiciones climáticas locales.',
      },
    ],
    relacionados: ['sector-industria-alimentaria', 'sector-naves-industriales', 'producto-custom', 'calculadora', 'blog-mantenimiento'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'espacios-comerciales',
    nav: 'Espacios comerciales',
    linkTitle: 'Climatización de espacios comerciales y deportivos',
    linkText: 'Gimnasios, terrazas, plazas y áreas semiabiertas donde el aire acondicionado no llega.',
    h1: 'Climatización de espacios comerciales, deportivos y áreas semiabiertas',
    eyebrow: 'Comercial y deportivo',
    subtitle:
      'Gimnasios, terrazas de restaurante, canchas techadas, plazas y áreas de acceso: espacios donde el aire acondicionado convencional es imposible o insostenible, y donde la temperatura decide si el cliente se queda.',
    metaTitle: 'Climatización de espacios comerciales',
    metaDescription:
      'Enfriamiento evaporativo para gimnasios, terrazas y espacios semiabiertos donde el aire acondicionado no puede instalarse.',
    keywords: [
      'climatización gimnasios',
      'enfriar terraza restaurante',
      'climatización espacios semiabiertos',
      'enfriamiento evaporativo comercial',
      'aire acondicionado cancha techada',
      'climatizar plaza comercial',
    ],
    problema: {
      title: 'El problema: espacios que no se pueden sellar',
      paragraphs: [
        'Una terraza, una cancha techada o el acceso de una plaza comercial no tienen envolvente cerrada. Intentar refrigerarlos con aire acondicionado es enfriar la calle: el consumo se dispara y el resultado en el punto donde está la gente es marginal.',
        'En un gimnasio el problema es otro pero igual de exigente: cincuenta personas haciendo ejercicio generan una carga térmica y de humedad enorme, y necesitan renovación de aire real, no aire recirculado. Es un caso donde el sistema convencional se queda corto en las horas pico, que son justamente las que definen la percepción del socio.',
      ],
      datos: [
        { value: 'Abierto', label: 'Sin envolvente que se pueda sellar', note: 'La refrigeración convencional no aplica' },
        { value: 'Horas pico', label: 'La carga se concentra en pocas horas', note: 'Tarde-noche en gimnasios y restaurantes' },
        { value: 'Percepción', label: 'La temperatura decide si el cliente vuelve', note: 'Impacto directo en permanencia y ticket' },
      ],
    },
    solucion: {
      title: 'Enfriamiento en espacios abiertos: cuando es la única opción viable',
      paragraphs: [
        'En un espacio semiabierto el enfriamiento evaporativo no compite con el aire acondicionado: es la alternativa que hace posible climatizar donde el aire acondicionado no puede instalarse. Introduce aire exterior enfriado sobre la zona ocupada y no depende en absoluto de que el espacio esté cerrado.',
        'El efecto sobre el cliente es doble: la temperatura baja y el aire se mueve. En una terraza esa combinación es lo que convierte una mesa inutilizable a las cinco de la tarde en una mesa que se ocupa.',
      ],
      puntos: [
        {
          title: 'Funciona sin cerrar el espacio',
          text: 'Terrazas, pérgolas, andadores, accesos, zonas de espera. No hay que modificar la arquitectura ni renunciar al concepto abierto del local.',
        },
        {
          title: 'Renovación real para gimnasios',
          text: 'Aire 100 % exterior, sin recirculación, en un entorno donde la calidad del aire es parte del servicio. Diluye humedad, olor y CO₂ generados por la propia actividad.',
        },
        {
          title: 'Costo de operación asumible para un negocio',
          text: 'El consumo por equipo es del orden de un electrodoméstico. Para un restaurante o un gimnasio, la diferencia frente a un sistema refrigerado es lo que hace que el proyecto sea rentable.',
        },
        {
          title: 'Instalación discreta y por fases',
          text: 'Los equipos pueden montarse en cubierta, en muro o en formato móvil según el espacio, y ampliarse conforme crece el negocio o se habilitan nuevas zonas.',
        },
      ],
    },
    diseno: {
      title: 'Qué define el resultado en un espacio comercial',
      items: [
        {
          title: 'Enfriar la zona ocupada, no el volumen',
          text: 'En espacios abiertos el objetivo es la zona donde está la gente: mesas, aparatos, fila de acceso. Se dirige el caudal a esa altura y a ese perímetro en lugar de intentar tratar todo el espacio.',
        },
        {
          title: 'Cuidar el ruido en el punto de uso',
          text: 'En un restaurante o un gimnasio el nivel sonoro es parte de la experiencia. La ubicación de los equipos y la velocidad de operación se eligen con ese criterio, no sólo con el térmico.',
        },
        {
          title: 'Estética e integración',
          text: 'En espacios de cara al cliente la solución debe integrarse con el diseño del local. Es una restricción de proyecto legítima que condiciona formato y ubicación de los equipos.',
        },
      ],
    },
    cuandoNo: {
      title: 'Dónde no es la solución',
      paragraphs: ['En el ámbito comercial hay escenarios claros donde conviene otra tecnología.'],
      casos: [
        'Espacios cerrados con aforo alto donde ya existe aire acondicionado y sólo se busca reforzarlo: ahí el problema suele ser de renovación de aire, no de enfriamiento.',
        'Zonas de venta de producto sensible a la humedad, como electrónica o textil de alta gama en exhibición.',
        'Espacios donde no puede garantizarse la salida del aire introducido.',
        'Localidades de litoral con humedad alta sostenida, donde el descenso de temperatura alcanzable es limitado y el efecto se apoya sobre todo en el movimiento de aire.',
      ],
    },
    faqs: [
      {
        q: '¿Funciona de verdad en una terraza abierta?',
        a: 'Sí, siempre que el aire enfriado se dirija a la zona ocupada. En un espacio abierto no se enfría el volumen total —eso sería imposible— sino el aire que llega a las mesas. El efecto combinado del descenso de temperatura y del movimiento de aire es lo que hace utilizable una terraza en horas de calor.',
      },
      {
        q: '¿Moja a los clientes o a las mesas?',
        a: 'No. El agua se evapora dentro del equipo, en los paneles; lo que sale es aire frío, no agua pulverizada. Es una diferencia importante frente a los sistemas de nebulización, que sí proyectan gotas.',
      },
      {
        q: '¿Cuánto ruido hace en un restaurante o gimnasio?',
        a: 'Depende del modelo, de la ubicación y de la velocidad a la que opere. En espacios de cara al cliente se dimensiona con margen para trabajar a velocidad reducida la mayor parte del tiempo, que es donde el nivel sonoro es más bajo. Es un criterio de diseño que planteamos desde la propuesta.',
      },
      {
        q: '¿Hay equipos móviles para eventos o temporadas?',
        a: 'Sí, existen formatos móviles pensados para cubrir zonas concretas o necesidades estacionales, sin instalación fija. Son una buena forma de resolver una temporada crítica o de probar el resultado antes de una instalación permanente.',
      },
    ],
    relacionados: ['sector-talleres-y-metalmecanica', 'sector-naves-industriales', 'producto-icon', 'calculadora', 'contacto'],
  },
];

export function getSector(slug) {
  return SECTORES.find((s) => s.slug === slug);
}

export function getSectorSlugs() {
  return SECTORES.map((s) => s.slug);
}
