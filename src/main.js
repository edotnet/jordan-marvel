import Vue from 'vue';
import app from '@/app/app.vue';
import router from '@/router';
import store from '@/store';
import bootstrap_components from '@/helpers/vue-bootstrap-components'

Vue.config.productionTip = false;

new Vue({
  components: {
    ...bootstrap_components,
  },
  router,
  store,
  render: h => h(app)
}).$mount('#app');
