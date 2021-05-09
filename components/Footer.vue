<template>
  <footer class="footer">
    <div class="footer__container">
      <nuxt-link class="footer__logo" tag="div" to="/">
        <img src="../assets/img/footer-logo.png" alt="">
      </nuxt-link>

      <div class="footer__contacts">
        <div class="footer__item">
          <svg width="22" height="22">
            <use href="../assets/img/icons.svg#clock"></use>
          </svg>

          <p>Пн-Пт: 09:00-18:00</p>
        </div>

        <div class="footer__item">
          <svg width="22" height="22">
            <use href="../assets/img/icons.svg#email-2"></use>
          </svg>

          <p>dr.nariman@gmail.com</p>
        </div>

        <div class="footer__item">
          <svg width="22" height="22">
            <use href="../assets/img/icons.svg#map-pin2"></use>
          </svg>

          <p>г. Алматы, ул. Толе би 240</p>
        </div>
      </div>

      <a href="tel: +7 (777) 777 77 77" class="footer__contact-box footer__contact-box--sm">
        <svg width="22" height="22">
          <use href="../assets/img/icons.svg#phone-3"></use>
        </svg>
        +7 (777) 777 77 77
      </a>

      <div class="footer__socials">
        <a href="#" class="footer__social">
          <svg width="36" height="36">
            <use href="../assets/img/icons.svg#inst"></use>
          </svg>
        </a>

        <a href="#" class="footer__social">
          <svg width="36" height="36">
            <use href="../assets/img/icons.svg#wpp"></use>
          </svg>
        </a>
      </div>

      <a href="tel: +7 (777) 777 77 77" class="footer__contact-box">
        <svg width="22" height="22">
          <use href="../assets/img/icons.svg#phone-3"></use>
        </svg>
        +7 (777) 777 77 77
      </a>

    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

</style>
