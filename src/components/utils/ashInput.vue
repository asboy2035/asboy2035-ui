<script setup lang="ts">
  defineOptions({ inheritAttrs: false })
</script>

<template>
  <input v-bind="$attrs" />
</template>

<style scoped>
  input {
    margin: 0.5rem;
    padding: 0.25rem;
    border-radius:  0.25rem;
    font-family: comfortaa, system-ui, sans-serif;
    background: var(--foreground-color);
    border: none;
    color: var(--text-color);
  }
</style>