import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FilterBar from './components/FilterBar.vue' // Filter Bar Component
import 'vue-search-select/dist/VueSearchSelect.css'

Vue.config.productionTip = false

Vue.component('FilterBar', FilterBar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import 'bootstrap/dist/js/bootstrap'


