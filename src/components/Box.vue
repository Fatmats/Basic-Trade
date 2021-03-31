<template>
  <div>
    <div class="container mb-3 p-0">
      <div class="row g-0" v-for="i in list" :key="i.title">
        <div class="col-md-2">
          <img :src="i.image" alt="..." style="width: 127px" />
        </div>
        <div class="col-md-8">
          <div class="body">
            <h5 class="title">
              {{ i.title }}
              <b-icon-trash-2-fill class="icon" @click="remove(i)"></b-icon-trash-2-fill>
            </h5>
            <h4 class="text">{{ i.price }}$</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    remove(i){
      console.log(i);
      this.$cookies.remove('post')
    }
  },

  mounted() {
    this.list.push(this.$cookies.get("post"));
    console.log(this.list);
  },
};
</script>

<style scoped>
.row {
  border: 3px solid beige;
  width: 98% !important;
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
  background-color: #ff793f;
  padding-inline: 27px;
  padding-block: 7px;
  top: -36px;
  right: -200px;
}
.icon {
  color: #eb3b5a;
}
</style>