import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';
import SelectGuild from '@/views/SelectGuild.vue';
import SelectCharacters from '@/views/SelectCharacters.vue';
import SelectEquipment from '@/views/SelectEquipment.vue';
import GuildSheet from '@/views/GuildSheet.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/select-guild',
    name: 'Select Guild',
    component: SelectGuild,
  },
  {
    path: '/select-characters',
    name: 'Select Characters',
    component: SelectCharacters,
  },
  {
    path: '/select-equipment',
    name: 'Select Equipment',
    component: SelectEquipment,
  },
  {
    path: '/guild-sheet',
    name: 'Guild Sheet',
    component: GuildSheet,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
