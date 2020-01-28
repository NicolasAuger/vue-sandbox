<template>
  <div class="page desk">
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
  name: 'Desk',
  data() {
    return {
      breadCrumb: ['Home', 'Desk'],
      pageTitle: 'Desk',
      pageIcon: 'web',
    }
  },
  components: { BreadCrumb, PageTitle },
}
</script>

<style lang="stylus" scoped></style>
