<template>
  <div>
    <h1>Home Page</h1>
    
    <div class="form-data-display">
      <h2>表单数据</h2>
      <div v-if="formData">
        <p>姓名: {{ formData.name || '匿名' }}</p>
        <p>邮箱: {{ formData.email || 'xxx@xx.com' }}</p>
        <p>留言: {{ formData.message || 'xxx' }}</p>
      </div>
      <div v-else>
        <p>姓名: 匿名</p>
        <p>邮箱: xxx@xx.com</p>
        <p>留言: xxx</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const formData = ref(null);

onMounted(() => {
  const savedData = localStorage.getItem('formData');
  if (savedData) {
    formData.value = JSON.parse(savedData);
  }
});
</script>

<style scoped>
.form-data-display {
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
}
</style>