import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'firstIndex',
  component: () => import('../views/page1/firstIndex.vue'),
  meta: { requiresAuth: true }
  }, {
  path: '/jianceView',
  name: 'jianceView',
  component: () => import('../views/page1/jianceView.vue'),
  meta: { requiresAuth: true }
  }, {
  path: '/loginBack',
  name: 'loginBack',
  component: () => import('../views/page1/loginBack.vue'),
  }, {
  path: '/moniView',
  name: 'moniView',
  component: () => import('../views/page1/moniView.vue'),
  meta: { requiresAuth: true }
  }, {
  path: '/shebeiView',
  name: 'shebeiView',
  component: () => import('../views/page1/shebeiView.vue'),
  meta: { requiresAuth: true }
  }, {
  path: '/caiyangView',
  name: 'caiyangView',
  component: () => import('../views/page1/caiyangView.vue')
  }, {
        path: '/PaperView',
        name: 'PaperView',
        component: () => import('../views/page1/PaperView.vue')
    }, {
        path: '/DataView',
        name: 'DataView',
        component: () => import('../views/page1/DataView.vue')
    },{
        path: '/VideoView',
        name: 'VideoView',
        component: () => import('../views/page1/VideoView.vue')
    }]

const router = new VueRouter({
  mode: "history",
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  if (to.meta.requiresAuth) {
    if (token) {
      next();
    } else {
      next('/loginBack');
    }
  } else {
    next();
  }
});

export default router