import React, { useContext, useState } from "react"
import { cartContext } from "../../context/CartContext";
import { Button, Icon } from 'semantic-ui-react'
import {Link} from "react-router-dom"
import "./styles.scss"

const CartComponent = (item) => {
    const { cart, setCart, actualizarTotal, removeItem, clearCart } = useContext(cartContext);

    return (
        <>
        <div style={{display:'flex', justifyContent:'center', margin:'2em 0'}}>   

            <div className={ cart.length === 0 ? "" : "container_carrito"}>
                {cart.length === 0 ? 
                <>
                    <div style={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'70px'}}>
                       <h3 className='emptyTitle'>No hay productos en el carrito</h3>
                        <Link to="/">
                            <Button style={{color:'white', background:'#00532c'}}>
                                Regresar al catalogo
                            </Button>
                        </Link> 
                    </div>
                    
                </>
                :
                <>
                <div style={{display:'flex', flexDirection:'column'}}> 
                    {cart.map((elemento) => {
                        return (
                            <>
                                <section className='cartProducts_container'>
                                    <div className='cart_product'>

                                        <div style={{marginLeft:'10px'}}>
                                            <img src={elemento.item.img} style={{maxWidth:'150px'}}/>
                                        </div>
                                        
                                        <div className='cart_product_info'>

                                            <h2 className='product_tittle'>{elemento.item.title}</h2>

                                            <div className='talla_color'>
                                                <span className='product_color'> Color:  </span>
                                                <span className='product_talle'> Talla: </span>
                                            </div>

                                            <div className='price_quantity'>
                                                <span className='product_quantity'>Selecciono: {elemento.quantity}</span>
                                                <span className='product_price'>$ {elemento.item.price.toLocaleString("en-US")}</span>
                                            </div>

                                        </div>
                                        
                                        <div >
                                            <Button icon='remove' color='red' size='mini' onClick={()=>{removeItem(elemento)}} />
                                        </div>

                                    </div>
                                </section>
                            
                            </>
                        )
                        
                    })}
                </div>
                    <div>
                        <div className='checkout_container'>

                            <div className='totalPrice_container'>
                                <ul>
                                    <li>
                                        <span className='checkout_quantity'>PRODUCTOS:  </span>
                                        <span className='checkout_totalPrice' style={{color:'#2C3330'}}> $ {actualizarTotal().toLocaleString("en-US")} </span>
                                    </li>
                                    <li>
                                        <span className='checkout_variants'>Envio</span>
                                        <span className='checkout_variants'> $ 299,00 </span>
                                    </li>
                                    <li>
                                        <span className='checkout_variants'>Promocion</span>
                                        <span className='checkout_variants'> - $ 299,00 </span>
                                    </li>
                                    <li>
                                        <span className='checkout_quantity'>TOTAL</span>
                                        <span className='checkout_totalPrice'>$ {actualizarTotal().toLocaleString("en-US")}</span>
                                    </li>
                                </ul>
                            </div>

                            <p className='terms_conditions'>Acepto sin reservas las condiciones generales</p>

                            <Link to={"/cart/clientdata"}>
                            <Button animated='fade'>
                                <Button.Content visible>Coordinar envio a casa <Icon name='dolly'/></Button.Content>
                                <Button.Content hidden>Siguiente paso <Icon name='arrow right'/></Button.Content>
                            </Button>
                            </Link>

                        </div>

                        <Button inverted size='mini' color='red' style={{marginTop:'15px', fontSize:'15px'}} onClick={()=>{clearCart()}} > 
                            <Icon name='trash alternate' /> Vaciar el carrito 
                        </Button>
                        <Link to="/catalogo">
                            <Button inverted size='mini' color='green' style={{marginTop:'15px', fontSize:'15px'}} > 
                                Continuar comprando
                            </Button>
                        </Link>
                    </div>
                </>}

            </div>

        </div> 
        </>
    )
}

export default CartComponent;