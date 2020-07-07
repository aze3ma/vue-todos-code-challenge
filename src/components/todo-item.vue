<template lang="html">
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3
          class="headline mb-0"
          :class="{ completed: todo.completed }">{{ todo.body }}</h3>
      </div>
    </v-card-title>
    <v-btn
      :disabled="todo.completed"
      @click="completeTodo(todo)">
      Complete
    </v-btn>
    <v-btn
      color="error"
      @click="removeTodo(todo)">
      Delete
    </v-btn>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    todo: { type: Object, required: true }
  },
  methods: {
    ...mapActions({
      removeTodo: "todos/removeTodo",
      completeTodo: "todos/completeTodo"
    })
  }
};
</script>

<style lang="css">
.completed {
  text-decoration: line-through;
}
</style>
