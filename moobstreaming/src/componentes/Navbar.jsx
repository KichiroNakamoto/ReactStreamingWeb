import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../src/assets/img/logo.jpg"
import useUser from '../hooks/useUser';


const Navbar = () => {

  const {IsLogged} = useUser();

  const navigateToHomePage = () => {
    navigate("/dashboard");
  }

  return (
    <>
      <nav className="navbar--container">
        <div className="navbar-left">
        <Link to="/"><img src={logo} alt="Logo" className="navbar-logo" onClick={navigateToHomePage}/></Link>
          <div className="navbar-title">
          <Link to="/"><h5 className='LogoMenuVarName'>| Moob Streaming</h5></Link>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/films" className="navbar-link">| Movies</Link>
          <Link to="/dashboard" className="navbar-link">| Dashboard</Link>

          { IsLogged
            ? <Link className="cerrar-sesion" to="/cerrar_sesion">
            | Log out
          </Link>
          : <Link className="inicio-sesion" to="/inicio_sesion">
            | Log in
          </Link> }
          
        </div>
        <div className="coloruno"></div>
        <div className="colordos"></div>
      </nav>
      
    </>
  );
};

export default Navbar;