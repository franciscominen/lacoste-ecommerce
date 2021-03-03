/* import React, {useContext} from 'react'
import CartComponent from '../components/Cart/Cart';
import './styles.scss';
import { Icon, Step, Button } from 'semantic-ui-react'
import CartContext from '../context/CartContext';
import {firestore} from "../firebaseConfig"
import firebase from "firebase" 

const CartContainer = (item) => {

    const { lista, actualizarTotal, removeItem, limpiarCarrito } = useContext(CartContext);
    
    return (
        <>
            
            <section style={{background:'#F1F1F1', height:'100vh', display:'flex', flexDirection:'column', alignItems:'center'}}>

            <Step.Group>

                <Step active>
                    <Icon name='tag' />
                    <Step.Content>
                        <Step.Title>Carrito de productos</Step.Title>
                        <Step.Description>Verifique sus productos seleccionados</Step.Description>
                    </Step.Content>
                </Step>

                <Step>
                    <Icon name='dolly' />
                    <Step.Content>
                        <Step.Title>Envio</Step.Title>
                        <Step.Description>Seleccione el destino de su compra</Step.Description>
                    </Step.Content>
                </Step>
                
                <Step>
                    <Icon name='dollar' />
                    <Step.Content>
                        <Step.Title>Pago</Step.Title>
                        <Step.Description>Medios y formas de pago</Step.Description>
                    </Step.Content>
                </Step>

            </Step.Group>

                <section style={{display:'flex', justifyContent:'space-between', width:'64.3em'}}>

                    <div>
                        
                    </div>

                    

                    <section>

                        <div className='checkout_container'>

                        <div className='totalPrice_container'>
                            <ul>
                                <li>
                                    <span className='checkout_quantity'>PRODUCTOS: {item.quantity} </span>
                                    <span className='checkout_totalPrice' style={{color:'#2C3330'}}>{precioTotal}</span>
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
                                    <span className='checkout_totalPrice'>{precioTotal}</span>
                                </li>
                            </ul>
                        </div>

                        <p className='terms_conditions'>Acepto sin reservas las condiciones generales</p>

                        <Button animated='fade'>
                            <Button.Content visible>Coordinar envio a casa <Icon name='dolly'/></Button.Content>
                            <Button.Content hidden>Siguiente paso <Icon name='arrow right'/></Button.Content>
                        </Button>

                        </div>

                        <Button inverted color='red' style={{marginTop:'15px', fontSize:'15px'}} onClick={clearCart}> 
                            <Icon name='trash alternate' /> Vaciar el carrito 
                        </Button>

                    </section>
                    
                </section>
            
            </section>
            
        </>
    )
}

console.log(CartComponent)
export default CartContainer; */