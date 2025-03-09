const app = Vue.createApp({
  data: () => ({
    studentName: null,
    studentList: ["Cemil", "Kamil", "ifo", "Felo", "Ahmet", "Mehmet"],
    searchKey: '',
    loading: false
  }),

  methods: {
    // ÖDEV 1: Eğer boş bir isim kayıt edilmek istenirse buna engel olup alert mesajı veriniz.
    addStudent(){
      this.loading = true;
      this.studentList.push(this.studentName)
      this.studentName = null;
    },
  },

  computed: {
    filteredList(){
      return this.studentList.filter(i => i.toLowerCase()?.includes(this.searchKey))
    },
    studentListMessage(){
      console.log('Student List Değişti...')
      return `Sınıfta (${this.studentList.length}) adet öğrenci vardır`
      // return 'Sınıfta (' + this.studentList.length + ') adet öğrenci vardır'
    },
  },

  watch: {
    studentName(studentName, oldStudentName){
      console.log("WATCH | studentName: ", oldStudentName, "=>", studentName)
      // this.fetchService();
    },
    loading(loading){
      if(loading){
        setTimeout(() => {
          this.loading = false;
        }, 1000)
      }
    }
  }
})

app.mount("#app");
