<template>
    <v-container class="main-container">
    <v-card class="info-card">
      <v-card-title>自己紹介</v-card-title>
      <v-card-text>
        <p>こんにちは！システムエンジニアの<strong>〇〇</strong>です。</p>
        <ul>
          <li>得意言語: TypeScript, JavaScript, Python</li>
          <li>趣味: レトロゲーム、猫と遊ぶ</li>
        </ul>
      </v-card-text>
    </v-card>
  </v-container>
  
  <v-container fluid class="anomaly-panel">
    <!-- 上部の余白 -->
    <v-spacer class="blank" />

    <!-- セクション1: プロフィール -->
    <v-card class="mb-4">
      <v-card-title>自己紹介</v-card-title>
      <v-card-text>
        <p>こんにちは！私はシステムエンジニアです。</p>
        <ul>
          <li>得意な言語: TypeScript, JavaScript, Python</li>
          <li>趣味: プログラミング、猫と遊ぶ</li>
        </ul>
        <div class="image-gallery">
          <v-img :src="kadonoJpg" alt="プロフィール関連画像" class="mr-2"></v-img>
        </div>
      </v-card-text>
    </v-card>

    <!-- プロフィールセクション -->
    <v-container class="intro-container" fluid>
      <v-row align="center" justify="space-evenly">
        <!-- プロフィール画像 -->
        <v-col cols="12" md="4">
          <div class="intro-picture">
            <picture v-if="props.anomalyExistFlg">
              <source :srcset="kadonoWebp" type="image/webp" />
              <img :src="kadonoJpg" alt="kadono" />
            </picture>
            <picture v-else>
              <source :srcset="kondoWebp" type="image/webp" />
              <img :src="kondoJpg" alt="kondo" />
            </picture>
          </div>
        </v-col>

        <!-- プロフィール説明 -->
        <v-col cols="12" md="6">
          <div class="intro-explanation">
            <p>こんにちは！私は近藤春菜です。</p>
            <p>東京都出身の41歳です。</p>
            <p>ハリセンボンというコンビで、相方は 箕輪はるかです。</p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- イメージセクション -->
    <v-container class="image-container" fluid>
      <v-row align="center" justify="center">

        <!-- イメージ説明 -->
        <v-col cols="12" md="6">
          <div class="image-ex">
            <h2>私はかにです！！！！</h2>
          </div>
        </v-col>

        <!-- イメージ画像 -->
        <v-col cols="12" md="4">
          <div class="image-picture">
            <picture v-if="props.anomalyExistFlg">
              <source :srcset="uniWebp" type="image/webp" />
              <img :src="uniJpg" alt="uni" />
            </picture>
            <picture v-else>
              <source :srcset="kaniWebp" type="image/webp" />
              <img :src="kaniJpg" alt="kani" />
            </picture>
          </div>
        </v-col>

      </v-row>
    </v-container>

    <!-- 下部の余白 -->
    <v-spacer class="blank" />
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDisplay } from "vuetify"; // Vuetifyのブレークポイント取得

// 画像ファイルのインポート
import uniJpg from "@/assets/Anomaly/jpg/uni.jpg";
import uniWebp from "@/assets/Anomaly/webp/uni.webp";
import kaniJpg from "@/assets/Anomaly/jpg/kani.jpg";
import kaniWebp from "@/assets/Anomaly/webp/kani.webp";
import kondoJpg from "@/assets/Anomaly/jpg/kondo.jpg";
import kondoWebp from "@/assets/Anomaly/webp/kondo.webp";
import kadonoJpg from "@/assets/Anomaly/jpg/kadono.jpg";
import kadonoWebp from "@/assets/Anomaly/webp/kadono.webp";

const props = defineProps({
  anomalyExistFlg: Boolean,
});

const { width } = useDisplay(); // 画面幅を取得
// 画面サイズに応じて `max-width` を動的に変更
const cardMaxWidth = computed(() => {
  if (width.value < 600) return "100%";  // スマホ
  if (width.value < 960) return "80%";   // タブレット
  if (width.value < 1280) return "600px"; // 小さめのPC
  return "800px"; // 大きめのPC
});
</script>

<style scoped>
.anomaly-panel {
  background-color: #f4f4f4;
  max-width: v-bind(cardMaxWidth); /* 動的に変更 */
  width: 100%;
}

/* 全体レイアウト */
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* 自己紹介カード */
.info-card {
  max-width: v-bind(cardMaxWidth); /* 動的に変更 */
  width: 100%;
  background-color: #cccccc;
  padding: 20px;
  border-radius: 8px;
}

.blank {
  height: 50px;
}

.intro-container,
.image-container {
  padding: 20px;
  background-color: #e8f5e9;
  border-radius: 8px;
  margin-bottom: 20px;
}

.intro-picture img,
.image-picture img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
}

.intro-explanation,
.image-ex {
  text-align: center;
  font-size: 1.2rem;
}
</style>
