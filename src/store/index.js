import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
    state() {
        return {
            user: null,
        }
    },
    mutations: {
        SET_USER: (state, user) => {
            // 유저정보를 state에 집어넣는다.
            state.user = user
        },
    },
    plugins: [createPersistedState()],
})

export default store