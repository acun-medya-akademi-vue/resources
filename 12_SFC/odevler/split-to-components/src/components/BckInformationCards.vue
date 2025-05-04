<script>
// import NameCard from "./InformationCards/NameCard.vue";
// import ProfessionCard from "./InformationCards/ProfessionCard.vue";
// import LocationCard from "./InformationCards/LocationCard.vue";
// import HobbiesCard from "./InformationCards/HobbiesCard.vue";

export default {
  name: "InformationCards",
  // components: {
  //   NameCard,
  //   ProfessionCard,
  //   LocationCard,
  //   HobbiesCard,
  // }
}
</script>

<template>
  <!-- Bilgi Kartları -->
<!--  <section class="info-section">-->
<!--    <NameCard/>-->
<!--    <ProfessionCard/>-->
<!--    <LocationCard/>-->
<!--    <HobbiesCard/>-->
<!--  </section>-->

  <section class="info-section">
    <AppCard
        title="Ad"
        description="Gökhan Kandemir"
    />
    <AppCard
        title="Meslek"
        description="Teknik Öküz"
    />
    <AppCard
        title="Lokasyon"
        description="Eskişehir, Türkiye"
    />
    <AppCard
        title="Hobiler"
        description="Kodlama, Müzik, Video Üretimi, Teknoloji, Konsol Oyunları"
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
