import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueCompositionApi from '@vue/composition-api';


Vue.config.productionTip = false
Vue.use(VueCompositionApi);
new Vue({
    vuetify,
    router,
    store,
    setup: () => {
        return {}
    },
    render: h => h(App)
}).$mount('#app');
