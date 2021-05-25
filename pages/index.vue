<template>
  <main class="main">
    <section class="main__section welcome-section">
      <div class="welcome-section__container">
        <div class="welcome-section__info">
          <h1 class="welcome-section__title">
            Челюстно-лицевая хирургия и стоматология в Алматы
          </h1>
          <p class="welcome-section__subtitle">
            Учитывая ключевые сценарии поведения, укрепление и развитие внутренней структуры создаёт предпосылки для
            экспериментов, поражающих по своей масштабности и грандиозности.
          </p>
          <button class="welcome-section__btn button" v-scroll-to="{el:'#services-section', duration: 700,}">
            Посмотреть услуги
          </button>
        </div>

        <img src="../assets/img/welcome-section-sm.png" alt="" class="welcome-section__img">

        <button class="welcome-section__btn welcome-section__btn--sm button"
                v-scroll-to="{el:'#services-section', duration: 700,}">
          Посмотреть услуги
        </button>
      </div>
    </section>

    <section class="main__section services-section" id="services-section">
      <div class="services-section__container">
        <h2 class="services-section__heading heading-medium">
          Услуги
        </h2>

        <div class="services-section__tabs">
          <div class="services-section__tab"
               v-for="(s, i) in loadedServices"
               :key="s.id"
               :class="{ 'services-section__tab--active': serviceChosen === s.name }"
               @click="chooseService(s.name)">
            {{ s.name }}
          </div>
        </div>

        <div class="services-section__list"
             v-for="(s, i) in loadedServices"
             :key="i"
             v-show="serviceChosen === s.name">

          <!--          <nuxt-link tag="div"-->
          <!--                     :to="'/Services/' + d.id"-->
          <!--                     v-for="(d, k) in s.diseases"-->
          <!--                     :key="d.id"-->
          <!--                     v-if="s.id === parseInt(d.service_id)"-->
          <!--                     class="services-section__card service-card">-->
          <!--            <div class="service-card__icon" v-for="img in d.media">-->
          <!--              <img :src="img.url" alt="">-->
          <!--            </div>-->

          <!--            <div class="service-card__name">-->
          <!--              {{ d.name }}-->
          <!--            </div>-->
          <!--          </nuxt-link>-->

          <div v-for="(d, k) in s.diseases"
               :key="d.id"
               v-if="s.id === parseInt(d.service_id)"
               class="services-section__card service-card"
               @click="$router.push('/Services/' + d.service_id)">
            <div class="service-card__icon" v-for="img in d.media">
              <img :src="img.url" alt="">
            </div>

            <div class="service-card__name">
              {{ d.name }}
            </div>
          </div>

        </div>

      </div>
    </section>

    <team-section class="main__section"></team-section>

    <section class="main__section about-section">
      <div class="about-section__container">

        <div class="about-section__info">
          <h2 class="about-section__heading heading-medium">
            О нас
          </h2>

          <p class="about-section__text">
            Идейные соображения высшего порядка, а также перспективное планирование не оставляет шанса для прогресса
            профессионального сообщества. Имеется спорная точка зрения, гласящая примерно следующее: акционеры
            крупнейших компаний набирают популярность среди определенных слоев населения, а значит, должны быть указаны
            как претенденты на роль ключевых факторов. Для современного мира семантический разбор внешних
            противодействий требует определения и уточнения форм воздействия. В целом, конечно, укрепление и развитие
            внутренней структуры создаёт необходимость включения в производственный план целого ряда внеочередных
          </p>

          <nuxt-link tag="button" to="/About" class="about-section__btn button">
            Подробнее
          </nuxt-link>
        </div>

        <div class="about-section__wrapper">

          <div class="swiper-container about-section__swiper-container">

            <div class="swiper-wrapper">

              <div class="swiper-slide about-section__item" v-for="(g, i) in loadedGallery" :key="g.id">
                <img :src="g.url" alt="" class="about-section__img">
                <div class="about-section__badge">
                  {{ g.name }}
                </div>
              </div>

            </div>

            <div class="swiper-pagination about-section__pagination"></div>

          </div>

          <div class="about-section__controls">
            <div class="about-section__prev" @click="prevSlideAbout"></div>
            <div class="about-section__counter">
              <span>{{ aboutCounter }}</span>/{{ this.loadedGallery.length }}
            </div>
            <div class="about-section__next" @click="nextSlideAbout"></div>
          </div>
        </div>

        <nuxt-link tag="button" to="/About" class="about-section__btn about-section__btn--sm button">
          Подробнее
        </nuxt-link>

      </div>
    </section>

    <section class="main__section benefit-section">
      <div class="benefit-section__container">
        <div class="benefit-section__list">

          <div class="benefit-section__item">
            <svg class="benefit-section__icon" width="48" height="48">
              <use href="../assets/img/icons.svg#hospital"></use>
            </svg>

            <div class="benefit-section__title">
              На рынке более 10 лет
            </div>

            <div class="benefit-section__subtitle">
              Ваше здоровье, ваша успешная жизнь. Вы должны доверить его только лучшим профессионалам.
            </div>
          </div>

          <div class="benefit-section__item">
            <svg class="benefit-section__icon" width="48" height="48">
              <use href="../assets/img/icons.svg#doctor"></use>
            </svg>

            <div class="benefit-section__title">
              Опытные врачи
            </div>

            <div class="benefit-section__subtitle">
              Ваше здоровье, ваша успешная жизнь. Вы должны доверить его только лучшим профессионалам.
            </div>
          </div>

          <div class="benefit-section__item">
            <svg class="benefit-section__icon" width="48" height="48">
              <use href="../assets/img/icons.svg#med-file"></use>
            </svg>

            <div class="benefit-section__title">
              Индивидуальный подход
            </div>

            <div class="benefit-section__subtitle">
              Выбор лечения идеально соответствует вашим целям, осложнение лечит болезненно
            </div>
          </div>

          <div class="benefit-section__item">
            <svg class="benefit-section__icon" width="48" height="48">
              <use href="../assets/img/icons.svg#med-insurance"></use>
            </svg>

            <div class="benefit-section__title">
              Качество и безопасность
            </div>

            <div class="benefit-section__subtitle">
              Все члены команды в Медицинском центре были тщательно обучены, чтобы помочь в любой ситуации.
            </div>
          </div>
        </div>
      </div>
    </section>

    <work-section class="main__section"></work-section>

    <section class="main__section contact-section" id="contact-section">
      <div class="contact-section__container">

        <div class="contact-section__info">
          <h2 class="contact-section__heading heading-medium">
            Наши контакты
          </h2>

          <p class="contact-section__text contact-section__text--mb30">
            Если у вас остались вопросы, <br> свяжитесь с нами прямо сейчас!
          </p>

          <div class="contact-section__schedule">
            <p class="contact-section__text">
              Мы на связи:
            </p>
            <p class="contact-section__bold">
              {{ schedule[0].value }}
            </p>
          </div>

          <div class="contact-section__items">

            <a :href="'tel: ' + phoneNumberWithMask[0].value" class="contact-section__item">
              <svg width="22" height="22">
                <use href="../assets/img/icons.svg#phone-2"></use>
              </svg>
              <span class="contact-section__bold">
                {{ phoneNumberWithMask[0].value }}
              </span>
            </a>

            <div class="contact-section__item">
              <svg width="22" height="22">
                <use href="../assets/img/icons.svg#email"></use>
              </svg>
              <span class="contact-section__bold">
                {{ mail[0].value }}
              </span>
            </div>

            <div class="contact-section__item">
              <svg width="22" height="22">
                <use href="../assets/img/icons.svg#map-pin"></use>
              </svg>
              <span class="contact-section__bold">
                {{ address[0].value }}
              </span>
            </div>

          </div>
        </div>

        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A0806055c8c63cdb1534543c9ac3b9dd43f50a664ea21bda83a10abdb7e26384e&amp;source=constructor"
          class="contact-section__map"
          frameborder="0"></iframe>

      </div>
    </section>
  </main>
</template>

<script>
import Swiper, {Pagination, Autoplay, Navigation} from 'swiper';
import TeamSection from "@/components/TeamSection";
import WorkSection from "@/components/WorkSection";

Swiper.use([Pagination, Autoplay, Navigation]);

export default {
  components: {
    TeamSection,
    WorkSection
  },
  data() {
    return {
      serviceChosen: '',
      aboutSwiper: null,
      aboutCounter: 1,
      diseases: [],
      services: []
    };
  },
  methods: {
    chooseService(type) {
      this.serviceChosen = type
    },
    nextSlideAbout() {
      this.aboutSwiper.slideNext()
      if (this.aboutCounter < this.loadedGallery.length) {
        this.aboutCounter++
      } else {
        this.aboutCounter = this.loadedGallery.length
      }
    },
    prevSlideAbout() {
      this.aboutSwiper.slidePrev()
      if (this.aboutCounter > 1) {
        this.aboutCounter--
      } else {
        this.aboutCounter = 1
      }
    },
  },
  computed: {
    loadedServices() {
      return this.$store.getters.loadedServices
    },
    loadedGallery() {
      return this.$store.getters.loadedGallery
    },
    phoneNumber() {
      return this.$store.getters.loadedSettings.filter(item => item.key === 'number')
    },
    phoneNumberWithMask() {
      return this.$store.getters.loadedSettings.filter(item => item.key === 'number_mask1')
    },
    schedule() {
      return this.$store.getters.loadedSettings.filter(item => item.key === 'schedule')
    },
    mail() {
      return this.$store.getters.loadedSettings.filter(item => item.key === 'mail')
    },
    address() {
      return this.$store.getters.loadedSettings.filter(item => item.key === 'address')
    },
  },
  mounted() {
    this.aboutSwiper = new Swiper('.about-section__swiper-container', {
      slidesPerView: 1,
      spaceBetween: 40,
      allowTouchMove: true,
      loop: true,
      pagination: {
        el: '.about-section__pagination',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          allowTouchMove: true,
          pagination: {
            el: '.about-section__pagination',
          },
          loop: true
        },
        1200: {
          allowTouchMove: false,
          loop: false,
          pagination: false
        }
      }
    });

    this.serviceChosen = this.loadedServices[0].name
  }
}
</script>

<style>

</style>
