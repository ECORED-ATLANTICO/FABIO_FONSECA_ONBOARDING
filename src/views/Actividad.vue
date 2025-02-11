<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Sabores que perduran: Cuestionario sobre Conservas',
      titulo: 'Ronda de Preguntas',
      introduccion:
        '<b> Objetivo:</b> Apropiar los conceptos y regulaciones de los métodos de conservación y preparación de conservas de frutas y verduras.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes técnicas NO es un método tradicional de conservación de alimentos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desecación',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Deshidratación',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Irradiación',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Salazón',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué microorganismo es especialmente peligroso en las conservas de baja acidez y puede causar botulismo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Salmonella',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Escherichia coli',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Clostridium botulinum',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'AListeria monocytogenes',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el objetivo principal del escaldado de vegetales antes de su conservación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar su sabor',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Inactivar enzimas y reducir la carga microbiana',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ablandar su textura',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar su valor nutricional',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: ' ¿Qué mide el grado Brix (°Bx)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La acidez de una solución',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cantidad de agua en un alimento',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La temperatura de cocción',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La concentración de azúcar en una solución',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes métodos de conservación NO utiliza calor?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pasteurización',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Esterilización',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Salazón',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cocción',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la principal diferencia entre la pasteurización y la esterilización?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La pasteurización se utiliza solo para frutas, mientras que la esterilización se utiliza para vegetales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La pasteurización utiliza temperaturas más bajas que la esterilización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La esterilización elimina todas las formas de vida microbiana, incluyendo las esporas, mientras que la pasteurización no.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La pasteurización requiere envasado al vacío, mientras que la esterilización no.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué se busca lograr al aplicar vacío en las conservas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la presión dentro del frasco.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar el oxígeno del interior del frasco.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ablandar la textura del alimento',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mejorar el sabor del producto',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de las siguientes NO es una buena práctica de higiene en la elaboración de conservas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Lavar cuidadosamente los frascos y tapas antes de usarlos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Utilizar utensilios limpios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reutilizar las tapas de los frascos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Enfriar las conservas rápidamente después del tratamiento térmico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué característica NO es deseable en una piña para la elaboración de conservas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una sola corona',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '"Ojos" prominentes y bien formados',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Zonas blandas en la piel',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Color verde intenso con algunas tonalidades amarillas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Por qué es importante controlar la acidez (pH) en la elaboración de conservas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para asegurar un sabor agradable.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para evitar la oxidación del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para determinar el método de conservación adecuado (pasteurización o esterilización).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Para mejorar la textura del producto final.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicitaciones! Has demostrado un excelente conocimiento sobre la elaboración de conservas de frutas y verduras. Sigue explorando el mundo de la conservación de alimentos y disfruta de productos deliciosos y seguros.',
      mensaje_final_reprobado:
        '¡Sigue practicando! Aunque has adquirido algunos conocimientos sobre conservas de frutas y verduras, es recomendable que repases algunos conceptos para fortalecer tu aprendizaje.  No te desanimes,  la práctica hace al maestro. ¡Continúa aprendiendo y pronto dominarás las técnicas para crear deliciosas conservas!',
    },
  }),
}
</script>
