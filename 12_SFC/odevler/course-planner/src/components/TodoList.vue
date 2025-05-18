<script>
export default {
  name: "TodoList",
  props: {
    itemList: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<template>
  <div class="card card-light mt-20">
    <h3>Aktif Kurslarım</h3>
    <ul class="list mt-20">

      <template v-for="item in itemList" :key="item.id">
        <li
            :class="{
                  'bg-danger': !item.isCompleted,
                  'bg-success': item.isCompleted
                }"
            class="course-item list-item">
          <span>{{ item.text }}</span>
          <input v-model="item.isCompleted" type="checkbox"/>
        </li>
      </template>

    </ul>
  </div>
</template>

<style scoped>

</style>
