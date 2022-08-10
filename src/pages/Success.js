import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div>
      <nav>
        <Link to="/">List</Link>
        <Link to="/form">Form</Link>
      </nav>
      <h1>Success</h1>
    </div>
  );
}

export default Success;
