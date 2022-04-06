import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accs: "", //第一位账户
    contractAddress: "0x109816755104e0612734082AFe3a07b0733b0046", //合约地址
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
