const app = Vue.createApp({
  // _data: function(){
  //   return {}
  // },
  //
  // __data: () => {
  //   return {}
  // },
  //
  // data: () => ({
  //
  // })
  //

  data: () => {
    return {
      cemil: "Merhaba Vue.js from Script",
      felakettin: "Bu da bizim alt açıklamamız...",
      age: 20,

      link: {
        href:"https://youtube.com/kablosuzkedii",
        title: "kablosuzkedi TY",
        target: "_blank",
      },


      htmlCode: `
        <div style="background-color: #ccc; color: #222; width: 100px; height: 100px;">
            Bu bir test kutusu
        </div>
      `,

      car: {
        year : 2018,
        brand: "Alfa Romeo",
        color: 'Red',
        model: 'Giulietta'
      },

      devices: ["monitor", "speaker", "mouse", "keyboard"],

      dataId: 123123
    }
  },

  methods: {
    sayHello(){
      // alert("Hello be ya..");
      this.markaDegistir();
    },
    // cemilAbininYeri(){},
    markaDegistir(){
      this.car.brand = "Devrim"
    }
  },

})

app.mount("#app")

const car = {
  model: "2025",
  color: "blue",
}

const carModel = 2025;
const carColor = "blue";
const carBrand = "Suzuki";



// const myBtn = document.querySelector("#myBtn")
// console.log(myBtn)
// // myBtn.addEventListener("click", function(){})
// myBtn.addEventListener("click", () => {
//   alert("Çalıştık be ya")
// })
