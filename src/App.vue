<template>
  <div id="app">
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <router-link :to="{ name: 'Sepet' }">
            <b-icon-bag-fill class="shop" />
          </router-link>
          <router-link :to="{ name: 'Home' }">
            <b-icon-shop class="h4"/>
          </router-link>
        </div>
      </nav>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
.shop {
  color: #6d214f;
  font-size: xxx-large;
}
</style>
