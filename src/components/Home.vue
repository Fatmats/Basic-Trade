<template>
  <div class="container mt-5">
    <form @submit="post">
      <div class="input-group mb-3">
        <span class="input-group-text">$</span>
        <input
          type="number"
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
        id="content"
        name="content"
        @keyup="checkChar()"
        @keydown="checkChar()"
      />
      <small>{{ messages }}</small>
      <input
        type="url"
        class="form-control mb-md-3"
        placeholder="Görsel Bağlanti Girin"
        v-model="product.image"
      />
      <b-form-select v-model="product.cate" :options="options"></b-form-select>
      <button type="submit" class="btn mt-3">Gönder</button>
    </form>
    <hr />
    <div>
      <b-table
        id="my-table"
        :per-page="perPage"
        :items="GetData"
        :current-page="currentPage"
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        responsive="sm"
      >
        <template #cell(image)="data">
          <img :src="data.value" style="65px" />
        </template>
        <template #cell(actions)="row">
          <button class="btn btn-danger" @click="remove(row.item)">Sil</button>
          <button
            class="btn btn-primary"
            @click="row.toggleDetails"
            @focus="get_open_data(row.item)"
          >
            Düzenle
          </button>
        </template>

        <template #row-details="row">
          <form @submit.prevent="edit_data(row.item)">
            <input
              type="text"
              class="form-control"
              placeholder="Lütfen Resim Girin"
              v-model="edit_product.image"
            />
            <input
              type="text"
              class="form-control"
              placeholder="Lütfen Başlık Girin"
              v-model="edit_product.title"
            />
            <input
              type="text"
              class="form-control"
              placeholder="Lütfen Açıklama Girin"
              v-model="edit_product.description"
              id="content"
              name="content"
              @keyup="checkChar()"
              @keydown="checkChar()"
            />
            <small>{{ messages }}</small>
            <input
              type="text"
              class="form-control"
              placeholder="Lütfen kategöri Girin"
              v-model="edit_product.category"
            />
            <input
              type="text"
              class="form-control"
              placeholder="Lütfen Fiyat Girin"
              v-model="edit_product.price"
            />
            <button type="submit" class="btn btn-primary">Kaydet</button>
          </form>
        </template>
      </b-table>

      <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        align="fill"
        size="sm"
        class="my-0"
        style="width: 29%"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      messages: "",
      currentPage: 1,
      sortBy: "age",
      totalRows: 1,
      sortDesc: false,
      perPage: 10,
      fields: [
        { key: "image" },
        { key: "title", sortable: true },
        { key: "price", sortable: true, label: "Price($)" },
        { key: "description", tdClass: "tdClass" },
        { key: "category", sortable: true },
        { key: "actions", label: "Actions" },
      ],
      options: [
        { value: null, text: "Please select an option" },
        { value: "men clothing", text: "men clothing" },
        { value: "jewelery", text: "jewelery" },
        { value: "electronic", text: "electronic" },
        { value: "women clothing", text: "women clothing" },
      ],
      product: {
        price: 0,
        title: "",
        des: "",
        image: "",
        cate: "",
        id: "",
      },
      edit_product: {
        price: 0,
        title: "",
        description: "",
        image: "",
        category: "",
        id: "",
      },
    };
  },
  methods: {
    ...mapActions(["ActionPost", "ActionDelete", "ActionAxios"]),
    ...mapMutations(["mapMutations"]),
    async post() {
      await this.ActionPost({ ...this.product });
      alert("Ürün Eklendi");
    },
    async remove(item) {
      await this.axios
        .delete("http://localhost:3000/products/" + item.id)
        .then((resp) => {
          console.log(resp);
          this.$store.dispatch("ActionAxios");
          alert("Ürün Silindi");
          return resp;
        });
    },
    get_open_data(item) {
      console.log(item);
      this.edit_product = item;
    },
    edit_data(item) {
      console.log(item.id);

      this.axios
        .put("http://localhost:3000/products/" + item.id, this.edit_product)
        .then((resp) => {
          console.log(resp.data);
          alert(`${item.title} adlı ürün düzenlendi`);
        });
    },
    checkChar() {
      var allowedChar = 300;
      var content = document.getElementById("content");
      var contLength = content.value.length;

      if (contLength > allowedChar) {
        content.value = content.value.substring(0, allowedChar);
        content.style.backgroundColor = "#f79aa3";
        this.messages = "En fazla 338 karakter girilebilir";
      } else {
        this.messages=""
        content.style.backgroundColor = "white";
      }
    },
  },
  computed: {
    ...mapGetters(["GetData"]),
    GetDatas() {
      return this.GetData;
    },
  },
  created() {
    this.ActionAxios();
  },
  updated() {
    console.log("ama değiştik");
    this.totalRows = this.GetData.length;
  },
};
</script>

<style >
small {
  color: #dd3445;
  font-weight: bold;
}
img {
  width: 73px;
  margin-left: 14px;
  margin-right: 14px;
  margin-top: 26px;
  object-fit: fill;
}
td:nth-child(1) {
  background-color: white;
  width: 65px;
  padding: 0px !important;
}
td:nth-child(2) {
  width: 196px;
}
td:nth-child(6) {
  width: 150px;
}
form {
  padding: 10px;
}
.mt-3 {
  background: linear-gradient(to right, #fc87da, #cb94ef, #41e0e7, #28f6c2);
  color: #fdffb6;
  font-weight: bold;
}
</style>