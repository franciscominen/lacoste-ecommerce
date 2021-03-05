import React, {useContext} from 'react'
import './step.scss';
import { Icon, Step, Button } from 'semantic-ui-react'
import {cartContext} from '../../context/CartContext';
import FadeIn from 'react-fade-in';


const CartStep = (item) => {

    const { lista, actualizarTotal, removeItem, limpiarCarrito } = useContext(cartContext);
    
    return (
        <>
            <FadeIn>
            <section className="step_container">
                <Step.Group>

                    <Step active >
                            <Icon name='tag' />
                            <Step.Content>
                                <Step.Title>Carrito de productos</Step.Title>
                                <Step.Description>Verifique sus productos seleccionados</Step.Description>
                            </Step.Content>
                        
                    </Step>


                    <Step>
                        <Icon name='edit' />
                        <Step.Content>
                            <Step.Title>Datos del cliente</Step.Title>
                            <Step.Description>Ingrese sus datos para confirmar compra</Step.Description>
                        </Step.Content>
                    </Step>
                    
                    <Step>
                        <Icon name='dolly' />
                        <Step.Content>
                            <Step.Title>Pago y envio</Step.Title>
                            <Step.Description>Envio, medios y formas de pago</Step.Description>
                        </Step.Content>
                    </Step>

                </Step.Group>
            </section>
            </FadeIn>
        </>
    )
}

console.log(CartStep)

export default CartStep; 