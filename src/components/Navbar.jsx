import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import "./Navbar.css";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            AuthSys.inc
          </Link>
          <ul className="navbar-nav flex-row gap-2">
            {user && (
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link active">
                  Dashboard
                </Link>
              </li>
            )}
            <li className="nav-item">
              <div className="nav-link" aria-current="page">
                Home
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">Features</div>
            </li>
            <li className="nav-item">
              <div className="nav-link">Pricing</div>
            </li>
            <li className="nav-item">
              <div className="nav-link disabled" aria-disabled="true">
                Disabled
              </div>
            </li>
          </ul>
          <IoIosSettings
            role="button"
            size={"20px"}
            onClick={() => {
              setMenuOpen(!isMenuOpen);
            }}
          />
        </div>
      </nav>
      <div className={`aside ${isMenuOpen ? "show" : ""}`}>
        <div className="text-end">
          <IoMdClose
            role="button"
            onClick={() => {
              setMenuOpen(!isMenuOpen);
            }}
          />
        </div>
        {!user && (
          <>
            <Link to="/login" className="nav-link fw-bold">
              Login
            </Link>
            <Link to="/register" className="nav-link fw-bold">
              Register
            </Link>
          </>
        )}
        {user && (
          <>
            <Link to="/update" className="nav-link fw-bold">
              Update Account
            </Link>
            <Link to="/delete" className="nav-link fw-bold">
              Delete Account
            </Link>
          </>
        )}

        {user && (
          <div
            className="nav-link fw-bold text-danger"
            role="button"
            onClick={handleLogout}
          >
            Logout
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
