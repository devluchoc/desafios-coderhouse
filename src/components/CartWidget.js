import React from "react";
import Logo from "./logo.svg";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <>
      <a class="navbar-brand" id="logo" href="#">
        <img
          src={Logo}
          class="d-inline-block align-top"
          height="50"
          alt="logo"
        />
      </a>
    </>
  );
};

export default CartWidget;
