import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import { InstagramOutlined } from '@ant-design/icons';

export const Header = () => {
  const history = useHistory();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);

    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {/* Top Start */}
      <div className="top-bar d-none d-md-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 d-flex">
              <div className="d-flex top-bar-left">
                <div className="text d-flex">
                  <i className="fa fa-envelope icon me-2" />
                  <p>Royal@gmail.com</p>
                </div>
                <div className="text d-flex">
                  <i className="fa fa-phone-alt icon me-2" />
                  <p>+012 345 6789</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex top-bar-right">
                <ul className="d-flex pt-2">
                  <li className="p_header btn btn-social" href="">
                    <i class="fab fa-instagram"></i>
                  </li>
                  <li className="p_header btn btn-social" href="">
                    <i className="fab fa-facebook-f" />
                  </li>
                  <li className="p_header btn btn-social" href="">
                    <i className="fab fa-youtube" />
                  </li>
                  <li className="p_header btn btn-social" href="">
                    <i className="fab fa-linkedin-in" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Top End */}

      {/*Navbar Start*/}
      <div className={isScrolled ? "navbar nav-sticky" : "navbar"}>
        <div className="navbar nav1 navbar-expand-lg bg-dark navbar-dark">
          {/* <div className="navbar nav1 navbar-expand-lg bg-dark navbar-dark" style={{position : "fixed", top : "0px", backgroundColor : "black"}}> */}
          <div className="container-fluid">
            <img src="/Image/logo/logo.png" alt="logo" className="logo" />
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"  />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarCollapse"
            >
              <ul className="navbar-nav mr-auto py-0">
                <li
                  
                  onClick={() => history.push("/")}
                  className="nav-item nav-link"
                >
                  Home
                </li>
                <li
                  
                  onClick={() => history.push("/About")}
                  className="nav-item nav-link"
                >
                  About
                </li>
                <li
                  
                  onClick={() => history.push("/Service")}
                  className="nav-item nav-link"
                >
                  Services
                </li>
                <li
                 
                  onClick={() => history.push("/Room")}
                  className="nav-item nav-link"
                >
                  Rooms
                </li>
                <li
                 
                  onClick={() => history.push("/team")}
                  className="nav-item nav-link"
                >
                  Our Team
                </li>
                <li
                  
                  onClick={() => history.push("/gallery")}
                  className="nav-item nav-link"
                >
                  Gallery
                </li>
                <li
                  
                  onClick={() => history.push("/Restaurant")}
                  className="nav-item nav-link"
                >
                  Restaurant
                </li>
                <li
                  
                  onClick={() => history.push("/Contact")}
                  className="nav-item nav-link"
                >
                  Contact
                </li>
                <li
                  className="contact"
                  onClick={() => history.push("/profile")}
                 
                >
                  <i className="fa fa-user-circle" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*Navbar End*/}
    </div>
  );
};
