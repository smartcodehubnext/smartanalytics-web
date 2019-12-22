import React from "react";

export default function StaticSidebar() {
  return (
    <div className="page-sidebar">
      <div className="profile-menu">
        <a>
          <img
            alt=""
            src="https://www.smartcodehub.com/assets/img/newlogo.png"
          />
        </a>
      </div>
      <div className="page-sidebar-inner">
        <div className="page-sidebar-menu">
          <ul>
            <li>
              <a href="#" title="Dashboard">
                <i className="fas fa-rocket"></i>
              </a>
            </li>
            <li>
              <a href="#" title="News">
                <i className="fas fa-globe-africa"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Inbox">
                <i className="fas fa-inbox"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Chat">
                <i className="far fa-comments"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="settings-menu-btn">
        <a className="settings-menu-link">
          <i className="fas fa-wrench"></i>
        </a>
      </div>
    </div>
  );
}
