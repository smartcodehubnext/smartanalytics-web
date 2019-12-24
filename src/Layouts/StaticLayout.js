import React from "react";
import { Link } from "react-router-dom";

export default function StaticLayout({ children }) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link class="navbar-brand" to="/">
          Smart Analytics
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
      </nav>
      <div className="container mt-3">{children}</div>
    </div>
  );
}
