export default {
    loginAction: ({commit}, payload) =>{
        commit('DO_LOGIN', payload)
    },
    signupAction: ({commit}, payload) =>{
        commit('DO_SIGNUP',payload);
    }
}
