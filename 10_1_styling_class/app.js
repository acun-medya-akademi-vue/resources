const app = Vue.createApp({
  data: () => ({
    bigFont: false,
    bigBorder: false,
    red: false,
    blue: false,

    redLight: true
  }),

  methods: {
    boxClass(){
      return {
        redContainer: this.red,
        blueContainer: this.blue,
        bf: this.bigFont,
        bb: this.bigBorder
      }
    }
  },

  mounted(){
    // const operation = setInterval(() => {}, 1000);
    // // |-----1000ms-----|-----1000ms-----|-----1000ms-----|-----1000ms-----|
    // clearInterval(operation);

    // const delay =  setTimeout(() => {}, 1000);
    // // -----1000ms-----|
    // clearTimeout(delay);

    setInterval(() => {
      this.redLight = !this.redLight
    }, 500);
  },

  computed: {
    boxClasses(){
      return {
        box: true,
        redContainer: this.red,
        blueContainer: this.blue,
        bf: this.bigFont,
        bb: this.bigBorder
      }
    },
    leftLight(){
      return {
        redContainer: this.redLight,
        blueContainer: !this.redLight
      }
    },
    rightLight(){
      return {
        blueContainer: this.redLight,
        redContainer: !this.redLight
      }
    }
  }
});

app.mount("#app");
