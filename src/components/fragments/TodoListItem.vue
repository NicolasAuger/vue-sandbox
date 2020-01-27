<template>
  <li class="todolist-item">
    {{ todo.text }}
    <i
      class="material-icons"
      @click="$emit('remove', todo.id)"
    >
      delete
    </i>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style src="../../theme/components/fragments/TodoListItem.styl" scoped></style>
