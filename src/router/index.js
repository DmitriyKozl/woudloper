import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home";
import WieZijnWe from "@/views/WieZijnWe";
import Nieuws from "@/views/Nieuws";
import Contact from "@/views/Contact";
import Agenda from "@/views/Agenda";
import Praktisch from "@/views/Praktisch";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/wiezijnwe",
    name: "WieZijnWe",
    component: WieZijnWe
  },
  {
    path: "/nieuws",
    name: "Nieuws",
    component: Nieuws
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/agenda",
    name: "Agenda",
    component: Agenda
  },
  {
    path: "/praktisch",
    name: "Praktisch",
    component: Praktisch
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
