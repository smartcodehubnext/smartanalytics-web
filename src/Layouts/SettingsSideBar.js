import React from "react";

export default function SettingsSideBar() {
  return (
    <div className="settings-sidebar">
      <div className="settings-sidebar-content">
        <div className="settings-sidebar-header">
          <span>Settings</span>
          <a className="settings-menu-close">
            <i className="icon-close"></i>
          </a>
        </div>
        <div className="right-sidebar-settings">
          <span className="settings-title">General Settings</span>
          <ul className="sidebar-setting-list list-unstyled">
            <li>
              <span className="settings-option">Notifications</span>
              <input type="checkbox" className="js-switch" defaultChecked />
            </li>
            <li>
              <span className="settings-option">Activity log</span>
              <input type="checkbox" className="js-switch" defaultChecked />
            </li>
            <li>
              <span className="settings-option">Automatic updates</span>
              <input type="checkbox" className="js-switch" />
            </li>
            <li>
              <span className="settings-option">Allow backups</span>
              <input type="checkbox" className="js-switch" />
            </li>
          </ul>
          <span className="settings-title">Account Settings</span>
          <ul className="sidebar-setting-list list-unstyled">
            <li>
              <span className="settings-option">Chat</span>
              <input type="checkbox" className="js-switch" defaultChecked />
            </li>
            <li>
              <span className="settings-option">Incognito mode</span>
              <input type="checkbox" className="js-switch" />
            </li>
            <li>
              <span className="settings-option">Public profile</span>
              <input type="checkbox" className="js-switch" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
