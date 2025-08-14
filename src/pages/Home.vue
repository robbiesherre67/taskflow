<template>
  <section class="mx-auto max-w-2xl">
    <h1 class="text-3xl font-bold mb-4">TaskFlow</h1>

    <form @submit.prevent="add" class="flex gap-2 mb-4">
      <input
        v-model="newTask"
        class="flex-1 rounded px-3 py-2 border border-slate-300 dark:border-slate-700
               bg-white text-gray-900
               dark:bg-slate-700 dark:text-gray-100 dark:placeholder-gray-400
               focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        placeholder="Add a task…"
      />
      <button
        class="rounded px-4 py-2
               bg-blue-600 hover:bg-blue-700
               dark:bg-blue-500 dark:hover:bg-blue-400
               text-white"
      >
        Add
      </button>
    </form>

    <div class="flex items-center gap-3 mb-4">
      <input
        v-model="search"
        @input="store.setSearch(search)"
        class="flex-1 rounded px-3 py-2 border border-slate-300 dark:border-slate-700
               bg-white text-gray-900
               dark:bg-slate-700 dark:text-gray-100 dark:placeholder-gray-400
               focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        placeholder="Search tasks…"
      />
      <select
        v-model="filter"
        @change="store.setFilter(filter)"
        class="rounded px-2 py-2 border border-slate-300 dark:border-slate-700
               bg-white text-gray-900
               dark:bg-slate-700 dark:text-gray-100
               focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>

    <TaskList />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../store/tasks'
import TaskList from '../components/TaskList.vue'

const newTask = ref('')
const search = ref('')
const filter = ref('all')
const store = useTaskStore()

function add() {
  const t = newTask.value.trim()
  if (!t) return
  store.addTask(t)
  newTask.value = ''
}
</script>