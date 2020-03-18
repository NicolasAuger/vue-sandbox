<template>
  <div class="page components textfields">
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
  name: 'TextFields',
  data() {
    return {
      breadCrumb: ['Home', 'Components', 'TextFields'],
      pageTitle: 'TextFields',
      pageIcon: 'edit',
    }
  },
  components: { BreadCrumb, PageTitle },
}
</script>

<style lang="stylus" scoped></style>
