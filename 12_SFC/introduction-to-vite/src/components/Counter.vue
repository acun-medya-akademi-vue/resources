<script>
export default {
  name: "Counter",
  data: () => ({
    counter: 0,
  }),
  methods: {
    inc() {
      this.counter++;
    },
    dec() {
      this.counter--;
    },
  },
  computed: {
    isDividable(){
      return this.counter % 5 === 0
    },
    counterClasses(){
      return {
        'text-red': this.isDividable
      }
    },
    counterText(){
      return this.isDividable ? "5'e bölünebilen sayı!" : "-"
    }
  }
}
</script>

<template>
  <div class="counter">
    <h1 :class="counterClasses">{{ counter }}</h1>
    <p>{{ counterText }} </p>
    <button @click="inc">Arttır +</button>
    <button @click="dec">Azalt -</button>
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

.text-red {
  color: red;
}

h1 {
  margin: 0;
  padding: 0;
}

button {
  width: 100%;
  margin-bottom: 5px;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
</style>
