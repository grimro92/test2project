<template>
  <div id="scroll-container" @scroll="handleScroll" ref="scrollContainer">
    <!-- 看板エリア -->
    <div class="area header-area">
      <h1>TEST {{ number }}</h1>
    </div>

    <!-- トリガ1エリア -->
    <div class="area trigger1-area">Trigger 1 Area</div>

    <!-- トリガ2エリア -->
    <div class="area trigger2-area">Trigger 2 Area</div>

    <!-- メインエリア -->
    <div class="area main-area">Main Area (異変: {{ hasAnomaly ? '有り' : '無し' }})</div>

    <!-- トリガ3エリア -->
    <div class="area trigger3-area">Trigger 3 Area</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// フラグと状態管理
const number = ref(0); // 看板の数字
const trigger1Flag = ref(false); // トリガ1フラグ
const trigger3Flag = ref(false); // トリガ3フラグ
const hasAnomaly = ref(false); // 異変有無フラグ

const scrollContainer = ref(null);

const handleScroll = () => {
  if (!scrollContainer.value) return;

  const container = scrollContainer.value;
  const scrollTop = container.scrollTop;
  const containerHeight = container.clientHeight;

  // 各エリアの境界を計算
  const headerHeight = container.querySelector(".header-area").offsetHeight;
  const trigger1Height = container.querySelector(".trigger1-area").offsetHeight;
  const trigger2Height = container.querySelector(".trigger2-area").offsetHeight;
  const mainHeight = container.querySelector(".main-area").offsetHeight;

  const trigger1Boundary = headerHeight;
  const trigger2Boundary = headerHeight + trigger1Height;
  const mainBoundary = trigger2Boundary + trigger2Height;
  const trigger3Boundary = mainBoundary + mainHeight;

  // トリガ1エリア通過時の処理
  if (scrollTop >= trigger1Boundary && scrollTop < trigger2Boundary) {
    if (!trigger1Flag.value) {
      trigger1Flag.value = true;
    }
  } else if (scrollTop < trigger1Boundary) {
    trigger1Flag.value = false;
    number.value = 0; // 一番上でリセット
  }

  // トリガ2エリア通過時の処理
  if (scrollTop >= trigger2Boundary && scrollTop < mainBoundary) {
    hasAnomaly.value = Math.random() < 0.5; // ランダムに異変有無を設定
  }

  // メインエリアの処理
  if (scrollTop >= mainBoundary && scrollTop < trigger3Boundary) {
    // 異変時は上に戻る場合の処理
    if (hasAnomaly.value && scrollTop < trigger2Boundary) {
      number.value += 1;
    }
  }

  // トリガ3エリア通過時の処理
  if (scrollTop >= trigger3Boundary) {
    if (!trigger3Flag.value) {
      trigger3Flag.value = true;
      number.value = 0; // リセット
    }
  } else if (scrollTop < trigger3Boundary) {
    trigger3Flag.value = false;
  }
};
</script>

<style scoped>
#scroll-container {
  height: 100vh;
  overflow-y: auto;
  background-color: #f5f5f5;
  padding: 0;
}

.area {
  height: 100vh; /* 各エリアは画面全体の高さを持つ */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.header-area {
  background-color: #ffcccc;
}

.trigger1-area {
  background-color: #cce5ff;
}

.trigger2-area {
  background-color: #d4edda;
}

.main-area {
  background-color: #fff3cd;
}

.trigger3-area {
  background-color: #f8d7da;
}
</style>
