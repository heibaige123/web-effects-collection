import Vue from 'vue';
import Element from 'element-ui';
import _ from 'lodash';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype._ = _;
Vue.prototype.$http = axios;

Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
