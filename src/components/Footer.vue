<script setup>
const currentYear = new Date().getFullYear()
</script>
<template>
  <v-footer border class="footer">
    <a href="https://github.com/ITboo/vue-jobs" target="_blank">GitHub</a>
    <p>{{ currentYear }}</p>
    <p v-text="'For non-commercial use'"></p>
  </v-footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  gap: 30px;
}
</style>
