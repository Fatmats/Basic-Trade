<template>
  <div class="container">
    <b-form-select
      class="mt-4"
      v-model="selected"
      :options="options"
    ></b-form-select>
    <hr />
    <div class="row">
      <div class="col mb-md-4 p-0" v-for="pro in filtred" :key="pro.title">
        <div class="card mr-1" style="height: 22rem; width: 15rem">
          <img
            :src="pro.image"
            class="card-img-top"
            alt="..."
            style="
              height: 48%;
              width: 98%;
              padding-left: auto;
              margin-top: 10px;
              object-fit: contain;
              background-color: white;
            "
          />
          <div class="card-body p-0">
            <div class="card-title">
              <h5 style="font-size: unset">
                {{ pro.title }}
              </h5>
              <p>${{ pro.price }}</p>
            </div>
            <div class="price">
              <button class="icon" @click="add(pro)">Ekle</button>
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
prompt:["removed"],
  data() {
    return {
      products: [],
      list: [],
      selected: null,
      options: [
        { value: null, text: "Lütfen Görmek İstediğiniz kategoriyi seçin" },
        { value: "men clothing", text: "men clothing" },
        { value: "jewelery", text: "jewelery" },
        { value: "electronic", text: "electronic" },
        { value: "women clothing", text: "women clothing" },
      ],
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
    add: function (pro) {
      if(this.$cookies.isKey("post")){
     this.list= JSON.parse(this.$cookies.get("post")) 
     this.list.push(pro);
      }
      else{
     this.list.push(pro);
      }
      
      this.MutPro(this.list);
      console.log(this.list);
    },
  },
  computed: {
    filtred() {
      return this.products.filter((e) => {
        return e.category.match(this.selected);
      });
    },
  },
  mounted() {
    this.fetch();
   
  },
};
</script>

<style lang="scss" scoped >
$rainbow: linear-gradient(
  90deg,
  #fc87da 0%,
  #cb94ef 30%,
  #41e0e7 76%,
  #28f6c2 100%
);
.card {
  color: #a05841;
  border: 2px solid;
  border-image: linear-gradient(to right, #fc87da, #cb94ef, #41e0e7, #28f6c2) 30;
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

  display: block;
  top: 42.5px;
}

.icon {
  cursor: pointer;
  padding-inline: 104px;
  padding-block: 7px;
  background-image: $rainbow;
  display: block;
  border: none;
  color: #FDFFB6;
  font-weight: bold;
}
</style>