import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
    password: "",
    name: "",
    title: "My Todos",
    links: []
  },
  getters: {
    countLinks: state => {
      return state.links.length;
    }
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link);
    },
    REMOVE_LINK: (state, index) => {
      state.links.splice(index, 1);
    },
    REMOVE_ALL: state => {
      state.links = [];
    },
    DO_LOGIN: (state, payload) =>{
      state.username = payload.username;
      state.password = payload.password;
    }
  },
  actions: {
    removeLink: (context, index) => {
      context.commit("REMOVE_LINK", index);
    },
    addLinks: (context, data) => {
      context.commit("ADD_LINK", data.title);
    },
    removeLinks: ({ commit }) => {
      return new Promise(resolve => {
        setTimeout(() => {
          commit("REMOVE_ALL");
          resolve();
        }, 1500);
      });
    },
    loginAction: ({commit}, payload) =>{
      commit('DO_LOGIN', payload)
    }
  }
});
