<template>
  <div class="main-menu">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 menu-header">
          <router-link class="logo" to="/">
            <h1>VueJS Sandbox</h1>
          </router-link>
        </div>
      </div>
    </div>
    <div class="menu-content">
      <div v-for="nav in menus" :key="nav.name" class="menu-group">
        <h5>{{nav.name}}</h5>
        <ul class="menu">
          <li v-for="menu in nav.menu" :key="menu.icon" class="menu-item">
            <router-link :to="menu.route">
              <span class="menu-icon">
                <i class="material-icons">{{menu.icon}}</i>
              </span>
              <span class="menu-text">{{menu.name}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { menus } from '../../services/content'

export default {
  data () {
    return {
      menus,
    }
  },
}
</script>

<style src="../../theme/components/fragments/Menu.styl" scoped></style>
