const app = Vue.createApp({
  data(){
    return {
      description: "Bu benim aciklamam..",
      link:"https://www.youtube.com/kablosuzkedii",
      showBox: true, // true | false => 1 | 0
      age: 31,
      sayi: 0
    }
  },

  methods: {
    updateDescription(){
      this.description = "Deneme yanilma merkezi..";
    },
    showToggle(){
      this.showBox = !this.showBox
    },

    // Burayı daha iyi hale getirmek için. ilk olarak düşünün sonra bu düşüncenizi ChatCPT ile tartışın..
    showContainer(){
      this.showBox = true;
    },
    hideContainer(){
      this.showBox = false
    },

    changeVisibility(show){
      this.showBox = show
    }
  }
})

app.mount("#app")
