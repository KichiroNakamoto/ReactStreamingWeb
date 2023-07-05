import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import InicioSesion from './paginas/InicioSesion/InicioSesion';
import Registrar from './paginas/Registrar/Registrar';
import Films from './paginas/Films/Films';
import { UserContextProvider } from './context/UserContext';
import DashboardAuth from './paginas/Dashboard/DashboardAuth';


const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio_sesion" element={<InicioSesion />} />
          <Route path="/crear_cuenta" element={<Registrar />} />
          <Route path="/films" element={<Films />} />
          <Route path="/dashboard" element={<DashboardAuth />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
};

export default App;

