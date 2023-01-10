import React, { useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/LoginContext";

function Login() {
  const [user, setUser] = useState("")
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || "/"

  const handleLogin = (e) => {
    e.preventDefault()
    auth.login(user)
    navigate(redirectPath, {replace : true})
  }


  return (
    <div>
      <form onSubmit={handleLogin} className="form">
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
            onChange={(e) => {setUser(e.target.value)}}
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
            <button type="submit" className="signupbtn btn1" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </form>
      
    </div>
  );
}

export default Login;
