import React , {useContext} from 'react';
import { cartContext } from "../../../context/CartContext";
import {NavLink} from "react-router-dom";
import {Button, Icon} from "semantic-ui-react";
import './pucharseData.scss';

const PurchaseData = () => {
    const { cart, actualizarTotal, cantidad } = useContext(cartContext);

    return (
        <>
             <div>
                
                <h2 style={{fontWeight:'400', color:'#00532c', marginBottom:'35px'}}>Su compra: </h2>

                {cart.map((elemento) => {
                    return (
                        <>
                            <section className='cartProducts_container'>
                                <div className='cart_product' style={{width:'25em', height:'7em'}}>
                                    
                                    <img src={elemento.item.img} style={{maxWidth:'100%'}}/>
                            
                                    <div className='cart_product_info'>

                                        <h2 className='pucharseData_title'>{elemento.item.title}</h2>

                                        <div>
                                            <span className='pucharseData_text'> Color:  </span>
                                            <span className='pucharseData_text'> Talla: </span>
                                        </div>

                                        <div>
                                            <span className='pucharseData_text'>Selecciono: {elemento.quantity}</span>
                                            <span className='pucharseData_title' style={{color:'#00532c', marginLeft:'50px'}}>$ {elemento.item.price.toLocaleString("en-US")}</span>
                                        </div>

                                    </div>


                                </div>
                            </section>
                        
                        </>
                    )
                    
                })}

                <div className='priceTotal_container'>
                    <div>

                        <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px'}}>
                            <h3 style={{fontWeight:'600'}}>{cantidad} Productos</h3> 
                            <h3 style={{fontWeight:'600'}}>$ {actualizarTotal().toLocaleString("en-US")}</h3>
                        </div> 
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            <h3 className=''>Total:</h3> 
                            <h3 className='' style={{color:'#00532c'}}>$ {actualizarTotal().toLocaleString("en-US")}</h3>
                        </div> 
                        
                    </div>

                    <NavLink to='/cart'>
                    <Button animated>
                        <Button.Content visible>Carrito</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow left' /> Volver
                        </Button.Content>
                    </Button>
                    </NavLink>

                </div>
            </div>
        </>
    )
}

export default PurchaseData
