import Vue from 'vue'
import Vuex from 'vuex'
import form from './modules/form.js'
//注册
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        form: form
    }
})
