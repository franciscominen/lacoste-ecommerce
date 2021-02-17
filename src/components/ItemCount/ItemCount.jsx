import React, { useState } from "react";
import './style.scss';

const ItemCount = ({ onAdd, stock  }) => {

  console.log(onAdd);
  const [contador, setContador] = useState(1);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  const handlerOnAdd = () => {
    onAdd(contador);
  };

  return (
    <>
    <div>
      <div className="buttonsCountContainer" s>
        <button onClick={() => {decrementar()}} className="stockBtn"> - </button>
        <p>{contador}</p>
        <button onClick={() => {incrementar(stock)}} className="stockBtn"> + </button>
      </div>
      <button onClick={handlerOnAdd} className="onAddBtn">
        Agregar <img src={"/img/CartWidget/CartIconAlt.svg"} style={{maxWidth:'35px', marginLeft:'10px'}}/>
      </button>
    </div>
    </>
  )
};
export default ItemCount;