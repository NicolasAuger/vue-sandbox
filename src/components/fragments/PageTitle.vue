<template>
  <h2 class="ui-page-title">
    <div class="row justify-content-between">
      <div class="col-auto">
        <div class="d-flex align-items-center">
          <i class="material-icons md-36">{{ icon }}</i>
          <span>{{ text }}</span>
        </div>
      </div>
    </div>
  </h2>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../theme/ui/colors.styl"

h2.ui-page-title
  color: $color-midnight
  font-size: 36px
  font-weight: normal
  margin-bottom: 20px
  margin-top: 10px

  i
    margin-right: 5px
    width: 50px

  span
    margin-right: 20px
</style>
