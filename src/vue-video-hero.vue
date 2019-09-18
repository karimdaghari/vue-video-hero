<template>
  <section class="hero is-large">
    <figure class="image is-16by9">
      <iframe
        class="has-ratio"
        :src="
          `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&loop=1&mute=1&disablekb=1iv_load_policy=3&modestbranding=1&playsinline=1&rel=0`
        "
        frameborder="0"
        allow="autoplay"
      ></iframe>
    </figure>
    <div class="is-overlay">
      <div class="hero-body">
        <div class="container">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    videoId: String
  }
};
</script>

<style scoped></style>
