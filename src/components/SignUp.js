import React from "react";
import { useState } from "react/cjs/react.development";
import { Link, useHistory } from "react-router-dom";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    pass: "",
    re_pass: "",
  });

   
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, pass, re_pass } = user;
    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        email,
        pass,
        re_pass,
      })
    });
    console.log(res);

     await res.json();

    if (res.status === 422 || !res) {
      toast("Invalid Credentials")
      console.log("Invalid Credentials");
    } else {
      toast("Hurray! Successfull Registration")
      console.log("sucessfull Registration");

      history.push("/login");
    }
  }

  return (
    <div>
      <h1>GitHub Sign Up Page</h1>
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pass">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    value={user.pass}
                    onChange={handleInputs}
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="re-pass">
                    <i className="zmdi zmdi-lock-outline"></i>
                  </label>
                  <input
                    type="password"
                    name="re_pass"
                    id="re_pass"
                    value={user.re_pass}
                    onChange={handleInputs}
                    placeholder="Repeat your password"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Register"
                    onClick={postData}
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <Link to="/login" className="signup-image-link">
                I am already member
              </Link>
              <Link to="/" className="signup-image-link">
                Not Interested?
              </Link>
            </div>
          </div>
        </div>
      </section>
      < ToastContainer />
    </div>
  );
}

export default SignUp;
