<template>
  <section class="works-section">

    <div class="works-section__container">
      <h2 class="works-section__heading heading-blue">Наши работы</h2>
      <p class="works-section__subtitle">
        В клинике «dr.Nariman» представлены услуги для детей и взрослых. Запишитесь на прием к терапевту или узкому
        специалисту. Доктор выслушает вас, направит на обследование, а затем подберет индивидуальный план лечения.
      </p>

      <div class="works-section__wrapper">

        <div class="swiper-container works-section__swiper-container">

          <div class="swiper-wrapper">
            <div class="swiper-slide works-section__item works-card" v-for="(w, i) in loadedWorks">

              <div class="works-card__images">
                <div class="works-card__img-box">
                  <img :src="img.url" alt="" class="works-card__img" v-for="(img, i) in w.media" :key="img.id" v-show="img.destiny === 'image_before'">
                  <img :src="img.url" alt="" class="works-card__img" v-for="(img, i) in w.media" :key="img.id" v-show="img.destiny === 'image_after'">
                </div>

                <div class="works-card__badge">
                  До
                </div>
                <div class="works-card__badge works-card__badge--blue">
                  После
                </div>
              </div>

              <div class="works-card__info">
                <div class="works-card__name">
                  {{ w.patient_name }}
                </div>

                <div class="works-card__type">
                  {{ w.disease.name }}
                </div>

                <div class="works-card__text">
                  {{ w.description }}
                </div>
              </div>
            </div>

          </div>

          <div class="swiper-pagination works-section__pagination"></div>

        </div>

        <div class="works-section__next" @click="nextSlideWork"></div>
        <div class="works-section__prev" @click="prevSlideWork"></div>

      </div>
    </div>
  </section>
</template>

<script>
import Swiper, {Pagination, Autoplay, Navigation} from 'swiper';

Swiper.use([Pagination, Autoplay, Navigation]);

export default {
  scrollToTop: true,
  data() {
    return {
      worksSwiper: null,
    };
  },
  computed: {
    loadedWorks() {
      return this.$store.getters.loadedWorks
    }
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
    this.worksSwiper = new Swiper('.works-section__swiper-container', {
      slidesPerView: 1,
      spaceBetween: 8,
      loop: true,
      pagination: {
        el: '.works-section__pagination',
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 40,
        }
      }
    });
  }
}
</script>
