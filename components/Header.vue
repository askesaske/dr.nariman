<template>
  <header class="header">
    <div class="header__container">
      <nuxt-link to="/" tag="a" class="header__logo">
        <svg width="110" height="30">
          <use href="../assets/img/icons.svg#logo"></use>
        </svg>
      </nuxt-link>

      <div class="header__links">
        <nuxt-link to="/" tag="a" class="header__link" exact>Главная</nuxt-link>
        <nuxt-link to="/About" tag="a" class="header__link" exact>О нас</nuxt-link>
        <!--        <nuxt-link to="#" tag="a" class="header__link" exact>Хирургия</nuxt-link>-->
        <!--        <nuxt-link to="#" tag="a" class="header__link" exact>Стоматология</nuxt-link>-->
        <span class="header__link" v-scroll-to="{el:'#team-section', duration: 700,}">Наши специалисты</span>
        <span class="header__link" v-scroll-to="{el:'#contact-section', duration: 700,}">Контакты</span>
      </div>

      <a :href="'tel: ' + phoneNumberWithMask[0].value" class="header__phone-box">
        <svg width="16" height="16">
          <use href="../assets/img/icons.svg#phone"></use>
        </svg>
        {{ phoneNumberWithMask[0].value }}
      </a>

      <svg class="header__burger" width="20" height="20" @click="sideBarOpen = true">
        <use href="../assets/img/icons.svg#burger"></use>
      </svg>
    </div>

    <div class="header__sidebar sidebar" :class="{'sidebar--open': sideBarOpen}">
      <svg class="sidebar__close" width="16" height="18" @click="sideBarOpen = false">
        <use href="../assets/img/icons.svg#side-close"></use>
      </svg>

      <div class="sidebar__links">
        <nuxt-link to="/" tag="a" class="sidebar__link" exact @click.native="sideBarOpen = false">Главная</nuxt-link>
        <nuxt-link to="/About" tag="a" class="sidebar__link" exact @click.native="sideBarOpen = false">О нас</nuxt-link>
        <!--        <nuxt-link to="#" tag="a" class="header__link" exact>Хирургия</nuxt-link>-->
        <!--        <nuxt-link to="#" tag="a" class="header__link" exact>Стоматология</nuxt-link>-->
        <span class="sidebar__link" v-scroll-to="{el:'#team-section', duration: 700,}" @click="sideBarOpen = false">Наши специалисты</span>
        <span class="sidebar__link" v-scroll-to="{el:'#contact-section', duration: 700,}" @click="sideBarOpen = false">Контакты</span>
      </div>

      <a :href="'tel: ' + phoneNumberWithMask[0].value" class="sidebar__phone-box">
        <svg width="22" height="22">
          <use href="../assets/img/icons.svg#phone-5"></use>
        </svg>
        {{ phoneNumberWithMask[0].value }}
      </a>

      <div class="sidebar__socials">
        <a :href="instLink[0].value" class="sidebar__social">
          <svg width="44" height="44">
            <use href="../assets/img/icons.svg#inst-2"></use>
          </svg>
        </a>

        <a :href="'https://wa.me/' + phoneNumber[0].value" class="sidebar__social">
          <svg width="44" height="44">
            <use href="../assets/img/icons.svg#wpp-2"></use>
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      sideBarOpen: false
    };
  },
  computed: {
    phoneNumber() {
      return this.$store.getters.loadedSettings.filter(item => item.key === 'number')
    },
    phoneNumberWithMask() {
      return this.$store.getters.loadedSettings.filter(item => item.key === 'number_mask1')
    },
    instLink() {
      return this.$store.getters.loadedSettings.filter(item => item.key === 'instagram')
    }
  },
  methods: {},
  mounted() {
  }
};
</script>

<style lang="scss" scoped>

</style>
