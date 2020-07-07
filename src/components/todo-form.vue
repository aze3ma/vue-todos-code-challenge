<template lang="html">
  <v-text-field
    label="Todo"
    placeholder="What do you have to do?"
    :value="newTodo"
    @input="getTodo"
    @keyup.enter="handleChange"
    solo
  />
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ newTodo: "todos/newTodo" })
  },
  methods: {
    ...mapActions({
      addTodo: "todos/addTodo",
      clearTodo: "todos/clearTodo",
      getTodo: "todos/getTodo"
    }),
    handleChange() {
      this.addTodo();
      this.clearTodo();
    }
  }
};
</script>

<style lang="css">
</style>
