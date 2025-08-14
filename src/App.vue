<template>
  <div class="min-h-screen text-gray-900 dark:text-gray-100">
    <header class="bg-white shadow">
      <nav class="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <RouterLink to="/" class="font-semibold">TaskFlow</RouterLink>
        <div class="flex items-center gap-4">
          <RouterLink class="hover:underline" to="/">Home</RouterLink>
          <RouterLink class="hover:underline" to="/about">About</RouterLink>
          <button class="border rounded px-3 py-1" @click="toggleDark">
            {{ isDark ? 'Light' : 'Dark' }} Mode
          </button>
        </div>
      </nav>
    </header>

    <main class="mx-auto max-w-5xl px-4 py-8">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)
onMounted(() => {
  isDark.value = localStorage.getItem('tf.dark') === '1'
  applyDark()
})
function toggleDark() {
  isDark.value = !isDark.value
  localStorage.setItem('tf.dark', isDark.value ? '1' : '0')
  applyDark()
}
function applyDark() {
  const html = document.documentElement
  html.classList.toggle('dark', isDark.value)
}
</script>

<style>
:root.dark body { background: #0f172a; color: #e2e8f0; }
</style>
