const INITIAL_STATE = {
  email: null,
  password: null
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'CHANGE_STATE':
      console.log("action-->", state, action.payload.email)
      return { ...state, email: action.payload.email, password: action.payload.password }

    case 'LOGIN_SUCCESS_RESPONSE':
      return { ...state, email: action.payload.email, password: action.payload.password }

    case 'LOGIN_SUCCESS_ERROR':
      return { ...state }
    default:
      return state
  }
}
