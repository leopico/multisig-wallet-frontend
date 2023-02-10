import React from "react";
import { Link } from "react-router-dom";
import "../Err.css";

const Error = () => {
  return (
    <div className="err">
      <h2>Oops! Page not found.</h2>
      <h1>404</h1>
      <p>We can't find the page you're looking for.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default Error;
