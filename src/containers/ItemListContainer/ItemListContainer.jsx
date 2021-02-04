import React, { useState } from "react";
import './ItemListContainer.scss';
// import { ItemCountComponent } from '../../components/ItemCount/index';
import ItemList from "../../components/ItemList";
import productList from "../../components/mocks/productList";
import loader from '../../components/mocks/img/loader.gif'

const ItemListContainer = (props) => {

    const [products, setProducts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect (() => {
        setIsLoading(true);
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(productList), 2000); // 2 seg, retrasos de red.
        });
        myPromise.then((result) => {
            setProducts(result);
            setIsLoading(false);
        });
    }, []);
    
    if (isLoading) {
        return <div style={{position:'relative', top:'12em'}}>
                    <img src={loader} style={{maxWidth:'300px', margin:'auto', display:'block'}}/>
                    <h1 style={{textAlign:'center', margin:'0px', fontSize:'18px', fontWeight:'300', color:'gray'}}>Cargando productos</h1>
                </div>;
    };
    

    // ITEM COUNT

    /* const [contador, setContador] = useState(1); 
    const onAdd = (stock) => {
        if (contador < stock) {
            setContador(contador + 1)
        }else{
            alert("Stock mÃ¡ximo de producto.")
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
            alert(`Se agregÃ³ ${contador} producto al carrito.`)
        } else {
            alert(`Se agregaron ${contador} productos al carrito.`)
        }
    } */

    return (
        <>
            {/* <ItemCountComponent stock={14} contador={contador} onAdd={onAdd} onSubstract={onSubstract} addCart={addCart}/> */}
        
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer;