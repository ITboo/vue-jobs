<script setup>
defineProps({
  title: {
    type: String,
    default: 'Become a Vue Dev',
  },
  subtitle: {
    type: String,
    default: 'Find the Vue job that fits your skills and needs',
  },
})
</script>

<template>
  <section class="">
    <div class="">
      <div class="">
        <h1 class="">
          {{ title }}
        </h1>
        <p class="">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>
