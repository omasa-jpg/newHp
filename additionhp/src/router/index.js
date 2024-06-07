import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue'; // コンポーネント名を変更
import CompanyProfile from '@/components/CompanyProfile.vue'; // コンポーネント名を変更
import ServicePage from '@/components/ServicePage.vue'; // コンポーネント名を変更
import PrPage from '@/components/PrPage.vue'; // コンポーネント名を変更

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
  {
    path: '/service',
    name: 'ServicePage',
    component: ServicePage,
  },
  {
    path: '/pr',
    name: 'PrPage',
    component: PrPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
