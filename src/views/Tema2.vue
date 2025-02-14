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
          img(data-aos="fade-up")(src='@/assets/curso/temas/tema-2/2.png', alt='Imagen decorativa')

    .cajon.color-secundario.p-4.my-3
      h5 Nota
      p.mb-0 Es importante manipular los frascos y tapas esterilizados con cuidado, evitando tocar las superficies internas. Se recomienda usar pinzas esterilizadas para su manipulación. Mantener los frascos y tapas en un lugar limpio y seco hasta su uso.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h3(data-aos='zoom-in-right') 2.2 Llenado y aplicación de vacío
    p.mb-3.mb-lg-4 Una vez esterilizados los frascos y tapas, se procede al llenado con el alimento previamente preparado y a la aplicación del vacío. Este paso es fundamental para eliminar el oxígeno del interior del frasco, creando un ambiente anaeróbico que inhibe el crecimiento de microorganismos aeróbicos y previene la oxidación del producto. Seguir estos pasos:

    .row.justify-content-center.mb-3.mb-lg-5
      .col-8.col-lg-4.mt-3.align-content-center
        figure
          img.mb-3.mb-lg-4(data-aos="fade-up")(src='@/assets/curso/temas/tema-2/3.png', alt='Imagen decorativa')
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

    #t_2_3.titulo-segundo.color-acento-contenido
      h3(data-aos='zoom-in-right') 2.3 Tratamiento térmico: pasteurización y esterilización
    p.mb-3.mb-lg-4 El tratamiento térmico es esencial para eliminar los microorganismos presentes en los alimentos y garantizar la seguridad de las conservas. Existen dos métodos principales: la pasteurización y la esterilización. 

    .row.justify-content-center.mb-3.mb-lg-5.check-list
      .col-lg-6
        LineaTiempoD.color-acento-contenido.mt-3
          .row(numero="1" titulo="Pasteurización")
            .mb-4.mb-lg-0
              p La pasteurización, que debe su nombre al científico Louis Pasteur, es un proceso térmico que utiliza calor controlado para eliminar los microorganismos patógenos y extender la vida útil de las conservas sin alterar significativamente su sabor y valor nutricional. Se aplica a alimentos con mayor acidez, como frutas y mermeladas. Existen dos métodos principales:
              ul
                li.d-flex.gap-2
                  span <b style="color: #8C492A">Altas temperaturas: </b> consiste en someter el alimento a una temperatura entre 75 °C y 90 °C durante un tiempo determinado, que varía entre 2 a 3 minutos.
              .hr-punteado 
              ul
                li.d-flex.gap-2
                  span <b style="color: #8C492A">Bajas temperaturas: </b> este método utiliza temperaturas más bajas, entre 60 °C y 65 °C, pero por un tiempo más prolongado, de 3 a 4 horas.
          
          .row(numero="2" titulo="Esterilización")
            .mb-4.mb-lg-0
              p La esterilización es un proceso térmico más intenso que la pasteurización y busca eliminar todos los microorganismos presentes en el alimento, incluyendo las esporas bacterianas, altamente resistentes al calor. Se utiliza principalmente para conservas de baja acidez, como vegetales, ya que son más susceptibles al desarrollo del <em>Clostridium botulinum</em>. La esterilización se lleva a cabo generalmente en autoclaves, equipos que permiten aplicar altas temperaturas (entre 116 °C y 120 °C) y presión controlada durante un tiempo específico.

      .col-lg-4.col-md-8.mt-3
          figure
            img(data-aos="fade-up")(src='@/assets/curso/temas/tema-2/4.png', alt='Imagen decorativa')

    Separador

    #t_2_4.titulo-segundo.color-acento-contenido
      h3(data-aos='zoom-in-right') 2.4 Enfriamiento y almacenamiento
    p.mb-3.mb-lg-4 Una vez finalizado el tratamiento térmico, es fundamental enfriar los frascos de forma gradual y controlada para detener la cocción y evitar cambios bruscos de temperatura que puedan afectar la calidad del producto. El enfriamiento lento permite que se forme un vacío dentro del frasco, lo que ayuda a preservar las conservas durante más tiempo. 

    .row.justify-content-center.mb-3.mb-lg-5
      .col-8.col-lg-4.mt-3.align-content-center
        figure
          img.mb-3.mb-lg-4(data-aos="fade-up")(src='@/assets/curso/temas/tema-2/5.png', alt='Imagen decorativa')
      .col-lg-8
        LineaTiempoD.color-acento-contenido.mt-3
          .row(numero="1" titulo="Enfriamiento al aire")
            .mb-4.mb-lg-0
              p Retirar los frascos del baño maría o la olla a presión con cuidado y colocarlos sobre un paño limpio en un lugar fresco y seco, alejados de corrientes de aire. Dejar enfriar completamente a temperatura ambiente.
          .row(numero="2" titulo="Comprobación del sellado")
            .mb-4.mb-lg-0
              p Una vez fríos, verificar que las tapas estén bien selladas presionando el centro de la tapa. Si la tapa no se hunde o se escucha un chasquido, el frasco no se ha sellado correctamente y debe ser refrigerado y consumido en poco tiempo. 
          .row(numero="3" titulo="Etiquetado")
            .mb-4.mb-lg-0
              p Etiquetar los frascos con el nombre del producto y la fecha de elaboración para llevar un control adecuado del inventario.
          .row(numero="4" titulo="Almacenamiento")
            .mb-4.mb-lg-0
              p Almacenar las conservas en un lugar fresco, seco y oscuro, lejos de fuentes de calor y luz solar directa. Un almacenamiento adecuado garantiza la calidad y seguridad de las conservas durante más tiempo.
    
    .cajon.color-secundario.p-4.mb-3.mb-lg-5
      p.mb-0 La elección entre pasteurización y esterilización dependerá del tipo de alimento, su acidez, el tiempo de conservación deseado, la disponibilidad de equipos y las preferencias del elaborador. En cualquier caso, es crucial seguir las indicaciones de la receta y controlar cuidadosamente las condiciones de tiempo y temperatura para obtener conservas seguras y de alta calidad.

    .row.justify-content-center.mb-3.mb-lg-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 1.
            span <em>Baño maría paso a paso</em>
        img.my-3(src="@/assets/curso/temas/tema-2/6.png", alt="Baño maría paso a paso")
        figcaption Fuente: Bueno, (2017).
    
    p.mb-2 Los factores más importantes que influyen en la esterilización son:
    p <b>La acidez o pH del producto:</b> la acidez que interesa cuando se preparan conservas es la acidez potencial de la fruta o verdura, esta se conoce como pH. En la siguiente tabla se muestran los tipos de pH:

    .row.justify-content-center.mb-3.mb-lg-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 2.
            span <em>Valor del pH de frutas y verduras más comunes</em>
        .tabla-a.color-acento-contenido
          table.text-center.ph-table
            thead
              tr(style="background: #33490B")
                th(colspan="3").text-light pH de algunas frutas y verduras
            tbody
              tr(style="background: #5C783B; color: #ffffff")
                th Frutas
                th pH desde
                th pH hasta
              tr
                th Manzana
                td 3.3
                td 4.0
              tr
                th Banana
                td 4.5
                td 5.2
              tr
                th Naranja
                td 3.0
                td 4.0
              tr
                th Fresa
                td 3.0
                td 3.9
              tr
                th Piña
                td 3.2
                td 4.0
              tr
                th Mango
                td 3.5
                td 4.5
              tr
                th Uva
                td 3.5
                td 4.5
              tr
                th Melón
                td 6.0
                td 6.7
              tr
                th Sandía
                td 5.2
                td 5.8
              tr
                th Kiwi
                td 3.9
                td 3.9
              tr
                th Ciruela
                td 2.8
                td 3.6
              tr(style="background: #5C783B; color: #ffffff")
                th Verduras
                th pH desde
                th pH hasta
              tr
                th Tomate
                td 3.9
                td 4.5
              tr
                th Espinaca
                td 5.1
                td 5.7
              tr
                th Pepino
                td 5.1
                td 5.7
              tr
                th Zanahoria
                td 4.9
                td 5.5
              tr
                th Papa
                td 5.6
                td 6.0
              tr
                th Brócoli
                td 6.3
                td 6.9
              tr
                th Espárrago
                td 6.0
                td 6.8
              tr
                th Cebolla
                td 5.5
                td 5.8
              tr
                th Ajo
                td 5.8
                td 6.5
              tr
                th Pimiento
                td 4.3
                td 5.3
              tr
                th Chaucha
                td 5.3
                td 5.8
              tr
                th Arveja
                td 5.5
                td 5.8
              tr
                th Choclo
                td 6.5
                td 6.6
        .tabla-a.color-acento-contenido
          table.ph-table
            thead
              tr
                td Menos de 4,5 pH
                td Baño maría
                td Ácidos
                td pH inferior a 4,5
              tr
                td Más de 4,5 pH
                td Autoclave
                td Semiácidos
                td pH de 4,5 a 6
              tr
                td(colspan="2")(rowspan="2") <b>Nota 1:</b> el pH es un factor decisivo a la hora de utilizar baño maría o autoclave.<br><b>Nota 2:</b> estos valores son aproximados y pueden variar ligeramente dependiendo de la variedad, madurez y condiciones de cultivo. 
                td No ácidos
                td pH mayor de 6
              tr
                td Alcalinos
                td por encima de 7
          figcaption Nota. Sena (2024).

    .row.justify-content-center.mb-3.mb-lg-4.check-list
      .col-8.col-lg-4.align-content-center
        img.mb-3.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/temas/tema-2/7.png", alt="Imagen decorativa")
      .col-lg-8
        h5 Recomendaciones para utilizar las conservas
        ul.mt-0
          li
            span Las conservas no se deben cocinar de nuevo y si se calienta debe ser por periodos cortos.
        .my-1.hr-punteado
        ul.mt-0
          li
            span Las conservas que son abiertas se dañan con facilidad, por eso es aconsejable consumirlas inmediatamente después de utilizarlas.
        .my-1.hr-punteado
        ul.mt-0
          li
            span Es aconsejable almacenarlas en lugares frescos.
        .my-1.hr-punteado
        ul.mt-0
          li
            span Cuando compre conservas en lata, seleccione las que estén en perfectas condiciones y rechace las que estén abolladas u oxidadas.
        .my-1.hr-punteado
        ul.mt-0
          li
            span Antes de abrir una conserva limpie su envase y cerciórese que produce el sonido de un soplido, si eso ocurre es porque se han llenado calientes al vacío.
        .my-1.hr-punteado
        ul.mt-0
          li
            span Las conservas que tienen una vida útil corta deben decir en la etiqueta guardar en frío.



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
