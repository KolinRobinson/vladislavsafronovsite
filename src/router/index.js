import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Portrait from "../views/Portrait.vue";
import Nature from "../views/Nature.vue";
import Architecture from "../views/Architecture.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/portrait",
    name: "Portrait",
    component: Portrait
  },
  {
    path: "/nature",
    name: "Nature",
    component: Nature
  },
  {
    path: "/architecture",
    name: "Architecture",
    component: Architecture
  }
];

const router = new VueRouter({
  routes
});

export default router;
