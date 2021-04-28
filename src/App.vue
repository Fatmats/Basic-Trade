<template>
  <div id="app">
    <div>
      <div>
        <b-navbar id="navbar" toggleable="lg">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <router-link :to="{ name: 'Home' }">
                <span><b-icon-shop class="shop" /> Anasayfa </span>
              </router-link>
              <router-link :to="{ name: 'List' }">
                <span><b-icon icon="card-list" class="shop" /> Ürün Ekle</span>
              </router-link>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <router-link class="ml-5 mt-1" :to="{ name: 'Sepet' }">
                <span
                  ><b-icon icon="cart3"
                    class="shop"
                  />Sepet <small id="small">{{GetNum}}</small></span
                >
              </router-link>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: "App",
  computed: {
    ...mapGetters(["GetNum"]),
  },
  updated(){
    console.log("geldik");
    const el =document.getElementById("small")
       if(this.$route.name==="Sepet"){
         el.style.display="none"
       }else{
el.style.display="inline"
       }
  },
  created() {
 console.log("olduk");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        document
          .getElementById("navbar")
          .setAttribute(
            "style",
            "background:linear-gradient(90deg, #fc87da, #cb94ef, #41e0e7, #28f6c2); animation: color 3s ease; opacity:0.8"
          );
      } else {
        document.getElementById("navbar").removeAttribute("style");
      }
    });
  },
};
</script>

<style lang="scss" >
body {
  background-color: #efeaed;
}
.shop {
  font-size: 31px;
  transition: all 1s ease-in-out;
  text-decoration: none;
  margin-left: 9px;
}
.shop:hover {
  font-size: 35px;
  color: brown;
}
span {
    color: #05a1a5f5;
    transition: all 1s ease-in-out;
    text-decoration: none;
    font-weight: bold;
  &:hover {
    text-decoration: none;
  }
}
#small{
  font-size: 80%;
    font-weight: 400;
    background-color: white;
    border-radius: 50px;
    width: 29px;
    text-align: center;
    font-size: medium;
    font-weight: bold;
    padding-inline: 7px;
}
#navbar {
  position: fixed;
  z-index: 12;
  width: 100%;
  top: 0px;

  @keyframes color {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.8;
    }
  }
}
</style>
