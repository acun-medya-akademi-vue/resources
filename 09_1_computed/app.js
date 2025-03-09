const app = Vue.createApp({
  data: () => ({
    counter: 0,
    counter2: 0,
  }),
  methods: {
    incCount(){
      console.log("Counter ++++")
      this.counter++;
    },
    decCount(){
      console.log("Counter ----")
      this.counter--;
    },
    incCount2(){
      console.log("Counter2 ++++")
      this.counter2++;
    },
    decCount2(){
      console.log("Counter2 ----")
      this.counter2--;
    },


  },
  computed: {
    counter2Description(){
      console.log('counter2Description calisti...')
      return this.counter2 >= 3 ? "Counter2 3'ten büyüktür" : ''
    },
    counterDescription(){
      console.log('counterDescription calisti...')
      return this.counter >= 3 ? "Counter 3'ten büyüktür" : ''
    },
  }
})

app.mount("#app");
