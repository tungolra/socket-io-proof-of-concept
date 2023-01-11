import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction";

export default function Auth() {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  };
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const [isSignUp, setIsSignUp] = useState(false);
  const [data, setData] = useState(initialState);
  const [confirmPass, setConfirmPass] = useState(true);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  }
  function resetForm() {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpass: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>{isSignUp ? "Register" : "Login"}</h3>
      {isSignUp && (
        <div>
          <input
            required
            type="text"
            placeholder="First Name"
            name="firstname"
            value={data.firstname}
            onChange={handleChange}
          />
          <input
            required
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={data.lastname}
            onChange={handleChange}
          />
        </div>
      )}

      <div>
        <input
          required
          type="text"
          placeholder="Username"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        {isSignUp && (
          <input
            required
            type="password"
            name="confirmpass"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        )}
      </div>

      <span
        style={{
          color: "red",
          fontSize: "12px",
          alignSelf: "flex-end",
          marginRight: "5px",
          display: confirmPass ? "none" : "block",
        }}
      >
        *Confirm password is not same
      </span>
      <div>
        <span
          style={{
            fontSize: "12px",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={() => {
            resetForm();
            setIsSignUp((prev) => !prev);
          }}
        >
          {isSignUp
            ? "Already have an account Login"
            : "Don't have an account Sign up"}
        </span>
        <button type="Submit">
          {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"}
        </button>
      </div>
    </form>
  );
}
