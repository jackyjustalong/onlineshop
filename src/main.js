import { createApp } from 'vue'
import App from './App.vue'
import router from  './router'
import axios from 'axios'

// createApp(App).mount('#app')
const app = createApp(App);

// 将 axios 添加到全局属性中
app.config.globalProperties.$http = axios;

app.use(router);

app.mount('#app');
