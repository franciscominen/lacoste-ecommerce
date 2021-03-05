import "./style.scss";
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from "../../context/CartContext";
import FadeIn from 'react-fade-in';

const CartWidgetComponent = () => {

    const {Cantidad, actualizarCantidad, lista} = useContext(cartContext)
    console.log(lista)

    return (
        <div className="compras_container">
            <>
                <Link className="link" to="/Cart">
                    <img src={"/img/CartWidget/CartIcon.svg"} className='cartIcon' style={{maxWidth:'31px', marginRight:'15px'}}/>
                
                
                { Cantidad > 0 ?
                    
                    <div className="cantItems_container">
                        <span className="cantItems"> {actualizarCantidad()} </span> 
                    </div>
                    
                    : null
                }
                </Link>
            </> 
        </div>
    )
}

export default CartWidgetComponent