<script setup>
defineProps({
  title: {
    type: String,
    default: 'Become a Vue Dev',
  },
  subtitle: {
    type: String,
    default: 'Find the Vue job that fits your skills and needs',
  },
})
</script>

<template>
  <section class="hero">
    <div class="container">
      <h1 class="hero_title text">
        {{ title }}
      </h1>
      <p class="hero_text text">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-color: var(--main-color);
  text-align: center;
  padding: 50px 0;
}
.text {
  color: var(--white);
}
.hero_title {
  font-size: 5em;
}
.hero_text {
  font-size: 2em;
}
</style>
