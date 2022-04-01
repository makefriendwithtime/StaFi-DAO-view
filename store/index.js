import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accs: "", //第一位账户
    contractAddress: "0x60F2375e985C819c809B53d36eba3C4f83c22415", //合约地址
  },
  mutations: {
    updateAccs(state, val) {
      //accs赋值
      state.accs = val;
      console.log(val);
    },
  },
  actions: {},
  getters: {},
});
