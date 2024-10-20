<script setup>
import Card from '@/components/Card.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="container">
    <div class="cards_container">
      <Card class="dev_card card">
        <h2 class="card_title">For Developers</h2>
        <p class="card_text">Browse our Vue jobs and start your career today</p>
        <RouterLink to="/jobs" class="btn dev_btn"> Browse Jobs </RouterLink>
      </Card>
      <Card class="employer_card card">
        <h2 class="card_title">For Employers</h2>
        <p class="card_text">
          List your job to find the perfect developer for the role
        </p>
        <RouterLink to="/jobs/add" class="btn employer_btn">
          Add Job
        </RouterLink>
      </Card>
    </div>
  </section>
</template>

<style scoped>
.cards_container {
  display: flex;
  justify-content: center;
  gap: 50px;
}
.card {
  padding: 20px;
  border-radius: 20px;
}
.dev_card {
  background-color: rgba(31, 100, 190, 0.192);
}
.employer_card {
  border: solid 2px green;
}
.card_title {
  margin-bottom: 10px;
}
.card_text {
  margin-bottom: 20px;
  color: rgb(92, 92, 92);
}

.dev_btn {
  background-color: var(--main-color);
  color: var(--white);
}
.employer_btn {
  background-color: green;
  color: var(--white);
}
</style>
