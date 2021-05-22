<template>
  <div class="specialist-page">
    <section class="specialist-page__section specialist-page__container">

      <h2 class="specialist-page__heading heading-medium">
        Наши специалисты
      </h2>

      <div class="specialist-page__row">

        <img src="../../assets/img/spec-1.png" alt="" class="specialist-page__img">

        <div class="specialist-page__info">
          <div class="specialist-page__name">
            {{ specialistData.full_name }}
          </div>

          <div class="specialist-page__group">

            <div class="specialist-page__item">
              <div class="specialist-page__title">
                Должность
              </div>
              <div class="specialist-page__bold">
                {{ specialistData.position }}
              </div>
            </div>

            <div class="specialist-page__item">
              <div class="specialist-page__title">
                Квалификационная категория
              </div>
              <div class="specialist-page__bold">
                {{ specialistData.qualification_category }}
              </div>
            </div>

            <div class="specialist-page__item">
              <div class="specialist-page__title">
                Стаж работы по специальности
              </div>
              <div class="specialist-page__bold">
                более {{ specialistData.working_experience_time }} лет
              </div>
            </div>

          </div>

          <a href="tel: +7 (777) 777 77 77" class="specialist-page__phone-box">
            <svg width="20" height="20">
              <use href="../../assets/img/icons.svg#phone-4"></use>
            </svg>
            8 (777) 777-77-77
          </a>

          <div class="specialist-page__group">

            <div class="specialist-page__item">
              <div class="specialist-page__title specialist-page__title--underline">
                Направление деятельности
              </div>

              <ul class="specialist-page__list">
                <li>•2012-2017гг. SEMА Hospital</li>
                <li>•2012г. Лечебно-диагностический центр</li>
                <li>•2011-2012гг. Клиника Достар Мед</li>
                <li>•2011г. Клиника ЖАН</li>
                <li>•2007-2011гг. Центральная Районна Больница г. Талгар, врач хирург отделения экстренной хирургии</li>
              </ul>
            </div>

            <div class="specialist-page__item">
              <div class="specialist-page__title specialist-page__title--underline">
                Образование
              </div>

              <ul class="specialist-page__list">
                <li>•АГМИ, Интернатура, Общая хирургия (2006-2007)</li>
                <li>•КазНМУ имени Асфендиярова (2000-2006)</li>
              </ul>
            </div>

            <div class="specialist-page__item">
              <div class="specialist-page__title specialist-page__title--underline">
                Курсы:
              </div>

              <ul class="specialist-page__list">
                <li>•Эндоскопия в хирургии (2018)</li>
                <li>•Воспалительные заболевания толстого кишечника (2018)</li>
                <li>•Фиброгастродуоденоскоприя (2012)</li>
                <li>•Общая хирургия (2011)</li>
                <li>•Лапароскопическая хирургия (2007)</li>
              </ul>
            </div>

          </div>

        </div>
      </div>

    </section>

    <work-section class="specialist-page__section"></work-section>
  </div>
</template>

<script>
import WorkSection from "@/components/WorkSection";

export default {
  components: {
    WorkSection
  },
  data() {
    return {
      specialistData: {}
    };
  },
  methods: {
    nextSlideWork() {
      this.worksSwiper.slideNext()
    },
    prevSlideWork() {
      this.worksSwiper.slidePrev()
    },
  },
  mounted() {
    this.$axios.get(process.env.API + 'specialist?filter[id]=' + this.$route.params.id + '?include=media')
      .then(response => {
        console.log(response.data.data[0])
        this.specialistData = response.data.data[0]
      })
      .catch(e => console.log(e))
  }
}
</script>
