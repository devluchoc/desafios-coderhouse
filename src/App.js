import React, { Fragment } from "react";
import "./style.css";
import BotonUno from "./components/Boton.js";
import NavBar from './components/NavBar';
import Contador from './components/ItemCount'

export default function App() {
  
  return (
    <Fragment>
      <NavBar />
      <Contador />
      <BotonUno greeting={"Bienvenido!"}/>
      
    </Fragment>
  )
}