import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	accs:"",//第一位账户
	// contractAddress:"",//合约地址
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