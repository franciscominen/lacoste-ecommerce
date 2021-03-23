import React from 'react';
import CartStep from "./CartStep";
import PurcharseData from "./ClientForm/PurchaseData"
import ProductsInCart from './ProductsInCart';
import {Icon, Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import FadeIn from "react-fade-in";
import "./styles/pago.scss";

const PagoForm = () => {
    return (
        <>
            <>
                <CartStep />
            </>
            <FadeIn>
            <section className='pago_container'>
                    <form action="" className='formPago_container'>
                        <h1>Seleccione su medio de pago:</h1>
                        <div className='medioPago_container'>
                            <input type="radio" id="efectivo" name="pagos" value="efectivo"/>
                            <label for="efectivo"><Icon name='money bill alternate outline'/>EFECTIVO</label> 
                        </div>
                        <div className='medioPago_container'>
                            <input type="radio" id="transferencia" name="pagos" value="transferencia"/>
                            <label for="transferencia"><Icon name='university'/>TRANSFERENCIA BANCARIA</label>
                        </div>
                        <div className='medioPago_container'>
                            <input type="radio" id="tarjetas" name="pagos" value="tarjetas"/>
                            <label for="tarjetas"><Icon name='credit card'/>TARJETA DE CREDIO/DEBITO</label>
                        </div>
                        <div className='medioPago_container'>
                            <input type="radio" id="online" name="pagos" value="online"/>
                            <label for="online"><Icon name='cc paypal'/>MERCADO PAGO - PAYPAL</label>
                        </div>
                        <Link to={"/clientform"}>
                            <Button animated='fade'>
                                <Button.Content visible>Proceder al envio <Icon name='dolly'/></Button.Content>
                                <Button.Content hidden>Siguiente paso <Icon name='arrow right'/></Button.Content>
                            </Button>
                         </Link>
                    </form>
                    
                <>
                <div>
                    <PurcharseData/>
                    <ProductsInCart/>
                </div>
                </>
            </section>
            </FadeIn>
        </>
    )
}

export default PagoForm;