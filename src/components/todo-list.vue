<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.body"
    >
      <TodoItem
        class="mb-3"
        :todo="todo"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/todo-item";

import { mapGetters } from "vuex";

export default {
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters({ todos: "todos/todos" })
  }
};
</script>

<style lang="css">
</style>
