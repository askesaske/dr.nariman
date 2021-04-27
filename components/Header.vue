<template>
  <header class="header">
    <div class="header__container">
      <nuxt-link to="/" tag="a" class="header__logo">
        <svg width="110" height="30">
          <use href="../assets/img/icons.svg#logo"></use>
        </svg>
      </nuxt-link>

      <div class="header__links">
        <nuxt-link to="/" tag="a" class="header__link">Главная</nuxt-link>
        <nuxt-link to="#" tag="a" class="header__link">О нас</nuxt-link>
        <nuxt-link to="#" tag="a" class="header__link">Хирургия</nuxt-link>
        <nuxt-link to="#" tag="a" class="header__link">Стоматология</nuxt-link>
        <nuxt-link to="#" tag="a" class="header__link">Наши специалисты</nuxt-link>
        <nuxt-link to="#" tag="a" class="header__link">Контакты</nuxt-link>
      </div>

      <a href="tel: +7 (777) 777 77 77" class="header__phone-box">
        <svg width="16" height="16">
          <use href="../assets/img/icons.svg#phone"></use>
        </svg>
        8 (777) 777-77-77
      </a>
    </div>
  </header>
</template>

<script>
export default {
  methods: {

  }
};
</script>

<style lang="scss" scoped>

</style>
