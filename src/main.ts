import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import './index.css';
import './tallwind.css';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}
app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount('#app');
