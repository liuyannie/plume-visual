
import Vue from 'vue'
import App from './App.vue'
import router from './router';
Vue.config.productionTip = false
import './assets/css/style-100.css';
import axios from 'axios'
Vue.prototype.$axios = axios
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import Element from "element-ui";
import "../node_modules/element-ui/lib/theme-chalk/index.css";

Vue.use(Element)

import Swiper from 'vue-awesome-swiper'
Vue.use(Swiper);
import '../node_modules/swiper/dist/css/swiper.css'
import '../node_modules/swiper/dist/js/swiper.js'

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
