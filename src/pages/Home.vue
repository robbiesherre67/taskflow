<template>
    <section class="mx-auto max-w-2xl">
      <h1 class="text-3xl font-bold mb-4">TaskFlow</h1>
  
      <form @submit.prevent="add" class="flex gap-2 mb-4">
        <input
          v-model="newTask"
          class="flex-1 border rounded px-3 py-2"
          placeholder="Add a task…"
        />
        <button class="bg-blue-600 text-white rounded px-4">Add</button>
      </form>
  
      <div class="flex items-center gap-3 mb-4">
        <input
          v-model="search"
          @input="store.setSearch(search)"
          class="flex-1 border rounded px-3 py-2"
          placeholder="Search tasks…"
        />
        <select v-model="filter" @change="store.setFilter(filter)" class="border rounded px-2 py-2">
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
  