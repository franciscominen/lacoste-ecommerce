import React, { useState } from "react";
import './ItemListContainer.scss';
import { ItemCountComponent } from '../../components/ItemCount/index';

const ItemListContainer = (props) => {

    const [contador, setContador] = useState(1); 
    
    const onAdd = (stock) => {
        if (contador < stock) {
            setContador(contador + 1)
        }else{
            alert("Stock máximo de producto.")
        }
    }

    const onSubstract = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }else{
            console.log('Valor no admitido.')
        }
    }

    const addCart = () => {
        if (contador == 1) {
            alert(`Se agregó ${contador} producto al carrito.`)
        } else {
            alert(`Se agregaron ${contador} productos al carrito.`)
        }
    }

    return (
        <>
            <ItemCountComponent stock={14} contador={contador} onAdd={onAdd} onSubstract={onSubstract} addCart={addCart}/>
        </>
    )
}

export default ItemListContainer;