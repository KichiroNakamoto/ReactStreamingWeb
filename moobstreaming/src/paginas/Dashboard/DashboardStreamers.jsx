import React from "react";
import "./DashboardStreamers.css";
import Navbar from "../../componentes/Navbar";

const DashboardStreamers = () => {
  return (
    <>
      <Navbar />
      <div className="artist-sponsors-section">
        <div className="artist-profile">
          <div>
            <h2>Streamer ArtisticName</h2>
            <p>@StreamerUserName</p>
            <p>Description</p>
          </div>
        </div>

        <div className="sponsors-section">
          <h2>Sponsor Companies</h2>
          <ul className="sponsors-list">
            <li>
              <img src="ruta_logo_sponsor_1" alt="Logo del Sponsor 1" />
              <h5>Addidas</h5>
              <button className="leave-button">Leave</button>
            </li>
            <li>
              <img src="ruta_logo_sponsor_2" alt="Logo del Sponsor 2" />
              <h5>Luis Buiton</h5>
              <button className="leave-button">Leave</button>
            </li>
          </ul>
        </div>

        <div className="interested-companies-section">
        <h2>Interested Companies</h2>
        <ul className="companies-list">
          <li>
            <img src="ruta_logo_empresa_1" alt="Logo de la Empresa 1" />
            <h5>Nike</h5>
            <button className="request-button">Request</button>
          </li>
          <li>
            <img src="ruta_logo_empresa_2" alt="Logo de la Empresa 2" />
            <h5>SpaceX</h5>
            <button className="request-button">Request</button>
          </li>
        </ul>
      </div>    

      </div>

      <div className="streamers-section">
        <h2>Streamer Products</h2>
        <div className="thumbnails-container">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="thumbnail"></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardStreamers;
