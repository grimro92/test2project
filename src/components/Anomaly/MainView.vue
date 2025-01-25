<template>
    <div class="main-view">
      <div class="debug-info">
        <p>ステージ数: {{ stageNumbers.length }}</p>
      </div>
  
      <!-- VirtualScrollerを使う -->
      <VirtualScroller :items="stageNumbers" :item-size="50">
        <template #default="{ item }">
          <!-- itemを使って表示 -->
          <div class="stage-container" :key="item">
            <StageSet @add-stage="addStageTrigger" @del-stage="delStageTrigger" />
          </div>
        </template>
      </VirtualScroller>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from "vue";
  // import  { VirtualScroller }  from "vue3-virtual-scroller"
  import StageSet from "./StageSet.vue";
  
  const stageNumbers = ref([1]);
  let nextStageNumber = 2;
  
  const addStageTrigger = () => {
    if (stageNumbers.value.length < 2) {
      stageNumbers.value.push(nextStageNumber);
      nextStageNumber++;
    }
  };
  
  const delStageTrigger = () => {
    if (stageNumbers.value.length > 0) {
      stageNumbers.value.shift();
    }
  };
  </script>
  
  <style scoped>
  .main-view {
    height: 100vh;
    overflow: auto;
    background: #f5f5f5;
  }
  
  .debug-info {
    position: fixed;
    top: 10px;
    right: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    font-family: Arial, sans-serif;
  }
  
  .virtual-scroller {
    height: 100vh;
    overflow: auto;
  }
  
  .stage-container {
    height: 300px; /* 仮の高さ */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e0e0e0;
    border-bottom: 1px solid #ccc;
  }
  </style>
  