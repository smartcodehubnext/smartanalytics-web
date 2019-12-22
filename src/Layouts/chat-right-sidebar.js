import React from "react";

export default function ChatRightSidebar() {
  return (
    <div className="page-right-sidebar" id="chat-right-sidebar">
      <div className="page-right-sidebar-inner">
        <div className="right-sidebar-top">
          <div className="chat-top-info">
            <span className="chat-name">Noah</span>
            <span className="chat-state">2h ago</span>
          </div>
          <a
            className="right-sidebar-toggle chat-sidebar-close float-right"
            data-sidebar-id="chat-right-sidebar"
          >
            <i className="icon-keyboard_arrow_right"></i>
          </a>
        </div>
        <div className="right-sidebar-content">
          <div className="right-sidebar-chat slimscroll">
            <div className="chat-bubbles">
              <div className="chat-start-date">02/06/2017 5:58PM</div>
              <div className="chat-bubble them">
                <div className="chat-bubble-img-container">
                  <img src="../../assets/images/avatars/avatar1.png" alt="" />
                </div>
                <div className="chat-bubble-text-container">
                  <span className="chat-bubble-text">Hello</span>
                </div>
              </div>
              <div className="chat-bubble me">
                <div className="chat-bubble-text-container">
                  <span className="chat-bubble-text">Hello!</span>
                </div>
              </div>
              <div className="chat-start-date">03/06/2017 4:22AM</div>
              <div className="chat-bubble me">
                <div className="chat-bubble-text-container">
                  <span className="chat-bubble-text">lorem</span>
                </div>
              </div>
              <div className="chat-bubble them">
                <div className="chat-bubble-img-container">
                  <img src="../../assets/images/avatars/avatar1.png" alt="" />
                </div>
                <div className="chat-bubble-text-container">
                  <span className="chat-bubble-text">ipsum dolor sit amet</span>
                </div>
              </div>
            </div>
          </div>
          <div className="chat-write">
            <form className="form-horizontal">
              <input
                type="text"
                className="form-control"
                placeholder="Say something"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
