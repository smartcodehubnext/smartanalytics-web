import React from "react";

export default function MainRightSidebar() {
  return (
    <div className="page-right-sidebar" id="main-right-sidebar">
      <div className="page-right-sidebar-inner">
        <div className="right-sidebar-top">
          <span className="chat-header">Chat</span>
          <a
            className="right-sidebar-toggle right-sidebar-close"
            data-sidebar-id="main-right-sidebar"
          >
            <i className="icon-close"></i>
          </a>
        </div>
        <div className="right-sidebar-content">
          <div className="chat-list">
            <span className="chat-title">Recent</span>
            <a
              className="right-sidebar-toggle chat-item unread"
              data-sidebar-id="chat-right-sidebar"
            >
              <div className="user-avatar">
                <img src="../../assets/images/avatars/avatar1.png" alt="" />
              </div>
              <div className="chat-info">
                <span className="chat-author">David</span>
                <span className="chat-text">Hello there!</span>
                <span className="chat-time">16:20</span>
              </div>
            </a>
            <a
              className="right-sidebar-toggle chat-item unread active-user"
              data-sidebar-id="chat-right-sidebar"
            >
              <div className="user-avatar">
                <img src="../../assets/images/avatars/avatar2.png" alt="" />
              </div>
              <div className="chat-info">
                <span className="chat-author">Bob</span>
                <span className="chat-text">Hello there!</span>
                <span className="chat-time">11:34</span>
              </div>
            </a>
          </div>
          <div className="chat-list">
            <span className="chat-title">Older</span>
            <a
              className="right-sidebar-toggle chat-item"
              data-sidebar-id="chat-right-sidebar"
            >
              <div className="user-avatar">
                <img src="../../assets/images/avatars/avatar3.png" alt="" />
              </div>
              <div className="chat-info">
                <span className="chat-author">Tom</span>
                <span className="chat-text">Hello there!</span>
                <span className="chat-time">2d</span>
              </div>
            </a>
            <a
              className="right-sidebar-toggle chat-item active-user"
              data-sidebar-id="chat-right-sidebar"
            >
              <div className="user-avatar">
                <img src="../../assets/images/avatars/avatar4.png" alt="" />
              </div>
              <div className="chat-info">
                <span className="chat-author">Anna</span>
                <span className="chat-text">Hello there!</span>
                <span className="chat-time">4d</span>
              </div>
            </a>
            <a
              className="right-sidebar-toggle chat-item active-user"
              data-sidebar-id="chat-right-sidebar"
            >
              <div className="user-avatar">
                <img src="../../assets/images/avatars/avatar5.png" alt="" />
              </div>
              <div className="chat-info">
                <span className="chat-author">Noah</span>
                <span className="chat-text">Hello there!</span>
                <span className="chat-time">&nbsp;</span>
              </div>
            </a>
            <a
              className="load-more-messages"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Load More"
            >
              &bull;&bull;&bull;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
