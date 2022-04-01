import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	accs:"",//第一位账户
	contractAddress:"0x531a48659Cf2AF1067E8D03e9d14c5DA2d19D9EB",//合约地址
  },
  mutations: {
	 updateAccs(state, val){//accs赋值
		 state.accs = val;
		 console.log(val)
	 }
  },
  actions: {
	
  },
  getters: {},
});