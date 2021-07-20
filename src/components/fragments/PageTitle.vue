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

<style src="../../theme/components/fragments/PageTitle.styl" scoped></style>

