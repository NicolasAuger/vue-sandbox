<template>
  <div class="ui-breadcrumb">
    <span v-for="item in items" :key="item">{{ item }}</span>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="stylus" scoped>
.ui-breadcrumb
  cursor: default

  span
    color: #000A26

    &:after
      content: ">"
      margin: 0 5px
      display: inline
      position: relative
      top: 1px

    &:last-child
      font-weight: bold
      color: #0E96EF

      &:after
        display: none
</style>
