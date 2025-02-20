import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserPage from "../views/UserPage.vue";
import SignupView from "../views/SignupView.vue";

const routes =[
  {
    path:'/user',
   name:'UserPage',
   component: UserPage
 },

 {
  path: '/signup',
  name: 'SignupView',
  component: SignupView,
},

  {
    path:'/',
    name:'HomeView',
    component:HomeView
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView,
//     },
//   ],
// })


// export default router

