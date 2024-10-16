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
  <section class="jobs">
    <div class="container">
      <h2 class="jobs_title">Browse Jobs</h2>
      <div class="jobs_container">
        <ListItem
          v-for="job in jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
      <div v-if="showButton" class="btn_container">
        <a href="/jobs" class="jobs-btn">View All Jobs</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jobs {
  background-color: rgb(230, 244, 248);
}
.jobs_title {
  font-size: 3em;
  text-align: center;
  margin-bottom: 20px;
}
.jobs_container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.btn_container {
  text-align: center;
}
.jobs-btn {
  background-color: black;
  color: var(--white);
  width: 200px;
  padding: 10px 20px;
  border-radius: 20px;
}
</style>
