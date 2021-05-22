<template>
  <div class="service-page">

    <section class="service-page__section" id="service-page">


      <div class="service-page__container">
        <h2 class="service-page__heading heading-medium">
          {{ serviceData.name }}
        </h2>

        <div class="service-page__info">
          <div class="service-page__title">
            Процесс лечения
          </div>

          <div class="service-page__text">
            Хейлоринопластика - закрытие дефекта верхней губы и устранение деформации носа проводится с 3-6мес. Детям с
            двусторонней дефектом верхней губы сроки операции могут смещаться на более поздний возраст.
            <br><br>

            После 14 лет, в плане комплексного хирургического лечения, проводится операция по коррекции носовой
            перегородки, т.к. эта деформация очень часто встречается у пациентов с расщелиной верхней губы и неба. После
            16 лет, как окончательный этап реконструктивных операций по устранению деформации носа, проводится операция
            реконструктивной открытой ринопластики.
            <br><br>

            Также при сложных нарушениях прикуса, сужениях верхней челюсти или недоразвитии средней зоны лица пациентам
            после 16 - 18 лет проводятся ортогнатические операции (костные операции на верхней и нижней челюсти). Эти
            операции проводятся после ортодонтической подготовки.
          </div>
        </div>

        <img src="../../assets/img/service-page-img.png" alt="" class="service-page__img">
      </div>
    </section>

    <team-section class="service-page__section"></team-section>

    <work-section class="service-page__section"></work-section>
  </div>
</template>

<script>
import TeamSection from "@/components/TeamSection";
import WorkSection from "@/components/WorkSection";

export default {
  components: {
    TeamSection,
    WorkSection
  },
  data() {
    return {
      serviceData: {}
    };
  },
  methods: {
  },
  mounted() {
    this.$axios.get(process.env.API + 'disease?filter[id]=' + this.$route.params.id + '?include=media')
      .then(response => {
        console.log(response.data.data[0])
        this.serviceData = response.data.data[0]
      })
      .catch(e => console.log(e))
  },

}
</script>
