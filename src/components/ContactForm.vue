<template>
  <el-card class="contact-form-card">
    <h2>Contact Me</h2>
    <el-form :model="form" :rules="rules" ref="formRef" label-position="top">
      <el-form-item label="Name" prop="name">
        <el-input v-model="form.name" placeholder="Enter your name"></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="form.email" placeholder="Enter your email"></el-input>
      </el-form-item>
      <el-form-item label="Message" prop="message">
        <el-input type="textarea" v-model="form.message" placeholder="Write your message"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">Submit</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';

const form = reactive({
  name: '',
  email: '',
  message: '',
});

const rules = {
  name: [{ required: true, message: 'Please enter your name', trigger: 'blur' }],
  email: [{ required: true, message: 'Please enter your email', trigger: 'blur' }],
  message: [{ required: true, message: 'Please write your message', trigger: 'blur' }],
};

const formRef = ref(null);

const submitForm = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      ElMessage.success('Your message has been sent!');
      Object.keys(form).forEach((key) => (form[key] = ''));
    } else {
      ElMessage.error('Please fill out the form correctly.');
    }
  });
};
</script>

<style scoped>
/* .contact-form-card {
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.contact-form-card h2 {
  font-size: 1.5rem;
  margin-bottom: 16px;
} */
</style>
