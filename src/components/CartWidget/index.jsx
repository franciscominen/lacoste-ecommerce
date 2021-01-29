import React from 'react';
import CartIcon from './CartIcon.svg';

const CartWidgetComponent = () => {
    return (
        <div>
            <img src={CartIcon} className='cartIcon' style={{maxWidth:'40px', margin:'0 15px'}}/>
        </div>
    )
}

export default CartWidgetComponent