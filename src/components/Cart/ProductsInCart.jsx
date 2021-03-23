import React, { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { Button } from 'semantic-ui-react';

const ProductsInCart = () => {
    const { cart, actualizarTotal, removeItem, clearCart, cantidad} = useContext(cartContext);

    return (
        <>
            <div style={{display:'flex', flexDirection:'column'}}> 
                {cart.map((elemento) => {
                    return (
                        <>
                            <section className='cartProducts_container'>
                                <div className='cart_product'>

                                    <div className='img_container'>
                                        <img src={elemento.item.img}/>
                                    </div>
                                    
                                    <div className='cart_product_info'>

                                        <h2 className='product_tittle'>{elemento.item.title}</h2>

                                        <div className='price_quantity'>
                                            <span className='product_quantity'>Selecciono: {elemento.quantity}</span>
                                            <span className='product_price'>$ {elemento.item.price.toLocaleString("en-US")}</span>
                                        </div>

                                    </div>
                                    
                                    <div className='removeBtn_container'>
                                        <Button icon='remove' color='red' size='mini' onClick={()=>{removeItem(elemento)}} />
                                    </div>

                                </div>
                            </section>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default ProductsInCart