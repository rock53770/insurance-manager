
import Vue from 'vue'
import iView from 'iview';
import 'assets/css/common.css';
import 'assets/js/jquery.min';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

import App from './addApp.vue'

new Vue({
  render: h => h(App)
}).$mount('#app')
