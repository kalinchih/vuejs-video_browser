import Vue from "vue";
import App from "./App.vue";

new Vue({
  el: "#app",
  // render: function createElement(createElement) {
  //   return createElement(App);
  // }

  // render: function createElement(h){
  //   return h(App)
  // }

  render: h => h(App)
}); //.$mount('#app')
