<template>
    <div id="scroll-container" @scroll="handleScroll" ref="scrollContainer">
      <div
        v-for="(stageNum, index) in stageNumbers"
        :key="stageNum"
        class="stage-panel"
        ref="stagePanels"
      >
        <StagePanel :stagePanelNum="stageNum" />
        <AnomalyTrigger />
        <AnomalyPanel />
        <StageTrigger />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from "vue";
  import StagePanel from "./StagePanel.vue";
  import AnomalyTrigger from "./AnomalyTrigger.vue";
  import AnomalyPanel from "./AnomalyPanel.vue";
  import StageTrigger from "./StageTrigger.vue";
  
  const emit = defineEmits(["nextStage", "removeStage"]);
  
  // ステージの生成に使うフラグ
  const stagePanelFlg = ref(false);  // ステージパネルの表示フラグ
  const anomalyTriggerFlg = ref(false); // 異変トリガの表示フラグ
  const anomalyPanelFlg = ref(false);  // 異変パネルの表示フラグ
  const stageTriggerFlg = ref(false);  // ステージトリガの表示フラグ
  
  // ステージ番号管理
  const stageNumbers = ref([0]); // 最初のステージは 0 番
  let lastStageNum = ref(0); // 最後に作成したステージ番号
  
  // スクロール位置の情報
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  const clientHeight = ref(0);
  const scrollBottom = ref(0);
  
  // 各ステージパネルの位置情報
  const stagePanels = ref([]);
  
  // スクロールイベントハンドラ
  const handleScroll = () => {
    const container = scrollContainer.value;
    if (!container) return;
  
    // スクロール情報の更新
    scrollTop.value = container.scrollTop;
    scrollHeight.value = container.scrollHeight;
    clientHeight.value = container.clientHeight;
    scrollBottom.value = scrollTop.value + clientHeight.value;
  
    // 各ステージの位置を取得して処理
    stagePanels.value.forEach((panel, index) => {
      if (!panel) return;
  
      const rect = panel.getBoundingClientRect();
      const isStageVisible = rect.top >= 0 && rect.bottom <= clientHeight.value;
  
      // ステージパネルが見えたらフラグを立てて次のステージを生成
      if (isStageVisible && !stagePanelFlg.value) {
        stagePanelFlg.value = true;
        lastStageNum.value++;
        stageNumbers.value.push(lastStageNum.value); // 新しいステージを追加
        console.log("新しいステージ生成: ステージ番号 " + lastStageNum.value);
  
        // 次のステージを生成
        emit("nextStage", Math.random() < 0.66);
      }
  
      // 異変トリガが見えたらフラグを立てる
      if (rect.top >= 0 && rect.bottom <= clientHeight.value && !anomalyTriggerFlg.value) {
        anomalyTriggerFlg.value = true;
        console.log("異変トリガが見えた");
      }
  
      // 異変パネルが見えたらフラグを立てる
      if (rect.top >= 0 && rect.bottom <= clientHeight.value && !anomalyPanelFlg.value) {
        anomalyPanelFlg.value = true;
        console.log("異変パネルが見えた");
      }
  
      // ステージトリガが見えたら次のステージを生成して古いステージを削除
      if (rect.top >= 0 && rect.bottom <= clientHeight.value && !stageTriggerFlg.value) {
        stageTriggerFlg.value = true;
        console.log("ステージトリガが見えた");
  
        // 古いステージを削除
        if (index > 0) {
          emit("removeStage");
        }
      }
    });
  
    // 上方向のスクロールを禁止
    if (scrollTop.value <= 0) {
      container.scrollTop = 1;
    }
  };
  
  onMounted(() => {
    // DOM 要素がロードされるまで待ってから参照を更新
    nextTick(() => {
      stagePanels.value = Array.from(scrollContainer.value.querySelectorAll(".stage-panel"));
    });
  });
  </script>
  
  <style scoped>
  #scroll-container {
    height: 100vh;
    overflow-y: auto;
    padding: 16px;
    background-color: #f5f5f5;
    box-sizing: border-box;
  }
  
  .stage-panel {
    margin-bottom: 16px;
  }
  
  /* スクロール情報を画面に表示 */
  .scroll-info {
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
  
  .rect-info {
    position: fixed;
    top: 200px;
    right: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    font-family: Arial, sans-serif;
    font-size: 14px;
  }
  </style>
  