<template>
  <div>
    <!-- スクロール情報を常に表示 -->
    <!-- <div class="scroll-info">
      <p>scrollTop: {{ scrollTop }}</p>
      <p>scrollHeight: {{ scrollHeight }}</p>
      <p>clientHeight: {{ clientHeight }}</p>
      <p>scrollBottoms: {{ scrollBottoms }}</p>
    </div> -->

    <div id="scroll-container" @scroll="handleScroll" ref="scrollContainer">
      <div
        v-for="(number, index) in components"
        :key="number"
        class="test-container"
        ref="testContainer"
      >
        <Test :number="number" />
      </div>
    </div>
    
    <!-- 各コンポーネントの rect.top と rect.bottom を表示 -->
    <!-- <div class="rect-info">
      <p v-for="(rect, index) in rects" :key="index">
        Test {{ index + 1 }} - Top: {{ rect.top }}px, Bottom: {{ rect.bottom }}px
      </p>
    </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import Test from "./Test2.vue";

const components = ref([1]); // 初期状態で TEST 1 を表示
const lastNumber = ref(1); // 最後に割り当てた番号を追跡
const scrollContainer = ref(null);
const testContainer = ref([]); // 各コンポーネントの参照を管理

// スクロール情報を追跡するための変数
const scrollTop = ref(0);
const scrollHeight = ref(0);
const clientHeight = ref(0);
const scrollBottoms = ref(0);

// rect情報を複数保持する配列
const rects = ref([]); // 各コンポーネントの rect.top と rect.bottom を格納

const handleScroll = () => {
  if (!scrollContainer.value) return;

  const container = scrollContainer.value;

  // 1. スクロール位置を取得
  scrollTop.value = container.scrollTop;
  scrollHeight.value = container.scrollHeight;
  clientHeight.value = container.clientHeight;
  scrollBottoms.value = container.scrollTop + container.clientHeight;

  // 2. 各コンポーネントの位置を確認
  rects.value = []; // rects 配列をリセット
  testContainer.value.forEach((element, index) => {
    if (!element) return;

    // getBoundingClientRect() は、DOM 要素のサイズと位置（画面上での位置）を取得するメソッド
    const rect = element.getBoundingClientRect();

    // rect情報を配列に追加
    rects.value.push({
      top: rect.top,
      bottom: rect.bottom,
    });

    // コンポーネントが完全に画面外（上方向）に出た場合
    if (rect.bottom < 0) {
      // components.value.splice(index, 1); // 対応するコンポーネントを削除
      scrollContainer.value.scrollTop = 0;
    }
  });

  // 3. 下部スクロールで新しいコンポーネントを追加
  const scrollBottom = scrollTop.value + clientHeight.value;
  if (scrollBottom >= scrollHeight.value - 50) {
    lastNumber.value += 1;
    components.value.push(lastNumber.value); // 新しい番号でTestコンポーネントを追加
  }

  // 4. 上方向スクロールを防止
  // if (scrollTop.value <= 0) {
  //   container.scrollTop = 1;
  // }
};

onMounted(() => {
  // 初期スクロール設定
  if (scrollContainer.value) {
    scrollContainer.value.scrollTop = 0;
  }

  nextTick(() => {
    testContainer.value = Array.from(
      scrollContainer.value.querySelectorAll(".test-container")
    );
  });
});
</script>

<style scoped>
#scroll-container {
  height: 100vh;
  overflow-y: auto;
  padding: 16px;
  background-color: #f5f5f5;
  /* box-sizing: border-box;
  scrollbar-width: none;
  -ms-overflow-style: none; */
}

/* #scroll-container::-webkit-scrollbar {
  display: none;
} */

.test-container {
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

/* 各 rect 情報を表示 */
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
