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
    let response = await axios.post(userConst.signup_url, data);
    if (response) {
        return response;
    }
}