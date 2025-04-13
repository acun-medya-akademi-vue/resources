const app = Vue.createApp({
  data: () => ({
    fullName: "",
    invalid: false,
  }),

  methods: {
    onSubmit() {
      this.invalid = !this.fullName?.length;

      // if(this.fullName?.length === 0){
      // if(!this.fullName?.length){
      //   this.invalid = true;
      // } else {
      //   this.invalid = false;
      // }
    }
  },
});

app.mount("#app");
