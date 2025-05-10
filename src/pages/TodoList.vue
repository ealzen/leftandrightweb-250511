<script setup>
import { ref, onMounted } from 'vue';

const newTodo = ref('');
const todos = ref([]);

const addTodo = () => {
  if (!newTodo.value.trim()) return;
  
  todos.value.unshift({
    id: Date.now(),
    text: newTodo.value.trim(),
    completed: false
  });
  
  saveTodos();
  newTodo.value = '';
};

const toggleTodo = (id) => {
  const todo = todos.value.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
  }
};

const deleteTodo = (id) => {
  todos.value = todos.value.filter(t => t.id !== id);
  saveTodos();
};

const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos.value));
};

onMounted(() => {
  const savedTodos = localStorage.getItem('todos');
  if (savedTodos) {
    todos.value = JSON.parse(savedTodos);
  }
});
</script>

<template>
  <div class="todo-list">
    <h1>待办事项</h1>
    <div class="todo-form">
      <input 
        v-model="newTodo" 
        @keyup.enter="addTodo"
        placeholder="添加新待办事项"
      />
      <button @click="addTodo">添加</button>
    </div>
    <ul class="todo-items">
      <li 
        v-for="todo in todos" 
        :key="todo.id"
        :class="{ completed: todo.completed }"
      >
        <input 
          type="checkbox" 
          :checked="todo.completed"
          @change="toggleTodo(todo.id)"
        />
        <span>{{ todo.text }}</span>
        <button @click="deleteTodo(todo.id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo-list {
  padding: 2rem;
}

.todo-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.todo-form input {
  flex: 1;
  padding: 0.5rem;
}

.todo-form button {
  padding: 0.5rem 1rem;
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.todo-items {
  list-style: none;
  padding: 0;
}

.todo-items li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
}

.todo-items li.completed span {
  text-decoration: line-through;
  color: #6c757d;
}

.todo-items li button {
  margin-left: auto;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
}
</style>