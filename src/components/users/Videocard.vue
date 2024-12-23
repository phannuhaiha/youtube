<template>
    <button
      class="flex flex-col bg-auto rounded-xl text-black"
      style="width: 100%">
      <!-- Video Container -->
      <div class="video rounded-xl">
        <video
          :src="video.src"
          controls
          ref="videoElement"
          class="video rounded-xl">
        </video>
      </div>
      <!-- Tiêu đề và thông tin -->
      <div class="flex flex-row justify-between w-full mt-2">
        <div class="flex flex-row">
          <!-- Avatar -->
          <div class="flex w-7 h-7 rounded-full items-center ml-1 bg-gray-400"></div>
          <!-- Tiêu đề -->
          <div class="flex flex-col justify-left text-left text-sm font-roboto ml-3 text-black dark:text-white">
            <h1 class="text-sm font-roboto font-bold">{{ video.title }}</h1>
            <h2>{{ video.channel }}</h2>
            <h2>{{ video.views }} lượt xem</h2>
          </div>
        </div>
        <!-- Menu dấu ba chấm -->
        <button class="flex flex-col m-2 space-y-1">
          <div class="w-1 h-1 bg-black dark:bg-white rounded-full"></div>
          <div class="w-1 h-1 bg-black dark:bg-white rounded-full"></div>
          <div class="w-1 h-1 bg-black dark:bg-white rounded-full"></div>
        </button>
      </div>
    </button>
  </template>
  
  <script>
  export default {
    name: "VideoCard",
    props: {
      video: Object, // Nhận đối tượng video từ parent component
    },
  };
  </script>
  
  <style scoped>
  .video {
    aspect-ratio: 16 / 9; /* Đảm bảo tỷ lệ video */
  }
  </style>
  