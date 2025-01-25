<template>
  <div class="main-view" ref="mainView">
    <div class="debug-info">
      <p>ステージ数: {{ stageNumbers.length }}</p>
    </div>

    <!-- ステージリスト -->
    <div v-for="(stageNum, index) in stageNumbers" :key="stageNum" class="stage-container">
      <StageSet :stage-number="stageNum" />
    </div>

    <!-- 無限スクロール -->
    <InfiniteLoading 
      @infinite="loadMoreStages" 
      ref="infiniteLoading"
      spinner="waveDots"
      :identifier="stageNumbers[stageNumbers.length - 1]"
    >
      <template #no-more>
        <p class="no-more">これ以上ステージはありません</p>
      </template>
    </InfiniteLoading>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
import StageSet from "../Anomaly/StageSet.vue";

// 動的に管理するステージセット
const stageNumbers = ref([1]);
let nextStageNumber = 2; // 次のステージ番号

// 無限スクロールで新しいステージをロード
const loadMoreStages = ($state: any) => {
  setTimeout(() => {
    if (stageNumbers.value.length < 2) { // 最大20個まで追加可能
      // 新しいステージを追加
      stageNumbers.value.push(nextStageNumber);
      nextStageNumber++;
      $state.loaded(); // データのロード完了を通知
    } else {
      stageNumbers.value.shift();
      // $state.complete(); // データの終端を通知
    }
  }, 1000); // デモのための遅延を追加
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

.stage-container {
  margin: 16px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.no-more {
  text-align: center;
  color: #999;
  margin-top: 16px;
}
</style>
