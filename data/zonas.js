/**
 * Páginas de cobertura por zona climática e industrial de México.
 *
 * Por qué existen y por qué no son relleno: el rendimiento del enfriamiento
 * evaporativo depende del bulbo húmedo del aire exterior, así que la respuesta
 * a «¿me sirve esta tecnología?» es literalmente distinta en Mexicali que en
 * Villahermosa. Nadie en el mercado mexicano publica esa distinción.
 *
 * Se agrupa por zona y no por ciudad suelta: una página por corredor industrial
 * cubre más búsquedas y tiene contenido real que decir, mientras que veinte
 * páginas «climatización en <ciudad>» serían la misma plantilla repetida.
 *
 * Criterio de honestidad: la página del Sureste dice abiertamente que ahí la
 * tecnología rinde menos. Filtra prospectos que nunca iban a quedar satisfechos
 * y es lo que convierte estas páginas en referencia consultable.
 *
 * Las temperaturas son valores típicos de verano, orientativos. El cálculo de
 * proyecto se hace siempre con datos de bulbo húmedo del emplazamiento.
 */

export const ZONAS = [
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'bajio',
    nav: 'El Bajío',
    linkTitle: 'Climatización industrial en el Bajío',
    linkText: 'Querétaro, León, Silao, Irapuato, Aguascalientes y San Luis Potosí: la mejor zona del país para esta tecnología.',
    h1: 'Climatización industrial en el Bajío',
    eyebrow: 'Corredor industrial del Bajío',
    aptitud: 'alta',
    aptitudLabel: 'Aptitud alta',
    subtitle:
      'Altitud, aire seco y un corredor automotriz y aeroespacial lleno de naves de gran volumen. Si existe una zona de México diseñada para el enfriamiento evaporativo, es esta.',
    metaTitle: 'Climatización industrial en el Bajío',
    metaDescription:
      'Enfriamiento evaporativo en Querétaro, León, Silao, Irapuato, Aguascalientes y San Luis Potosí: clima seco de altura, rendimiento óptimo.',
    keywords: [
      'climatización industrial bajío',
      'climatización industrial querétaro',
      'enfriamiento naves industriales león',
      'aire acondicionado industrial san luis potosí',
      'enfriamiento evaporativo aguascalientes',
      'climatización nave industrial silao',
    ],
    ciudades: ['Querétaro', 'El Marqués', 'León', 'Silao', 'Irapuato', 'Celaya', 'Aguascalientes', 'San Luis Potosí'],
    clima: {
      title: 'Por qué el clima del Bajío juega a favor',
      paragraphs: [
        'El Bajío está a unos 1,800 metros sobre el nivel del mar y su clima es semiárido. Las máximas de verano rondan los 30 a 34 °C, pero lo determinante no es esa cifra: es que el aire llega seco. Y en enfriamiento evaporativo el aire seco es exactamente la materia prima.',
        'Cuanto menor es la humedad del aire exterior, mayor es el margen entre su temperatura y su temperatura de bulbo húmedo, y ese margen es el techo físico del enfriamiento. En condiciones típicas de la zona en los meses cálidos, un sistema bien dimensionado trabaja en el rango alto de lo que la tecnología puede dar.',
      ],
      datos: [
        { value: '~1,800 m', label: 'Altitud media del corredor', note: 'Aire menos denso y más seco' },
        { value: '30–34 °C', label: 'Máximas típicas de verano', note: 'Con humedad relativa baja en horas pico' },
        { value: 'Marzo–junio', label: 'Temporada crítica', note: 'Antes de que entren las lluvias' },
      ],
    },
    veredicto: {
      title: 'El veredicto para esta zona',
      paragraphs: [
        'Es la zona donde recomendamos enfriamiento evaporativo sin reservas para naves industriales, centros de distribución y talleres. La combinación de aire seco y edificios de gran volumen es precisamente el escenario para el que la tecnología está pensada.',
        'La excepción sigue siendo la de siempre y no depende del clima: procesos que exigen humedad relativa controlada, salas herméticas y cámaras de frío. Esos se resuelven con refrigeración, aquí y en cualquier parte.',
      ],
    },
    industria: {
      title: 'Qué hay instalado en el Bajío',
      paragraphs: [
        'El corredor concentra armadoras y proveedores automotrices, aeroespacial en Querétaro, industria del calzado y curtido en León, alimentos y logística en toda la ruta. Son naves grandes, de techos altos, con andenes en operación y con personal trabajando de pie ocho horas: el perfil exacto donde el confort térmico se traduce en productividad.',
      ],
      sectores: ['sector-naves-industriales', 'sector-centros-de-distribucion', 'sector-talleres-y-metalmecanica'],
    },
    diseno: {
      title: 'Qué mirar en un proyecto del Bajío',
      items: [
        {
          title: 'La dureza del agua',
          text: 'Es la consideración local más relevante. Buena parte de la zona tiene agua de pozo con dureza alta, que incrusta los paneles y acorta su vida útil. El sistema WaterManager™ lo gestiona con purga automática, pero conviene analizar el agua y evaluar tratamiento previo en el proyecto.',
        },
        {
          title: 'La temporada de lluvias',
          text: 'De junio a septiembre sube la humedad y el salto térmico alcanzable se reduce. El dimensionado se hace contra los meses secos y calurosos, que son los críticos, y en temporada de lluvias el sistema simplemente trabaja con menos exigencia.',
        },
        {
          title: 'Altitud en el cálculo',
          text: 'A 1,800 metros el aire es menos denso, lo que afecta al caudal másico y entra en el cálculo de carga. Es una corrección estándar, pero hay que hacerla: usar tablas de nivel del mar sobredimensiona o subdimensiona la instalación.',
        },
      ],
    },
    faqs: [
      {
        q: '¿Cuánto baja la temperatura en una nave del Bajío?',
        a: 'En condiciones típicas de un día seco y caluroso de la zona, un sistema bien dimensionado trabaja en el rango alto de lo que permite la tecnología. La cifra concreta depende del bulbo húmedo del día y de las renovaciones de aire que dé el diseño, y se calcula con datos climáticos de tu localidad, no con una tabla general.',
      },
      {
        q: '¿Afecta la temporada de lluvias al rendimiento?',
        a: 'Sí: con más humedad ambiente hay menos margen para evaporar y el salto térmico se reduce. Es esperable y no invalida el sistema, porque el dimensionado se hace contra los meses secos, que son los que concentran el problema. Además, durante las lluvias la necesidad de enfriamiento suele bajar por sí sola.',
      },
      {
        q: '¿El agua de pozo del Bajío daña los equipos?',
        a: 'El agua dura es la principal causa de incrustación en los paneles. Los equipos integran gestión automática de la calidad del agua con purga, lo que mantiene la concentración bajo control. En instalaciones con agua especialmente dura sale más barato tratar el agua de entrada que purgar continuamente; se decide con el análisis del agua del sitio.',
      },
      {
        q: '¿Dan servicio en todo el corredor?',
        a: 'Sí, la cobertura es nacional e incluye Querétaro, El Marqués, León, Silao, Irapuato, Celaya, Aguascalientes y San Luis Potosí, tanto para instalación como para refacciones y servicio post-venta.',
      },
    ],
    relacionados: ['zona-monterrey-y-noreste', 'zona-frontera-norte', 'sector-naves-industriales', 'calculadora', 'comparativa'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'monterrey-y-noreste',
    nav: 'Monterrey y noreste',
    linkTitle: 'Climatización industrial en Monterrey y el noreste',
    linkText: 'Nuevo León, Coahuila y Tamaulipas: calor severo con matiz de humedad del Golfo.',
    h1: 'Climatización industrial en Monterrey y el noreste',
    eyebrow: 'Nuevo León · Coahuila · Tamaulipas',
    aptitud: 'alta',
    aptitudLabel: 'Aptitud alta, con matiz',
    subtitle:
      'El polo industrial más grande del país y uno de los veranos más duros. Funciona muy bien, pero aquí sí hay que mirar la humedad antes de prometer números.',
    metaTitle: 'Climatización industrial en Monterrey',
    metaDescription:
      'Enfriamiento evaporativo en Monterrey, Saltillo y Ramos Arizpe, y cómo influye la humedad del Golfo en el rendimiento real.',
    keywords: [
      'climatización industrial monterrey',
      'enfriamiento nave industrial nuevo león',
      'aire acondicionado industrial saltillo',
      'enfriador evaporativo monterrey',
      'climatización industrial ramos arizpe',
      'climatización nave industrial apodaca',
    ],
    ciudades: ['Monterrey', 'Apodaca', 'Santa Catarina', 'García', 'Escobedo', 'Saltillo', 'Ramos Arizpe', 'Reynosa'],
    clima: {
      title: 'Calor severo, humedad variable',
      paragraphs: [
        'El área metropolitana de Monterrey combina veranos con máximas de 35 a 40 °C y una humedad que varía mucho según de dónde venga el aire. Cuando domina el aire continental, seco, las condiciones son excelentes para enfriamiento evaporativo. Cuando entra humedad del Golfo, el margen se reduce.',
        'Saltillo y Ramos Arizpe, algo más altos y más al interior, tienden a ser más secos y más favorables de forma consistente. Reynosa y la franja próxima al Golfo son el extremo contrario dentro de la misma región.',
      ],
      datos: [
        { value: '35–40 °C', label: 'Máximas típicas de verano', note: 'Entre las más severas del país' },
        { value: 'Variable', label: 'Humedad según origen del aire', note: 'Continental seco o marítimo del Golfo' },
        { value: 'Mayo–sept.', label: 'Temporada crítica extendida', note: 'Casi medio año de exigencia' },
      ],
    },
    veredicto: {
      title: 'El veredicto para esta zona',
      paragraphs: [
        'Recomendado, y con una ventaja adicional que en Monterrey pesa más que en otras zonas: la demanda eléctrica. En una región donde las plantas ya tienen la acometida al límite y donde el pico de calor coincide con el pico tarifario, evitar compresores no es sólo ahorro operativo, muchas veces es lo que hace viable el proyecto sin ampliar subestación.',
        'El matiz honesto: en los días de mayor humedad del verano el salto térmico será menor que en el Bajío. El diseño debe contemplarlo, apoyándose más en renovación de aire y movimiento —que también mejoran la sensación térmica— y no sólo en grados de descenso.',
      ],
    },
    industria: {
      title: 'El tejido industrial del noreste',
      paragraphs: [
        'Acero, cemento, automotriz y autopartes, electrodomésticos, vidrio, y una de las mayores concentraciones logísticas del país por su cercanía a la frontera. Muchas de esas plantas tienen procesos con calor radiante —fundición, hornos, tratamiento térmico— donde el enfriamiento dirigido al puesto de trabajo rinde más que intentar climatizar el volumen entero.',
      ],
      sectores: ['sector-talleres-y-metalmecanica', 'sector-naves-industriales', 'sector-centros-de-distribucion'],
    },
    diseno: {
      title: 'Qué mirar en un proyecto del noreste',
      items: [
        {
          title: 'Datos de bulbo húmedo, no de temperatura',
          text: 'Es la zona del país donde más importa hacer esta distinción. Dos días con la misma máxima de 38 °C pueden dar resultados muy distintos según la humedad. El cálculo se hace con los datos climáticos del emplazamiento y sobre el percentil de diseño, no sobre el promedio.',
        },
        {
          title: 'Coincidencia con el pico tarifario',
          text: 'Las horas de mayor calor son también las de mayor costo eléctrico. Un sistema que consume una fracción de lo que consumiría la refrigeración cambia el perfil de demanda, y eso merece cuantificarse en el análisis de retorno.',
        },
        {
          title: 'Calor radiante de proceso',
          text: 'En fundición, laminado y tratamiento térmico el problema no es la temperatura media de la nave sino la radiación sobre el operador. El diseño debe dirigir caudal a los puestos, no repartirlo uniformemente.',
        },
      ],
    },
    faqs: [
      {
        q: '¿Funciona el enfriamiento evaporativo con la humedad de Monterrey?',
        a: 'Sí, y de hecho es una de las zonas con más instalaciones. La humedad varía mucho a lo largo del verano según el origen del aire: en los días secos el rendimiento es excelente y en los húmedos se reduce el salto térmico, aunque el movimiento y la renovación de aire siguen mejorando la sensación térmica. Lo que no hacemos es prometer una cifra fija de grados sin ver los datos del sitio.',
      },
      {
        q: '¿Es mejor opción que el aire acondicionado en una nave de Monterrey?',
        a: 'Para el confort del personal en una nave de gran volumen, casi siempre sí, y en esta zona pesa un factor extra: la demanda eléctrica. Refrigerar una nave grande con el verano de Monterrey exige una capacidad instalada que muchas plantas no tienen, y ampliarla puede costar más que la climatización misma. Para oficinas, laboratorio o salas con humedad controlada, la respuesta sigue siendo aire acondicionado.',
      },
      {
        q: '¿Cubren Saltillo y Ramos Arizpe?',
        a: 'Sí. Además, esa zona suele tener condiciones más secas que el área metropolitana de Monterrey, lo que la hace todavía más favorable para esta tecnología.',
      },
      {
        q: '¿Y en Reynosa o la franja del Golfo?',
        a: 'Ahí la humedad sostenida es más alta y el salto térmico alcanzable menor. Sigue siendo viable para renovación de aire y mejora de sensación térmica en naves abiertas, pero las expectativas de descenso de temperatura deben ajustarse. Es una evaluación que hacemos con datos concretos antes de proponer nada.',
      },
    ],
    relacionados: ['zona-bajio', 'zona-frontera-norte', 'sector-talleres-y-metalmecanica', 'comparativa', 'calculadora'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'frontera-norte',
    nav: 'Frontera norte',
    linkTitle: 'Climatización industrial en la frontera norte',
    linkText: 'Ciudad Juárez, Mexicali, Tijuana y Nogales: clima desértico y cinturón maquilador.',
    h1: 'Climatización industrial en la frontera norte',
    eyebrow: 'Chihuahua · Baja California · Sonora',
    aptitud: 'alta',
    aptitudLabel: 'Aptitud máxima',
    subtitle:
      'El desierto es el mejor escenario posible para el enfriamiento evaporativo: mucho calor y casi nada de humedad. En Mexicali y Ciudad Juárez la tecnología rinde en su límite superior.',
    metaTitle: 'Climatización industrial en la frontera norte',
    metaDescription:
      'Enfriamiento evaporativo en Ciudad Juárez, Mexicali, Tijuana y Nogales: el clima desértico es el mejor escenario para esta tecnología.',
    keywords: [
      'climatización industrial ciudad juárez',
      'enfriamiento evaporativo mexicali',
      'aire acondicionado maquiladora',
      'climatización nave industrial tijuana',
      'enfriador industrial nogales',
      'climatización industrial chihuahua',
    ],
    ciudades: ['Ciudad Juárez', 'Chihuahua', 'Mexicali', 'Tijuana', 'Tecate', 'Nogales', 'Agua Prieta'],
    clima: {
      title: 'Calor extremo y aire muy seco',
      paragraphs: [
        'Mexicali y Ciudad Juárez tienen veranos entre los más severos de México, con máximas que superan holgadamente los 40 °C en el caso de Mexicali. Lo relevante es que ese calor viene acompañado de una humedad relativa muy baja, que es justo la condición en la que el enfriamiento evaporativo alcanza su mayor salto térmico.',
        'Tijuana y Tecate son un caso distinto dentro de la misma franja: clima mediterráneo, veranos templados por influencia del Pacífico y una necesidad de enfriamiento sensiblemente menor. Ahí el planteamiento suele ser renovación de aire y confort en horas pico, no combate al calor extremo.',
      ],
      datos: [
        { value: '+40 °C', label: 'Máximas de verano en Mexicali', note: 'Con humedad relativa muy baja' },
        { value: 'Máximo', label: 'Margen de bulbo húmedo disponible', note: 'La mejor condición para la tecnología' },
        { value: 'Maquila', label: 'Naves de manufactura intensiva', note: 'Alta densidad de personal por m²' },
      ],
    },
    veredicto: {
      title: 'El veredicto para esta zona',
      paragraphs: [
        'Es donde la tecnología da su mejor resultado. En clima desértico el enfriamiento evaporativo no es una alternativa económica al aire acondicionado: en muchos casos es directamente la solución técnicamente superior para naves de gran volumen, porque además de enfriar aporta la renovación de aire que una planta con alta densidad de personal necesita.',
        'La restricción local no es el clima sino el agua. En zonas desérticas la disponibilidad y el costo del agua son una variable de proyecto real, y hay que dimensionarla y presupuestarla desde el principio.',
      ],
    },
    industria: {
      title: 'El cinturón maquilador',
      paragraphs: [
        'Manufactura electrónica, arneses automotrices, dispositivos médicos, aeroespacial y ensamble en general. Son naves con mucha gente trabajando en líneas, donde el confort térmico afecta directamente a la productividad y a la rotación de personal, y donde la renovación de aire tiene además un valor propio.',
      ],
      sectores: ['sector-naves-industriales', 'sector-centros-de-distribucion', 'sector-talleres-y-metalmecanica'],
    },
    diseno: {
      title: 'Qué mirar en un proyecto de frontera',
      items: [
        {
          title: 'Disponibilidad y costo del agua',
          text: 'Es la primera pregunta en zona desértica. Cuanto más seco el aire, más agua evapora el sistema —y más enfría—. Hay que calcular el consumo real, verificar el suministro en los meses críticos y dimensionar el depósito en consecuencia.',
        },
        {
          title: 'Procesos sensibles a la humedad',
          text: 'La maquila electrónica y de dispositivos médicos suele tener áreas con requisitos de humedad relativa o control de partículas. Esas zonas se excluyen del alcance o se resuelven con otra tecnología; el resto de la nave sí es candidato.',
        },
        {
          title: 'Dimensionar para el pico, no para el promedio',
          text: 'En Mexicali el promedio anual no dice nada: lo que decide el proyecto son las semanas de julio y agosto. El sistema se calcula contra esa condición, que es cuando la producción está en riesgo.',
        },
      ],
    },
    faqs: [
      {
        q: '¿Es cierto que el enfriamiento evaporativo rinde mejor cuanto más calor hace?',
        a: 'Rinde mejor cuanto más seco está el aire, y en clima desértico el calor viene con aire seco. Por eso Mexicali o Ciudad Juárez, con máximas por encima de los 40 °C, son mejores escenarios que una ciudad más fresca pero húmeda: lo que manda es el margen entre la temperatura del aire y su temperatura de bulbo húmedo.',
      },
      {
        q: '¿Cuánta agua consume el sistema en zona desértica?',
        a: 'Más que en clima húmedo, porque evapora más —y precisamente por eso enfría más—. Es una variable de proyecto que calculamos con las condiciones del sitio y las horas de operación, y que en zonas con restricciones de suministro conviene resolver antes de decidir la inversión.',
      },
      {
        q: '¿Sirve para una maquiladora con áreas de control de partículas?',
        a: 'Para las áreas de proceso controlado, no: esas requieren aire tratado, filtración específica y normalmente presión diferencial. Para el resto de la nave —líneas generales, almacén, embarque, pasillos— sí, y suele ser donde está la mayoría del personal. Se define zona por zona en el proyecto.',
      },
      {
        q: '¿Y en Tijuana, donde no hace tanto calor?',
        a: 'Tijuana tiene un verano mucho más templado por la influencia del Pacífico, así que la necesidad de enfriamiento es menor. Ahí el planteamiento habitual es renovación de aire y confort en las horas y semanas puntuales de calor, con una instalación más ligera que la que pediría Mexicali.',
      },
    ],
    relacionados: ['zona-bajio', 'zona-monterrey-y-noreste', 'sector-naves-industriales', 'tecnologia', 'calculadora'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'centro-y-occidente',
    nav: 'Centro y occidente',
    linkTitle: 'Climatización industrial en el centro y occidente',
    linkText: 'CDMX, Estado de México, Puebla, Toluca y Guadalajara: clima templado de altura.',
    h1: 'Climatización industrial en el centro y occidente de México',
    eyebrow: 'CDMX · Edomex · Puebla · Jalisco',
    aptitud: 'media',
    aptitudLabel: 'Aptitud buena',
    subtitle:
      'Aquí el calor no es el problema principal: lo es la carga térmica que genera el propio proceso dentro de naves que nunca se diseñaron para disiparla.',
    metaTitle: 'Climatización industrial en el centro',
    metaDescription:
      'Enfriamiento evaporativo en CDMX, Toluca, Puebla y Guadalajara, donde el problema no es el clima sino la carga térmica del proceso.',
    keywords: [
      'climatización industrial cdmx',
      'enfriamiento nave industrial estado de méxico',
      'climatización industrial puebla',
      'aire acondicionado industrial guadalajara',
      'enfriamiento evaporativo toluca',
      'climatización nave industrial tlaxcala',
    ],
    ciudades: ['Ciudad de México', 'Tlalnepantla', 'Cuautitlán Izcalli', 'Toluca', 'Puebla', 'Tlaxcala', 'Guadalajara', 'El Salto'],
    clima: {
      title: 'Templado fuera, caluroso dentro',
      paragraphs: [
        'El altiplano central y la zona de Guadalajara tienen climas templados: máximas de verano en el rango de 25 a 33 °C según la localidad y la altitud. Sobre el papel, no parece un problema de climatización.',
        'Dentro de una nave industrial la historia es otra. Hornos, prensas, compresores, iluminación y el propio metabolismo del personal generan una carga térmica que se acumula en un edificio sin ventilación pensada para disiparla. Es habitual que la nave esté varios grados por encima del exterior justo donde está trabajando la gente.',
      ],
      datos: [
        { value: '25–33 °C', label: 'Máximas típicas de verano', note: 'Según localidad y altitud' },
        { value: '+5 a +8 °C', label: 'Diferencia interior-exterior habitual', note: 'Por carga térmica interna acumulada' },
        { value: '+2,200 m', label: 'Altitud en el altiplano', note: 'Corrección obligatoria en el cálculo' },
      ],
    },
    veredicto: {
      title: 'El veredicto para esta zona',
      paragraphs: [
        'Recomendado, pero con un encuadre distinto: aquí el argumento no es «bajar la temperatura ambiente» sino «sacar de la nave el calor que genera tu proceso». La renovación continua de aire resuelve exactamente eso, y con un consumo eléctrico que hace el proyecto rentable incluso cuando el problema es estacional.',
        'La humedad de la temporada de lluvias reduce el salto térmico en verano, pero como la exigencia térmica de partida es menor que en el norte, el sistema sigue cumpliendo su función. En muchas instalaciones de esta zona el valor principal acaba siendo la calidad del aire y el movimiento, tanto como los grados.',
      ],
    },
    industria: {
      title: 'Qué se fabrica aquí',
      paragraphs: [
        'Automotriz en Puebla y Toluca, química y farmacéutica en el Estado de México, alimentos y bebidas en toda la zona, electrónica y tecnología en el corredor de Guadalajara, y una densidad logística enorme alrededor de la Ciudad de México. Muchas de esas plantas ocupan naves antiguas, con envolvente poco aislada y ventilación mínima.',
      ],
      sectores: ['sector-industria-alimentaria', 'sector-centros-de-distribucion', 'sector-naves-industriales'],
    },
    diseno: {
      title: 'Qué mirar en un proyecto del centro',
      items: [
        {
          title: 'La carga térmica interna manda',
          text: 'El cálculo no parte de la temperatura exterior sino del calor que genera el proceso. Hornos, motores, compresores e iluminación se contabilizan uno a uno; es lo que define las renovaciones por hora necesarias.',
        },
        {
          title: 'Naves antiguas sin salida de aire',
          text: 'Es el obstáculo más frecuente en la zona. Muchas naves del corredor industrial no tienen área de escape suficiente y hay que habilitarla —extractores estáticos, louvers altos— para que el sistema funcione. Se resuelve, pero hay que preverlo en el presupuesto.',
        },
        {
          title: 'Corrección por altitud',
          text: 'A más de 2,200 metros la densidad del aire cambia de forma apreciable y afecta al cálculo de carga. Usar tablas de nivel del mar en el altiplano lleva a instalaciones mal dimensionadas.',
        },
      ],
    },
    faqs: [
      {
        q: 'Si en CDMX no hace tanto calor, ¿para qué climatizar la nave?',
        a: 'Porque el problema no está fuera sino dentro. Una nave con hornos, compresores y cincuenta personas trabajando acumula calor durante todo el turno, y en la zona de trabajo la temperatura supera con facilidad la del exterior. Lo que resuelve el sistema no es el clima de la ciudad: es sacar ese calor del edificio.',
      },
      {
        q: '¿La temporada de lluvias arruina el rendimiento?',
        a: 'Lo reduce, porque con más humedad hay menos margen para evaporar. Pero en esta zona la exigencia térmica de partida ya es menor que en el norte, y buena parte del valor viene de la renovación de aire y del movimiento, que no dependen de la humedad. En la práctica el sistema sigue cumpliendo.',
      },
      {
        q: '¿Sirve en una nave vieja sin ventilación?',
        a: 'Sí, pero casi siempre hay que habilitar área de salida de aire. Es el error de diseño más caro: si el aire entra y no tiene por dónde salir, el sistema se ahoga. La adecuación —extractores estáticos, louvers en la parte alta— se define en la visita técnica y se presupuesta con el resto.',
      },
      {
        q: '¿Cubren Guadalajara y el corredor de El Salto?',
        a: 'Sí. La cobertura es nacional e incluye toda la zona metropolitana de Guadalajara y su corredor industrial, tanto para instalación como para refacciones y servicio.',
      },
    ],
    relacionados: ['zona-bajio', 'zona-sureste-y-golfo', 'sector-industria-alimentaria', 'comparativa', 'calculadora'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'sureste-y-golfo',
    nav: 'Sureste y Golfo',
    linkTitle: 'Climatización industrial en el sureste y el Golfo',
    linkText: 'Mérida, Veracruz, Villahermosa y Cancún: dónde esta tecnología rinde menos y por qué lo decimos.',
    h1: 'Climatización industrial en el sureste y el Golfo de México',
    eyebrow: 'Yucatán · Veracruz · Tabasco · Quintana Roo',
    aptitud: 'limitada',
    aptitudLabel: 'Aptitud limitada',
    subtitle:
      'Es la zona donde el enfriamiento evaporativo da menos de lo que promete el folleto. Preferimos explicarlo aquí antes de que alguien compre esperando otra cosa.',
    metaTitle: 'Climatización industrial en el sureste',
    metaDescription:
      'Cómo rinde el enfriamiento evaporativo en Mérida, Veracruz y Villahermosa: evaluación honesta de sus límites en clima húmedo.',
    keywords: [
      'climatización industrial mérida',
      'enfriamiento evaporativo clima húmedo',
      'climatización nave industrial veracruz',
      'aire acondicionado industrial villahermosa',
      'enfriador evaporativo humedad alta',
      'climatización industrial yucatán',
    ],
    ciudades: ['Mérida', 'Veracruz', 'Coatzacoalcos', 'Villahermosa', 'Cancún', 'Campeche'],
    clima: {
      title: 'Calor con humedad sostenida',
      paragraphs: [
        'El sureste y la costa del Golfo combinan máximas de verano de 33 a 38 °C con humedad relativa alta durante buena parte del año. Esa combinación es la más incómoda para las personas y la menos favorable para el enfriamiento evaporativo.',
        'El motivo es físico y no se puede sortear con un mejor equipo: cuanto más húmedo está el aire, menos agua admite y menos calor absorbe la evaporación. El margen entre la temperatura del aire y su bulbo húmedo se estrecha, y con él el descenso máximo alcanzable.',
      ],
      datos: [
        { value: '33–38 °C', label: 'Máximas típicas de verano', note: 'Con humedad relativa alta sostenida' },
        { value: 'Estrecho', label: 'Margen de bulbo húmedo', note: 'Limita el descenso alcanzable' },
        { value: 'Todo el año', label: 'Duración de la temporada cálida', note: 'Sin meses secos claros' },
      ],
    },
    veredicto: {
      title: 'El veredicto para esta zona',
      paragraphs: [
        'No recomendamos enfriamiento evaporativo como solución de confort térmico en instalaciones cerradas del sureste húmedo. En un espacio con poca renovación, añadir humedad a un aire que ya está saturado empeora la sensación térmica en lugar de mejorarla.',
        'Sí tiene sentido en un escenario concreto: naves muy abiertas o semiabiertas con altísima renovación de aire, donde el valor está en el movimiento de aire y en el barrido del calor de proceso más que en el descenso de temperatura. Es una aplicación legítima, pero hay que plantearla con expectativas correctas desde el principio.',
        'Para el resto de casos en esta región, la respuesta honesta es aire acondicionado o una solución mixta, y eso es lo que te diremos aunque no sea lo que vendemos.',
      ],
    },
    industria: {
      title: 'Qué industria hay en la zona',
      paragraphs: [
        'Petroquímica y energía en Veracruz y Tabasco, alimentos y procesamiento agroindustrial en Yucatán, manufactura ligera en crecimiento alrededor de Mérida y una fuerte actividad turística y comercial en la península. Muchas de esas instalaciones tienen calor de proceso importante, que es donde la ventilación con enfriamiento parcial sí puede aportar.',
      ],
      sectores: ['sector-industria-alimentaria', 'sector-espacios-comerciales', 'sector-agroindustria'],
    },
    diseno: {
      title: 'Cuándo sí lo planteamos aquí',
      items: [
        {
          title: 'Naves muy abiertas con alta renovación',
          text: 'Si el aire entra y sale con facilidad y la renovación es muy alta, la humedad añadida se diluye y el beneficio viene del movimiento de aire y del barrido de calor de proceso. Es el caso más habitual en el que sí aplica.',
        },
        {
          title: 'Enfriamiento localizado en puestos con calor radiante',
          text: 'Frente a un horno o una fuente radiante, el aire en movimiento mejora la sensación térmica del operador aunque el descenso de temperatura sea modesto. Es alivio puntual, no climatización del edificio.',
        },
        {
          title: 'Espacios semiabiertos de uso comercial',
          text: 'Terrazas, andadores y zonas de acceso, donde el aire acondicionado es directamente inviable y cualquier mejora se percibe.',
        },
      ],
    },
    faqs: [
      {
        q: '¿Funciona un enfriador evaporativo en Mérida o en Villahermosa?',
        a: 'Funciona, pero con un descenso de temperatura mucho menor que en el norte del país, porque el aire húmedo deja poco margen para evaporar. En espacios cerrados el resultado suele decepcionar. En naves muy abiertas o en enfriamiento localizado sí puede aportar, apoyándose en el movimiento de aire más que en los grados. Lo evaluamos con datos antes de proponer nada.',
      },
      {
        q: '¿Por qué me lo desaconsejan si es lo que venden?',
        a: 'Porque una instalación que no cumple expectativas cuesta más caro que la venta que no se hizo: reclamaciones, desinstalación y un cliente que lo cuenta. Preferimos decir dónde está el límite de la tecnología y proponer lo que corresponde en cada caso.',
      },
      {
        q: '¿Qué alternativa recomiendan en clima húmedo?',
        a: 'Depende del espacio. Para áreas cerradas donde se necesita confort real, aire acondicionado, que además deshumidifica. Para naves grandes, con frecuencia una combinación: ventilación mecánica bien diseñada para barrer el calor de proceso, más refrigeración en las zonas concretas donde hay personal fijo.',
      },
      {
        q: '¿Dan servicio en el sureste?',
        a: 'Sí, la cobertura es nacional. Lo que hacemos distinto en esta región es la evaluación previa: revisamos las condiciones reales antes de proponer, y si el enfriamiento evaporativo no es la respuesta correcta para tu instalación, te lo decimos.',
      },
    ],
    relacionados: ['zona-centro-y-occidente', 'comparativa', 'sector-espacios-comerciales', 'sector-industria-alimentaria', 'contacto'],
  },
];

export function getZona(slug) {
  return ZONAS.find((z) => z.slug === slug);
}

export function getZonaSlugs() {
  return ZONAS.map((z) => z.slug);
}
