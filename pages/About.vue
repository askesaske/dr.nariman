<template>
  <div class="about-page">

    <section class="about-page__section">
      <div class="about-page__container">
        <h2 class="about-page__heading heading-medium">
          О нас
        </h2>

        <p class="about-page__text">
          Идейные соображения высшего порядка, а также перспективное планирование не оставляет шанса для прогресса
          профессионального сообщества. Имеется спорная точка зрения, гласящая примерно следующее: акционеры
          крупнейших
          компаний набирают популярность среди определенных слоев населения, а значит, должны быть указаны как
          претенденты
          на роль ключевых факторов. Для современного мира семантический разбор внешних противодействий требует
          определения и уточнения форм воздействия. В целом, конечно, укрепление и развитие внутренней структуры
          создаёт
          необходимость включения в производственный план целого ряда внеочередных
        </p>

        <img src="../assets/img/about-main.png" alt="" class="about-page__img">
      </div>
    </section>

    <section class="about-page__section our-mission">
      <div class="our-mission__container">
        <h2 class="our-mission__heading heading-blue heading-blue--sm">
          Наша миссия
        </h2>

        <div class="our-mission__list">

          <div class="our-mission__card mission-card">
            <svg class="mission-card__icon" width="48" height="48">
              <use href="../assets/img/icons.svg#med-support"></use>
            </svg>

            <div class="mission-card__title">
              Предоставить пациентам высокий уровень сервиса:
            </div>

            <ul class="mission-card__list">
              <li>・На доклиническом этапе взаимодействия с нами</li>
              <li>・В процессе посещения клиники</li>
              <li>・После лечения</li>
            </ul>

          </div>

          <div class="our-mission__card mission-card">
            <svg class="mission-card__icon" width="48" height="48">
              <use href="../assets/img/icons.svg#hospital-2"></use>
            </svg>

            <div class="mission-card__title">
              Мы стремимся к тому, чтобы каждый пациент, побывавший в нашей клинике, убедился в том, что мы:
            </div>

            <ul class="mission-card__list">
              <li>・Современны;</li>
              <li>・Успешны;</li>
              <li>・Высокопрофессиональны;</li>
              <li>・Сердечны;</li>
              <li>・Честны.</li>
            </ul>

          </div>

          <div class="our-mission__card mission-card">
            <svg class="mission-card__icon" width="48" height="48">
              <use href="../assets/img/icons.svg#surge-table"></use>
            </svg>

            <div class="mission-card__title">
              Мы стремимся к тому, чтобы наши пациенты видели, что мы динамично развиваемся:
            </div>

            <ul class="mission-card__list">
              <li>・Постоянно внедряем новые технологии;</li>
              <li>・Повышаем качество лечения и сервиса;</li>
              <li>・Находим новые формы удовлетворения потребностей пациентов;</li>
              <li>・Создаем новые современные стоматологические центры.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    <section class="about-page__section our-services">

      <div class="our-services__container">
        <h2 class="our-services__heading heading-blue">
          Наши услуги
        </h2>

        <div class="our-services__wrapper">

          <div class="swiper-container our-services__swiper-container">

            <div class="swiper-wrapper">
              <div class="swiper-slide our-services__item service-slider">
                <div class="service-slider__inner">
                  <img src="../assets/img/service-slider1.png" alt="" class="service-slider__img">

                  <div class="service-slider__info">
                    <div class="service-slider__title">
                      Хирургия
                    </div>

                    <ul class="service-slider__list">
                      <li>• Врожденная расщелина верхней губы и неба</li>
                      <li>• Реконструктивная ринохейпластика</li>
                      <li>• Рубцовые деформации лица и шеи</li>
                      <li>• Короткие уздечки верхней губы и языка</li>
                      <li>• Гемангиома</li>
                      <li>• Атерома</li>
                      <li>• Липома</li>
                      <li>• Киста</li>
                      <li>• Папиллома</li>
                      <li>• Микрохирургия</li>
                      <li>• Деформация ушной раковины</li>
                      <li>• Микротия</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="swiper-slide our-services__item service-slider">
                <div class="service-slider__inner">
                  <img src="../assets/img/service-slider2.png" alt="" class="service-slider__img">

                  <div class="service-slider__info">
                    <div class="service-slider__title">
                      Стоматология
                    </div>

                    <ul class="service-slider__list">
                      <li>• Профгигиена</li>
                      <li>• Отбеливание</li>
                      <li>• Виниры</li>
                      <li>• Протезирование</li>
                      <li>• Детская стоматология</li>
                      <li>• Пародонтология</li>
                      <li>• Брекеты</li>
                      <li>• Имплантация All on 4</li>
                      <li>• Имплантация “под ключ”</li>
                      <li>• Имплантация All on 6</li>
                      <li>• Имплантация одномоментная</li>
                      <li>• Имплантация без костной пластики</li>
                      <li>• Лечение кариеса</li>
                      <li>• Хирургия</li>
                      <li>• Лечение ICON</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-pagination our-services__pagination"></div>

          </div>

          <div class="our-services__next" @click="nextSlideService"></div>
          <div class="our-services__prev" @click="prevSlideService"></div>

        </div>

      </div>
    </section>

    <section class="about-page__section our-gallery">
      <div class="our-gallery__container">
        <h2 class="our-gallery__heading heading-blue">
          Наша фотогалерея
        </h2>

        <div class="our-gallery__wrapper">

          <div class="swiper-container our-gallery__swiper-container">

            <div class="swiper-wrapper">
              <div class="swiper-slide our-gallery__item">
                <img src="../assets/img/cab-1.png" alt="" class="our-gallery__img">
                <div class="our-gallery__badge">
                  Кабинет стоматологии
                </div>
              </div>

              <div class="swiper-slide our-gallery__item">
                <img src="../assets/img/cab-2.png" alt="" class="our-gallery__img">
                <div class="our-gallery__badge">
                  Кабинет хирургии
                </div>
              </div>

              <div class="swiper-slide our-gallery__item">
                <img src="../assets/img/cab-3.png" alt="" class="our-gallery__img">
                <div class="our-gallery__badge">
                  Столовая
                </div>
              </div>
            </div>

            <div class="swiper-pagination our-gallery__pagination"></div>

          </div>

          <div class="our-gallery__next" @click="nextSlideGallery"></div>
          <div class="our-gallery__prev" @click="prevSlideGallery"></div>

        </div>
      </div>
    </section>

  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  data() {
    return {
      serviceSwiper: null,
      gallerySwiper: null
    }
  },
  methods: {
    nextSlideService() {
      this.serviceSwiper.slideNext()
    },
    prevSlideService() {
      this.serviceSwiper.slidePrev()
    },

    nextSlideGallery() {
      this.gallerySwiper.slideNext()
    },
    prevSlideGallery() {
      this.gallerySwiper.slidePrev()
    },
  },
  mounted() {
    this.serviceSwiper = new Swiper('.our-services__swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: '.our-services__pagination',
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 40,
        }
      }
    });

    this.gallerySwiper = new Swiper('.our-gallery__swiper-container', {
      slidesPerView: 1,
      spaceBetween: 8,
      loop: true,
      pagination: {
        el: '.our-gallery__pagination',
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        }
      }
    });
  }
}
</script>
