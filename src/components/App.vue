<template>
  <div id="app">
    <div class="container-fluid main-container">
      <Menu />
      <Header />
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './fragments/Header'
  import Menu from './fragments/Menu'

  export default {
    components: {
      Header, Menu
    }
  }
</script>

<style src="../theme/index.styl"></style>
