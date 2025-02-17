import React from "react";
import "./HotelDashboard.css";
import { FaLock, FaHome, FaConciergeBell, FaUser } from "react-icons/fa";

const HotelDashboard = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <div className="user-info">
          <img
            className="avatar"
            src="https://via.placeholder.com/50"
            alt="User Avatar"
          />
          <div>
            <h3>Joana Barros</h3>
            <p>Hotel Guest</p>
          </div>
        </div>
        <FaLock className="lock-icon" />
      </header>

      <section className="recommendation">
        <h4>Recommended for you</h4>
        <div className="recommend-card">
          <img
            src="https://via.placeholder.com/100"
            alt="Spa"
            className="recommend-img"
          />
          <div className="recommend-content">
            <span className="price-tag">From $50/person</span>
            <h5>Enjoy some me time</h5>
            <p>Relax with our massages and treatments.</p>
            <span className="facility-info">Spa facilities will close in 4 hours</span>
          </div>
        </div>
      </section>

      <section className="popular-experiences">
        <h4>Popular experiences</h4>
        <div className="experience-list">
          <div className="experience-item">
            <img src="https://via.placeholder.com/50" alt="Bike" />
            <p>Bike Riding</p>
          </div>
          <div className="experience-item">
            <img src="https://via.placeholder.com/50" alt="Dinner" />
            <p>Dinner at the Table</p>
          </div>
        </div>
      </section>

      <section className="services">
        <h4>All services</h4>
        <div className="service-item">Facilities ➝</div>
        <div className="service-item">Virtual Key ➝</div>
        <div className="service-item">My Room ➝</div>
        <div className="service-item">Order Room Service ➝</div>
      </section>

      <footer className="bottom-menu">
        <FaHome className="menu-icon" />
        <FaConciergeBell className="menu-icon" />
        <FaUser className="menu-icon" />
      </footer>
    </div>
  );
};

export default HotelDashboard;
