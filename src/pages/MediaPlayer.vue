<script setup>
import { ref } from 'vue';

const videoUrl = ref('');
const videoRef = ref(null);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file && file.type.includes('video/mp4')) {
    videoUrl.value = URL.createObjectURL(file);
    if (videoRef.value) {
      videoRef.value.load();
    }
  }
};
</script>

<template>
  <div class="media-player">
    <h1>媒体播放器</h1>
    <input 
      type="file" 
      accept="video/mp4" 
      @change="handleFileChange"
    />
    <div v-if="videoUrl" class="video-container">
      <video ref="videoRef" controls>
        <source :src="videoUrl" type="video/mp4">
        您的浏览器不支持视频播放。
      </video>
    </div>
    <div v-else class="no-video">
      请选择MP4文件进行播放
    </div>
  </div>
</template>

<style scoped>
.media-player {
  padding: 2rem;
}

input[type="file"] {
  margin-bottom: 1rem;
}

.video-container {
  margin-top: 1rem;
}

video {
  max-width: 100%;
  max-height: 400px;
}

.no-video {
  margin-top: 1rem;
  color: #6c757d;
}
</style>