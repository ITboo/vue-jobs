<script setup>
import Card from '@/components/Card.vue'
</script>

<template>
  <section class="">
    <div class="cards_container">
      <Card>
        <h2 class="">For Developers</h2>
        <p class="">Browse our Vue jobs and start your career today</p>
        <a href="/" class=""> Browse Jobs </a>
      </Card>
      <Card>
        <h2 class="">For Employers</h2>
        <p class="">List your job to find the perfect developer for the role</p>
        <a href="/" class=""> Add Job </a>
      </Card>
    </div>
  </section>
</template>

<style scoped>
.cards_container {
  display: flex;
  justify-content: space-between;
}
</style>
