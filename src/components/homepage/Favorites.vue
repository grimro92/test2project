<template>
  <el-card class="favorite-card">
    <h2>My Favorites</h2>
    <ul>
      <li v-for="item in favorites" :key="item">{{ item }}</li>
    </ul>
  </el-card>
</template>

<script setup>
const favorites = ['Pizza', 'Coding', 'Movies', 'Traveling'];
</script>

<style scoped>
/* .favorite-card {
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.favorite-card h2 {
  font-size: 1.5rem;
  margin-bottom: 16px;
}
.favorite-card ul {
  list-style: none;
  padding: 0;
}
.favorite-card li {
  margin: 8px 0;
  font-size: 1rem;
} */
</style>
