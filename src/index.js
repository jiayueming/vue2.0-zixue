import Vue from 'vue'
import Axios from 'axios'
import App from './components/App.vue'
import router from './routes.js'
import iView from 'iview';
import store from './store.js'
import 'iview/dist/styles/iview.css'
Vue.prototype.$https = Axios;

Vue.config.debug = true;
Vue.use(iView);
new Vue({
    router,
    el: '#appIndex',
    store,
    template: '<App />',
    components: { App }
})