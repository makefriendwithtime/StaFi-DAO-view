import App from './App'
// vuex
import store from "./store";
Vue.prototype.$store = store;
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
import Web3 from 'web3'
Vue.prototype.Web3 = Web3
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif
import uView from "uview-ui";
Vue.use(uView);
// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app 
  }
}
// #endif