import axios from 'axios';
import {
    userConst
} from '../constants/user-constants';


export const userLogin = async data => {
    let response = await axios.post(userConst.login_url, data);
    if (response) {
        return response;
    }
}

export const userSignup = async data => {
    let response = await axios.post(userConst.signup_url, data);
    if (response) {
        return response;
    }
}