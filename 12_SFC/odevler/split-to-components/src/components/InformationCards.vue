<script>
export default {
  name: "InformationCards",
  data: () => ({
    items: [
      { id: 1, title: 'Ad', description: 'Gökhan Kandemir'},
      { id: 2, title: 'Meslek', description: 'Yazılım Möhendisi'},
      { id: 3, title: 'Lokasyon', description: 'Eskişehir, Türkiye'},
      { id: 4, title: 'Hobiler', description: 'Kodlama, Müzik, Video Üretimi, Teknoloji, Konsol Oyunları'},
    ]
  })
}
</script>

<template>
  <section class="info-section">
    <AppCard
        v-for="item in items"
        :key="item.id"
        :title="item.title"
        :description="item.description"
    />
  </section>

</template>

<style scoped>
.info-section {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 2rem 1rem;
  max-width: 800px;
  margin: 0 auto;
}
</style>
