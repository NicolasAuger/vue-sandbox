<template>
  <div class="page todolist">
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

    <h2 class="mt-5 mb-3">Fancy TodoList!</h2>

    <TextField
      v-model="newTodoDesc"
      placeholder="Write your new todo"
      @keydown.enter="addTodo"
    />

    <ul class="mt-3" v-if="todos.length">
      <TodoListItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo"
      />
    </ul>

    <p class="mt-3" v-else>
      Nothing left in the list. Add a new todo in the input above.
    </p>

  </div>
</template>

<script>
import BreadCrumb from './fragments/BreadCrumb.vue'
import PageTitle from './fragments/PageTitle.vue'
import TextField from './fragments/TextField.vue'
import TodoListItem from './fragments/TodoListItem.vue'

let nextTodoId = 1

export default {
  components: {
    BreadCrumb, PageTitle, TextField, TodoListItem
  },
  data () {
    return {
      breadCrumb: ['Home', 'TodoList'],
      pageTitle: 'TodoList',
      pageIcon: 'assignment_turned_in',
      newTodoDesc: '',
      todos: [{
        id: 0,
        text: 'Improve VueJs skills'
      }, {
        id: 1,
        text: 'Buy maniques at Decathlon for gym'
      }],
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoDesc) {
        this.todos.unshift({
          id: this.todos.length + 1,
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

<style lang="stylus" scoped>
.page.todolist
  ul
    margin-top: 20px
    list-style: circle
</style>
