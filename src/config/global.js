export default {
  global: {
    Name:
      'Métodos de conservación y preparación de conservas de frutas y verduras.',
    Description: `Este componente proporciona una guía completa sobre los métodos de conservación y 
    preparación de conservas de frutas y verduras. Explica al aprendiz la importancia de la clasificación 
    de los alimentos para su uso adecuado y la prevención de su deterioro. Se describen los factores que 
    afectan la seguridad alimentaria, incluyendo los agentes biológicos, el almacenamiento adecuado y el 
    control de temperatura y humedad. Se detallan métodos de conservación como la salazón, la adición de 
    azúcar y alcohol, y el escaldado, con especial énfasis en la pasteurización y esterilización, así como 
    también aborda la elaboración de almíbares, mermeladas y conservas de vegetales en salmuera, detallando 
    paso a paso el proceso, desde la selección de los ingredientes hasta el envasado y almacenamiento.`,
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/envase-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/envase-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/envase-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/envase-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/envase-5.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Métodos de conservación de frutas y verduras',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Preparación de conservas de frutas.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Preparación de conservas de vegetales.',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Actividad de agua (aw)',
      significado:
        'la actividad de agua (aw) es una medida que se utiliza para expresar la cantidad de agua disponible en un alimento para el crecimiento de microorganismos y reacciones químicas. Se define como la relación entre la presión de vapor de agua del alimento y la presión de vapor de agua pura a la misma temperatura. Su valor varía de 0 a 1, donde 1 representa agua pura. Los microorganismos necesitan agua disponible para crecer y multiplicarse. Una aw baja dificulta el desarrollo de bacterias, levaduras y mohos, contribuyendo a la conservación del alimento.',
    },
    {
      termino: 'Almíbar',
      significado:
        'el almíbar es una solución de agua y azúcar, generalmente en proporciones variables, que se utiliza para cubrir y conservar frutas en conserva. La concentración de azúcar en el almíbar determina su densidad y su capacidad de conservación. Se clasifican en: ligero (menor concentración de azúcar), medio y espeso (mayor concentración de azúcar). El almíbar no solo conserva las frutas, sino que también les aporta dulzura y realza su sabor.',
    },
    {
      termino: 'Autoclave',
      significado:
        'un autoclave es un equipo que se utiliza para esterilizar materiales y equipos mediante la aplicación de calor húmedo a alta presión. Funciona como una olla a presión de gran tamaño, donde se introduce vapor de agua a alta temperatura (generalmente 121°C) y presión (15 psi). Estas condiciones extremas eliminan eficazmente microorganismos, incluyendo esporas bacterianas, garantizando la esterilidad del material. Se utiliza en la industria alimentaria para esterilizar conservas enlatadas, asegurando su seguridad y prolongando su vida útil.',
    },
    {
      termino: 'Brix (°Bx)',
      significado:
        'el grado Brix (°Bx) es una unidad de medida que se utiliza para determinar la cantidad de sólidos solubles presentes en una solución líquida, principalmente azúcares. Un grado Brix equivale a 1 gramo de sacarosa por cada 100 gramos de solución. Se mide con un instrumento llamado refractómetro, que mide el índice de refracción de la luz al pasar a través de la solución. El Brix es un indicador de la dulzura y la densidad de la solución, y se utiliza ampliamente en la industria alimentaria para controlar la calidad de productos como jugos, refrescos, mermeladas, jarabes y bebidas alcohólicas.',
    },
    {
      termino: 'Clostridium botulinum',
      significado:
        'Clostridium botulinum es una bacteria anaeróbica (que vive en ausencia de oxígeno) que produce una toxina muy potente, la toxina botulínica, que causa botulismo. El botulismo es una enfermedad grave que afecta el sistema nervioso y puede ser fatal. La bacteria puede encontrarse en el suelo, el agua y los alimentos contaminados, especialmente en conservas caseras mal procesadas. El Clostridium botulinum se desarrolla en ambientes con bajo contenido de oxígeno, pH superior a 4.6 y baja concentración de sal. ',
    },
    {
      termino: 'Desecación',
      significado:
        'método de conservación tradicional que consiste en eliminar la humedad de los alimentos mediante la exposición al aire libre y al sol. Este proceso reduce la actividad de agua, impidiendo el crecimiento de microorganismos y prolongando la vida útil de los alimentos. Frutas, carnes, pescados y hierbas aromáticas se han desecado durante siglos para su conservación.',
    },
    {
      termino: 'Deshidratación',
      significado:
        'método de conservación similar a la desecación, pero que utiliza fuentes de calor artificial, como hornos o deshidratadores eléctricos, para acelerar el proceso de eliminación de humedad. La deshidratación permite un control más preciso de la temperatura y la humedad, obteniendo productos con mayor calidad y uniformidad.',
    },
    {
      termino: 'Escaldado',
      significado:
        'técnica que consiste en sumergir con brevedad los alimentos, generalmente vegetales, en agua hirviendo durante un tiempo específico. El escaldado tiene múltiples beneficios: inactivar enzimas que causan el deterioro, reducir la carga microbiana superficial, fijar el color de los vegetales y ablandarlos para facilitar su envasado. Es un paso previo a la congelación, deshidratación o envasado de vegetales.',
    },
    {
      termino: 'Esterilización',
      significado:
        'proceso térmico que elimina todos los microorganismos presentes en un alimento, incluyendo las esporas bacterianas, que son altamente resistentes al calor. Se logra mediante la aplicación de altas temperaturas, generalmente 121°C, durante un tiempo determinado. La esterilización se realiza en autoclaves y es fundamental para garantizar la seguridad de las conservas de baja acidez, como las de vegetales.',
    },
    {
      termino: 'Inocuidad alimentaria',
      significado:
        'conjunto de medidas y prácticas destinadas a garantizar que los alimentos sean seguros para el consumo humano. Implica controlar los peligros biológicos, químicos y físicos a lo largo de toda la cadena alimentaria, desde la producción hasta el consumo. La inocuidad alimentaria es esencial para proteger la salud de los consumidores y prevenir enfermedades transmitidas por alimentos.',
    },
    {
      termino: 'Organoléptico',
      significado:
        'término que describe las características sensoriales de un alimento, percibidas a través de los sentidos. Incluye atributos como sabor, aroma, textura, color y apariencia. La calidad organoléptica de un alimento influye en su aceptabilidad y apreciación por parte del consumidor.',
    },
    {
      termino: 'Pasteurización',
      significado:
        'proceso térmico que utiliza calor controlado para eliminar microorganismos patógenos y extender la vida útil de los alimentos. A diferencia de la esterilización, la pasteurización no elimina todas las formas de vida microbiana, pero sí reduce significativamente la cantidad de microorganismos presentes.',
    },
  ],
  referencias: [
    {
      referencia:
        'Centers for Disease Control and Prevention. (2022). Botulism.',
      link: 'https://www.cdc.gov/botulism/index.html',
    },
    {
      referencia:
        'Contardi, C. (2008). Manual de conservas caseras. Mendoza, Argentina: INTA. ',
      link:
        'https://es.slideshare.net/slideshow/10-manual-de-conservas-caseras/36112967',
    },
    {
      referencia:
        'FAO. (2004). Conservación de frutas y hortalizas mediante tecnologías combinadas. Consultado el 01 de marzo de 2014, en',
      link: 'ftp://ftp.fao.org/docrep/fao/008/y5771s/y5771s00.pdf',
    },
    {
      referencia: 'Jay, J. M. (2005). Modern food microbiology. Springer. ',
      link: '',
    },
    {
      referencia:
        'Prescott, L. M., Harley, J. P., & Klein, D. A. (2002). Microbiology. McGraw-Hill. ',
      link: '',
    },
    {
      referencia:
        'Ruiz, S. (1990). Producción casera de dulces, jaleas y mermeladas. México: Olimpo.',
      link: '',
    },
    {
      referencia:
        'Secretaria de agricultura, ganadería, desarrollo rural pesca y alimentación. (s.f.). Procesamiento de frutas y verduras a nivel casero. Consultado el 03 de marzo de 2014.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
