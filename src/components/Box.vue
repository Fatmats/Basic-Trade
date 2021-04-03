<template>
  <div class="mt-5">
    <div class="container p-0" v-for="i in list" :key="i.title">
      <div class="row g-0 mb-3 " v-for="(k,index) in i" :key="k.title">
        <div class="col-md-2">
          <img :src="k.image" alt="..." style="width: 127px" />
        </div>
        <div class="col-md-8">
          <div class="body">
            <h5 class="title">
              {{ k.title }}
              <b-icon-trash-2-fill
                class="icon"
                @click="remove(index)"
              ></b-icon-trash-2-fill>
            </h5>
            <h4 class="text">{{ k.price }}$</h4>
          </div>
        </div>
      </div>
    </div>
    <h4>Toplam {{ toplam }}</h4>
    <Page v-if="close=false" :removed="removed" />
  </div>
</template>

<script>
import Page from './Page.vue'
import {mapMutations} from 'vuex'
export default {
  components:{
    Page
  },
  data() {
    return {
      removed:"",
      list: [],
      toplam: 0,
    };
  },
  methods: {
    ...mapMutations(["clearCookie"]),
     remove(k) {
     this.removed=k
      
      this.clearCookie(k)
     console.log(this.list)
  
    },

    X() {
      let json = JSON.parse(this.$cookies.get("post"));
      this.list.push(json);
      console.log(JSON.parse(this.$cookies.get("post")));
    },
    total() {
      let list2 = [];

      for (let element = 0; element < this.list.length; element++) {
        list2 = this.list[element];
        console.log(list2);
        for (let fin = 0; fin < list2.length; fin++) {
         this.toplam +=parseInt(list2[fin].price);
        }
      }
    },
  },

  mounted() {
    this.X();
    this.total();
    let co = JSON.parse(this.$cookies.get("post"))
    this.$store.commit("MutPro",  co)
    
  
  },
  updated(){
 this.list
 console.log("updated")
 this.removed
  }
};
</script>

<style scoped>
.row {
 border: 3px solid;
 border-image: linear-gradient(to right, #fc87da, #cb94ef, #41e0e7, #28f6c2) 30;
  width: 98% !important;
}
.col-md-2{
  background: white;
}
.col-md-8 {
  margin-top: 32px;
  margin-bottom: auto;
}
img {
  object-fit: contain;
  max-height: 169px;
  margin: 16px;
}
.text {
  width: auto !important;
  float: right;
  top: 66px;
  position: relative;
  background:linear-gradient(to right, #fc87da, #cb94ef, #41e0e7, #28f6c2);
   color: #FDFFB6;
  font-weight: bold;
  padding-inline: 27px;
  padding-block: 7px;
  top: -36px;
  right: -200px;
}
.icon {
  color: #eb3b5a;
}
</style>