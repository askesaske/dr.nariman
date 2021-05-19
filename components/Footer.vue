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

          <p>{{ schedule[0].value }}</p>
        </div>

        <div class="footer__item">
          <svg width="22" height="22">
            <use href="../assets/img/icons.svg#email-2"></use>
          </svg>

          <p>{{ mail[0].value }}</p>
        </div>

        <div class="footer__item">
          <svg width="22" height="22">
            <use href="../assets/img/icons.svg#map-pin2"></use>
          </svg>

          <p>{{ address[0].value }}</p>
        </div>
      </div>

      <a :href="'tel: ' + phoneNumber[0].value" class="footer__contact-box footer__contact-box--sm">
        <svg width="22" height="22">
          <use href="../assets/img/icons.svg#phone-3"></use>
        </svg>
        {{ phoneNumber[0].value }}
      </a>

      <div class="footer__socials">
        <a :href="instLink[0].value" class="footer__social">
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

      <a :href="'tel: ' + phoneNumber[0].value" class="footer__contact-box">
        <svg width="22" height="22">
          <use href="../assets/img/icons.svg#phone-3"></use>
        </svg>
        {{ phoneNumber[0].value }}
      </a>

    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    phoneNumber() {
      return this.$store.getters.loadedSettings.filter(item => item.key === 'number')
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
    instLink() {
      return this.$store.getters.loadedSettings.filter(item => item.key === 'instagram')
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
