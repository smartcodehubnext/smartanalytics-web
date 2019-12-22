import React, { useEffect } from "react";
import { withRouter } from "react-router";

const BreadCrumbFactory = ({ match, location }) => {
  useEffect(() => {
    return () => {};
  }, [match.path]);
  return (
    <div className="content-header">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb breadcrumb-style-1">
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item active" aria-current="page">
            {location.pathname.replace("/", "")}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export const BreadCrumb = withRouter(BreadCrumbFactory);
