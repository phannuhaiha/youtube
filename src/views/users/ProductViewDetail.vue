<template>
    <div :class="{'dark': isDarkMode}" class="min-h-screen flex flex-col">
      <!-- Header -->
      <Header 
        @toggle-menu="toggleNav" 
        @toggle-theme="toggleTheme" 
        :isDarkMode="isDarkMode" 
      />
  
      <!-- Nội dung chính: Flex Row để căn Nav và RouterView cạnh nhau -->
      <div class="flex flex-row flex-grow transition-all duration-300">
        <!-- Menu Drawer (Nav) -->
        <div 
          :class="{'w-40': isNavOpen, 'w-16': !isNavOpen}" 
          class="h-full bg-gray-300 dark:bg-gray-800 transition-all duration-300"
        >
          <Nav :isOpen="isNavOpen" :isDarkMode="isDarkMode" />
        </div>
        
        <!-- Nội dung chính (được render thông qua RouterView) -->
        <div 
          class="flex-grow bg-white dark:bg-customLight p-4 transition-all duration-300"
        >
          <RouterView :isNavOpen="isNavOpen" :isDarkMode="isDarkMode" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { RouterView } from 'vue-router';
  import Header from '@/components/users/Header.vue';
  import Nav from '@/components/users/Nav.vue';
  
  export default {
    name: 'detail',
    components: {
      Header,
      Nav,
    },
    data() {
      return {
        isNavOpen: false,  // Trạng thái mở/đóng của menu Nav
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
  
  <style scoped>
  /* Header */
  header {
    background-color: #f8f8f8;
  }
  
  /* Nav */
  nav {
    height: 100%; /* Đảm bảo Nav chiếm toàn bộ chiều cao */
  }
  
  /* Flexbox */
  .flex {
    display: flex;
  }
  
  .flex-row {
    flex-direction: row;
  }
  
  .flex-col {
    flex-direction: column;
  }
  
  /* Transition để tạo hiệu ứng mượt mà */
  .transition-all {
    transition: all 0.3s ease-in-out;
  }
  
  /* Đặt chiều rộng cho Nav khi mở và đóng */
  .w-64 {
    width: 16rem; /* Nav mở rộng */
  }
  
  .w-20 {
    width: 5rem; /* Nav thu gọn */
  }
  </style>
  