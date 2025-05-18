<script>
export default {
  name: "AddTodo",
  emits: ['todo-added'],
  props: {
    addNewTodo: {
      type: Function,
      required: false
    }
  },
  data: () => ({
    todoValue: null,
  }),
  mounted () {
    this.$refs.todoInput.focus();
  },
  methods: {
    emitAddTodo(){
      this.$emit('todo-added', this.todoValue)
    }
  }
}
</script>

<template>
  <div class="card">
    <div class="user--action--container">
      <div class="form-group">
        <label>Kursun Adı</label>
        <input
            ref="todoInput"
            id="todoValue"
            v-model="todoValue"
            type="text"
            @keydown.enter="emitAddTodo"
        />
<!--            @keydown.enter="addNewTodo(todoValue)"-->
      </div>
      <button @click="emitAddTodo" class="btn-primary">Kurs Ekle</button>
<!--      <button @click="addNewTodo(todoValue)" class="btn-primary">Kurs Ekle</button>-->
    </div>
  </div>
</template>

<style scoped>

</style>
