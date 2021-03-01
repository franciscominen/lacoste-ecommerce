import React from 'react'
import CartComponent from '../components/Cart/Cart';
import './styles.scss';
import { Icon, Step } from 'semantic-ui-react'


const CartContainer = () => {

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
                
                <CartComponent />

            </section>
        </>
    )
}

export default CartContainer;