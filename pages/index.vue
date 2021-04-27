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
          <button class="welcome-section__btn button">
            Посмотреть услуги
          </button>
        </div>
      </div>
    </section>

    <section class="main__section services-section">
      <div class="services-section__container">
        <h2 class="services-section__heading heading-medium">
          Услуги
        </h2>

        <div class="services-section__tabs">
          <div class="services-section__tab"
               :class="{ 'services-section__tab--active': surgeryChosen }"
               @click="chooseService('Хирургия')">
            Хирургия
          </div>
          <div class="services-section__tab"
               :class="{ 'services-section__tab--active': dentistryChosen }"
               @click="chooseService('Стоматология')">
            Стоматология
          </div>
        </div>

        <div class="services-section__list" v-show="surgeryChosen">

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="72" height="68">
                <use href="../assets/img/icons.svg#lip-prick"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Врожденная расщелина верхней губы и неба
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="66" height="72">
                <use href="../assets/img/icons.svg#rhinocheiloplasty"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Реконструктивная ринохейлопластика
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="72" height="56">
                <use href="../assets/img/icons.svg#face"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Рубцовые деформации лица и шеи
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="76" height="52">
                <use href="../assets/img/icons.svg#lip"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Короткие уздечки верхней губы и языка
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="66" height="68">
                <use href="../assets/img/icons.svg#back"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Гемангиома
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="69" height="57">
                <use href="../assets/img/icons.svg#face-2"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Атерома
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="72" height="56">
                <use href="../assets/img/icons.svg#chest"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Липома
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="65" height="66">
                <use href="../assets/img/icons.svg#teeth"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Киста
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="72" height="68">
                <use href="../assets/img/icons.svg#pappiloma"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Папиллома
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="60" height="65">
                <use href="../assets/img/icons.svg#scissors"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Микрохирургия
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="72" height="56">
                <use href="../assets/img/icons.svg#ear"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Деформация ушной раковины
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="41" height="63">
                <use href="../assets/img/icons.svg#ear-2"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Микротия
            </div>
          </div>

        </div>

        <div class="services-section__list" v-show="dentistryChosen">

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="72" height="68">
                <use href="../assets/img/icons.svg#teeth-2"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Профгигиена
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="72" height="68">
                <use href="../assets/img/icons.svg#tooth"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Отбеливание
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="72" height="68">
                <use href="../assets/img/icons.svg#teeth-3"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Виниры
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="72" height="68">
                <use href="../assets/img/icons.svg#tooth-2"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Протезирование
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="72" height="68">
                <use href="../assets/img/icons.svg#toy"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Детская стоматология
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="72" height="68">
                <use href="../assets/img/icons.svg#tooth-3"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Пародонтология
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="72" height="68">
                <use href="../assets/img/icons.svg#teeth-4"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Брекеты
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="72" height="68">
                <use href="../assets/img/icons.svg#tooth-4"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Имплантация All on 4
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="72" height="68">
                <use href="../assets/img/icons.svg#tooth-hand"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Имплантация
              “под ключ”
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="72" height="68">
                <use href="../assets/img/icons.svg#tooth-5"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Имплантация All on 6
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="72" height="68">
                <use href="../assets/img/icons.svg#tooth-6"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Имплантация
              одномоментная
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="72" height="68">
                <use href="../assets/img/icons.svg#teeth-5"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Хирургия
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="72" height="68">
                <use href="../assets/img/icons.svg#tooth-7"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Лечение кариеса
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="72" height="68">
                <use href="../assets/img/icons.svg#tooth-8"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Имплантация
              без костной пластики
            </div>
          </div>

          <div class="services-section__card service-card">
            <div class="service-card__icon">
              <svg width="72" height="68">
                <use href="../assets/img/icons.svg#teeth-6"></use>
              </svg>
            </div>

            <div class="service-card__name">
              Лечение ICON
            </div>
          </div>

        </div>


      </div>
    </section>

    <section class="main__section team-section">
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
              <div class="swiper-slide team-section__item team-card">
                <img src="../assets/img/team-member.png" alt="" class="team-card__img">

                <div class="team-card__info">
                  <div class="team-card__badge">
                    Стаж 15 лет
                  </div>

                  <div>
                    <div class="team-card__name">
                      Сатылган Нариман Жаксылыкулы
                    </div>

                    <div class="team-card__text">
                      Челюстно-лицевой хирург
                    </div>
                  </div>

                  <button class="team-card__btn button">
                    Подробнее
                  </button>
                </div>
              </div>

              <div class="swiper-slide team-section__item team-card">
                <img src="../assets/img/team-member.png" alt="" class="team-card__img">

                <div class="team-card__info">
                  <div class="team-card__badge">
                    Стаж 15 лет
                  </div>

                  <div>
                    <div class="team-card__name">
                      Сатылган Нариман Жаксылыкулы
                    </div>

                    <div class="team-card__text">
                      Челюстно-лицевой хирург
                    </div>
                  </div>

                  <button class="team-card__btn button">
                    Подробнее
                  </button>
                </div>
              </div>

              <div class="swiper-slide team-section__item team-card">
                <img src="../assets/img/team-member.png" alt="" class="team-card__img">

                <div class="team-card__info">
                  <div class="team-card__badge">
                    Стаж 15 лет
                  </div>

                  <div>
                    <div class="team-card__name">
                      Сатылган Нариман Жаксылыкулы
                    </div>

                    <div class="team-card__text">
                      Челюстно-лицевой хирург
                    </div>
                  </div>

                  <button class="team-card__btn button">
                    Подробнее
                  </button>
                </div>
              </div>

              <div class="swiper-slide team-section__item team-card">
                <img src="../assets/img/team-member.png" alt="" class="team-card__img">

                <div class="team-card__info">
                  <div class="team-card__badge">
                    Стаж 15 лет
                  </div>

                  <div>
                    <div class="team-card__name">
                      Сатылган Нариман Жаксылыкулы
                    </div>

                    <div class="team-card__text">
                      Челюстно-лицевой хирург
                    </div>
                  </div>

                  <button class="team-card__btn button">
                    Подробнее
                  </button>
                </div>
              </div>

              <div class="swiper-slide team-section__item team-card">
                <img src="../assets/img/team-member.png" alt="" class="team-card__img">

                <div class="team-card__info">
                  <div class="team-card__badge">
                    Стаж 15 лет
                  </div>

                  <div>
                    <div class="team-card__name">
                      Сатылган Нариман Жаксылыкулы
                    </div>

                    <div class="team-card__text">
                      Челюстно-лицевой хирург
                    </div>
                  </div>

                  <button class="team-card__btn button">
                    Подробнее
                  </button>
                </div>
              </div>

              <div class="swiper-slide team-section__item team-card">
                <img src="../assets/img/team-member.png" alt="" class="team-card__img">

                <div class="team-card__info">
                  <div class="team-card__badge">
                    Стаж 15 лет
                  </div>

                  <div>
                    <div class="team-card__name">
                      Сатылган Нариман Жаксылыкулы
                    </div>

                    <div class="team-card__text">
                      Челюстно-лицевой хирург
                    </div>
                  </div>

                  <button class="team-card__btn button">
                    Подробнее
                  </button>
                </div>
              </div>

              <div class="swiper-slide team-section__item team-card">
                <img src="../assets/img/team-member.png" alt="" class="team-card__img">

                <div class="team-card__info">
                  <div class="team-card__badge">
                    Стаж 15 лет
                  </div>

                  <div>
                    <div class="team-card__name">
                      Сатылган Нариман Жаксылыкулы
                    </div>

                    <div class="team-card__text">
                      Челюстно-лицевой хирург
                    </div>
                  </div>

                  <button class="team-card__btn button">
                    Подробнее
                  </button>
                </div>
              </div>

              <div class="swiper-slide team-section__item team-card">
                <img src="../assets/img/team-member.png" alt="" class="team-card__img">

                <div class="team-card__info">
                  <div class="team-card__badge">
                    Стаж 15 лет
                  </div>

                  <div>
                    <div class="team-card__name">
                      Сатылган Нариман Жаксылыкулы
                    </div>

                    <div class="team-card__text">
                      Челюстно-лицевой хирург
                    </div>
                  </div>

                  <button class="team-card__btn button">
                    Подробнее
                  </button>
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

          <button class="about-section__btn button">
            Подробнее
          </button>
        </div>

        <div class="about-section__wrapper">

          <div class="swiper-container about-section__swiper-container">

            <div class="swiper-wrapper">

              <div class="swiper-slide about-section__item">
                <img src="../assets/img/cab-1.png" alt="" class="about-section__img">
                <div class="about-section__badge">
                  Кабинет стоматологии
                </div>
              </div>

              <div class="swiper-slide about-section__item">
                <img src="../assets/img/cab-2.png" alt="" class="about-section__img">
                <div class="about-section__badge">
                  Кабинет хирургии
                </div>
              </div>

              <div class="swiper-slide about-section__item">
                <img src="../assets/img/cab-3.png" alt="" class="about-section__img">
                <div class="about-section__badge">
                  Столовая
                </div>
              </div>

            </div>

          </div>

          <div class="about-section__controls">
            <div class="about-section__prev" @click="prevSlideAbout"></div>
            <div class="about-section__counter">
              <span>{{ aboutCounter }}</span>/3
            </div>
            <div class="about-section__next" @click="nextSlideAbout"></div>
          </div>
        </div>

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
  </main>
</template>

<script>
import Swiper, {Pagination, Autoplay, Navigation} from 'swiper';

Swiper.use([Pagination, Autoplay, Navigation]);

export default {
  data() {
    return {
      surgeryChosen: true,
      dentistryChosen: false,
      teamSwiper: null,
      aboutSwiper: null,
      aboutCounter: 1
    };
  },
  methods: {
    chooseService(type) {
      if (type === 'Хирургия') {
        this.surgeryChosen = true
        this.dentistryChosen = false
      }
      if (type === 'Стоматология') {
        this.dentistryChosen = true
        this.surgeryChosen = false
      }
    },
    nextSlideTeam() {
      this.teamSwiper.slideNext()
    },
    prevSlideTeam() {
      this.teamSwiper.slidePrev()
    },
    nextSlideAbout() {
      this.aboutSwiper.slideNext()
      if (this.aboutCounter < 3) {
        this.aboutCounter++
      } else {
        this.aboutCounter = 3
      }
    },
    prevSlideAbout() {
      this.aboutSwiper.slidePrev()
      if (this.aboutCounter > 1) {
        this.aboutCounter--
      } else {
        this.aboutCounter = 1
      }
    }
  },
  mounted() {
    this.teamSwiper = new Swiper('.team-section__swiper-container', {
      slidesPerView: 2,
      spaceBetween: 8,
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

    this.aboutSwiper = new Swiper('.about-section__swiper-container', {
      slidesPerView: 2,
      spaceBetween: 8,
      allowTouchMove: false,
      // loop: true,
      // pagination: {
      //   el: '.team-section__pagination',
      // },
      breakpoints: {
        768: {
          slidesPerView: 3,
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

<style>

</style>
