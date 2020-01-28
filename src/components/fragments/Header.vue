<template>
  <div class="row justify-content-between head-title">
    <div class="col-auto">
      <h4 class="project-title">VueJS TodoList</h4>
    </div>
    <div class="col-auto">
      <ul class="header-menu">
        <li class="header-menu-item">
          <a role="presentation" @click="signout">
            <span>Déconnexion</span>
            <i class="material-icons">exit_to_app</i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  methods: {
    signout() {
      // Perform signout
      console.log('You signed out');
    }
  }
}
</script>

<style src="../../theme/components/fragments/Header.styl" scoped></style>
