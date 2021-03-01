import {useContext} from 'react';
import {cartContext} from '../../context/CartContext';
import { Button, Icon } from 'semantic-ui-react';
import './styles.scss';

const CartComponent = (item) => {

    const {addItemToCart, cartItems, quantity, removeItem} = useContext(cartContext);

    return (
        <>
            <section className='cartProducts_container'>

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
            </section>
        </>
    )
}

export default CartComponent;