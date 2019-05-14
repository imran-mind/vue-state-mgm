export default {
    DO_LOGIN: (state, payload) => {
        state.userInfo = payload;
    },
    DO_SIGNUP: (state, payload) =>{
        state.userInfo = payload;
    }
}