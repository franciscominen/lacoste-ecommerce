import React, { useContext, useState } from "react"
import CartContext from "../../context/CartContext";
import { Button } from 'semantic-ui-react'
import {NavLink} from "react-router-dom"
/* import {firestore} from "../firebaseConfig"
import firebase from "firebase" */

import './styles.scss';

const CartComponent = (item) => {

    const { lista, actualizarTotal, removeItem, limpiarCarrito } = useContext(CartContext);

    return (
        <>
        <div>   

            <div className={lista.length === 0? "": "container-carrito"}>
                {lista.length === 0 ? <>
                    <h3>No hay items aún</h3>
                    <NavLink to="/">Regresar</NavLink>
                </>
                                    :
                <>
                    {lista.map((elemento) => {
                        return (
                            <>
                                <div className="item">
                                    <img src={elemento.item.pictureUrl}></img>
                                    <div className="info-carrito">
                                        <h2>{elemento.item.title}</h2>
                                        <p>precio x unidad: ${elemento.item.price}</p>
                                        <p className="cant">Cantidad : {elemento.quantity}</p>
                                        <p className="subTot">SubTotal: $ {elemento.item.price * elemento.quantity}</p>
                                    </div>
                                    <h2 onClick={()=>{removeItem(elemento)}} > X </h2>
                                </div>
                            </>
                        )
                    })}
                    <h2 className="tot">Total: ${actualizarTotal()}</h2>
                </>}
            </div>

            {/* {id != ""? <p>su orden de compra ha sido confirmada, Nro de orden : {id}</p>:null} */}

        </div> 
        </>
    )
}

export default CartComponent;




{/* <section className='cartProducts_container'>

<div className='cart_product'>

    <div className='image_container'>
        {item.img} 
    </div>
    
    <div className='cart_product_info'>

        <h2 className='product_tittle'>{item.name}</h2>

        <div className='talla_color'>
            <span className='product_color'> {item.color}  </span>
            <span className='product_talle'> Talla: {item.talla} </span>
        </div>

        <div className='price_quantity'>
            <span className='product_price'>{item.price}</span>
            <span className='product_quantity'>Selecciono: {item.quantity}</span>
        </div>

    </div>
        
    <div >
        <Button icon='remove' color='red' size='mini' onClick={removeItem} />
    </div>

</div>
</section> */}