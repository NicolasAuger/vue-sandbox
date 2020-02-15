<template>
  <div class="page vuex">
    <div class="row">
      <div class="col col-12">
        <BreadCrumb
          class="text-left"
          :items="breadCrumb"
        />
      </div>
    </div>
    <div class="row">
      <div class="col col-12">
        <PageTitle :text="pageTitle" :icon="pageIcon"/>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from './fragments/BreadCrumb.vue'
import PageTitle from './fragments/PageTitle.vue'

export default {
  name: 'VueX',
  data() {
    return {
      breadCrumb: ['Home', 'VueX'],
      pageTitle: 'VueX',
      pageIcon: 'polymer',
    }
  },
  components: { BreadCrumb, PageTitle },
}
</script>

<style lang="stylus" scoped>
@import "../theme/ui/colors.styl"

.vuex
  color: $color-midnight
  font-size: 14px

</style>
