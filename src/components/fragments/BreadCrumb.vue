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

<style src="../../theme/components/fragments/Breadcrumb.styl" scoped></style>