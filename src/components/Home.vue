<template>
  <div class="container mt-5">
    <div class="input-group mb-3">
      <span class="input-group-text">$</span>
      <input
        type="text"
        class="form-control"
        aria-label="Amount (to the nearest dollar)"
        v-model="product.price"
      />
      <span class="input-group-text">.00</span>
    </div>
    <input
      type="text"
      class="form-control mb-md-3"
      placeholder="Başlık Girin"
      v-model="product.title"
    />
    <input
      type="textarea"
      class="form-control mb-md-3"
      placeholder="Açiklama Girin"
      v-model="product.des"
    />
    <input
      type="url"
      class="form-control mb-md-3"
      placeholder="Görsel Bağlanti Girin"
      v-model="product.image"
    />
    <b-form-select v-model="product.cate" :options="options"></b-form-select>
    <button
      class="btn mt-3"
      style="background:linear-gradient(to right, #fc87da, #cb94ef, #41e0e7, #28f6c2); color: #FDFFB6;
  font-weight: bold;"
      @click="post"
    >
      Gönder
    </button>
    <hr />
    <Page />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Page from "./Page.vue";
export default {
  components: {
    Page,
  },
  data() {
    return {
      options: [
        { value: null, text: "Please select an option" },
        { value: "men clothing", text: "men clothing" },
        { value: "jewelery", text: "jewelery" },
        { value: "electronic", text: "electronic" },
        { value: "women clothing", text: "women clothing" },
      ],
      product: {
        price: "",
        title: "",
        des: "",
        image: "",
        cate: "",
        id: "",
      },
    };
  },
  methods: {
    ...mapActions(["ActionPost"]),
    post() {
      this.ActionPost({ ...this.product });
    },
  },
};
</script>

<style>
</style>