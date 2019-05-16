import axios from 'axios';
import {
    userConst
} from '../constants/user-constants';


export const userLogin = async data => {
    try {
        const userResult = await axios({
            method: 'POST',
            url: userConst.login_url,
            data: data
        });
        return userResult;
    } catch (error) {
        return error && error.response;
    }
}

export const userSignup = async data => {
    try {
        const signupResult = await axios({
            method: 'POST',
            url: userConst.signup_url,
            data: data
        });
        return signupResult;
    } catch (signupError) {
        return signupError && signupError.response;
    }
}