<template>
  <v-container fluid class="anomaly-panel">
    <!-- 上部の余白 -->
    <v-spacer class="blank" />

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
import { ref } from "vue";

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
</script>

<style scoped>
.anomaly-panel {
  background-color: #f4f4f4;
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
