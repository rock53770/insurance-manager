
import Vue from 'vue'
import iView from 'iview';
import 'assets/css/common.css';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

import App from './detailApp.vue'

new Vue({
  render: h => h(App)
}).$mount('#app')
