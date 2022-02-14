import React, {useState} from 'react';
import {Link,useHistory} from 'react-router-dom'
import {ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function Login() {
   const history = useHistory();
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');

   const loginUser = async (e) => {
       e.preventDefault();
       const res = await fetch('/login',{
           method:"POST",
           headers:{
            "Content-Type" : "application/json"
           },

           body:JSON.stringify({
               email,
               pass 
           })


       });

           const data = await res.json(); 
       

       if(res.status === 400 || !data) {
           toast("Invalid Login Credentials");
           console.log("no");
       } else {
        toast("Successfully Login!")
           console.log("yes");
           history.push("/table");
       }
   }

  return (
  <div>
      <h1>GitHub Login Page</h1>
     <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        {/* <figure><img src="images/signin-image.jpg" alt="sing up image"></figure> */}
                        <Link to="/signup" className="signup-image-link">Create an account</Link>
                        <Link to="/" className="signup-image-link">Not Interested?</Link>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Login</h2>
                        <form method="POST" className="register-form" id="login-form">
                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Password"/>
                            </div>
                            {/* <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div> */}
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" onClick={loginUser}/>
                            </div>
                        </form>
                        {/* <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
        < ToastContainer />

  </div>
  )}

export default Login;
