import React from 'react'
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import CartComponent from '../components/Cart/Cart';
import ClientForm from '../components/Cart/ClientForm';
import PagoForm from '../components/Cart/PagoForm';
import CartStep from '../components/Cart/CartStep';
import FadeIn from 'react-fade-in';

const CartContainer = () => {
    return (
        <BrowserRouter>

            <CartStep/>
            
            <Switch>
                <FadeIn>
                <Route exact component={CartComponent} path="/cart" /> 
                <Route exact component={ClientForm} path="/cart/clientdata" /> 
                <Route exact component={PagoForm} path="/cart/pago" /> 
                </FadeIn>
            </Switch>

        </BrowserRouter>
    )
}

export default CartContainer
