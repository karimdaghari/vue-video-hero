# What is this?

This is a responsive video section with content overlay. In other other words, this is a responsive hero section with a video as background that you can overlay content on top of.

**It currently supports YouTube only.**

# How to use it?

Install it:

```bash
npm i vue-video-hero
```

Inside your .vue component:

```javascript
<template>
 <!-- ... -->
 <vue-video-hero videoId="_XcsNhdz-kM">
 <!-- https://youtu.be/[_XcsNhdz-kM] <-- this is the id-->
  <template #content>
    <!-- Put your content here -->
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

- Auto play on all devices (except iOS < 10)
- Muted audio
- Loops automatically (the video never ends)
- Almost no branding
