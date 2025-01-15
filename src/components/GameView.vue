<template>
    <div id="game-view" @scroll="onScroll" ref="scrollContainer">
        <!-- 現在のステージを表示 -->
        <h2>Stage {{ currentStage }}</h2>

        <div v-for="(point, index) in stagePoints" :key="index" class="point"
            :class="{ checkpoint: point.isCheckpoint }">
            <p>{{ point.isCheckpoint ? "Checkpoint" : `Point ${index + 1}` }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// 現在のステージを追跡
const currentStage = ref(1);

// ステージポイントデータ
const stagePoints = ref(
    Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        isCheckpoint: i === 9, // 最後のポイントがチェックポイント
    }))
);

// スクロールコンテナの参照
const scrollContainer = ref<HTMLDivElement | null>(null);

// ステージをリセットして次のステージに進む
const resetStage = () => {
    currentStage.value += 1; // ステージを次に進める
    scrollContainer.value?.scrollTo({ top: 0, behavior: "smooth" }); // スクロールをトップに戻す

    // 次のステージ用に新しいポイントを生成
    stagePoints.value = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        isCheckpoint: i === 9, // 再び最後のポイントをチェックポイントに設定
    }));
};

// スクロールイベント処理
const onScroll = () => {
    if (!scrollContainer.value) return;

    const container = scrollContainer.value;
    const checkpoint = container.querySelector(".checkpoint");

    if (checkpoint) {
        const checkpointTop = checkpoint.getBoundingClientRect().top;
        const containerHeight = container.clientHeight;

        // チェックポイントがスクロールビュー内に入った場合
        if (checkpointTop < containerHeight) {
            resetStage(); // ステージをリセット
        }
    }
};
</script>

<style scoped>
#game-view {
    height: 100vh;
    overflow-y: scroll;
    background: #f5f5f5;
    padding: 16px;

    /* スクロールバーを非表示にする */
    scrollbar-width: none;
    /* Firefox用 */
    -ms-overflow-style: none;
    /* IE用 */
}

#game-view::-webkit-scrollbar {
    display: none;
    /* Chrome、Safari用 */
}

.point {
    height: 400px;
    border: 1px solid #ddd;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.checkpoint {
    background: #d1f7d1;
    font-weight: bold;
}
</style>