<template>
    <div id="scroll-container" ref="scrollContainer">
        <AnomalyTrigger />
        <StageTrigger />
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import AnomalyTrigger from "./AnomalyTrigger.vue";
import StageTrigger from "./StageTrigger.vue";

// フラグを定義
const AnomalyTriggerFlg = ref(false);
const StageTriggerFlg = ref(false);

// スクロールコンテナの参照
const scrollContainer = ref<HTMLDivElement | null>(null);

// ステージトリガーイベントを親に通知
const emit = defineEmits<{(event: "add-stage"): void;}>();

onMounted(() => {
    // AnomalyTrigger用のオブザーバー
    const anomalyObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !AnomalyTriggerFlg.value) {
                    AnomalyTriggerFlg.value = true;
                    console.log("AnomalyTriggerFlg:", AnomalyTriggerFlg.value);
                }
            });
        },
        {
            root: scrollContainer.value,
            threshold: 0.1,
        }
    );

    // StageTrigger用のオブザーバー
    const stageObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !StageTriggerFlg.value) {
                    StageTriggerFlg.value = true;
                    // 親にトリガーイベントを送信
                    emit("add-stage");
                    console.log("StageTriggerFlg:", StageTriggerFlg.value);
                }
            });
        },
        {
            root: scrollContainer.value,
            threshold: 0.5,
        }
    );

    const anomalyElement = scrollContainer.value?.querySelector(".anomaly-trigger");
    const stageElement = scrollContainer.value?.querySelector(".stage-trigger");
    if (anomalyElement) anomalyObserver.observe(anomalyElement);
    if (stageElement) stageObserver.observe(stageElement);

    onUnmounted(() => {
        anomalyObserver.disconnect();
        stageObserver.disconnect();
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
  scrollbar-width: none;
  -ms-overflow-style: none;

/* スクロールバーを非表示にする */
scrollbar-width: none; /* Firefox */
}
#scroll-container::-webkit-scrollbar {
display: none; /* Chrome, Safari, Edge */
}
</style>