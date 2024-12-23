import { createRouter, createWebHistory } from 'vue-router'
import users from './users';
import admins from './admins';

const routes= [...users, ...admins];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
