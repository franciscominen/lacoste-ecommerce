import React from "react";
import "./style.scss"
import { Link } from "react-router-dom";
import { Button, Icon } from 'semantic-ui-react'

export const ItemCard = ({ item }) => {
  
  const price = item.price.toLocaleString("en-US")
  const lastPrice = item.lastPrice.toLocaleString("en-US")

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
        <p className='productPrice'>$ {price}</p>
        <p className='productLastPrice'>$ {lastPrice}</p>
        <p className='stockActual'>Stock actual: {item.stock}</p>
          
      </div>

      <Link to={`/item/${item.id}`} className='btn_irItemDetail'>
        <Button animated='fade' >
          <Button.Content visible>Ver detalle</Button.Content>
          <Button.Content hidden>Envio gratis <Icon name='dolly'/></Button.Content>
        </Button>
      </Link>

    </div>
  );
};