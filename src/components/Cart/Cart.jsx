import {useContext} from 'react';
import {cartContex} from '../../context/CartContext';

const CartComponent = () => {

    const CartContextUse = useContext(cartContex) // tiene que estar trayendo el value.

    return (
        <div>
            <h1>Cart</h1>
        </div>
    )
}

export default CartComponent;