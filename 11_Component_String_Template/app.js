const app = Vue.createApp({
  data: () => ({}),
  methods: {}
})

app.component('counter', {
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
  template: `
    <div class="counter">
        <h1>{{ counter }}</h1>
        <button @click="inc">Arttır +</button>
        <button @click="dec">Azalt -</button>
    </div>
  `
});

app.mount("#app")
