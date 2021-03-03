import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import CartContext from "../../context/CartContext";

const CartWidgetComponent = () => {

    const {Cantidad,actualizarCantidad,lista} = useContext(CartContext)
    console.log(lista)

    return (
        <div className = "compras">

            {Cantidad != 0? <><Link className="link" to="/Cart">
                <img src={"/img/CartWidget/CartIcon.svg"} className='cartIcon' style={{maxWidth:'40px', margin:'5px 15px 0'}}/>
            </Link>

            <span className="cantItems"> {actualizarCantidad()} </span> </> : null}
        
        </div>
    )
}

export default CartWidgetComponent

{/* <div>
            <img src={"/img/CartWidget/CartIcon.svg"} className='cartIcon' style={{maxWidth:'40px', margin:'5px 15px 0'}}/>
        </div> */}