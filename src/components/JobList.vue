<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import ListItem from './ListItem.vue'

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
})
const state = reactive({
  jobs: [],
  isLoading: true,
})

onMounted(async () => {
  try {
    const response = await axios.get('/api/jobs')
    state.jobs = response.data
  } catch (error) {
    console.error('Error fetching jobs', error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <section class="jobs">
    <div class="container">
      <h2 class="jobs_title">Browse Jobs</h2>
      <div v-if="state.isLoading" class="loader">
        <PulseLoader color="lightblue" />
      </div>
      <div v-else class="">
        <div class="jobs_container">
          <ListItem v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job" />
        </div>
        <div v-if="showButton" class="btn_container">
          <a href="/jobs">
            <v-btn rounded="xl" color="blue-darken-3">View All Jobs</v-btn>
          </a>
        </div>
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

.loader {
  text-align: center;
}
</style>
