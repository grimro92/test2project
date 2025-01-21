<template>
    <div id="scroll-container" ref="scrollContainer">
        <!-- <div v-for="set in stageSets" :key="set.id"> -->
        <AnomalyTrigger />
        <StageTrigger />
    </div>
    <!-- </div> -->
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

// 初回通知を記録するフラグ
const hasAnomalyTriggered = ref(false);
const hasStageTriggered = ref(false);
console.log(hasAnomalyTriggered.value);
console.log(hasStageTriggered.value);

// ステージトリガーイベントを親に通知
const emit = defineEmits<{
    (event: "add-stage"): void;
    (event: "del-stage"): void;
}>();

onMounted(() => {
    // AnomalyTrigger用のオブザーバー
    const anomalyObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                // console.log("AnomalyTrigger - entry:", entry); // 詳細な情報をログ出力
                if (!hasAnomalyTriggered.value) {
                    hasAnomalyTriggered.value = true;
                    console.log(hasAnomalyTriggered.value);
                }else{
                if (entry.isIntersecting && !AnomalyTriggerFlg.value) {
                    AnomalyTriggerFlg.value = true;
                    console.log("AnomalyTriggerFlg:", AnomalyTriggerFlg.value);
                }}
            });
        },
        {
            root: scrollContainer.value,  // スクロールコンテナを設定
            threshold: 0.1,  // 要素が視界に一部でも入るとトリガー
        }
    );

    // StageTrigger用のオブザーバー
    const stageObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                // console.log("StageTrigger - entry:", entry); // 詳細な情報をログ出力
                if (!hasStageTriggered.value) {
                    hasStageTriggered.value = true;
                    console.log(hasStageTriggered.value);
                }else{
                if (entry.isIntersecting && !StageTriggerFlg.value) {
                    StageTriggerFlg.value = true;
                    emit("add-stage");
                    console.log("StageTriggerFlg: add-stage triggered");
                } else if (!entry.isIntersecting && StageTriggerFlg.value) {
                    StageTriggerFlg.value = false;
                    emit("del-stage");
                    console.log("StageTriggerFlg: del-stage triggered");
                }}
            });
        },
        {
            root: scrollContainer.value,  // スクロールコンテナを設定
            threshold: 0.1,  // 要素が視界に一部でも入るとトリガー
        }
    );
    console.log(scrollContainer.value); 
    const anomalyElement = scrollContainer.value?.querySelector(".anomaly-trigger");
    const stageElement = scrollContainer.value?.querySelector(".stage-trigger");

    if (anomalyElement) anomalyObserver.observe(anomalyElement);
    if (stageElement) stageObserver.observe(stageElement);

    // コンポーネントの破棄時に監視を解除
    onUnmounted(() => {
        anomalyObserver.disconnect();
        stageObserver.disconnect();
    });
});
</script>


<style scoped>
.scroll-container {
    height: 100vh;
    /* overflow-y: auto; */
    /* padding: 16px; */
    background-color: #f5f5f5;
    /* scrollbar-width: none; */
    border: 1px solid #ddd;
    display: block;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
    position: relative;
}

/* #scroll-container::-webkit-scrollbar {
    display: none;
} */
</style>