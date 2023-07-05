import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../componentes/Navbar';
import logo from "../../assets/img/logo.jpg";
import "./Registrar.css"

const Registrar = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('Espectador');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUserChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };


  const handlePhoneChange = (e) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
  };

  const handleAgeChange = (e) => {
    const newAge = e.target.value;
    setAge(newAge);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      setPasswordsMatch(true);
      // Crear el objeto con los datos del usuario
      const userData = {
        name,
        username,
        email,
        phone,
        age,
        password,
        role,
      };
      // Obtener los datos existentes del Local Storage (si los hay)
      const existingData = localStorage.getItem('LocalStorage');
      let newData = [];

      if (existingData) {
        // Si hay datos existentes, obtenerlos y convertirlos en un objeto
        newData = JSON.parse(existingData);
      }

      // Agregar los nuevos datos al objeto existente
      newData.push(userData);

      // Guardar los datos actualizados en el Local Storage
      localStorage.setItem('LocalStorage', JSON.stringify(newData));
    } else {
      setPasswordsMatch(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="containerRegister">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" value={name} onChange={handleNameChange} placeholder='Name' />
          </div>
          <div>
            <input type="text" value={username} onChange={handleUserChange} placeholder='Username' />
          </div>
          <div>
            <input type="email" value={email} onChange={handleEmailChange} placeholder='Email' />
          </div>
          <div>
            <input type="tel" value={phone} onChange={handlePhoneChange} placeholder='Phone' />
          </div>
          <div>
            <input type="text" value={age} onChange={handleAgeChange} placeholder='Age' />
          </div>
          <div>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder='Password' />
          </div>
          <div>
            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder='Confirm Password' />
            {!passwordsMatch && <p>Passwords do not match!</p>}
          </div>
          <div>
            <label>Role:</label>
            <select id="role" value={role} onChange={handleRoleChange}>
              <option value="Espectador">Viewer</option>
              <option value="Creador">Content creator</option>
              <option value="Empresa">Sponsoring company</option>
            </select>
          </div>
          <button type="submit">Register</button>
        </form>
        <div className="register-info">
          <p>Already have an account? <Link to="/inicio_sesion">Log In</Link></p>
          <p>I accept the site Terms of Service and agree to the Privacy Policy.</p>
        </div>
      </div>
    </>
  );
};

export default Registrar;
