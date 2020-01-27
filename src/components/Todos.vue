<template>
  <div class="todos">
    <h2>Fancy TodoList!</h2>

    <TextField
      v-model="newTodoDesc"
      placeholder="Write your new todo"
      @keydown.enter="addTodo"
    />

    <ul v-if="todos.length">
      <TodoListItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo"
      />
    </ul>

    <p v-else>
      Nothing left in the list. Add a new todo in the input above.
    </p>
  </div>
</template>

<script>
import TextField from './fragments/TextField.vue'
import TodoListItem from './fragments/TodoListItem.vue'

let nextTodoId = 1

export default {
	components: {
		TextField, TodoListItem
	},
  data () {
    return {
      newTodoDesc: '',
      todos: [],
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoDesc) {
        this.todos.push({
          id: nextTodoId++,
          text: this.newTodoDesc,
        })
        this.newTodoDesc = ''
      }
    },
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    }
  }
}
</script>

<style src="../theme/components/Todos.styl" scoped></style>
