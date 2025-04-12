<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
  .card {
    position: relative;
    width: calc(100% - 3rem);
    align-items: flex-start;
    padding: 1.5rem;

    border-radius: 2rem;
    background: var(--foreground-color);
    backdrop-filter: blur(1rem);
    animation: growIn 0.3s ease;
    z-index: 1;
  }

  ::v-deep(img) {
    max-width: 100%;
    border-radius: 0.75rem;
  }
  
  @keyframes growIn {
    0% {
      scale: 0.9;
    }

    50% {
      scale: 1.1;
      transform: none;
    }

    100% {
      scale: 1;
    }
  }
  
  a .card {
    width: calc(100% - 1.5rem);
  }
  
  .card::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 0.5rem;

    opacity: 0.4;
    border-radius: 2rem;
    background: radial-gradient(circle at top left, var(--swirly-01), var(--swirly-02), var(--swirly-03), var(--swirly-04));
    background-size: 400% 400%;
    z-index: -1;
    filter: blur(1rem);
    transition: opacity 0.4s ease;
  }

  .card:hover::before {
    opacity: 0.9;
    animation: swirly 10s ease-in-out infinite;
  }

  @keyframes swirly {
    0% {
      background-position: 0% 0%;
    }
    25% {
      background-position: 100% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    75% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }

  @media (max-width: 35rem) {
    .card {
      padding: 1rem;
      border-radius: 1.75rem;
      width: calc(100% - 2rem);
    }
    .card::before {
      border-radius: 1.75rem;
    }
  }
</style>