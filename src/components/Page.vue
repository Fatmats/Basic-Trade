<template>
  <div class="container">
    <div class="row">
      <div class="col mb-md-4 p-0" v-for="pro in products" :key="pro.title">
        <div class="card mr-1" style="height: 22rem; width: 15rem">
          <img
            :src="pro.image"
            class="card-img-top"
            alt="..."
            style="
              height: 48%;
              width: 60%;
              margin-left: auto;
              margin-right: auto;
              margin-top: 10px;
              object-fit: contain;
            "
          />

          <div class="card-body p-0">
            <div class="card-title">
              <h5 style="font-size: unset">
                {{ pro.title }}
              </h5>
            </div>
            <div class="price h5">
              <p class="float-left p-2 bg-danger">{{ pro.price }}$</p>
              <b-icon-cart-4
                style="width: 72px; height: 41px"
                class="icon float-right bg-info"
                
                @click="add(pro)"
              ></b-icon-cart-4>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    ...mapActions(["ActionAxios"]),
    ...mapMutations(["MutPro"]),
    fetch() {
      this.ActionAxios().then((res) => {
        this.products = res.data;
        console.log(this.products);
      });
    },
    add(pro){
      console.log(pro);
      this.MutPro(pro)
    }
  },
  mounted() {
    this.fetch();
  },
};
</script>

<style lang="scss" >
.card {
  box-shadow: inset 0px 0px 3px 1px black;
}
.card-title {
  display: block;
  position: relative;
  height: 78px;
  text-align: center;
  top: 30px;
}
.price {
  position: relative !important;
  padding: 1px;
  display: block;
  top: 38.5px;
  background-color: rgba(255, 0, 0, 0.349);
  
}
p {
  width: 86px;
  height: 41px;
  padding-top: 9px;
}
.icon {
  cursor: pointer;
}
</style>