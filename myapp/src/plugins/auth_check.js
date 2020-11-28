import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {},
        status: false
    },
    getters: {
        status: state => state.status,
        user: state => state.user,
    },
    mutations: {
        // mutationsのみstatusの更新を行う.
        onAuthStateChanged(state, user) {
            state.user = user; //firebaseが返したユーザー情報
          },

        onUserStatusChanged(state, status) {
            state.status = status; //ログインしてるかどうか true or false
        }
    }
})

