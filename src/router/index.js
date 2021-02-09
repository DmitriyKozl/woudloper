import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/home';
import WieZijnWe from '@/views/wie-zijn-we';
import Nieuws from '@/views/nieuws';
import Contact from '@/views/contact';
import Agenda from '@/views/agenda';
import Praktisch from '@/views/praktisch';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/wie-zijn-we',
    name: 'WieZijnWe',
    component: WieZijnWe,
  },
  {
    path: '/nieuws',
    name: 'Nieuws',
    component: Nieuws,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: Agenda,
  },
  {
    path: '/praktisch',
    name: 'Praktisch',
    component: Praktisch,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
