<template>
  <div class="stage-panel">
    <h1>ステージ: {{ stagePanelNum }}</h1>
    <p></p>
  </div>
</template>

<script setup>
 defineProps({
  stagePanelNum: {
      type: Number,
      required: true,
    },
  });
</script>

<style scoped>
.stage-panel {
  height: 1200px;
  /* margin: 20px 0; */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
  background-color: lightblue;
}
</style>
