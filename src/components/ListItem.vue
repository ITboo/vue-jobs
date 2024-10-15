<script setup>
const props = defineProps({
  job: Object,
})
</script>

<template>
  <div class="">
    <div class="">
      <div class="">
        <div class="">{{ job.type }}</div>
        <h3 class="">{{ job.title }}</h3>
      </div>

      <h3 class="">{{ job.salary }} / Year</h3>

      <div class="">{{ job.description }}</div>

      <div class="">
        <div class="">
          {{ job.location }}
        </div>
      </div>
    </div>
  </div>
</template>
