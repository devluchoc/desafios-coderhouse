import React from 'react';

const Pirulo = ({ count, add, less, onAdd }) => {
return (
    <>
    <div class="text-center bg-dark">
      <h1>{count}</h1>
      <button onClick={() => add()} class="btn btn-info m-2"  >+</button>
      <button onClick={() => less()} class="btn btn-danger" >-</button>
      <div> 
      <button onClick={onAdd} class="btn btn-success"> COMPRAR </button>
      </div>
    </div>
    </>
  );
}

export default Pirulo;