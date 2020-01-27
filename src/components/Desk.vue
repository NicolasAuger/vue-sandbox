<template>
  <div class="desk">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Desk',
  data() {
    return {
      msg: 'Test',
    }
  },
  components: {},
}
</script>

<style src="../theme/components/Desk.styl" scoped></style>
