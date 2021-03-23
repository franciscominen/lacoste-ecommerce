import React, { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { Button } from 'semantic-ui-react';
import {Link} from "react-router-dom";
import "./styles/styles.scss";
import CartStep from "./CartStep";
import FadeIn from "react-fade-in";
import ProductsInCart from "./ProductsInCart";
import CheckoutComponent from "./CheckoutComponent";

const CartComponent = () => {
    const { cart } = useContext(cartContext);

    return (
        <>
            <>
                <CartStep />
            </>

            <FadeIn>
            <div style={{display:'flex', justifyContent:'center', margin:'2em 0'}}>   

                <div className={ cart.length === 0 ? "" : "container_carrito"}>
                    {cart.length === 0 ? 
                    <>
                        <div style={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'20px 0'}}>
                        <h3 className='emptyTitle'>No hay productos en el carrito</h3>
                            <Link to="/catalogo">
                                <Button style={{color:'white', background:'#00532c'}}>
                                    Regresar al catalogo
                                </Button>
                            </Link> 
                        </div>
                        
                    </>
                    :
                    <>
                        <ProductsInCart/>
                        <CheckoutComponent/>
                    </>}
                </div>
            </div> 
            </FadeIn>
            </>
    )
}

export default CartComponent