const app = Vue.createApp({
  data: () => ({
    // items: ["item", 123, new Date(), false, [], {}]
    studentList: [
      "Emre",
      "Karahan",
      "Mehmet",
      "Berkant",
      "Onur",
      "Mert",
      "Berzan",
      "Şentürk",
    ],
    personalList: [
      { name: "Gökhan", age: 37, email: "gokhan@gkandemir.com" },
      { name: "Enes", age: 25, email: "enes.sari@segmentify.com" },
      { name: "Emre", age: 23, email: "tutalemre1@gmail.com" },
      { name: "Karahan", age: 21, email: "karahanyavuz61@gmail.com" },
      { name: "Onur Berkant", age: 21, email: "nightsword@gmail.com" },
      { name:"Mert", age: 20, email: "mert32139@gmail.com"}
    ],
    selectedPerson: null,
    timeout: null

  }),
  methods: {
    setSelectedPerson(){
      // console.log('setSelectedPerson')
    },
    handleMouseEnter(personal){
      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        this.selectedPerson = personal;
      }, 1000)
    }
  }
});

app.mount("#app");
