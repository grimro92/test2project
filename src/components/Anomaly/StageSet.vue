<template>
    <div id="scroll-container" ref="scrollContainer">
        <AnomalyTrigger />
        <StageTrigger />
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import AnomalyTrigger from "./AnomalyTrigger.vue";
import StageTrigger from "./StageTrigger.vue";

// フラグを定義
const AnomalyTriggerFlg = ref(false);
const StageTriggerFlg = ref(false);


// スクロールコンテナの参照
const scrollContainer = ref<HTMLDivElement | null>(null);

// ステージトリガーイベントを親に通知
const emit = defineEmits(["addStage", "delStage"]);

let stagePanelObserver, anomalyTriggerObserver, anomalyPanelObserver, stageTriggerObserver;

const setUpObservers = () => {
    // AnomalyTrigger用のオブザーバー
    const anomalyTriggerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    anomalyTriggerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !AnomalyTriggerFlg.value) {
                AnomalyTriggerFlg.value = true;
            }
        });
    }, anomalyTriggerOptions);
    const anomalyElement = scrollContainer.value?.querySelector(".anomaly-trigger");
    if (anomalyElement) anomalyTriggerObserver.observe(anomalyElement);

    // StageTrigger用のオブザーバー
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
    const stageElement = scrollContainer.value?.querySelector(".stage-trigger");
    if (stageElement) stageTriggerObserver.observe(stageElement);
};

onMounted(() => {
        setUpObservers();
    });

// コンポーネントの破棄時に監視を解除
onBeforeUnmount(() => {
    if (anomalyTriggerObserver) {
        anomalyTriggerObserver.disconnect();
    }
    if (stageTriggerObserver) {
        stageTriggerObserver.disconnect();
    }
});
</script>


<style scoped>
.scroll-container {
    height: 100vh;
    /* overflow-y: auto; */
    /* padding: 16px; */
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