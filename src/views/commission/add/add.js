
import Vue from 'vue'
import 'assets/css/common.css';
// import 'assets/js/jquery.min';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import App from './addApp.vue'

new Vue({
  render: h => h(App)
}).$mount('#app')
