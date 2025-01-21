<template>
    <div id="scroll-container" ref="scrollContainer">
        <StagePanel />
        <AnomalyTrigger />
        <AnomalyPanel />
        <StageTrigger />
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import StagePanel from "./StagePanel.vue";
import AnomalyTrigger from "./AnomalyTrigger.vue";
import AnomalyPanel from "./AnomalyPanel.vue";
import StageTrigger from "./StageTrigger.vue";


// フラグを定義
const StagePanelFlg = ref(false);
const AnomalyTriggerFlg = ref(false);
const AnomalyPanelFlg = ref(false);
const StageTriggerFlg = ref(false);


// スクロールコンテナの参照
const scrollContainer = ref<HTMLDivElement | null>(null);

// ステージトリガーイベントを親に通知
const emit = defineEmits(["addStage", "delStage"]);

let stagePanelObserver, anomalyTriggerObserver, anomalyPanelObserver, stageTriggerObserver;

const setUpObservers = () => {
    // 1.StagePanel用のオブザーバー
    const stagePanelOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    stagePanelObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !StagePanelFlg.value) {
                StagePanelFlg.value = true;
            }
        });
    }, stagePanelOptions);
    const stagePanelElement = scrollContainer.value?.querySelector(".stage-panel");
    if (stagePanelElement) stagePanelObserver.observe(stagePanelElement);

    // 2.AnomalyTrigger用のオブザーバー
    const anomalyTriggerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    anomalyTriggerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !AnomalyTriggerFlg.value) {
                AnomalyTriggerFlg.value = true;
            }
        });
    }, anomalyTriggerOptions);
    const anomalyTriggerElement = scrollContainer.value?.querySelector(".anomaly-trigger");
    if (anomalyTriggerElement) anomalyTriggerObserver.observe(anomalyTriggerElement);

    // 3.AnomalyPanel用のオブザーバー
    const anomalyPanelOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    anomalyPanelObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !AnomalyPanelFlg.value) {
                AnomalyPanelFlg.value = true;
            }
        });
    }, anomalyPanelOptions);
    const anomalyPanelElement = scrollContainer.value?.querySelector(".anomaly-panel");
    if (anomalyPanelElement) anomalyPanelObserver.observe(anomalyPanelElement);

    // 4.StageTrigger用のオブザーバー
    const stageTriggerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    stageTriggerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !StageTriggerFlg.value) {
                StageTriggerFlg.value = true;
                emit("addStage");
            }
            if (!entry.isIntersecting && StageTriggerFlg.value && entry.boundingClientRect.bottom < 150) {
                emit("delStage");
            }
        });
    }, stageTriggerOptions);
    const stageTriggerElement = scrollContainer.value?.querySelector(".stage-trigger");
    if (stageTriggerElement) stageTriggerObserver.observe(stageTriggerElement);
};

onMounted(() => {
    setUpObservers();
});

// コンポーネントの破棄時に監視を解除
onBeforeUnmount(() => {
    if (stagePanelObserver) {
        stagePanelObserver.disconnect();
    }
    if (anomalyTriggerObserver) {
        anomalyTriggerObserver.disconnect();
    }
    if (anomalyPanelObserver) {
        anomalyPanelObserver.disconnect();
    }
    if (stageTriggerObserver) {
        stageTriggerObserver.disconnect();
    }
});
</script>


<style scoped>
.scroll-container {
    height: 100vh;
    background-color: #f5f5f5;
    /* scrollbar-width: none; */
    /* border: 1px solid #ddd;
    display: block;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
    position: relative; */
}

/* #scroll-container::-webkit-scrollbar {
    display: none;
} */
</style>