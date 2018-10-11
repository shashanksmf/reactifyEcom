import { SIGNUP_RESPONSE_SUCCESS, SIGNUP_RESPONSE_ERROR, HIDE_SIGNUP_ERROR } from './../../actions/types';
const INITIAL_STATE = {
  email: null,
  password: null,
  isLoggedIn: false,
  signupResponse: {
    code: null
  },
  loginResponse: {
    code: null
  },
  loginResponse: {},
  isSignupSuccess: false,
  mobile: null
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'CHANGE_STATE':
      console.log("action-->", state, action.payload.email)
      return { ...state, email: action.payload.email, password: action.payload.password }
    
    case SIGNUP_RESPONSE_SUCCESS:
      console.log("SIGNUP_SUCCESS_RESPONSE", state);
      return { ...state, ...action.payload.userData, signupResponse: action.payload.data }
      // case LOGIN_RESPONSE_SUCCESS:
      // console.log("LOGIN_RESPONSE_SUCCESS", state);
      // return { ...state, ...action.payload.userData, loginResponse: action.payload.data }
    case SIGNUP_RESPONSE_ERROR:
      console.log("SIGNUP_SUCCESS_ERROR", action.payload.userData);
      return { ...state, ...action.payload.userData, signupResponse: action.payload.data }
      // case LOGIN_RESPONSE_ERROR:
      // console.log("LOGIN_RESPONSE_ERROR", action.payload.userData);
      // return { ...state, ...action.payload.userData, loginResponse: action.payload.data }


    case HIDE_SIGNUP_ERROR:
      return { ...state, signupResponse: {} }
    default:
      return state
  }
}
