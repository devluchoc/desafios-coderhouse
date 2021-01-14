import React, { Fragment } from "react";
import "./style.css";
import BotonUno from "./components/Boton.js";
import NavBar from './components/NavBar';

export default function App() {
  return (
    <Fragment>
      <NavBar />
      <BotonUno/>
    </Fragment>
  );
}
