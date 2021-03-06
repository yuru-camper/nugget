import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from "vuex-persistedstate";

import home from './modules/home'
import trend from './modules/trend'
import upload_video from './modules/upload_video'
import mypage from './modules/mypage'
import common from './modules/common'
import make_account from './modules/make_account'
import login from './modules/login'
import tagged_screen from './modules/tagged_screen'

Vue.use(Vuex)

export const initialState = {
    userInfo: {
        log_in: false,
        name: 'のび太さんのエッジ',
        id: 'nobitasedge',
        image: '',
        bio: '「素人質問で申し訳ない」の対偶は「お灸をすえる玄人回答」',
        mail_address: 'info@nuggets.tokyo'
    },
    clicked_userID: ''
}

export default new Vuex.Store({
    state: initialState,
    mutations: {
        click_user(state, userID) {
            state.clicked_userID = userID
        },
        RESET_VUEX_STATE(state) {
            Object.assign(state, JSON.parse(localStorage.getItem('initialState')));
        }
    },
    actions: {},
    modules: {
        home,
        trend,
        upload_video,
        mypage,
        common,
        mkacc: make_account,
        login,
        tagged_screen
    },
    plugins: [createPersistedState()]
})
