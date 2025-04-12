<script setup lang="ts">
  defineOptions({ inheritAttrs: false })
</script>

<template>
 <button v-bind="$attrs">
   <slot />
 </button>
</template>

<style scoped>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    border: none;
    border-radius: 0.75rem;
    background: var(--foreground-color);
    font-family: Comfortaa, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: medium;
    color: var(--text-color);
    padding: 0.5rem 0.75rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    backdrop-filter: blur(2rem) saturate(150%);
  }
  button:hover:not(:disabled), .avatar:hover {
    transform: scale(1.1);
  }
  button:active, .avatar:active {
    transform: scale(1.05);
  }
  button svg {
    width: 1rem;
  }
  button.transparent {
    padding: 0;
  }
  button.transparent > svg {
    width: 1.5rem;
  }
  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
</style>