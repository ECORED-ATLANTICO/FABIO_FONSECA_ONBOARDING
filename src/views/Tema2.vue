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

    .row.justify-content-center.mb-3.mb-lg-4
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
            .mb-4.mb-lg-0
            p Para mayor seguridad, una vez fríos los frascos, se pueden llevar al horno precalentado a 120°C durante 15 minutos. Este paso es especialmente recomendado para conservas de baja acidez, como vegetales, ya que son más propensas al desarrollo de bacterias como el <em>Clostridium botulinum</em>.

      .col-8.col-lg-4.mt-3.align-content-center
        figure
          img(src='@/assets/curso/temas/tema-2/2.png', alt='Imagen decorativa')

    .cajon.color-secundario.p-4.my-3
      h5 Nota
      p.mb-0 Es importante manipular los frascos y tapas esterilizados con cuidado, evitando tocar las superficies internas. Se recomienda usar pinzas esterilizadas para su manipulación. Mantener los frascos y tapas en un lugar limpio y seco hasta su uso.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h3(data-aos='zoom-in-right') 2.2 Llenado y aplicación de vacío
    p.mb-3.mb-lg-4 Una vez esterilizados los frascos y tapas, se procede al llenado con el alimento previamente preparado y a la aplicación del vacío. Este paso es fundamental para eliminar el oxígeno del interior del frasco, creando un ambiente anaeróbico que inhibe el crecimiento de microorganismos aeróbicos y previene la oxidación del producto. Seguir estos pasos:

    .row.justify-content-center.mb-3.mb-lg-4
      .col-8.col-lg-4.mt-3.align-content-center
        figure
          img.mb-3.mb-lg-4(src='@/assets/curso/temas/tema-2/3.png', alt='Imagen decorativa')
      .col-lg-8
        LineaTiempoD.color-acento-contenido.mt-3
          .row(numero="1" titulo="Llenado")
            .mb-4.mb-lg-0
              p Llenar los frascos con el alimento previamente cocinado y aún caliente, dejando un espacio libre de aproximadamente 1 cm entre el nivel del alimento y el borde del frasco. Este espacio, conocido como <em>"headspace"</em>, permite la expansión del alimento durante el tratamiento térmico y evita que el líquido se derrame durante el proceso.
          .row(numero="2" titulo="Eliminación de burbujas")
            .mb-4.mb-lg-0
              p Con la ayuda de una espátula o cuchillo limpio, eliminar las burbujas de aire que hayan quedado atrapadas dentro del frasco. Las burbujas de aire pueden afectar la calidad del producto final y favorecer el crecimiento de microorganismos.
          .row(numero="3" titulo="Limpieza de los bordes")
            .mb-4.mb-lg-0
              p Limpiar cuidadosamente los bordes de los frascos con un paño limpio y húmedo para eliminar cualquier residuo de alimento que pueda interferir con el cierre hermético del frasco.
          .row(numero="4" titulo="Cierre de los frascos")
            .mb-4.mb-lg-0
              p Colocar las tapas esterilizadas sobre los frascos, asegurándose de que queden bien centradas. Enroscar las tapas firmemente, pero sin apretar demasiado, para evitar que el aire entre al frasco.
    
    Separador


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
