const app = Vue.createApp({
  data(){
    return {
      coordX: 10,
      coordY: 20
    }
  },

  methods: {
    updateCoords(event){
      // console.log("Update Coords", event.clientX, event.clientY)
      this.coordX = event.clientX;
      this.coordY = event.clientY;
    }
  }
})

// app içerisindeki bilgilerle beraber #app olan bloğu kontrol edeceğim.
app.mount("#app")
