import React from "react";
import ReactDom from "react-dom";
import { MdClear } from "react-icons/md";
const DropdownLinks = ({ onConfirm }) => {
  const Backdrop = () => {
    return <div className="backdrop" onClick={onConfirm}></div>;
  };

  const NavLinks = () => {
    return (
      <div className="mobile-header--links--container">
        <MdClear className="clear" onClick={onConfirm} />
        <ul className="mobile-header--links">
          <li onClick={onConfirm}>home</li>
          <li onClick={onConfirm}>shop</li>
          <li onClick={onConfirm}>about</li>
          <li onClick={onConfirm}>contact</li>
        </ul>
      </div>
    );
  };
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <NavLinks />,
        document.getElementById("mobileNavList-root")
      )}
    </React.Fragment>
  );
};

export default DropdownLinks;
