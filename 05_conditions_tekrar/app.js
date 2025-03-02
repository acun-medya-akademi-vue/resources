const app = Vue.createApp({
  data: () => ({
    title: 'Iterators',
    counter: 0
  }),
  methods: {
    inc(){
      // this.counter = this.counter + 1;
      this.counter++;
    },
    dec(){
      // this.counter = this.counter - 1;
      if(this.counter <= 0) this.counter = 0;
      else this.counter--;
    }

  }
});

app.mount("#app");
