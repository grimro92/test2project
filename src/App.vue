<template>
  <!-- <el-container class="app-layout">
    <el-header class="header">
      <h1 class="title">Welcome to My Page</h1>
    </el-header>
    <el-main class="content">
      <IntroCard />
      <SkillChart />
      <Favorites />
      <ContactForm />
    </el-main>
    <el-footer class="footer">
      <p>© 2024 Your Name</p>
    </el-footer>
  </el-container> -->
  <div id="appMain">
    <router-view />
  </div>
</template>

<script setup>
import IntroCard from './components/IntroCard.vue';
import SkillChart from './components/SkillChart.vue';
import Favorites from './components/Favorites.vue';
import ContactForm from './components/ContactForm.vue';
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.header {
  background: linear-gradient(90deg, #7b4397, #dc2430);
  /* color: white; */
  text-align: center;
  /* padding: 16px 0; */
}
.title {
  font-family: 'Comic Sans MS', cursive, sans-serif;
  font-size: 2.5rem;
  margin-block-start: 0; /* 上の余白をリセット */
  margin-block-end: 0;   /* 下の余白をリセット */
}
.content {
  flex: 1;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}
.footer {
  text-align: center;
  background: #001529;
  color: white;
  padding: 8px 0;
}
</style>
