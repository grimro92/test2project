<template>
  <div class="main-view">
    <StagePanel :stagePanelNum="stagePanelNum" />
    <AnomalyTrigger />
    <AnomalyPanel />
    <StageTrigger />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import StagePanel from "./StagePanel.vue";
import AnomalyTrigger from "./AnomalyTrigger.vue";
import AnomalyPanel from "./AnomalyPanel.vue";
import StageTrigger from "./StageTrigger.vue";

const stagePanelFlg = ref(false);
const anomalyTriggerFlg = ref(false);
const anomalyPanelFlg = ref(false);
const stageTriggerFlg = ref(false);

const stagePanelNum = ref(0);
const anomalyExistFlg = ref(0);

let stagePanelObserver, anomalyTriggerObserver, anomalyPanelObserver, stageTriggerObserver;

const setUpObservers = () => {
  // ステージパネル（StagePanel）
  const stagePanelOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
  stagePanelObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (anomalyExistFlg.value && anomalyTriggerFlg.value && anomalyPanelFlg.value && !stagePanelFlg.value) {
        stagePanelFlg.value = true;
        stagePanelNum.value += 1;

        stagePanelFlg.value = false;
        anomalyTriggerFlg.value = false;
        anomalyPanelFlg.value = false;
        stageTriggerFlg.value = false;
        anomalyExistFlg.value = false;


        console.log("stagePanelFlg:" + stagePanelFlg.value);
      }else if(!anomalyExistFlg.value && anomalyTriggerFlg.value && anomalyPanelFlg.value && !stagePanelFlg.value) {
        stagePanelFlg.value = true;
        stagePanelNum.value = 0;

        stagePanelFlg.value = false;
        anomalyTriggerFlg.value = false;
        anomalyPanelFlg.value = false;
        stageTriggerFlg.value = false;
        anomalyExistFlg.value = false;
      }
    });
  }, stagePanelOptions);
  const stagePanelElement = document.querySelector(".stage-panel");
  if (stagePanelElement) stagePanelObserver.observe(stagePanelElement);




  // 異変トリガ（AnomalyTrigger）
  const anomalyTriggerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
  anomalyTriggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !anomalyTriggerFlg.value) {
        anomalyTriggerFlg.value = true;
        // 異変有無をランダムに生成(66％)
        let ex = Math.floor(Math.random() * 3)
        // 異変なし
        if(ex == 0){
          anomalyExistFlg.value = false;
          console.log("異変なし");
        }else{
          // 異変あり
          anomalyExistFlg.value = true;
          console.log("異変あり");
        }

        

        console.log("anomalyTriggerFlg:" + anomalyTriggerFlg.value);
      }
    });
  }, anomalyTriggerOptions);
  const anomalyTriggerElement = document.querySelector(".anomaly-trigger");
  if (anomalyTriggerElement) anomalyTriggerObserver.observe(anomalyTriggerElement);



  // 異変パネル（AnomalyPanel）
  const anomalyPanelOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
  anomalyPanelObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !anomalyPanelFlg.value) {
        anomalyPanelFlg.value = true;
        console.log("anomalyPanelFlg:" + anomalyPanelFlg.value);
      }
    });
  }, anomalyPanelOptions);
  const anomalyPanelElement = document.querySelector(".anomaly-panel");
  if (anomalyPanelElement) anomalyPanelObserver.observe(anomalyPanelElement);




  // ステージトリガ（StageTrigger）
  const stageTriggerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
  stageTriggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !stageTriggerFlg.value && anomalyExistFlg.value) {
        stageTriggerFlg.value = true;
        // 次のステージを０で作成

        console.log("stageTriggerFlg:" + stageTriggerFlg.value);
      }else if(entry.isIntersecting && !stageTriggerFlg.value && !anomalyExistFlg.value){
        // 次のステージをカウントアップして作成
      }
    });
  }, stageTriggerOptions);
  const stageTriggerElement = document.querySelector(".stage-trigger");
  if (stageTriggerElement) stageTriggerObserver.observe(stageTriggerElement);



};

const handleScroll = () => {
  const stagePanelElement = document.querySelector(".stage-panel");
  if (stagePanelElement) {
    const rect = stagePanelElement.getBoundingClientRect();
    if (rect.top > 0) return; // 正常範囲なら何もしない
    window.scrollTo(0, window.scrollY + rect.top); // スクロール位置を制限
  }
};

onMounted(() => {
  setUpObservers();
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  if (stagePanelObserver) stagePanelObserver.disconnect();
  if (anomalyTriggerObserver) anomalyTriggerObserver.disconnect();
  if (anomalyPanelObserver) anomalyPanelObserver.disconnect();
  if (stageTriggerObserver) stageTriggerObserver.disconnect();
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
.main-view {
  height: 100vh;
  overflow-y: scroll;
  background: #f5f5f5;
}

.stage-panel,
.anomaly-trigger,
.anomaly-panel,
.stage-trigger {
  height: 500px;
  margin: 20px 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
}

.stage-panel {
  background-color: lightblue;
}

.anomaly-trigger {
  background-color: lightcoral;
}

.anomaly-panel {
  background-color: lightgreen;
}

.stage-trigger {
  background-color: lightyellow;
  color: black;
}
</style>
