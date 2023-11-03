import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to={"/"}>
            <img className="logo" src={logo} alt="Makkok-logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"}>Home</Link>
              </li>
              {user ? (
                <li className="nav-item">
                  <a href=" " onClick={logout}>Logout</a>
                </li>
              ) : (
                <li className="nav-item">
                  <Link to={"login"}>Login</Link>
                </li>
              )}
              <li className="nav-item">
                <Link to={"register"}>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
