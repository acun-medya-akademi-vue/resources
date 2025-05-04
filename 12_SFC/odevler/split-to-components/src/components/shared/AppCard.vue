<script>
export default {
  name: "AppCard",
  // props: ['title', 'description', 'bgColor']
  props: {
    title: {
      type: String,
      required: true,
      default: 'Default Title'
    },
    description: {
      type: String,
      required: true,
      default: "Default Description"
    }
  }
}
</script>

<template>
  <div class="info-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<style>
.info-card {
  background-color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 150px;
}
</style>
