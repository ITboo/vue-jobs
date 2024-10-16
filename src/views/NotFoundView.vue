<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="container not-found">
    <div class="child">
      <div class="not-found_text">
        <h1 class="not-found_title">
          404 <span class="accent">Not Found</span>
        </h1>
        <p class="">This page does not exist</p>
      </div>
      <RouterLink to="/" class="back_btn">Go Back</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.not-found {
  text-align: center;
}
.not-found_text {
  margin-bottom: 50px;
}
.not-found_title {
  font-size: 3em;
}
.accent {
  color: var(--main-color);
}
.back_btn {
  padding: 10px 20px;
  border-radius: 20px;
  background-color: var(--main-color);
  color: var(--white);
}
</style>
