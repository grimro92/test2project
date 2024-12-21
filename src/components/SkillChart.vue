<template>
  <el-card class="skill-chart-card">
    <h2>My Skills</h2>
    <el-progress v-for="(skill, index) in skills" :key="index" :percentage="skill.percentage" :text-inside="true">
      <template #label>
        {{ skill.name }}
      </template>
    </el-progress>
  </el-card>
</template>

<script setup>
const skills = [
  { name: 'JavaScript', percentage: 90 },
  { name: 'Vue.js', percentage: 85 },
  { name: 'TypeScript', percentage: 80 },
  { name: 'CSS', percentage: 75 },
];
</script>

<style scoped>
/* .skill-chart-card {
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.skill-chart-card h2 {
  font-size: 1.5rem;
  margin-bottom: 16px;
} */
</style>
