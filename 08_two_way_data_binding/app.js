const app = Vue.createApp({
  data: () => ({
    fullName: 'Felakettin Şimşir'
  }),

  methods: {
    handleInput(event){
      // Optional Chaining
      this.fullName = event.target?.value
    }
  }
})

app.mount('#app')
