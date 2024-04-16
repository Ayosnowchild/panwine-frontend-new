import React from "react";
import AuthNav from "../../components/Nav/Nav";
import "./login.css";
import { Link } from "react-router-dom";

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
            <p className="auth-form-caption">Sign in to PanWine</p>
            <div className="auth-input-field">
              <label htmlFor="email" className="auth-label">
                Email
              </label>
              <input
                placeholder="Placeholder"
                type="email"
                name="email"
                className="auth-input"
              />
            </div>
            <div className="auth-input-field">
              <label htmlFor="password" className="auth-label">
                Password
              </label>
              <input
                placeholder="Placeholder"
                type="password"
                name="password"
                className="auth-input"
              />
            </div>
            <button className="login-btn"> Sign In</button>
            <Link to={"/forgot-password"} className="login-forgot">
              Forgot Password
            </Link>
            <span className="login-advice">
              Don't have account?{" "}
              <Link to={"/signup"} className="login-advice">
                Sign up
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
