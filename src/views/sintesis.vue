<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.titulo-sexto
      h3 Preparación de conservas de frutas y verduras
      span Métodos de conservación y preparación de conservas de frutas y verduras

    .row.justify-content-center
      .col-lg-12
        p El componente: Métodos de conservación y preparación de conservas de frutas y verduras aborda temas clave relacionados con los ingredientes y los aspectos higiénicos en la manipulación de conservas. Se enfoca en identificar los ingredientes necesarios, como sal, azúcar, pectinas y aditivos, así como las técnicas y condiciones de higiene que deben seguirse para asegurar la calidad y seguridad de los productos. Se destacan medidas de limpieza y desinfección, tanto de los equipos como del personal manipulador, con el fin de evitar la contaminación durante el proceso productivo. Esto asegura que los productos conservados sean seguros para el consumo y prolonga su vida útil.
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis-map.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
