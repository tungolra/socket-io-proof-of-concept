import * as AuthApi from "../api/AuthRequest.js";

// double arrow function convention for react actions
export const logIn = (formData) => async (dispatch) => {
  // tells our user that authentication has been started
  dispatch({ type: "AUTH_START" });

  try {
    const { data } = await AuthApi.logIn(formData);
    // tells user authentication successful
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    // tells user authentication failed
    dispatch({ type: "AUTH_FAIL" });
  }
};
export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const logout = ()=> async(dispatch)=> {
  dispatch({type: "LOG_OUT"})
}
