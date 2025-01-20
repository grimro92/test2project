<template>
  <div class="main-view" ref="mainView">
    <StageSet
      v-for="set in stageSets"
      :key="set.id"
      @add-stage="addStageTrigger"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import StageSet from "./StageSet.vue";

// 動的に管理するステージセット
const stageSets = ref([{ id: 1 }]);

// ステージトリガーを受け取ったときの処理
const addStageTrigger = () => {
  // 新しいステージセットを追加
  const newStageSet = { id: stageSets.value.length + 1 };
  stageSets.value.push(newStageSet);
};
</script>

<style scoped>
.main-view {
  height: 100vh;
  overflow-y: scroll;
  background: #f5f5f5;
  box-sizing: border-box;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.main-view::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
}
</style>
