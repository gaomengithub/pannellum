<script setup>
import Pannellum from './components/Pannellum.vue';
import music from '/music/背景音乐.mp3'
const audio = new Audio(music);
audio.play()
// const pageHeight = window.innerHeight;
// document.documentElement.style.setProperty('--page-height-custom', pageHeight + 'px');
</script>

<template>
  <main>
    <Pannellum />
  </main>
</template>

<style>
#app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  padding: 0;
}
</style>
