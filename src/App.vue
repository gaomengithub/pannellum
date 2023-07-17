<script setup>
import Pannellum from './components/PannellumPage.vue';
import InformationCard from './components/InformationCard.vue';
import TipCard from './components/TipCard.vue';
</script>

<template>
  <main>
    <TipCard />
    <Pannellum >
    </Pannellum>
    <InformationCard />
  </main>
</template>

<style>
@import './assets/front/Alimama_DongFangDaKai_Regular.css';

#app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  padding: 0;
}
</style>
