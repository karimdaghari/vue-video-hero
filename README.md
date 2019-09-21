# What is this?

This is a responsive video section with content overlay. In other other words, this is a responsive hero section with a video as background that you can overlay content on top of.

**It supports YouTube and Vimeo.**

# How to use it?

Install it:

```bash
npm i vue-video-hero
```

Inside your .vue component:

```javascript
<template>
  // ...
  <vue-video-hero source="youtube || vimeo" videoId="_XcsNhdz-kM">
  // For YouTube:
 // https://youtu.be/[_XcsNhdz-kM] <-- this is the id
 // For Vimeo:
 // https://vimeo.com/[123456789] <-- this is the id
  <template #content>
    // Put your content here
  </template>
 </vue-video-hero>
</template>

<script>
// ...
import vue-video-hero from 'vue-video-hero'
// ...
components: {
  // ...
  vue-video-hero,
}
// ...
</script>
```

# Defaults

_Currently unchangeable_

- Auto play on all devices (except iOS < 10)
- Muted audio
- Loops automatically (the video never ends)
