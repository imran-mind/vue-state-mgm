import Vue from "vue";
import Vuex from "vuex";
import userModule from './user/index.js';
import todoModule from './todo/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        userModule,
        todoModule
    }
});