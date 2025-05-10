<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const submittedData = ref(null);

const submitForm = () => {
  submittedData.value = {...formData.value};
  localStorage.setItem('formData', JSON.stringify(submittedData.value));
  formData.value = { name: '', email: '', message: '' };
};
</script>

<template>
  <div class="form-generator">
    <h1>表单生成</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label>姓名</label>
        <input v-model="formData.name" type="text" />
      </div>
      <div class="form-group">
        <label>邮箱</label>
        <input v-model="formData.email" type="email" />
      </div>
      <div class="form-group">
        <label>留言</label>
        <textarea v-model="formData.message"></textarea>
      </div>
      <button type="submit">提交</button>
    </form>
    
    <div v-if="submittedData" class="submitted-data">
      <h2>提交的数据:</h2>
      <pre>{{ submittedData }}</pre>
    </div>
  </div>
</template>

<style scoped>
.form-generator {
  padding: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submitted-data {
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
}
</style>