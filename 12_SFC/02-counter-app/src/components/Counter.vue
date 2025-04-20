<script>
export default {
  data: () => ({
    counter: 0,
  }),
  methods: {
    inc(){
      this.counter++;
    },
    dec(){
      this.counter--;
    },
  }
}
</script>
<template>
  <div class="counter">
    <h1>{{ counter }}</h1>
    <button @click="inc">+++</button>
    <button @click="dec">---</button>
  </div>
</template>
<style>
.counter {
  border: 1px solid #ccc;
  background-color: #e1e1e1;
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 10px;
}

h1 {
  margin: 0;
  padding: 0;
}

button {
  width: 100%;
  margin-bottom: 5px;
}
</style>
