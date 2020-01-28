<template>
  <li class="todolist-item">
    <div class="item-inner">
      <div
        v-if="!edition"
        class="text"
        v-bind:class="{ done: isDone }"
      >
        {{ todo.text }}
      </div>

      <i v-if="!edition"
        class="material-icons"
        @click="toggleEdition"
      >
        edit
      </i>

      <div v-else>
        <TextField
          v-model="textEdited"
          @keydown.enter="edit"
        />
      </div>

      <i
        class="material-icons"
        @click="toggleDone"
      >
        {{ isDone ? 'highlight_off' : 'check_circle_outline' }}
      </i>

      <i
        class="material-icons"
        @click="$emit('remove', todo.id)"
      >
        delete
      </i>
    </div>
  </li>
</template>

<script>
import TextField from './TextField.vue'

export default {

  data () {
    return {
      edition: false,
      textEdited: this.todo.text,
    }
  },
  computed: {
    isDone() {
      return this.todo.done || false
    }
  },
  methods: {
    toggleEdition() {
      this.edition = true
    },
    edit() {
      this.todo.text = this.textEdited
      this.edition = false
    },
    toggleDone() {
      this.todo.done = !this.todo.done
    }
  },
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  components: { TextField }
}
</script>

<style src="../../theme/components/fragments/TodoListItem.styl" scoped></style>
