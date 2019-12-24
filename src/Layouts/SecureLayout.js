import React from "react";
import PageHeader from "./pageHeader";
import MainRightSidebar from "./main-right-sidebar";
import ChatRightSidebar from "./chat-right-sidebar";
import { BreadCrumb } from "./breadCrumb";
import StaticSidebar from "./staticSidebar";
import SettingsSideBar from "./SettingsSideBar";
import SecondarySidebar from "./secondary-sidebar";
const Sidebars = () => {
  return (
    <>
      <StaticSidebar></StaticSidebar>
      <SettingsSideBar></SettingsSideBar>
      <div className="settings-overlay"></div>
    </>
  );
};
export default function SecureLayout({ children }) {
  return (
    <div className="page-container">
      <Sidebars></Sidebars>
      <div className="page-content">
        <SecondarySidebar></SecondarySidebar>
        <PageHeader></PageHeader>
        <div className="page-inner no-page-title" style={{ minHeight: "80vh" }}>
          <div id="main-wrapper">
            <BreadCrumb></BreadCrumb>
            {children}
          </div>
        </div>
      </div>
      <MainRightSidebar></MainRightSidebar>
      <ChatRightSidebar></ChatRightSidebar>
    </div>
  );
}
