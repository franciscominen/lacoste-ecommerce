import React, { useState } from "react";
import './style.scss';

const ItemCount = ({ stock, decrementar, incrementar, onAdd, contador }) => {
  return (
    <>
    <div>
      <div className="buttonsCountContainer" s>
        <button onClick={() => {decrementar()}} className="stockBtn"> - </button>
        <p>{contador}</p>
        <button onClick={() => {incrementar(stock)}} className="stockBtn"> + </button>
      </div>
      <button onClick={onAdd} className="onAddBtn">
        Agregar <img src={"/img/CartWidget/CartIcon.svg"} style={{maxWidth:'40px', marginLeft:'10px'}}/>
      </button>
    </div>
    </>
  )
};
export default ItemCount;