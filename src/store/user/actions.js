import { userLogin, userSignup } from "../../api/user";

export default {
    loginAction: async({commit}, payload) =>{
        let userInfo =await userLogin(payload);
        if(userInfo){
            commit('DO_LOGIN', userInfo.data.data)
        }
    },
    signupAction: async ({commit}, payload) =>{
        let signupResponse = await userSignup(payload);
        if(signupResponse){
            commit('DO_SIGNUP',signupResponse.data.data);
        }
    }
}
