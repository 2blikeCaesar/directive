import Vue from 'vue'
import App from './App.vue'
import '@/direcitves';
import VuePortal from 'portal-vue';

Vue.config.productionTip = false
Vue.use(VuePortal);

new Vue({
  render: h => h(App),
}).$mount('#app')
