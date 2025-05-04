<script>
export default {
  name: "Contact"
}
</script>

<template>
  <section class="contact-section">
    <h2>İletişim</h2>
    <div class="contact-item"><strong>Telefon:</strong> 0507 715 8109</div>
    <div class="contact-item">
      <strong>Email:</strong> gokhan@gkandemir.com
    </div>
    <div class="contact-item">
      <strong>Web:</strong>
      <a href="https://kablosuzkedi.com" target="_blank">kablosuzkedi.com</a>
    </div>
    <div class="contact-item">
      <strong>YouTube:</strong>
      <a href="https://youtube.com/@kablosuzkedi" target="_blank"
      >@kablosuzkedi</a
      >
    </div>
    <div class="contact-item">
      <strong>LinkedIn:</strong>
      <a href="https://linkedin.com/in/gokhan-kandemir" target="_blank"
      >linkedin.com/in/gokhan-kandemir</a
      >
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 2rem 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.contact-section {
  background-color: #fff;
  border-top: 1px solid #ddd;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.05);
  padding-bottom: 3rem;
}

.contact-section h2 {
  margin-bottom: 1rem;
}

.contact-item {
  margin: 0.5rem 0;
  font-size: 1rem;
}
</style>
