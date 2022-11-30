// structuring reducers: https://redux.js.org/usage/structuring-reducers/structuring-reducers

const authReducer = (
  state = {
    authData: null,
    loading: false,
    error: false,
    updateLoading: false,
  },
  action
) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: false };
    case "AUTH_SUCCESS":
        // data sent by our authentication action after a successful endpoint
        //...action?: if data is avble then it will be stored in our local storage
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
    // if success, loading is no longer true and there is no errors
    return { ...state, authData: action.data, loading: false, error: false };
    // if fail, loading is no longer true and there are errors
    case "AUTH_FAIL":
      return { ...state, loading: false, error: true };
    case "UPDATING_START":
      return { ...state, updateLoading: true, error: false };
    case "UPDATING_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        authData: action.data,
        updateLoading: false,
        error: false,
      };

    case "UPDATING_FAIL":
      return { ...state, updateLoading: true, error: true };

    case "LOG_OUT":
      localStorage.clear();
      return {
        ...state,
        authData: null,
        loading: false,
        error: false,
        updateLoading: false,
      };
// by default it will return default state (authReducer parameter)
    default:
      return state;
  }
};

export default authReducer