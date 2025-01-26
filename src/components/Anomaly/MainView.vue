<template>
  <div class="main-view" ref="mainView">
    <StageSet />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import StageSet from "./StageSet.vue";

</script>

<style scoped>
#main-view {
  height: 100vh;
  overflow: auto;
  background: #f5f5f5;
  /* box-sizing: border-box;
  scrollbar-width: none;
  -ms-overflow-style: none; */
}

/* .main-view::-webkit-scrollbar {
  display: none;
} */
</style>
