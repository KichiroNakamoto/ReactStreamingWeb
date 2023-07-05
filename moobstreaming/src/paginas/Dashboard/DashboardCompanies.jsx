import React from "react";
import "./DashboardCompanies.css";
import Navbar from "../../componentes/Navbar";

const DashboardCompanies = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="content-container">
        <div className="sidebar">
          <h2>Your Pick ups</h2>
          <ul className="card-list">
            <li className="card">
              <span className="card-name">Streamer 1</span>
              <button className="delete-button">Delete</button>
            </li>
            <li className="card">
              <span className="card-name">Streamer 2</span>
              <button className="delete-button">Delete</button>
            </li>
            <li className="card">
              <span className="card-name">Streamer 3</span>
              <button className="delete-button">Delete</button>
            </li>
          </ul>
        </div>
        <div className="main-content">
          <div className="profile-section">
            <img
              className="profile-picture"
              src="company-logo.png"
              alt="Company Logo"
            />
            <h2>Company Name</h2>
            <p>Location: City, Country</p>
            <p>Description Company</p>
          </div>
          <div className="search-section">
            <input
              type="text"
              className="search-input"
              placeholder="Look for Trends"
            />
            <button className="search-button">Search</button>
          </div>
          <div className="streamer-section">
            <div className="post">
              <div className="post-header">
                <img
                  className="post-avatar"
                  src="streamer-avatar.png"
                  alt="Streamer Avatar"
                />
                <div className="post-info">
                  <h3>Streamer Name</h3>
                  <p>Streamer Username</p>
                  <p>2 hours ago</p>
                </div>
              </div>
              <div className="post-content">
                <p>
                  This will be a product
                </p>
              </div>
              <div className="post-actions">
                <button className="like-button">Pick up</button>
                <button className="comment-button">Send Message</button>
              </div>
            </div>
            <div className="post">
              <div className="post-header">
                <img
                  className="post-avatar"
                  src="streamer-avatar.png"
                  alt="Streamer Avatar"
                />
                <div className="post-info">
                  <h3>Streamer Name</h3>
                  <p>Streamer Username</p>
                  <p>2 hours ago</p>
                </div>
              </div>
              <div className="post-content">
                <p>
                  This will be a product
                </p>
              </div>
              <div className="post-actions">
                <button className="like-button">Pick up</button>
                <button className="comment-button">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCompanies;

