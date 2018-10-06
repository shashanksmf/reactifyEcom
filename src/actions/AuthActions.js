export const changeState = (email, password) => {
  return {
    type: 'CHANGE_STATE',
    payload: { email, password }
  }
}

export const LoginAction = (email, password) => {
  return dispatch => fetch("http://inspiresofttech.com/on_demand/api/register",
    {
      method: "POST",
      body: JSON.stringify({ name: "shashank", email, password, "rememberToken": "abcasdsadsadsad", "user_role": "admin" })
    })
    .then(resp => resp.json())
    .then(
      data => { console.log("succ data", data); return dispatch({ type: "LOGIN_SUCCESS_RESPONSE", payload: data }) },
      err => { console.log("Err data", err); return dispatch({ type: "LOGIN_SUCCESS_ERROR", payload: null }) }
    )
}
