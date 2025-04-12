<template>
  <div class="grid edgeToEdge">
    <slot />
  </div>
</template>

<style scoped>
  .grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    align-items: stretch;
  }

  .grid > * {
    display: inline-flex;
  }

  .grid.tight {
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
    width: 100%;
  }

  .grid.tight > .card {
    width: calc(100% - 1.5rem);
  }
</style>