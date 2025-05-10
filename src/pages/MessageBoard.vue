<script setup>
import { ref, onMounted } from 'vue';

const nickname = ref('');
const message = ref('');
const messages = ref([]);

const saveMessage = () => {
  if (!nickname.value || !message.value) return;
  
  const newMessage = {
    nickname: nickname.value,
    message: message.value,
    time: new Date().toLocaleString()
  };
  
  messages.value.unshift(newMessage);
  localStorage.setItem('messages', JSON.stringify(messages.value));
  
  nickname.value = '';
  message.value = '';
};

onMounted(() => {
  const savedMessages = localStorage.getItem('messages');
  if (savedMessages) {
    messages.value = JSON.parse(savedMessages);
  }
});
</script>

<template>
  <div class="message-board">
    <h1>留言板</h1>
    <div class="message-form">
      <input v-model="nickname" placeholder="昵称" />
      <textarea v-model="message" placeholder="留言内容"></textarea>
      <button @click="saveMessage">提交留言</button>
    </div>
    <div class="message-list">
      <div v-for="(msg, index) in messages" :key="index" class="message-item">
        <div class="message-header">
          <span class="nickname">{{ msg.nickname }}</span>
          <span class="time">{{ msg.time }}</span>
        </div>
        <div class="message-content">{{ msg.message }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.message-board {
  padding: 2rem;
}

.message-form {
  margin-bottom: 2rem;
}

.message-form input,
.message-form textarea {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
}

.message-form textarea {
  height: 100px;
}

.message-form button {
  padding: 0.5rem 1rem;
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.message-list {
  border-top: 1px solid #eee;
  padding-top: 1rem;
}

.message-item {
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
}

.message-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.nickname {
  font-weight: bold;
}

.time {
  color: #6c757d;
  font-size: 0.8rem;
}
</style>