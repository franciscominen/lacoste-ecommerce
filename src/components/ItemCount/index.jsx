import React, { useState } from "react";

const ItemCount = ({ onAdd }) => {
  console.log(onAdd);
  const [contador, setContador] = useState(1);

  const incrementar = () => {
    let max = 10;
    if (contador < max) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    let min = 1;
    if (contador > min) {
      setContador(contador - 1);
    }
  };
  const handlerOnAdd = () => {
    onAdd(contador);
  };

  return (
    <div style={{ width: "100%", height: "100vw" }}>
      <button onClick={decrementar}>-</button>
      <span>{contador}</span>
      <button onClick={incrementar}>+</button>
      <br />
      <button onClick={handlerOnAdd}>Agregar al carrito</button>
    </div>
  );
};
export default ItemCount;