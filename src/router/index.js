import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home';
import Nieuws from '@/views/nieuws';
import Contact from '@/views/contact';
import Agenda from '@/views/agenda';
import Praktisch from '@/views/praktisch';
import Leden from '@/views/leden';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
  {
    path: '/leden',
    name: 'leden',
    component: Leden,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
