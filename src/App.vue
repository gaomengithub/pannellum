<script setup>
import Pannellum from './components/Pannellum.vue';
import Memu from './components/Memu.vue';
</script>

<template>
  <main>
    <Pannellum v-slot:memu>
      <Memu  />
    </Pannellum>
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
