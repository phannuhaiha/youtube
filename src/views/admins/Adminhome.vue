<template>
  <div :class="{'dark': isDarkMode}" class="min-h-screen flex flex-col">
    <!-- Container chính -->
    <div class="flex flex-row flex-grow transition-all duration-300 dark:bg-gray-800">
      <!-- Nav -->
      <div 
        :class="{'w-72': isNavOpen, 'w-16': !isNavOpen}" 
        class="h-full bg-gray-300 dark:bg-gray-900 transition-all duration-300"
      >
        <Nav :isOpen="isNavOpen" :isDarkMode="isDarkMode" class="dark:bg-gray-800" />
      </div>
      <!-- Header và Nội dung -->
      <div :class="{'left-72': isNavOpen, 'left-16': !isNavOpen}" class="flex-row transition-all duration-300">
        <!-- Header -->
        <Header 
          @toggle-menu="toggleNav" 
          @toggle-theme="toggleTheme" 
          :isDarkMode="isDarkMode"
          :isNavOpen="isNavOpen"
        />
        <!-- Nội dung -->
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Header from "@/components/admins/HeaderAD.vue";
import Nav from "@/components/admins/NavAD.vue";

export default {
 name: 'admin-home',
 components: {
   Header,
   Nav,
 },
 data() {
   return {
     isNavOpen: true,  // Trạng thái mở/đóng của menu Nav
     isDarkMode: false, // Trạng thái chế độ sáng/tối
   };
 },
 methods: {
   toggleNav() {
     this.isNavOpen = !this.isNavOpen; // Đảo ngược trạng thái khi nhấn vào nút
   },
   toggleTheme() {
     this.isDarkMode = !this.isDarkMode; // Đổi trạng thái sáng/tối
   },
 },
};
</script>

<style>
/* CSS không thay đổi */
</style>
