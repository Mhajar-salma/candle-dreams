import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ProjectsPage from '@/views/ProjectsPage.vue';
import AboutPage from '@/views/AboutPage.vue';
import ContactsPage from '@/views/ContactsPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/projects', component: ProjectsPage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


