import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to AuthSystemApp</h1>
          <p>
            Manage your account with ease! Sign up today and experience secure,
            seamless user management.
          </p>
          <Link to="/login" className="btn-primary">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features d-flex flex-column flex-lg-row justify-content-around">
          <div className="feature">
            <h3>Secure Login</h3>
            <p>Your data is safe with our secure authentication system.</p>
          </div>
          <div className="feature">
            <h3>Manage Your Account</h3>
            <p>Update or delete your account anytime with a few clicks.</p>
          </div>
          <div className="feature">
            <h3>Responsive Design</h3>
            <p>Access the platform on any device, anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
