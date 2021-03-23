import React , {useContext} from 'react';
import { cartContext } from "../../../context/CartContext";
import {NavLink} from "react-router-dom";
import {Button, Icon} from "semantic-ui-react";
import '../styles/pucharseData.scss';

const PurchaseData = () => {
    const { cart, actualizarTotal, cantidad } = useContext(cartContext);

    return (
        <>  
            <section className='purcharseData'>
                <h2>Su compra: </h2>
                <div className='priceTotal_container'>
                    <div>

                        <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px'}}>
                            <h3 style={{fontWeight:'600'}}>{cantidad} Productos</h3> 
                            <h3 style={{fontWeight:'600'}}>$ {actualizarTotal().toLocaleString("en-US")}</h3>
                        </div> 
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            <h3 className=''>Total:</h3> 
                            <h3 className='' style={{color:'#00532c'}}>$ {actualizarTotal().toLocaleString("en-US")}</h3>
                        </div> 
                        
                    </div>

                    <NavLink to='/cart'>
                    <Button animated>
                        <Button.Content visible>Carrito</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow left' /> Volver
                        </Button.Content>
                    </Button>
                    </NavLink>

                </div>
            </section>
        </>
    )
}

export default PurchaseData