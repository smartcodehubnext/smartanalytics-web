import React from "react";
import { Link } from "react-router-dom";
export default function SecondarySidebar() {
  return (
    <div className="secondary-sidebar">
      <div className="secondary-sidebar-bar">
        <Link to="/" className="logo-box">
          Smart Analytics
        </Link>
      </div>
      <div className="secondary-sidebar-menu">
        <ul className="accordion-menu">
          <li className="active-page">
            <Link to="/">
              <i className="menu-icon icon-home4"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/home">
              <i className="menu-icon icon-apps"></i>
              <span>Apps</span>
              <i className="accordion-icon fas fa-angle-left"></i>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/home">Mailbox</Link>
              </li>
              <li>
                <Link to="/home">Todo</Link>
              </li>
              <li>
                <Link to="/home">Contacts</Link>
              </li>
              <li>
                <Link to="/home">Profile</Link>
              </li>
            </ul>
          </li>
          */}
          <li className="menu-divider"></li>
          <li>
            <Link to="/">
              <i className="menu-icon icon-help_outline"></i>
              <span>Documentation</span>
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy">
              <i className="menu-icon icon-public"></i>
              <span>Privacy Policy</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="menu-icon icon-public"></i>
              <span>Changelog</span>
              <span className="badge badge-danger">1.0</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
