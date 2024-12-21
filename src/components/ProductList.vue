<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ${{ product.price }}
      </li>
    </ul>
    <p v-if="error" style="color: red;">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

const products = ref([]);
const error = ref("");

const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5019/api/Product");
    products.value = response.data;
  } catch (err) {
    error.value = "Failed to fetch products: " + err.message;
  }
};

onMounted(fetchProducts);
</script>

<style scoped>
h1 {
  font-family: Arial, sans-serif;
  color: #333;
}
</style>
