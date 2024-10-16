<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute, RouterLink, useRouter } from 'vue-router'

const route = useRoute()
const jobId = route.params.id
</script>

<template>
  {{ jobId }}
</template>
