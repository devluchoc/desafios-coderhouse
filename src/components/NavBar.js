import React, { Fragment } from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          MundoAndroid
        </a>
        <CartWidget />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mr-auto ml-auto">
            <a className="nav-item nav-link" href="#">
              Sobre Nosotros
            </a>
            <a className="nav-item nav-link" href="#">
              Productos
            </a>
            <a className="nav-item nav-link" href="#">
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
