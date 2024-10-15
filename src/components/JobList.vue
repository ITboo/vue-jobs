<script setup>
import { reactive, onMounted, ref } from 'vue'
import jobData from '@/api/jobs.json'

import ListItem from './ListItem.vue'

const jobs = ref(jobData)

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <section class="">
    <h2 class="jobs_title">Browse Jobs</h2>
    <div class="jobs_container">
      <ListItem
        v-for="job in jobs.slice(0, limit || state.jobs.length)"
        :key="job.id"
        :job="job"
      />
    </div>
  </section>

  <section v-if="showButton" class="">
    <a href="/" class="">View All Jobs</a>
  </section>
</template>

<style scoped>
.jobs_title {
  text-align: center;
}
.jobs_container {
  display: flex;
  justify-content: space-between;
}
</style>
