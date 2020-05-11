import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="jumbotron">
      <h1>Ups... Page Not Found :(</h1>
      <Link to="/" className="btn btn-primary">
        Return Home
      </Link>
    </div>
  );
};

export default PageNotFound;
