<script>
export default {
  name: "ChildCmpA",
  methods: {
    inc(){
      this.$emit('button-clicked', 10)
    }
  }
}
</script>

<template>
  <div class="card"> <button @click="inc">Gönder {{ counter }}</button></div>
</template>

<style scoped>

</style>
