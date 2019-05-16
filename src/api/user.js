import axios from 'axios';
import {
    userConst
} from '../constants/user-constants';


export const userLogin = data => {
    return axios({
        method: 'POST',
        url: userConst.login_url,
        data: data
    }).then(result => {
        return result;
    }, error => {
        return error && error.response;
    });
}

export const userSignup = async data => {
    return axios({
        method: 'POST',
        url: userConst.signup_url,
        data: data
    }).then(signupResult => {
        return signupResult;
    }, signupError => {
        return signupError && signupError.response;
    });
}