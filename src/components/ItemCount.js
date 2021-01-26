import React, { useState } from "react";
import Pirulo from "./ItemCountLog";

const Contador = () => {
  const [count, setCount] = useState(0);
  const qty = 7;

  const add = () => {
    if (count < qty) {
      setCount(count + 1);
    }
    if (count === qty) {
      alert("Solo tengo eso en stock");
    }
  };

  const less = () => {
    if (count === 0) {
      alert("Operación no valida");
      return;
    }
    setCount(count - 1);
  };

  const onAdd = () => {
    if (count < qty) {
      setCount(count + 1);
      alert("Compra Realizada con exito!");
    }
  };

  return (
    <>
      <Pirulo count={count} add={add} less={less} onAdd={onAdd} />
    </>
  );
};

export default Contador;
