<template>
  <div class="main-view" ref="mainView">
    <div v-for="set in stageSets" :key="set.id">
      <StageSet  @add-stage="addStageTrigger" @del-stage="delStageTrigger"/>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import StageSet from "./StageSet.vue";

// 動的に管理するステージセット
const stageSets = ref([{ id: 1 }]);
const newStageSet = ref();

// ステージトリガーを受け取ったときの処理
const addStageTrigger = () => {
  console.log("ステージ追加トリガ");
  // 新しいステージセットを追加
  newStageSet.value = { id: stageSets.value.length + 1 };
  stageSets.value.push(newStageSet.value);
};

const delStageTrigger = () => {
  console.log("ステージ削除トリガ");
  stageSets.value.splice(newStageSet.value, 1);
}

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
