<template>
  <div class="background">
    <h1 class="bg-auto text-3xl font-bold font-roboto text-black dark:text-white">KÊNH ĐĂNG KÍ</h1>
    
    <!-- Nội dung chính -->
    <div class="flex flex-col bg-auto m-5 dark:bg-customLight rounded-lg">
      <!-- AVT + Tên Kênh -->
      <div class="flex justify-between text-black dark:text-white">
        <button class="flex flex-row">
          <div class="flex w-10 h-10 rounded-full items-center mr-2 bg-gray-400"></div>
          <!-- tên kênh -->
          <div class="text-lg font-roboto font-medium">hihi</div>
        </button>
        <button class="rounded-full border border-gray-300">
          <span class="text-sm p-2 font-roboto"> Xem tất cả </span>
        </button>
      </div>

      <!-- Video chính -->
      <div class="flex flex-row items-center w-full min-h-full bg-gray-200 dark:bg-customLight rounded-xl mt-2 space-x-2 overflow-x-auto">
        <!-- Video List -->
        <div class="grid grid-cols-4 gap-4">
          <video-card
            v-for="(video, index) in videos"
            :key="index"
            :video="video"
          />
        </div>
        
        <!-- Nút chuyển slide -->
        <button
          class="w-10 h-10 ml-auto flex-shrink-0 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800"
          @click="nextSlide"
        >
          <i class="bx bx-chevron-right text-2xl"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VideoCard from '@/components/users/Videocard.vue'; // Import video card component

export default {
  name: "Subscription",
  components: {
    VideoCard, // Register the component
  },
  data() {
    return {
      videos: [
        { src: "video1.mp4", title: "Video 1", channel: "Kênh 1", views: "10K" },
        { src: "video2.mp4", title: "Video 2", channel: "Kênh 2", views: "20K" },
        { src: "video3.mp4", title: "Video 3", channel: "Kênh 3", views: "15K" },
        { src: "video4.mp4", title: "Video 4", channel: "Kênh 4", views: "30K" },
        { src: "video5.mp4", title: "Video 5", channel: "Kênh 5", views: "5K" },
        { src: "video6.mp4", title: "Video 6", channel: "Kênh 6", views: "8K" },
      ],
      currentIndex: 0,
    };
  },
  computed: {
    maxIndex() {
      return Math.max(this.videos.length - 3, 0);
    },
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.maxIndex) {
        this.currentIndex += 1;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
    },
  },
};
</script>

<style>
.background {
  margin: 1.25rem;
  background-color: #ffffff;
}
.dark .background {
  background-color: #111827;
}
</style>
