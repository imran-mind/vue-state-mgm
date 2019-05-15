import { userSignup } from "../../api/user";

export default {
    loginAction: async({commit}, payload) =>{
        if(payload){
            commit('DO_LOGIN', payload)
        }
    },
    signupAction: async ({commit}, payload) =>{
        let signupResponse = await userSignup(payload);
        if(signupResponse){
            commit('DO_SIGNUP',signupResponse.data.data);
        }
    }
}
