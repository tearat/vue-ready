import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        about: "Lorem ipsum tratata",
        color: "white"
    },
    getters: {
        getAbout: state => state.about, // Анонимная функция вызывается по переменной
        getColor: state => state.color
    },
    actions: {
        editAbout(context, about) {
            context.commit('editAbout', about);
        },
        editColor(context, color) {
            context.commit('editColor', color);
        }
    },
    mutations: {
        editAbout(state, payload) {
            state.about = payload;
        },
        editColor(state, payload) {
            state.color = payload;
        }
    }
})
