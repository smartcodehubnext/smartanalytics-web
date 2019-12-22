import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AUTH_LOGOUT } from "../store/Actions";

export default function PageHeader() {
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch({ type: AUTH_LOGOUT });
  };
  return (
    <div className="page-header">
      <div className="search-form">
        <form action="#" method="GET">
          <div className="input-group">
            <input
              type="text"
              name="search"
              className="form-control search-input"
              placeholder="Type something..."
            />
            <span className="input-group-btn">
              <button
                className="btn btn-default"
                id="close-search"
                type="button"
              >
                <i className="icon-close"></i>
              </button>
            </span>
          </div>
        </form>
      </div>
      <nav className="navbar navbar-default navbar-expand-md">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="logo-sm">
              <a id="sidebar-toggle-button">
                <i className="fas fa-bars"></i>
              </a>
              <a className="logo-box" href="index.html">
                <span>concept</span>
              </a>
            </div>
            <button
              type="button"
              className="navbar-toggler collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <i className="fas fa-angle-down"></i>
            </button>
          </div>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav mr-auto">
              <li className="collapsed-sidebar-toggle-inv">
                <a id="collapsed-sidebar-toggle-button">
                  <i className="fas fa-bars"></i>
                </a>
              </li>
              <li>
                <a id="toggle-fullscreen">
                  <i className="fas fa-expand"></i>
                </a>
              </li>
              <li>
                <a id="search-button">
                  <i className="fas fa-search"></i>
                </a>
              </li>
            </ul>
          </div>
          <ul className="nav navbar-nav">
            <li className="nav-item d-md-block">
              <a
                className="right-sidebar-toggle"
                data-sidebar-id="main-right-sidebar"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li className="dropdown nav-item d-md-block">
              <a
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-right dropdown-lg dropdown-content">
                <li className="drop-title">
                  Notifications
                  <a href="#" className="drop-title-link">
                    <i className="fas fa-angle-right"></i>
                  </a>
                </li>
                <li className="slimscroll dropdown-notifications">
                  <ul className="list-unstyled dropdown-oc">
                    <li>
                      <a href="#">
                        <span className="notification-badge bg-info">
                          <i className="fas fa-at"></i>
                        </span>
                        <span className="notification-info">
                          <span className="notification-info">
                            <b>John Doe</b> mentioned you in a post "Update
                            v1.5"
                          </span>
                          <small className="notification-date">06:07</small>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="notification-badge bg-danger">
                          <i className="fas fa-bolt"></i>
                        </span>
                        <span className="notification-info">
                          <span className="notification-info">
                            4 new special offers from the apps you follow!
                          </span>
                          <small className="notification-date">Yesterday</small>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="notification-badge bg-success">
                          <i className="fas fa-bullhorn"></i>
                        </span>
                        <span className="notification-info">
                          <span className="notification-info">
                            There is a meeting with <b>Ethan</b> in 15 minutes!
                          </span>
                          <small className="notification-date">Yesterday</small>
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link onClick={LogOut}>
                <i class="fas fa-sign-out-alt"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
