import React, {useContext} from 'react'
import './step.scss';
import { Icon, Step, Button } from 'semantic-ui-react'
import {cartContext} from '../../context/CartContext';
/* PROBAR useParams() */

const CartStep = (item) => {

    const { lista, actualizarTotal, removeItem, limpiarCarrito } = useContext(cartContext);
    
    return (
        <>
            <section className="step_container">
                <Step.Group>

                    <Step className={window.location.href === "http://localhost:3000/cart" ? 'step active' : ''}> {/* PROBAR useParams()  */}
                            <Icon name='tag' />
                            <Step.Content>
                                <Step.Title>Carrito de productos</Step.Title>
                                <Step.Description>Verifique sus productos seleccionados</Step.Description>
                            </Step.Content>
                        
                    </Step>


                    <Step className={window.location.href === "http://localhost:3000/clientdata" ? 'step active' : ''}>
                        <Icon name='edit' />
                        <Step.Content>
                            <Step.Title>Datos del cliente</Step.Title>
                            <Step.Description>Ingrese sus datos para confirmar compra</Step.Description>
                        </Step.Content>
                    </Step>
                    
                    <Step className='step_pago'>
                        <Icon name='dolly' />
                        <Step.Content>
                            <Step.Title>Pago y envio</Step.Title>
                            <Step.Description>Envio, medios y formas de pago</Step.Description>
                        </Step.Content>
                    </Step>

                </Step.Group>
            </section>
        </>
    )
}

console.log(CartStep)

export default CartStep; 