<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  job: Object,
})
const showFullDescription = ref(false)
const toggleFullDescription = () => {
  showFullDescription.value = !showFullDescription.value
}

const truncatedDescription = computed(() => {
  let description = props.job.description
  if (!showFullDescription.value) {
    description = description.substring(0, 90) + '...'
  }
  return description
})
</script>

<template>
  <v-card class="job">
    <div class="">
      <div class="">
        <div class="">{{ job.type }}</div>
        <h3 class="">{{ job.title }}</h3>
      </div>

      <div class="description">
        <p>
          {{ truncatedDescription }}
        </p>
        <button @click="toggleFullDescription" class="toggle-btn">
          {{ showFullDescription ? 'Less' : 'More' }}
        </button>
      </div>

      <h3 class="salary">{{ job.salary }} / Year</h3>
      <v-divider></v-divider>
      <div class="job_bottom">
        <div class="location_container">
          <i class="pi pi-map-marker"></i>
          {{ job.location }}
        </div>
        <RouterLink :to="'/jobs/' + job.id">
          <v-btn color="blue-darken-3">Read more</v-btn>
        </RouterLink>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.job {
  background-color: var(--white);
  border-radius: 20px;
  padding: 20px;
  width: 350px;
  margin-bottom: 20px;
}

.description {
  font-weight: 300;
}

.toggle-btn {
  border: none;
  background-color: transparent;
  color: gray;
  cursor: pointer;
}

.salary {
  color: var(--main-color);
  margin: 20px 0;
}

.job_bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.job_link {
  padding: 10px 20px;
  border-radius: 20px;
  background-color: var(--main-color);
  color: var(--white);
}
</style>
