<template>
  <div class="container">
  <div class="input-group mb-3" >
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"  v-model="product.price">
  <span class="input-group-text">.00</span>
</div>
 <input type="text" class="form-control  mb-md-3" placeholder="Başlık Girin" v-model="product.title">
 <input type="textarea" class="form-control mb-md-3" placeholder="Açiklama Girin" v-model="product.des">
 <input type="url" class="form-control mb-md-3" placeholder="Görsel Bağlanti Girin"  v-model="product.image">
 <input type="text" class="form-control mb-md-3" placeholder="Katagori  Girin"  v-model="product.cate">
 <button class="btn btn-success" @click="post">Gönder</button>
    <hr>
     <Page />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Page from "./Page.vue";
export default {
   components: {
    Page,
  },
  data(){
    return{
      product:{
        price:"",
        title:"",
        des:"",
        image:"",
        cate:"",
        id:""
      }
    }
  },
methods:{
  ...mapActions(["ActionPost"]),
  post(){
    this.ActionPost({...this.product})
  }
}
}
</script>

<style>

</style>