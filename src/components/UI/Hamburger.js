import React from "react";

const Hamburger = () => {
  return (
    <div className="container">
      <input className="label-check" id="label-check" type="checkbox" />
      <label for="label-check" className="hamburger-label">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        <label></label>
      </label>
    </div>
  );
};

export default Hamburger;