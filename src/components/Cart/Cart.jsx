import {useContext} from 'react';
import {cartContext} from '../../context/CartContext';
import { Button, Icon } from 'semantic-ui-react'
import './styles.scss';

const CartComponent = (item) => {

    const CartContextUse = useContext(cartContext) // tiene que estar trayendo el value.

    return (
        <>
        <section style={{width:'64em', display:'flex', justifyContent:'space-between', margin:'25px 0'}}>

                <section className='cartProducts_container'>

                    <div className='cart_product'>

                        <div className='image_container'>
                            <img src={"/img/Items/remera-lisa.svg"}  className='product_image' style={{maxWidth:'180px'}}/>   
                        </div>
                        
                        <div className='cart_product_info'>

                            <h2 className='product_tittle'>Remera lisa con cuello diferenciado</h2>

                            <div className='talla_color'>
                                <span className='product_color'> Gris  /</span>
                                <span className='product_talle'> Talla: M</span>
                            </div>

                            <div className='price_quantity'>
                                <span className='product_price'>$ 3.499,00</span>
                                <span className='product_quantity'>Selecciono: 2</span>
                            </div>

                        </div>
                            
                        <div >
                            <Button icon='remove' color='red' size='mini'/>
                        </div>

                    </div>
                </section>

                <div className='checkout_container'>
                    <div className='totalPrice_container'>
                        <ul>
                            <li>
                                <span className='checkout_quantity'>PRODUCTOS: 2</span>
                                <span className='checkout_totalPrice' style={{color:'#2C3330'}}>$ 6.999,00</span>
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
                                <span className='checkout_totalPrice'>$ 6.999,00</span>
                            </li>
                        </ul>
                    </div>

                    <p className='terms_conditions'>Acepto sin reservas las condiciones generales</p>

                    <Button animated='fade'>
                        <Button.Content visible>Coordinar envio a casa <Icon name='dolly'/></Button.Content>
                        <Button.Content hidden>Siguiente paso <Icon name='arrow right'/></Button.Content>
                    </Button>

                </div>

        </section>
    
        </>
    )
}

export default CartComponent;