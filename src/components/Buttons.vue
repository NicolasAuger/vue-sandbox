<template>
  <div class="page components buttons">
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

    <div class="row mt-5">
      <div class="col col-12">
        <Button class-name="mr-2">Default</Button>
        <Button theme="none" class-name="mr-2" type="primary">
          Unthemed
        </Button>
        <Button class-name="mr-2" type="primary">Primary</Button>
        <Button class-name="mr-2" type="primary" :reversed="true">
          Secondary
        </Button>
        <Button class-name="mr-2" type="primary">
          <i class="material-icons icon mr-1">add_box</i>
          <span>With icon</span>
        </Button>
        <Button class-name="mr-2" type="primary" :disabled="true">
          Disabled
        </Button>
        <Button class-name="mr-2" type="success">Success</Button>
        <Button class-name="mr-2" type="warning">Warning</Button>
        <Button class-name="mr-2" type="danger">Danger</Button>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from './fragments/BreadCrumb.vue'
import PageTitle from './fragments/PageTitle.vue'
import Button from './elements/Button.vue'

export default {
  name: 'Buttons',
  data() {
    return {
      breadCrumb: ['Home', 'Components', 'Buttons'],
      pageTitle: 'Buttons',
      pageIcon: 'play_for_work',
    }
  },
  components: { BreadCrumb, Button, PageTitle },
}
</script>

<style lang="stylus" scoped></style>
