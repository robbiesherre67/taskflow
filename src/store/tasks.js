import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [
      { id: 1, text: 'Try TaskFlow', completed: false, priority: 'High' },
      { id: 2, text: 'Drag me up/down', completed: false, priority: 'Low' },
    ],
    filter: 'all', // all|active|completed
    search: '',
  }),
  getters: {
    filteredTasks(state) {
      let list = [...state.tasks]
      if (state.search.trim()) {
        const q = state.search.toLowerCase()
        list = list.filter(t => t.text.toLowerCase().includes(q))
      }
      if (state.filter === 'active') list = list.filter(t => !t.completed)
      if (state.filter === 'completed') list = list.filter(t => t.completed)
      return list
    },
  },
  actions: {
    addTask(text) {
      this.tasks.push({
        id: Date.now(),
        text,
        completed: false,
        priority: 'Normal',
      })
    },
    toggle(id) {
      const t = this.tasks.find(t => t.id === id)
      if (t) t.completed = !t.completed
    },
    remove(id) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    },
    setSearch(q) { this.search = q },
    setFilter(f) { this.filter = f },
    setTasks(newList) { this.tasks = newList },
  },
})
