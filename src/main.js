import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/router'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import Cookies from 'js-cookie';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { ElNotification } from 'element-plus';
import store from './store';


const app = createApp(App);
app.config.globalProperties.$cookies = Cookies;
app.use(router).use(ElementPlus).use(VueAxios, axios).use(ElNotification).use(store);
app.mount('#app')