import React, { useEffect } from "react";
import "./Error.css";

const Error = () => {
  useEffect(() => {
    let styleObj = document.querySelector(".navbar_container");
    styleObj.style.display = "none";
  });
  return (
    <>
      <div className="error_container">
        <h1>Error</h1>
        <a href="/">Home</a>
      </div>
    </>
  );
};

export default Error;
