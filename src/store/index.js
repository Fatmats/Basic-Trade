import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    pro: []
  },
  
  mutations: {
    MutationAxios(state, payload) {
      state.data = payload
    },
    MutPro(state, payload) {
      state.pro = payload
      Vue.$cookies.set('post',state.pro)
      console.log(state.pro);
    }
  },
  actions: {
    async ActionPost(context, payload) {
      return await axios.post("http://localhost:3000/products/", { category: payload.cate, description: payload.des, image: payload.image, price: payload.price, title: payload.title }).then(res => {
        context.commit('MutationAxios', res.data)
        console.log(res);
      })
    },

    async ActionAxios(context) {
      return await axios.get("http://localhost:3000/products/").then(function (response) {
        context.commit('MutationAxios', response.data)
        console.log(response.data);
        return response
      })
    },
  },
  modules: {
  }
})
