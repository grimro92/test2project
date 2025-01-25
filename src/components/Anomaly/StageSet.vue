<template>
    <div id="scroll-container" ref="scrollContainer">
        <StagePanel :stagePanelNum=spnStore.stagePanelNum />
        <AnomalyTrigger />
        <AnomalyPanel :anomalyExistFlg="AnomalyExistFlg" />
        <StageTrigger />
    </div>
</template>

<script setup lang="ts" >
import { ref, onMounted, onBeforeUnmount } from "vue";
import StagePanel from "./StagePanel.vue";
import AnomalyTrigger from "./AnomalyTrigger.vue";
import AnomalyPanel from "./AnomalyPanel.vue";
import StageTrigger from "./StageTrigger.vue";
import { useStagePanelNumState } from '../stores/stagePanelNum';

// pinia
const spnStore = useStagePanelNumState();


// フラグを定義
// ステージパネルフラグ
const StagePanelFlg = ref(false);  // いる？
// 異変トリガフラグ
const AnomalyTriggerFlg = ref(false);
// 異変存在フラグ
const AnomalyExistFlg = ref(false);
// 異変パネルフラグ
const AnomalyPanelFlg = ref(false);
// ステージトリガフラグ
const StageTriggerFlg = ref(false);


// スクロールコンテナの参照
const scrollContainer = ref<HTMLDivElement | null>(null);

// ステージトリガーイベントを親に通知
const emit = defineEmits(["addStage", "delStage"]);

let stagePanelObserver, anomalyTriggerObserver, anomalyPanelObserver, stageTriggerObserver;

const setUpObservers = () => {
    // 1.ステージパネル（StagePanel）用のオブザーバー
    const stagePanelOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    stagePanelObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // if (entry.isIntersecting && !StagePanelFlg.value) {
            //     StagePanelFlg.value = true;
            // }
            if (entry.isIntersecting
                // && StagePanelFlg.value
                && AnomalyTriggerFlg.value
                && AnomalyPanelFlg.value
            ) {
                AnomalyTriggerFlg.value = false;
                AnomalyExistFlg.value = false;
                AnomalyPanelFlg.value = false;
                StageTriggerFlg.value = false;
                spnStore.init();
            }
        });
    }, stagePanelOptions);
    const stagePanelElement = scrollContainer.value?.querySelector(".stage-panel");
    if (stagePanelElement) stagePanelObserver.observe(stagePanelElement);


    // 2.異変トリガ（AnomalyTrigger）用のオブザーバー
    const anomalyTriggerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    anomalyTriggerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !AnomalyTriggerFlg.value) {
                AnomalyTriggerFlg.value = true;
                // 異変有無をランダムに生成(66％)
                let ex = Math.floor(Math.random() * 3)
                // let ex = 0
                // 異変なし
                if (ex == 0) {
                    AnomalyExistFlg.value = false;
                    console.log("異変なし");
                } else {
                    // 異変あり
                    AnomalyExistFlg.value = true;
                    console.log("異変あり");
                }
            }
        });
    }, anomalyTriggerOptions);
    const anomalyTriggerElement = scrollContainer.value?.querySelector(".anomaly-trigger");
    if (anomalyTriggerElement) anomalyTriggerObserver.observe(anomalyTriggerElement);


    // 3.異変パネル（AnomalyPanel）用のオブザーバー
    const anomalyPanelOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    anomalyPanelObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !AnomalyPanelFlg.value) {
                // 異変パネルフラグをtrue
                AnomalyPanelFlg.value = true;

                // 異変ありの場合、このステージナンバーをカウントアップする
                if (AnomalyExistFlg.value) {
                    spnStore.increment();
                } else {
                    // 異変なしの場合、このステージナンバーを0にする
                    spnStore.reset();
                }
            }
        });
    }, anomalyPanelOptions);
    const anomalyPanelElement = scrollContainer.value?.querySelector(".anomaly-panel");
    if (anomalyPanelElement) anomalyPanelObserver.observe(anomalyPanelElement);


    // 4.ステージトリガ（StageTrigger）用のオブザーバー
    const stageTriggerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    stageTriggerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !StageTriggerFlg.value) {
                StageTriggerFlg.value = true;
                // 異変ありで通過する場合
                if(AnomalyExistFlg.value){
                    // 次のステージをステージナンバー0で作成
                    spnStore.reset();
                    emit("addStage");
                } else {
                    // 異変無しで通過する場合、ステージナンバーをインクリメントして作成
                    spnStore.add();
                    spnStore.addIncrement();
                    emit("addStage");
                }

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
    spnStore.init();
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