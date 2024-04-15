import React from "react";
import AuthNav from "../../components/Nav/Nav";
import "./login.css";

function Login() {
  return (
    <div className="login-main">
      <AuthNav />
      <div className="auth-main">
        <img
          src="../../../image/panwine-image.png"
          alt="wine"
          className="auth-image"
        />
        <div className="auth-form-container">
          <form className="auth-form">
            <p>Sign in to PanWine</p>
            <div>
              <label>Email</label>
              <input placeholder="Placeholder" type="email" />
            </div>
            <div>
              <label>Password</label>
              <input placeholder="Placeholder" type="password" />
            </div>
            <button> Sign In</button>
            <p>Forgot Password</p>
            <p>
              Don't have account? <p>Sign up</p>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
