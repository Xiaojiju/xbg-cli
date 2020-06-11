import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/zh-CN';
import i18n from './static/locale/index';
import { hasPermissions, hasNoPermissions, hasAnyPermissions, hasRoles, hasAnyRoles, hasNoRoles } from './plugin/index';

Vue.config.productionTip = false;

Vue.use(ElementUI, {locale});

const Plugins = [hasAnyPermissions, hasNoPermissions, hasPermissions, hasRoles, hasAnyRoles, hasNoRoles];

Plugins.map((plugin) => {
    Vue.use(plugin);
})
new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
