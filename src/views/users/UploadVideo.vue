<template>
    <div :class="{'dark': isDarkMode}" class="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <!-- Header -->
      <Header 
        @toggle-theme="toggleTheme" 
        :isDarkMode="isDarkMode" 
      />
       
      <!-- Nội dung chính -->
      <div class="flex flex-grow mt-24">
        <!-- Cột menu bên trái -->
        <div class="w-1/5 bg-gray-200 dark:bg-customLight p-4 h-auto">
               <ul class="space-y-4 text-gray-700 dark:text-gray-200">
            <li>
        <div class="flex justify-center">
             <i class='bx bx-user-circle text-black text-9xl'></i>
        </div>
        <div class="text-center">
            <h1 class="text-2xl text-black font-bold">Kênh của Bạn</h1>
            <h1 class="text-xl text-gray-900">Tên của bạn</h1>
        </div>
           </li>
            
            <li>
              <router-link 
                to="/dashboard" 
                class="block py-2 px-4 rounded hover:bg-gray-500 dark:hover:bg-gray-900 transition">
                Dashboard
              </router-link>
            </li>
            <li>
              <router-link 
                to="/profile" 
                class="block py-2 px-4 rounded hover:bg-gray-500 dark:hover:bg-gray-900 transition">
                Profile
              </router-link>
            </li>
            <li>
              <router-link 
                to="/settings" 
                class="block py-2 px-4 rounded hover:bg-gray-500 dark:hover:bg-gray-900 transition">
                Settings
              </router-link>
            </li>
          </ul>
        </div>
  
        <!-- Cột nội dung bên phải -->
        <div class="flex flex-col w-4/5 p-3 h-full space-y-3">
           <!-- Khu vực upload file -->
    <div class="flex items-center justify-center h-[50%]">
      <div class="max-w-lg w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <!-- Upload Box -->
        <div class="border-dashed border-2 border-blue-500 rounded-lg h-48 flex flex-col items-center justify-center relative">
          <!-- Icon và mô tả -->
          <div class="absolute top-4 left-4 text-sm">
            <i class="fa fa-folder-open fa-2x text-blue-500"></i>
            <p class="mt-1 text-gray-600 dark:text-gray-300">Chọn Video Bạn Muốn Đăng</p>
          </div>

          <!-- Thanh nhập liệu -->
          <input 
            type="text" 
            v-model="uploadedFileName" 
            placeholder="Tên file upload sẽ hiển thị tại đây..." 
            class="absolute top-20 left-4 right-4 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded p-2 w-11/12"
            readonly
          />

          <!-- Input file -->
          <input 
            type="file" 
            @change="handleFileUpload" 
            class="h-full w-full opacity-0 cursor-pointer" 
          />
        </div>

        <!-- Các nút option -->
         <p>Vui lòng chọn chất lượng hình ảnh</p>
        <div class="flex space-x-4 mt-4">
                <!-- Checkbox 1 -->
                <label class="custom-checkbox">
                  <input type="checkbox" class="hidden" />
                  <span class="box"></span>
                  114p
                </label>

                <!-- Checkbox 2 -->
                <label class="custom-checkbox">
                  <input type="checkbox" class="hidden" />
                  <span class="box"></span>
                  240p
                </label>

                <!-- Checkbox 3 -->
                <label class="custom-checkbox">
                  <input type="checkbox" class="hidden" />
                  <span class="box"></span>
                  360p
                </label>

                <!-- Checkbox 4 -->
                <label class="custom-checkbox">
                  <input type="checkbox" class="hidden" />
                  <span class="box"></span>
                  1080p
                </label>
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">UpVideo</button>
         </div>


      </div>
    </div>
    <!-- Hiển thị danh sách file đã upload -->
    <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
      <h2 class="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Danh sách file đã upload</h2>
      <ul class="list-disc list-inside text-gray-600 dark:text-gray-300">
        <li v-for="(file, index) in uploadedFiles" :key="index" class="mb-1">
          {{ file.name }}
        </li>
      </ul>
    </div>

   
  </div>
      </div>
    </div>
  </template>
<script>
import Header from '@/components/users/Header.vue';

export default {
  name: 'UploadPage',
  components: {
    Header,
  },
  data() {
    return {
      isDarkMode: false, // Trạng thái chế độ sáng/tối
      uploadedFiles: [], // Danh sách file đã upload
      uploadedFileName: '', // Tên file hiển thị trong thanh nhập liệu
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // Lưu tên file vào danh sách
        this.uploadedFiles.push(file);
        // Hiển thị tên file
        this.uploadedFileName = file.name;
      }
    },
    
  },
};
</script>
<style scoped>
/* Đảm bảo hiệu ứng mượt cho các chuyển đổi */
.transition {
  transition: all 0.3s ease-in-out;
}

button:hover {
  transform: translateY(-2px);
}
.custom-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
}

.custom-checkbox .box {
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  border-radius: 4px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s, border-color 0.2s;
}

.custom-checkbox input:checked + .box {
  background-color: #3b82f6; /* Màu xanh khi tick */
  border-color: #2563eb; /* Màu viền khi tick */
}

.custom-checkbox input:checked + .box::after {
  content: "✓";
  color: white;
  font-size: 16px;
}

.custom-checkbox input:focus + .box {
  border-color: #2563eb; /* Màu viền khi focus */
}


/* Dark mode styles (sử dụng tailwind) */
</style>
  