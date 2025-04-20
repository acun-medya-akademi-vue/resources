const app = Vue.createApp({
  data: () => ({
    styling: false,
    progressValue: 0,
    interval: null
  }),
  methods: {
    startUpload() {
      this.interval = setInterval(() => {
        this.progressValue++;
      }, 100)
    }
  },
  watch: {
    progressValue(value) {
      if (value === 100) {
        clearInterval(this.interval)
      }
    }
  },
});

app.mount("#app");
