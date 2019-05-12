export default {
    DO_LOGIN: (state, payload) => {
        state.username = payload.username;
        state.password = payload.password;
        // state.name = payload.username;
    },
    DO_SIGNUP: (state, payload) =>{
        console.log('-->done<---')
        state.username = payload.username;
        state.password = payload.password;
        state.name = payload.username;
    }
}