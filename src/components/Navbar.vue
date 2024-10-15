<script setup>
import logo from '../assets/img/logo.png'
</script>

<template>
  <nav class="nav">
    <a href="/">
      <div class="logo">
        <img class="" :src="logo" alt="logo" width="100" />
        <span class="logo_span">Vue Jobs</span>
      </div>
    </a>

    <div class="menu">
      <a href="/">Home</a>
      <a href="/">Jobs</a>
      <a href="/">Add Job</a>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
}
.logo_span {
  font-size: 3em;
}
.menu {
  display: flex;
  gap: 20px;
}
</style>
