<template>
    <draggable v-model="list" item-key="id" handle=".grab" class="space-y-2">
      <template #item="{ element }">
        <div class="bg-white dark:bg-slate-800 rounded-lg shadow p-3 flex items-center gap-2">
          <span class="grab select-none cursor-grab">⣿⣿</span>
          <TaskItem
            :task="element"
            @toggle="store.toggle"
            @remove="store.remove"
          />
        </div>
      </template>
    </draggable>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useTaskStore } from '../store/tasks'
  import TaskItem from './TaskItem.vue'
  import draggable from 'vuedraggable'
  
  const store = useTaskStore()
  const list = computed({
    get: () => store.filteredTasks,
    set: (val) => store.setTasks(val),
  })
  </script>
  
  <style>
  .grab { font-size: 12px; opacity: 0.6; }
  </style>
  