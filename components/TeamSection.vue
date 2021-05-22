<template>
  <section class="team-section" id="team-section">
    <div class="team-section__container">

      <h2 class="team-section__heading heading-medium">
        Наши специалисты
      </h2>

      <p class="team-section__subtitle">
        В клинике «dr.Nariman» представлены услуги для детей и взрослых. Запишитесь на прием к узкому специалисту.
        Доктор выслушает вас, направит на обследование, а затем подберет индивидуальный план лечения.
      </p>

      <div class="team-section__wrapper">

        <div class="swiper-container team-section__swiper-container">

          <div class="swiper-wrapper">
            <div class="swiper-slide team-section__item team-card" v-for="(s, i) in loadedSpecialists" :key="s.id">
              <img :src="s.media[0].url" alt="" class="team-card__img">

              <div class="team-card__info">
                <div class="team-card__badge">
                  Стаж {{ s.working_experience_time }} лет
                </div>

                <div>
                  <div class="team-card__name">
                    {{ s.full_name }}
                  </div>

                  <div class="team-card__text">
                    {{ s.position }}
                  </div>
                </div>

                <nuxt-link tag="button" :to="'/Specialists/' + s.id" class="team-card__btn button">
                  Подробнее
                </nuxt-link>
              </div>
            </div>

          </div>

          <div class="swiper-pagination team-section__pagination"></div>
        </div>

        <div class="team-section__next" @click="nextSlideTeam"></div>
        <div class="team-section__prev" @click="prevSlideTeam"></div>

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
      teamSwiper: null,
    };
  },
  methods: {
    nextSlideTeam() {
      this.teamSwiper.slideNext()
    },
    prevSlideTeam() {
      this.teamSwiper.slidePrev()
    },
  },
  computed: {
    loadedSpecialists() {
      return this.$store.getters.loadedSpecialists
    }
  },
  mounted() {
    this.teamSwiper = new Swiper('.team-section__swiper-container', {
      slidesPerView: 2,
      spaceBetween: 7,
      loop: true,
      pagination: {
        el: '.team-section__pagination',
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        }
      }
    });
    // this.$axios(process.env.API + 'specialist?filter[id]=1')
    //   .then(response => {
    //     console.log(response.data.data)
    //     // this.diseases = response.data.data
    //   })
    //   .catch(e => console.log(e))
  }
}
</script>
