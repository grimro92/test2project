<template>
    <div class="test">
      <h1>TEST {{ number }}</h1>
      <div class="middle-marker">Middle</div>
      <div class="bottom-marker">Bottom</div>
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
    height: 3000px;
    border: 1px solid #ddd;
    display: block;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
    position: relative;
  }
  
  .test h1 {
    margin: 0;
    padding: 16px;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .middle-marker, .bottom-marker {
    position: absolute;
    font-size: 18px;
    font-weight: bold;
    color: red;
  }
  
  .middle-marker {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .bottom-marker {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  </style>
  