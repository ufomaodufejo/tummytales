import React, { useContext} from "react";

import { LoginContext } from "../Contexts/LoginContext";

function Login() {
  const {setFullname, setShowProfile} = useContext(LoginContext)

  function handleSubmit(e){
    e.preventDefault()
    setShowProfile(true)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="container">
          <h2>Login</h2>
          <hr></hr>

          <label for="fullname">
            <b>Full Name</b>
          </label>
          <input
            type="text"
            name="fullname"
            placeholder="Enter Full Name"
            required
            onChange={(e) => {setFullname(e.target.value)}}
          />

          <label for="email">
            <b>Email</b>
          </label>
          <input type="email" name="email" placeholder="Enter Email" required />

          <label for="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />

          <label>
            <input type="checkbox" checked="checked" name="remember" /> Keep Me
            logged in
          </label>

          <div className="clearfix">
            <button type="button" className="cancelbtn btn1">
              Cancel
            </button>
            <button type="submit" className="signupbtn btn1" onSubmit={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </form>
      
    </div>
  );
}

export default Login;
