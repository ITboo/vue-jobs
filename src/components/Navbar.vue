<script setup>
import { RouterLink, useRoute } from 'vue-router'
import logo from '@/assets/img/logo.png'

const isActiveLink = routePath => {
  const route = useRoute()
  return route.path === routePath
}
</script>

<template>
  <header class="">
    <div class="container">
      <nav class="nav">
        <RouterLink to="/">
          <div class="logo">
            <img class="" :src="logo" alt="logo" width="50" />
            <span class="logo_span">Vue Jobs</span>
          </div>
        </RouterLink>

        <div class="menu">
          <RouterLink
            to="/"
            class="menu_link"
            :class="[isActiveLink('/') ? 'active' : '']"
            >Home</RouterLink
          >
          <RouterLink
            to="/jobs"
            class="menu_link"
            :class="[isActiveLink('/jobs') ? 'active' : '']"
            >Jobs</RouterLink
          >
          <RouterLink
            to="/jobs/add"
            class="menu_link"
            :class="[isActiveLink('/jobs/add') ? 'active' : '']"
            >Add Job</RouterLink
          >
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 10vh;
}
a {
  text-decoration: none;
}
.active {
  text-decoration: underline;
}
.menu_link {
  font-size: 1.5em;
  color: black;
  transition: all ease 0.3s;
}
.menu_link:hover {
  color: var(--main-color);
  transition: all ease 0.3s;
}

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
  color: var(--main-color);
}
.menu {
  display: flex;
  gap: 20px;
}
</style>
