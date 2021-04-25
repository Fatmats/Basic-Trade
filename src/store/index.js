import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    pro:[],
  },
  getters:{
    GetPro(state){
      return state.pro
    }
  },
  mutations: {
    MutationAxios(state, payload) {
      state.data = payload
    },
    MutPro(state, payload) {
      state.pro=payload
      Vue.$cookies.set('post',JSON.stringify(state.pro),"30d" )
      console.log(state.pro);
    },
    clearCookie(state,payload){
     state.pro.splice(payload,1)
     Vue.$cookies.set('post',JSON.stringify(state.pro),"30d" )
     console.log(state.pro)
    
    }
  },
  actions: {
    async ActionPost(context, payload) {
      return await axios.post("http://localhost:3000/products/", { category: payload.cate, description: payload.des, image: payload.image, price: payload.price, title: payload.title }).then(res => {
        context.commit('MutationAxios', res.data)
        console.log(res);
        Vue.swal.fire({
          html:
            '<h4 style="color:#f3b5b7; position: relative;top: -54px; border: 2px solid;border-image: linear-gradient(to right, #fc87da, #cb94ef, #41e0e7, #28f6c2) 30;">Ürün Kaydedildi</h4>',
          width: 540,
          padding: "5em",
          background: `#fff url(https://thumbs.gfycat.com/BackEcstaticAuklet-max-1mb.gif) no-repeat`,
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `,
          customClass: {
            color: "#f3b5b7",
          },
        });
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
