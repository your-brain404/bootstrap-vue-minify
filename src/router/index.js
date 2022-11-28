import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/alert',
    name: 'alert',
    component: () =>
      import(/* webpackChunkName: "b-alert" */ '../views/BAlert.vue'),
  },
  {
    path: '/modal',
    name: 'modal',
    component: () =>
      import(/* webpackChunkName: "b-modal" */ '../views/BModal.vue'),
  },
  {
    path: '/button',
    name: 'button',
    component: () =>
      import(/* webpackChunkName: "b-modal" */ '../views/BButton.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
