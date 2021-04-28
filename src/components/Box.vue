<template>
  <div class="mt-5 container ">
    <div
      class="p-0 row g-0 mb-3"
      v-for="(i, index) in pro"
      :key="i.title"
    >
      <div class="col-md-2">
        <img :src="i.image" alt="..." style="width: 127px" />
      </div>
      <div class="col-md-8">
        <div class="body">
          <h5 class="title">
            {{ i.title }}
            <b-icon-trash-2-fill
              class="icon"
              role="button"
              @click="remove(index)"
            ></b-icon-trash-2-fill>
          </h5>
          <h4 class="text">{{ i.price }}$</h4>
        </div>
      </div>
    </div>
    <h4>Toplam {{ toplam }}</h4>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      toplam: 0,
    };
  },
  computed: {
    ...mapGetters(["GetPro"]),
    pro() {
      return this.GetPro;
    },
  },
  methods: {
    ...mapMutations(["clearCookie"]),

    remove(k) {
      this.clearCookie(k);
      this.pro;
      this.toplam = 0;
      this.total();
    },
   total() {
      this.GetPro.forEach((element) => {
        Math.floor((this.toplam += parseInt(element.price) ));
      });
    },
  },
  created() {
    this.total();
    this.$store.commit("MutPro", JSON.parse(this.$cookies.get("post")));
  },
};
</script>

<style scoped>
.row {
  border: 3px solid;
  border-image: linear-gradient(to right, #fc87da, #cb94ef, #41e0e7, #28f6c2) 30;
  width: 98% !important;
}
.col-md-2 {
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
  background: linear-gradient(to right, #fc87da, #cb94ef, #41e0e7, #28f6c2);
  color: #fdffb6;
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