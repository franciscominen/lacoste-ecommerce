import React, { useState, useEffect } from "react";
import "./item.scss"
import { Link } from "react-router-dom";

export const ItemComponent = ({ item }) => {
  return (
    <div className='itemCard'>

            {item.img}
            
            <div className='itemDescription'>
                <div className='discountContainer'>
                    <p className='productVariants'>{item.discount}</p>
                    <p className='productVariants' style={{background:'gray'}}>{item.coleccion}</p>
                    <p className='productVariants' style={{background:'#496ABE'}}>{item.color}</p>
                </div>
                
                <h3 className='productName'>{item.name}</h3>
                <p className='productPrice'>$ {item.price}</p>
                <p className='productLastPrice'>$ {item.lastPrice}</p>
                <p className='stockActual'>Stock actual: {item.stock}</p>
                
            </div>

            <Link to={`/product/${item.id}`} className='BtnVerDetalle'> Ver detalle </Link>

        </div>
  );
};