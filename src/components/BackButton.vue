<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section>
    <div class="container">
      <RouterLink to="/jobs" class="link">
        <i class="pi pi-arrow-circle-left"></i>
        <span>Back to Job Listings</span>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.link {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--main-color);
  transition: all ease 0.3s;
}
.link:hover {
  color: darkblue;
  transition: all ease 0.3s;
}
</style>
