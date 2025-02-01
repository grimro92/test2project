<template>
  <v-app>
    <v-app-bar app dense color="primary">
      <v-toolbar-title>Sub Navbar</v-toolbar-title>
      <v-btn>Home</v-btn>
      <v-btn>Features</v-btn>
      <v-btn>About</v-btn>
    </v-app-bar>

    <v-main>
      <div class="position-relative">
        <v-img class="hummus-img" :src="hummusJpg" cover position="bottom" max-height="900px"></v-img>
        <div class="overlay-content">
          <h1>OVER 20 HEALTHIER FLEXITARIAN ENTRÉES</h1>
          <p>YOUR TASTE BUDS WILL THINK IT’S A CHEAT DAY</p>
          <div class="pad-12"></div>
          <v-btn>FLEXITARIAN OPTIONS</v-btn>
        </div>
      </div>


      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-row class="d-flex flex-column center-content">
              <v-col class="pb-0">
                <v-img :src="melanieJpg"></v-img>
              </v-col>
              <v-col class="pt-0">
                <div class="bottom-text">
                  <p>SHARE YOUR SILVER DINER STORY CONTEST</p>
                  <h1>GRAND PRIZE WINNER, MELANIE</h1>
                  <div class="pad-12"></div>
                  <v-btn>SEE ALL THE WINNERS</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="6">
            <v-row class="d-flex flex-column center-content">
              <v-col class="pb-0">
                <v-img :src="chickenJpg"></v-img>
              </v-col>
              <v-col class="pt-0">
                <div class="bottom-text">
                  <p>SHOW OFF YOUR GOOD TASTE</p>
                  <h1>SILVER DINER CATERING</h1>
                  <div class="pad-12"></div>
                  <v-btn>ORDER TODAY</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row class="text-center">
          <v-col class="center-content ex-cont" cols="12">
            <div class="content-wrapper">
              <h1>THE NEXT GENERATION DINER</h1>
              <p>Silver Diner was founded on the idea of creating a neighborhood gathering place serving updated
                American Classics with Authentic Diner</p>
              <p>Hospitality. Over the last 35 years, Silver Diner has grown and evolved our original vision to an
                award-winning, chef-driven restaurant serving</p>
              <p>food reflecting today’s lifestyles; all without losing what makes a diner special – our friendly
                hospitality. Welcome to Silver Diner.</p>
              <div class="pad-12"></div>
              <v-btn>OUR STORY</v-btn>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4" order="2" order-md="1" class="center-content">
            <div class="content-wrapper">
              <h1>A FRESH TAKE ON AN AMERICAN CLASSIC</h1>
              <p>Co-founder and Executive Chef, Ype Von Hengst, has created a menu featuring classic American favorites
                with a contemporary twist for today’s lifestyles.</p>
              <div class="pad-12"></div>
              <v-btn>FOOD PHILOSOPHY</v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="8" order="1" order-md="2">
            <v-img :src="ypeJpg" max-height="400px" class="bg-grey-lighten-2" cover></v-img>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="8" order="1" order-md="1">
            <v-img :src="hospitalityJpg" max-height="400px" class="bg-grey-lighten-2" cover></v-img>
          </v-col>
          <v-col class="center-content" cols="12" md="4" order="2" order-md="2">
            <div class="content-wrapper">
              <h1>A HOME AWAY FROM HOME</h1>
              <p>“Silver Diner is venue for friendships and a place where, settled in a perfect booth, we all belong” –
                Silver Diner Fan for 25 years</p>
              <div class="pad-12"></div>
              <v-btn>Community Gathering Place</v-btn>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="center-content" cols="12" md="4" order="2" order-md="1">
            <div class="content-wrapper">
              <h1>“FOOD THAT’S CLEVERLY CONCEIVED”</h1>
              <p>– Wall Street Journal</p>
              <p>See why all of the media is buzzing about Silver Diner.</p>
              <div class="pad-12"></div>
              <v-btn>Learn more</v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="8" order="1" order-md="2">
            <v-img :src="jukeboxJpg" max-height="400px" class="bg-grey-lighten-2" cover></v-img>
          </v-col>
        </v-row>

      </v-container>


    </v-main>

    <v-footer class="text-center d-flex flex-column">
      <v-btn> ^ Back to Top </v-btn>
      <div class="pad-12"></div>
      <div class="pt-0">© 2024 Silver Diner Development, LLC / All Rights Reserved</div>
    </v-footer>


    <!-- <StageSet /> -->
  </v-app>
</template>

<script setup lang="ts">
import StageSet from "@/components/Anomaly/StageSet.vue";
import hummusJpg from "@/assets/Anomaly/jpg/Hummus_2500x1660.jpg";
import melanieJpg from "@/assets/Anomaly/jpg/Melanie.jpg";
import chickenJpg from "@/assets/Anomaly/jpg/Chicken+Picatta+Catering.jpg";
import ypeJpg from "@/assets/Anomaly/jpg/Ype+Counter.jpg";
import hospitalityJpg from "@/assets/Anomaly/jpg/Hospitality_2500x1660.jpg";
import jukeboxJpg from "@/assets/Anomaly/jpg/Jukebox.jpg";


</script>

<style scoped>
.position-relative {
  position: relative;
  /* 子要素の absolute を有効にする */
}

.overlay-content {
  position: absolute;
  bottom: 20px;
  /* 下からの距離 */
  left: 50%;
  transform: translateX(-50%);
  /* 中央寄せ */
  text-align: center;
  /* テキストを中央揃え */
}

.hummus-img {
  filter: brightness(80%);
}

.bottom-text {
  background-color: red;
  height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  background-color: gray;
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
