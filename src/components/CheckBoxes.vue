<template>
  <div class="page components checkboxes">
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

    <!-- <div class="row mt-5">
      <div class="col col-12">
        <CheckBox>
          This is a checkbox
        </CheckBox>
        <CheckBox :disabled="true">
          This is a disabled checkbox
        </CheckBox>
        <CheckBox theme="none">
          This is an unthemed checkbox
        </CheckBox>
      </div>
    </div> -->
  </div>
</template>

<script>
import BreadCrumb from './fragments/BreadCrumb.vue'
import PageTitle from './fragments/PageTitle.vue'
// import CheckBox from './elements/CheckBox.vue'

export default {
  name: 'CheckBoxes',
  data() {
    return {
      breadCrumb: ['Home', 'Components', 'CheckBoxes'],
      pageTitle: 'CheckBoxes',
      pageIcon: 'check',
    }
  },
  components: { BreadCrumb, PageTitle },
}
</script>
