import { SIGNUP_RESPONSE_SUCCESS, SIGNUP_RESPONSE_ERROR, HIDE_SIGNUP_ERROR } from './types';

export const SignUpAction = ({ email, password, mobile }) => {
  return dispatch => fetch("http://inspiresofttech.com/on_demand/api/register",
    {
      method: "POST",
      body: JSON.stringify({ email, password, mobile })
    })
    .then(resp => resp.json())
    .then(data => {
      console.log("api rsponse");
      if (data.code == "SUCCESS") {

        return dispatch({ type: SIGNUP_RESPONSE_SUCCESS, payload: { userData: { email, password, mobile }, data } })
      } else {
        console.log("userdata error", email, password, mobile)
        return dispatch({ type: SIGNUP_RESPONSE_ERROR, payload: { userData: { email, password, mobile }, data } })
      }
    },
      err => {
        return dispatch({ type: SIGNUP_RESPONSE_ERROR, payload: { userData: { email, password, mobile }, data: err } })
      })
}

export const LoginAction = ({ email, password, mobile }) => {
  return dispatch => fetch("http://inspiresofttech.com/on_demand/api/mobile_login",
    {
      method: "POST",
      body: JSON.stringify({ mobile:(mobile || email), password })
    })
    .then(resp => resp.json())
    .then(data => {
      console.log("api rsponse");
      if (data.code == "SUCCESS") {

        return dispatch({ type: SIGNUP_RESPONSE_SUCCESS, payload: { userData: { email, password, mobile }, data } })
      } else {
        console.log("userdata error", email, password, mobile)
        return dispatch({ type: SIGNUP_RESPONSE_ERROR, payload: { userData: { email, password, mobile }, data } })
      }
    },
      err => {
        return dispatch({ type: SIGNUP_RESPONSE_ERROR, payload: { userData: { email, password, mobile }, data: err } })
      })
}

export const HideSignUpError = () => {
  return {
    type: HIDE_SIGNUP_ERROR
  }
}
