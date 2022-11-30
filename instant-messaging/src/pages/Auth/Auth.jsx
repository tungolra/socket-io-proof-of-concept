import React from "react";

export default function Auth() {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  };

  function SignUp() {
    return (
      <form>
        <h3>Sign up</h3>
        <div>
          <input type="text" placeholder="First Name" name="firstname"></input>
          <input type="text" placeholder="Last Name" name="lastname"></input>
          <input type="text" placeholder="Username" name="username"></input>
          <input type="text" placeholder="Password" name="password"></input>
          <input
            type="text"
            placeholder="Confirm Password"
            name="confirmpass"
          ></input>
        </div>
        <div>
            <span style={{fontSize: '12px'}}>Already have an account. Login!</span>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    );
  }
  function LogIn() {
    return (
      <form>
        <h3>Log In</h3>
        <div>
          <input type="text" placeholder="Username" name="username"></input>
          <input type="text" placeholder="Password" name="password"></input>
        </div>
        <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
            <button className="button infoButton">Login</button>
          </div>
      </form>
    );
  }

  return (
    <div>
      This is the Auth Page
      <LogIn />
      <SignUp />
    </div>
  );
}
