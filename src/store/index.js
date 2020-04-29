import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import trend from './modules/trend'
import mypage from './modules/mypage'
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {
            log_in: false,
            name: '',
            id: '',
            image: ''
        }
    },
    mutations: {},
    actions: {},
    modules: {
        home,
        trend,
        mypage,
        common
    }
})
