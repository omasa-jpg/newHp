import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue'; // コンポーネント名を変更
import CompanyProfile from '@/components/CompanyProfile.vue'; // コンポーネント名を変更

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/profile',
    name: 'CompanyProfile',
    component: CompanyProfile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
