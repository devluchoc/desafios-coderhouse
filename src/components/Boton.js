import React, { Fragment } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import "./CartWidget.css";

const BotonUno = ({greeting}) => {
  return (
    <Fragment>
      <div class="bg-dark text-center">
        <h1>{greeting}</h1>
         <h2 className="text-white"> Es hora de comprar! <a href="#"><FaShoppingCart className="carrito" /></a> </h2>
        <h3>
          <a href="https://www.zeitverschiebung.net/es/city/3435910">
            <span>Hora actual en</span>
            <br />
            Buenos Aires, Argentina
          </a>
        </h3>{" "}
        <iframe
          src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=es&size=large&timezone=America%2FArgentina%2FBuenos_Aires"
          width="100%"
          height="140"
          frameborder="0"
          seamless
        />
      </div>
    </Fragment>
  );
};
export default BotonUno;
