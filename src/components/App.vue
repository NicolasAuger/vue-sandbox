<template>
  <div id="app">
  <h1>Welcome to Poool Desk : VueJs Test App!</h1>
  <p>
    <router-link to="/">Go to Desk</router-link>
    <router-link to="/todos">Go to Todolist</router-link>
  </p>
  <router-view></router-view>
</div>
</template>

<style src="../theme/index.styl"></style>
