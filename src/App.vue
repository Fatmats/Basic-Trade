<template>
  <div id="app">
    <div>
      <nav id="navbar" class="d-flex justify-content-center mb-5">
        <router-link class="ml-5 mt-1" :to="{ name: 'Sepet' }">
          <font-awesome-icon icon="shopping-basket" class="shop" />
        </router-link>
        <router-link class="ml-5" :to="{ name: 'Home' }">
          <b-icon-shop class="shop" />
        </router-link>
      </nav>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods:{
    
    
  },
  created(){
    window.addEventListener("scroll",()=>{
    if(window.scrollY>10){
      document.getElementById('navbar').setAttribute("style","background:linear-gradient(90deg, #fc87da, #cb94ef, #41e0e7, #28f6c2); animation: color 3s ease; ")
    }
    else{
       document.getElementById('navbar').removeAttribute("style")
    }
    })
  }
};
</script>

<style lang="scss" >
body {
  background-color: #efeaed;
}
.shop {
  font-size: 42px;
  color: hsla(0, 100%, 50%, 0.3);
  transition: all 2s ease;
}
nav {
  position: fixed;
  z-index: 12;
  width: 100%;
  top: 0px;

@keyframes color {
  from{opacity: 0;}
 to{opacity: 1;}

}
}
</style>
