<template>
    <div class="test">
      <h1>TEST {{ number }}</h1>
    </div>
  </template>
  
  <script setup>
  defineProps({
    number: {
      type: Number,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .test {
    height: 1500px; /* 高さを1500pxに設定 */
    border: 1px solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
  }
  </style>
  