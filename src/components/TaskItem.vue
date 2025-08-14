<template>
  <div class="flex items-center justify-between gap-3">
    <label class="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        :checked="task.completed"
        @change="$emit('toggle', task.id)"
        class="accent-blue-600 dark:accent-blue-400"
      />
      <span :class="{'line-through text-gray-400': task.completed}">
        {{ task.text }}
      </span>
    </label>
    <div class="flex items-center gap-2">
      <span class="text-xs border rounded px-2 py-0.5 border-slate-300 dark:border-slate-700">
        {{ task.priority }}
      </span>
      <button class="text-red-500" @click="$emit('remove', task.id)">✕</button>
    </div>
  </div>
</template>

<script setup>
defineProps({ task: { type: Object, required: true } })
defineEmits(['toggle', 'remove'])
</script>