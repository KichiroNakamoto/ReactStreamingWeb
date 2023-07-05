import React from "react";
import "./DashboardClientes.css";
import Navbar from "../../componentes/Navbar"

const DashboardClientes = () => {
  return (
    <>
    <Navbar />
    <div className="dashboard-container">
      

      <div className="dashboard-content">
        <div className="sidebar">
          <div className="profile">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="profile-image"
            />
            <div className="profile-info">
              <h4 className="profile-name">Name</h4>
              <p className="profile-handle">@ViewerUsername</p>
            </div>
          </div>

          <ul className="sidebar-menu">
            <li className="menu-item active">
              <i className="fa fa-home"></i>
              <span className="menu-item-label">Profile</span>
            </li>
            <li className="menu-item">
              <i className="fa fa-bell"></i>
              <span className="menu-item-label">Notifications</span>
            </li>
            <li className="menu-item">
              <i className="fa fa-envelope"></i>
              <span className="menu-item-label">Messages</span>
            </li>
            <li className="menu-item">
              <i className="fa fa-envelope"></i>
              <span className="menu-item-label">Stadistics</span>
            </li>
          </ul>
        </div>

        <div className="main-content">
          <div className="tweet">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="tweet-profile-image"
            />
            <div className="tweet-content">
              <textarea
                className="tweet-input"
                placeholder="¿What have you just seen?"
              ></textarea>
              <div className="tweet-actions">
                <button className="tweet-btn">Comment</button>
              </div>
            </div>
          </div>

          <div className="timeline">
            <div className="contentproduct">This is a Product</div>
            <div className="contentproduct">This is a Product</div>
            <div className="contentproduct">This is a Product</div>
          </div>
        </div>

        <div className="widgets">
          <div className="widget trending">
            <h2 className="widget-title"> Streamers Most popular topics NOW </h2>
            <ul className="trending-list">
              <li className="trending-item">#Gobling</li>
              <li className="trending-item">#Rihana</li>
              <li className="trending-item">#Covid19</li>
              <li className="trending-item">#Orchad Enterpise</li>
              <li className="trending-item">#Live Orcs</li>
            </ul>
          </div>

          <div className="who-to-follow">
            <h2 className="widget-title">Your Follows: </h2>
            <ul className="follow-list">
              <li className="follow-item">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="follow-profile-image"
                />
                <div className="follow-info">
                  <h4 className="follow-name">Samuel L. Jackson</h4>
                  <p className="follow-handle">@TheSamuelLJ</p>
                </div>
                <button className="follow-btn">Unfollow</button>
              </li>
              <li className="follow-item">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="follow-profile-image"
                />
                <div className="follow-info">
                  <h4 className="follow-name">Mark Johnson</h4>
                  <p className="follow-handle">@markjohnson</p>
                </div>
                <button className="follow-btn">Unfollow</button>
              </li>
              <li className="follow-item">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="follow-profile-image"
                />
                <div className="follow-info">
                  <h4 className="follow-name">Eminem</h4>
                  <p className="follow-handle">@slimShaddy</p>
                </div>
                <button className="follow-btn">Unfollow</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DashboardClientes;
