<template>
  <div class="main-view" ref="mainView">
    <div v-for="(stageNum, index) in stageNumbers" :key="stageNum" class="stage-container">
      <StageSet @add-stage="addStageTrigger" @del-stage="delStageTrigger" />
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import StageSet from "./StageSet.vue";

// 動的に管理するステージセット
const stageNumbers = ref([1]);
let nextStageNumber = 2;


// ステージトリガーを受け取ったときの処理
const addStageTrigger = () => {
  console.log("ステージ追加トリガ");
  if (stageNumbers.value.length < 2) {
    // 新しいステージセットを追加
    stageNumbers.value.push(nextStageNumber);
    nextStageNumber++;
    console.log("stageNumbers", stageNumbers.value);
    console.log("nextStageNumber", nextStageNumber);
  }
};

const delStageTrigger = () => {
  console.log("ステージ削除トリガ");
  if (stageNumbers.value.length > 0) {
    console.log("stageNumbers", stageNumbers.value);
    console.log("newStageSet", nextStageNumber);
    stageNumbers.value.shift();
  }
};

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
