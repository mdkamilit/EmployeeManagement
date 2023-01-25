import React from "react";
import { Link, NavLink } from "react-router-dom";


const Header = () => {
   ;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <Link to={'/'}><a className="navbar-brand" >ESytem</a></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <Link
                className="btn btn-outline-success rounded-pill"
                 to={'/user/add'}
              >
                Add Employee
              </Link>            
            </form>
          </div>
        </div>
      </nav>

      {/* Modal PopUp Form for Add User */}
      
   
    </div>
  );
};

export default Header;
