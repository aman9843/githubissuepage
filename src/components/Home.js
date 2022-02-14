import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          GitHub Issue Page
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            
            <li className="nav-item active">
              <Link className="nav-link" to="/signup">
                Registration <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/login">
                Login<span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Know More
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/signup">
                  SignUp
                </Link>
                <Link className="dropdown-item" to="/login">
                  Login
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/contact">
                  Contact
                </Link>
               
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <div className="row laptop mobile ">
      
     <div className="col-md">
      <h1 className="display-4">Welcome To Github Issue Page !</h1>
      <p>You need to register first!</p>
      <p> After that you can push an issue..</p>
     
      <div className="form-group form-button home">
        
        <Link className="nav-link" to="/signup">
          <input
            type="submit"
            name="signup"
            id="signup"
            className="form-submit"
            value="Register"
          />
        </Link>
        </div>
        </div>
       
      </div>
    </div>

    
 
  );
}

export default Home;
