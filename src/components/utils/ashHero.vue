<script lang="ts">
  export default {
    props: {
      image: String,
      imageAlt: String ?? "Image"
    }
  }
</script>

<template>
  <div class="hero-v2">
    <img :src="image" :alt="imageAlt">

    <div class="heroText spaced">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .hero-v2 {
    display: flex;
    position: relative;
    align-items: flex-start;
    justify-content: flex-end;
    min-height: fit-content;
    height: 75vh;
    max-height: 80vw;
    width: 100%;
  }

  .heroText {
    display: flex;
    align-items: flex-start;
    margin: 1.5rem;
    height: fit-content;
  }

  ::v-deep(h1) {
    font-family: 'Instrument Serif', serif;
    font-style: italic;
    color: white;
    font-size: 5rem;
  }

  ::v-deep(h1), ::v-deep(h2), ::v-deep(p) {
    color: white;
  }

  .hero-v2 img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    object-fit: cover;
    border-radius: 1.5rem;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.8;
  }

  @media (max-width: 35rem) {
    .hero {
      height: fit-content;
      align-items: flex-start;
    }

    .hero-v2 {
      max-height: 75vh;
    }
  }
</style>