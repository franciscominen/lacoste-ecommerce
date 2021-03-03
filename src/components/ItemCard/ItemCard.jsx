import React, { useState, useEffect } from "react";
import "./style.scss"
import { Link } from "react-router-dom";
import { Button, Icon } from 'semantic-ui-react'

export const ItemCard = ({ item }) => {
  return (
    <div className='itemCard'>

            <img src={item.img} style={{maxWidth:'320px'}}/>
            
            <div className='itemDescription'>
                <div className='discountContainer'>
                    <p className='productVariants'>{item.discount}</p>
                    <p className='productVariants' style={{background:'gray'}}>{item.colection}</p>
                    <p className='productVariants' style={{background:'#496ABE'}}>{item.color}</p>
                </div>
                
                <h3 className='productName'>{item.title}</h3>
                <p className='productPrice'>$ {item.price}</p>
                <p className='productLastPrice'>$ {item.lastPrice}</p>
                <p className='stockActual'>Stock actual: {item.stock}</p>
                
            </div>

            <Link to={`/product/${item.id}`} className='btn_irItemDetail'>
              <Button animated='fade' >
                <Button.Content visible>Ver detalle</Button.Content>
                <Button.Content hidden>Envio gratis <Icon name='dolly'/></Button.Content>
              </Button>
            </Link>
            

          {/*   <Link to={`/product/${item.id}`} className='BtnVerDetalle'> Ver detalle </Link> */}

        </div>
  );
};