<template>
  <div class="anomaly-panel">
    <div class="blank"></div>

    <div class="intro-container">

      <div class="intro-picture">

        <div v-if="props.anomalyExistFlg">
          <picture>
            <source :srcset="kadonoWebp" type="image/webp" />
            <img :src="kadonoJpg" alt="kadono" />
          </picture>
        </div>
        <div v-else>
          <picture>
            <source :srcset="kondoWebp" type="image/webp" />
            <img :src="kondoJpg" alt="kondo" />
          </picture>
        </div>

      </div>

      <div class="intro-explanation">
        <p>こんにちは！私は近藤春菜です。</p>
        <p>東京都出身の41歳です。</p>
        <p>ハリセンボンというコンビで、相方は 箕輪はるかです。</p>
      </div>

    </div>

    <div class="image-container">

      <div class="image-picture">
        <div v-if="props.anomalyExistFlg">
          <picture>
            <source :srcset="uniWebp" type="image/webp" />
            <img :src="uniJpg" alt="uni" />
          </picture>
        </div>
        <div v-else>
          <picture>
            <source :srcset="kaniWebp" type="image/webp" />
            <img :src="kaniJpg" alt="kani" />
          </picture>
        </div>
      </div>

      <div class="image-ex">
        <h2>私はかにです！！！！</h2>
      </div>
      
    </div>
    <div class="blank"></div>
  </div>
</template>

<script setup>
import uniJpg from '@/assets/Anomaly/jpg/uni.jpg';
import uniWebp from '@/assets/Anomaly/webp/uni.webp';
import kaniJpg from '@/assets/Anomaly/jpg/kani.jpg';
import kaniWebp from '@/assets/Anomaly/webp/kani.webp';
import kondoJpg from '@/assets/Anomaly/jpg/kondo.jpg';
import kondoWebp from '@/assets/Anomaly/webp/kondo.webp';
import kadonoJpg from '@/assets/Anomaly/jpg/kadono.jpg';
import kadonoWebp from '@/assets/Anomaly/webp/kadono.webp';


const props = defineProps({
  anomalyExistFlg: Boolean
})


</script>

<style scoped>
.blank{
  height: 500px;
}

.anomaly-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #ff0000; */
}

.intro-container {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  justify-content: start;
  height: 1080px;
  width: 100%;
  background: rgb(0, 255, 85);
  /* border-radius: 8px; */
  /* text-align: center; */
}

.intro-picture {
  width: 540px;
  height: 540px;
  padding: 5px;
}

.intro-picture picture {
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 540px;
}

.intro-picture picture source {
  width: 100%;
  height: auto;
}

.intro-picture picture img {
  width: 100%;
  height: auto;
}

.intro-explanation {
  display: flex;
  flex-direction: column;
  align-content: start;
  padding: 5px;
}

.intro-explanation p {
  margin: 5px;
  font-size: 20px;
}

.image-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* justify-content:start; */
  height: 1080px;
  width: 100%;
  background: rgb(0, 255, 85);
}

.image-picture{
  width: 540px;
  height: 540px;
  padding: 5px;
}

.image-picture picture source {
  width: 100%;
  height: auto;
}

.image-picture picture img {
  width: 100%;
  height: auto;
}

/* .intro-container h1 {
  font-size: 24px;
  color: #333;
} */

/* .intro-container p {
  font-size: 16px;
  color: #666;
} */

/* .intro-container ul {
  list-style: none;
  padding: 0;
  margin: 10px 0;
} */

/* .intro-container ul li {
  font-size: 14px;
  color: #444;
  margin-bottom: 5px;
} */

/* picture img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
} */
</style>
