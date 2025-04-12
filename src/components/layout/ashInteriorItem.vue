<template>
  <div class="interior">
    <slot />
  </div>
</template>

<style scoped>
  a > .interior {
    width: 100%;
  }

  .interior {
    background: var(--foreground-color);
    border-radius: 0.75rem;
    padding: 0.75rem;
  }

  svg {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 35rem) {
    .interior {
      border-radius: 1rem;
      padding: 0.75rem;
    }
  }
</style>