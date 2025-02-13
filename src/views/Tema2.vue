<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Métodos que extienden la vida útil de las conservas.
    img(data="fade-down")(src='@/assets/curso/temas/tema-2/mini-banner.png', alt='Imagen decorativa')
    p.my-3 Para garantizar la seguridad y prolongar la vida útil de las conservas, se llevan a cabo procesos de esterilización y pasteurización, tanto de los alimentos como de los envases. Estos métodos, basados en la aplicación de calor, eliminan los microorganismos que causan el deterioro de los alimentos, permitiendo su almacenamiento seguro durante largos periodos. A continuación, se describe la secuencia correcta de estos procesos.

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h3(data-aos='zoom-in-right') 2.1 Esterilización de frascos y tapas
    p.mb-3.mb-lg-4 Antes de envasar cualquier alimento, es crucial asegurar la esterilidad de los frascos y tapas para evitar la proliferación de microorganismos que podrían comprometer la seguridad y calidad del producto final. La esterilización elimina bacterias, hongos y esporas, garantizando un ambiente adecuado para la conservación. Para esterilizar los frascos y tapas, se recomienda el siguiente proceso:

    .row.justify-content-center
      .col-lg-8
        LineaTiempoD.color-acento-contenido.mt-3
          .row(numero="1" titulo="Lavado")
            .mb-4.mb-lg-0
              p Lavar meticulosamente los frascos y tapas con agua caliente y jabón, eliminando cualquier residuo de alimento o suciedad que pueda estar presente. Enjuagar bien con agua limpia.

          .row(numero="2" titulo="Preparación")
            .mb-4.mb-lg-0
              p Utilizar una olla lo suficientemente honda como para colocar una rejilla en el fondo y que los frascos quepan de pie sin tocarse entre sí. Colocar la rejilla en el fondo de la olla.
              
          .row(numero="3" titulo="Esterilización en agua hirviendo")
            .mb-4.mb-lg-0
            p Colocar los frascos boca arriba sobre la rejilla, asegurándose de que no toquen las paredes de la olla. Llenar la olla con agua hasta cubrir completamente los frascos. Tapar la olla y llevar a ebullición. Una vez que el agua hierva, reducir el fuego y dejar hervir durante 30 minutos.

          .row(numero="4" titulo="Enfriamiento")
            .mb-4.mb-lg-0
            p Transcurrido el tiempo de esterilización, apagar el fuego y, con mucho cuidado, retirar los frascos de la olla utilizando pinzas esterilizadas. Colocarlos boca abajo sobre un paño limpio y dejar enfriar completamente.

          .row(numero="5" titulo="Esterilización de las tapas")
            .mb-4.mb-lg-0
            p Mientras los frascos se esterilizan, colocar las tapas en una olla aparte con agua hirviendo durante 10 minutos. Retirarlas con cuidado y dejar escurrir sobre un paño limpio.

          .row(numero="6" titulo="Esterilización adicional en horno (opcional)")
            .mb-4.mb-md-0
            p Para mayor seguridad, una vez fríos los frascos, se pueden llevar al horno precalentado a 120°C durante 15 minutos. Este paso es especialmente recomendado para conservas de baja acidez, como vegetales, ya que son más propensas al desarrollo de bacterias como el <em>Clostridium botulinum</em>.

      .col-lg-4.mt-3.align-content-center
        figure
          img(src='@/assets/curso/temas/tema-2/2.png', alt='Imagen decorativa')



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
