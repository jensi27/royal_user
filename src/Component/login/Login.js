import React, { useState } from "react";
import './login.css'

export const Login = () => {
  const [isRightPanelActive, setRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };
    return (
        <section>
        <div className={isRightPanelActive ? 'right-panel-active' : ''} id="container" >
          <div className="form-container sign-up-container">
            <form action="#" method="get">
              <h1 className="h">Login</h1>
              <label>
                <input type="email" placeholder="Email" required />
              </label>
              <label>
                <input type="password" placeholder="Password" required />
              </label>
              <button style={{ marginTop: 9 }} onClick={handleSignUpClick}>Login</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#" method="get">
              <h1 className="h">Sign in</h1>
              <label>
                <input type="text" placeholder="Name" required />
              </label>
              <label>
                <input type="text" placeholder="Mobile No" required />
              </label>
              <label>
                <input type="email" placeholder="Email" required />
              </label>
              <label>
                <input type="password" placeholder="Password" required />
              </label>
              <li href="#">Forgot your password?</li>
              <button onClick={handleSignInClick}>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="h">Login</h1>
                <p className='p1'>Login here if you already have an account </p>
                <button className="ghost mt-5" id="signIn">
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="h">Create, Account!</h1>
                <p className='p1'>Sign in if you still don't have an account ... </p>
                <button className="ghost" id="signUp">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}