<template>
  <div id="scroll-container" @scroll="handleScroll" ref="scrollContainer">
    <div v-for="(component, index) in components" :key="index" class="test-container">
      <Test :number="index + 1" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Test from './Test.vue';

const components = ref([0]); // 初期状態として1つのTest.vueを表示
const scrollContainer = ref(null);

const handleScroll = () => {
  if (!scrollContainer.value) return;

  const container = scrollContainer.value;
  const scrollBottom = container.scrollTop + container.clientHeight;
  const scrollHeight = container.scrollHeight;

  // スクロールがコンテナの底に近づいたら、新しいTestコンポーネントを追加
  if (scrollBottom >= scrollHeight - 50) { // 余裕を50pxに調整
    components.value.push(components.value.length); // 新しいTestコンポーネントを追加
  }
};

// 初期スクロール設定
onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTop = 0; // スクロールを最上部に設定
  }
});
</script>

<style scoped>
#scroll-container {
  height: 100vh; /* 画面全体を覆う高さ */
  overflow-y: auto; /* 縦方向にスクロールを有効化 */
  padding: 16px;
  background-color: #f5f5f5;
  box-sizing: border-box;
}

.test-container {
  margin-bottom: 16px; /* 各Testコンポーネントの間隔 */
}
</style>
