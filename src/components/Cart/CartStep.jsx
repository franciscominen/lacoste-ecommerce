import React from 'react'
import './styles/step.scss';
import { Icon, Step } from 'semantic-ui-react'

const CartStep = () => {    
    return (
        <>
            <section className="step_container">
                <Step.Group>

                    <Step className={window.location.href === "http://localhost:3000/cart" ? 'step active' : ''}>
                            <Icon name='tag' />
                            <Step.Content>
                                <Step.Title>Carrito de productos</Step.Title>
                                <Step.Description>Verifique sus productos seleccionados</Step.Description>
                            </Step.Content>
                        
                    </Step>

                    <Step className={window.location.href === "http://localhost:3000/pago" ? 'step active' : ''}>
                        <Icon name='dollar' />
                        <Step.Content>
                            <Step.Title>Medios de pago</Step.Title>
                            <Step.Description>Envio, medios y formas de pago</Step.Description>
                        </Step.Content>
                    </Step>

                    <Step className={window.location.href === "http://localhost:3000/clientform" ? 'step active' : ''}>
                        <Icon name='dolly' />
                        <Step.Content>
                            <Step.Title>Datos y envio</Step.Title>
                            <Step.Description>Ingrese sus datos para confirmar compra</Step.Description>
                        </Step.Content>
                    </Step>
                    
                    

                </Step.Group>
            </section>
        </>
    )
}

export default CartStep; 