<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute, RouterLink, useRouter } from 'vue-router'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import axios from 'axios'
import BackButton from '@/components/BackButton.vue'

const route = useRoute()
const jobId = route.params.id

const state = reactive({
  job: {},
  isLoading: true,
})

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8000/jobs/${jobId}`)
    state.job = response.data
    console.log(response)
  } catch (error) {
    console.error('Error fetching job', error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <section v-if="!state.isLoading" class="">
    <BackButton />
    <div class="container details">
      <main class="main">
        <div class="">
          <div class="job_type">{{ state.job.type }}</div>
          <h1 class="job_name">{{ state.job.title }}</h1>
          <div class="job_location">
            <i class="pi pi-map-marker"></i>
            <p class="">{{ state.job.location }}</p>
          </div>
        </div>

        <div class="wrapper">
          <h3 class="job_title">Job Description</h3>

          <p class="job_description">
            {{ state.job.description }}
          </p>

          <h3 class="job_title">Salary</h3>

          <p class="job_salary">{{ state.job.salary }} / Year</p>
        </div>
      </main>

      <aside class="aside">
        <div class="company">
          <h3 class="company_title">Company Info</h3>
          <h2 class="company_name">{{ state.job.company.name }}</h2>
          <p class="company_description">
            {{ state.job.company.description }}
          </p>
          <hr class="" />
          <h3 class="company_title">Contact Email:</h3>
          <p class="company_email">
            {{ state.job.company.contactEmail }}
          </p>
          <h3 class="company_title">Contact Phone:</h3>
          <p class="company_phone">
            {{ state.job.company.contactPhone }}
          </p>
        </div>
      </aside>
    </div>
  </section>

  <div v-else class="loader">
    <PulseLoader color="lightblue" />
  </div>
</template>

<style scoped>
.main,
.aside {
  width: 48%;
}
.details {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}
.job_type {
  background-color: var(--main-color);
  width: fit-content;
  padding: 3px 5px;
  border-radius: 10px;
  color: var(--white);
  margin-bottom: 10px;
}
.job_description {
  margin-bottom: 10px;
}
.job_location {
  display: flex;
  align-items: center;
  gap: 5px;
  color: gray;
  margin-bottom: 10px;
}
.company {
  border: solid 2px var(--main-color);
  padding: 20px;
  border-radius: 20px;
}
.company_title,
.job_title {
  margin-bottom: 5px;
  color: var(--main-color);
}
.company_description {
  margin-bottom: 5px;
}
.loader {
  text-align: center;
}
</style>
