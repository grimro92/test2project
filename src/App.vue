<template>
  <v-app>

    <v-app-bar app height="100" color="#102E5D">
      <v-toolbar-title>
        <v-img class="nav-logo" :src="logoJaJpg" cover position="center"></v-img>
      </v-toolbar-title>
      <div class="d-none d-md-flex">
        <v-btn class="font-style">自己紹介</v-btn>
        <v-btn class="font-style">仕事</v-btn>
        <v-btn class="font-style">趣味</v-btn>
        <v-btn class="font-style">海外について</v-btn>
        <v-btn class="font-style">好きなこと</v-btn>
        <v-btn class="font-style">各種リンク</v-btn>
        <v-btn class="font-style">連絡</v-btn>
      </div>
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary right>
      <v-list>
        <v-list-item @click="drawer = false">自己紹介</v-list-item>
        <v-list-item @click="drawer = false">仕事</v-list-item>
        <v-list-item @click="drawer = false">趣味</v-list-item>
        <v-list-item @click="drawer = false">海外について</v-list-item>
        <v-list-item @click="drawer = false">好きなこと</v-list-item>
        <v-list-item @click="drawer = false">各種リンク</v-list-item>
        <v-list-item @click="drawer = false">連絡</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <div class="position-relative">
        <v-img class="hummus-img" :src="japanJpg" cover position="center" max-height="900px"></v-img>
        <div class="overlay-content pa-3">
          <v-row>
            <v-col>
              <p class="p-main">ようこそ！</p>
              <p class="p-sub">私はゲーム好きのシステムエンジニアです</p>
            </v-col>
          </v-row>
          <v-row class="d-flex align-center justify-center">
            <v-col cols="auto">
              <v-btn variant="flat">自己紹介ページへ</v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn variant="flat">脱出ゲームへ...</v-btn>
            </v-col>
          </v-row>
        </div>
      </div>


      <v-container fluid>
        <v-row>
          <v-col cols="12" md="6">
            <v-row class="d-flex flex-column center-content">
              <v-col class="pb-0">
                <v-img :src="workJpg" cover></v-img>
              </v-col>
              <v-col class="pt-0">
                <div class="bottom-text bgc-red">
                  <p class="p-sub">Webアプリを開発しています</p>
                  <p class="p-main">仕事について</p>
                  <div class="pad-12"></div>
                  <v-btn>仕事について</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="6">
            <v-row class="d-flex flex-column center-content">
              <v-col class="pb-0">
                <v-img :src="mJpg"></v-img>
              </v-col>
              <v-col class="pt-0">
                <div class="bottom-text bgc-blue">
                  <p class="p-sub">ゲーム、映画、読書など...</p>
                  <p class="p-main">趣味について</p>
                  <div class="pad-12"></div>
                  <v-btn>趣味について</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row class="text-center">
          <v-col class="center-content ex-cont" cols="12">
            <div class="content-wrapper">
              <p class="p-main">海外について</p>
              <p class="p-sub">昔から、日本以外の国に興味がありす。海外で何をしたいか、どこへ行きたいかなど。</p>
              <div class="pad-12"></div>
              <v-btn>海外について</v-btn>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4" order="3" order-md="1" class="center-content pt-0 pt-md-3">
            <div class="content-wrapper">
              <p class="p-main">好きなこと</p>
              <p class="p-sub">雪が降る日のコーヒーを飲むクリスマス、憧れのダイナーなど...</p>
              <div class="pad-12"></div>
              <v-btn>好きなことについて</v-btn>
            </div>
          </v-col>

          <v-col cols="6" md="4" order="1" order-md="2" class="pr-0  pb-0 pb-md-3">
            <v-img :src="diner" position="bottom" max-height="400px" class="bg-grey-lighten-2" cover></v-img>
          </v-col>
          <v-col cols="6" md="4" order="2" order-md="3" class="ps-0 pb-0 pb-md-3">
            <v-img :src="christomas" position="center" max-height="400px" class="bg-grey-lighten-2" cover></v-img>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="pb-0 pb-md-3" cols="12" md="8" order="1" order-md="1">
            <v-img :src="connect" position="bottom" max-height="400px" class="bg-grey-lighten-2" cover></v-img>
          </v-col>
          <v-col class="center-content pt-0 pt-md-3" cols="12" md="4" order="2" order-md="2">
            <div class="content-wrapper">
              <p class="p-main">各種リンク先</p>
              <p class="p-sub">X、GitHub、Zenn</p>
              <div class="pad-12"></div>
              <v-btn>リンク先</v-btn>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="center-content pt-0 pt-md-3" cols="12" md="4" order="2" order-md="1">
            <div class="content-wrapper">
              <p class="p-main">連絡先</p>
              <p class="p-sub">もし私に少しでも興味がわいたら、以下から連絡してください。</p>
              <div class="pad-12"></div>
              <v-btn>連絡する</v-btn>
            </div>
          </v-col>
          <v-col class="pb-0 pb-md-3" cols="12" md="8" order="1" order-md="2">
            <v-img :src="mailJpg" max-height="400px" class="bg-grey-lighten-2" cover></v-img>
          </v-col>
        </v-row>

      </v-container>


    </v-main>

    <v-footer class="text-center d-flex flex-column">
      <v-btn> ^ トップに戻る </v-btn>
      <div class="pad-12"></div>
      <div class="pt-0">2025 Takato Aihara / 無断転載を禁じます</div>
    </v-footer>


    <!-- <StageSet /> -->
  </v-app>

</template>

<script setup lang="ts">
import { ref } from "vue";
import StageSet from "@/components/Anomaly/StageSet.vue";
import logoJaJpg from "@/assets/Anomaly/jpg/logo_ja.png";
import hummusJpg from "@/assets/Anomaly/jpg/Hummus_2500x1660.jpg";
import img0439Jpg from "@/assets/Anomaly/jpg/IMG_0439.jpg";
import img0443Jpg from "@/assets/Anomaly/jpg/IMG_0443.jpg";
import japanJpg from "@/assets/Anomaly/jpg/japan.jpg";
import deskJpg from "@/assets/Anomaly/jpg/desk_3.jpg";
import workJpg from "@/assets/Anomaly/jpg/work.jpg";
import melanieJpg from "@/assets/Anomaly/jpg/Melanie.jpg";
import chickenJpg from "@/assets/Anomaly/jpg/Chicken+Picatta+Catering.jpg";
import mJpg from "@/assets/Anomaly/jpg/25402141_m.jpg";
import christomas from "@/assets/Anomaly/jpg/pexels-brett-sayles-1708601.jpg";
import diner from "@/assets/Anomaly/jpg/diner.jpg";
import ypeJpg from "@/assets/Anomaly/jpg/Ype+Counter.jpg";
import car from "@/assets/Anomaly/jpg/car_2.jpg";
import connect from "@/assets/Anomaly/jpg/connect.jpg";
import hospitalityJpg from "@/assets/Anomaly/jpg/Hospitality_2500x1660.jpg";
import jukeboxJpg from "@/assets/Anomaly/jpg/Jukebox.jpg";
import mailJpg from "@/assets/Anomaly/jpg/mail.jpg";

const drawer = ref(false);


</script>

<style scoped>
.nav-logo {
  height: 100px;
  width: 200px;
}

.font-style {
  font-size: 19px;
  font-family: brandon-grotesque;
  font-weight: 700;
}

.p-main {
  font-size: 38px;
  font-family: brandon-grotesque;
  font-weight: 700;
}

.p-sub {
  font-size: 24px;
  font-family: brandon-grotesque;
  font-weight: 400;
}

.position-relative {
  position: relative;
  /* 子要素の absolute を有効にする */
}

.overlay-content {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  height: 100%;
  width: 100%;
}

.hummus-img {
  filter: brightness(80%);
}

.bottom-text {
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bgc-red {
  /* background-color: #D41C1F; */
  background-color: #FAF8F6;
}

.bgc-blue {
  /* background-color: #158B99; */
  background-color: #FAF8F6;
}

.center-content {
  display: flex;
  /* フレックスボックス適用 */
  flex-direction: column;
  /* 縦方向に並べる */
  align-items: center;
  /* 横方向の中央揃え */
  justify-content: center;
  /* 縦方向の中央揃え */
  text-align: center;
}

.content-wrapper {
  display: flex;
  /* フレックスボックス適用 */
  flex-direction: column;
  /* 縦方向に並べる */
  align-items: center;
  /* 横方向の中央揃え */
  justify-content: center;
  /* 縦方向の中央揃え */
  text-align: center;
  background-color: #FAF8F6;
  height: 100%;
  width: 100%;
  padding: 12px;
}

.pad-12 {
  padding: 12px;
}



/* .sub-nav{
  height: 60px;
}

.main-nav{
  height:120px;
} */
</style>
