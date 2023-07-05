import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../componentes/Navbar';
import "./InicioSesion.css";
import logo from "../../assets/img/logo.jpg";
import { useLocation } from 'wouter';
import useUser from '../../hooks/useUser';

const InicioSesion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [, navigate] = useLocation();
  const {login, islogged} = useUser();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


useEffect(() => {
  if (islogged) navigate("/")
}, [islogged, navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${email}, ${password}`);
    login();
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Login</h1>
        
        <form onSubmit={handleSubmit}>
          <div>
            <p><Link to="/">Forgot Email?</Link></p>
            <input type="email" value={email} onChange={handleEmailChange} placeholder='Email or Username' />
          </div>
          <div>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder='Password' />
          </div>
          {loginError && <p className="error">Invalid credentials. Please try again.</p>}
          <div className="buttons-container">
            <p>Without Account?</p>
            <Link to="/crear_cuenta"><button className="crear-cuenta-button">Create Account</button></Link>
            <button className="entrar-button" type="submit">Log In</button>
          </div>
        </form>

      </div>
    </>
  );
};

export default InicioSesion;
