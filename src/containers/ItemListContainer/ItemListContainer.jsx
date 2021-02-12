import React, { useState } from "react";
import './ItemListContainer.scss';
// import { ItemCountComponent } from '../../components/ItemCount/index';
import ItemList from "../../components/ItemList";
import productList from "../../components/mocks/productList";

const ItemListContainer = (props) => {

    const [products, setProducts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect (() => {
        setIsLoading(true);
        const verCatalogoItems = new Promise((resolve, reject) => {
            setTimeout(() => resolve(productList), 2000); // 2 seg, retrasos de red.
        });
        verCatalogoItems.then((result) => {
            setProducts(result);
            setIsLoading(false);
        });
    }, []);
    
    if (isLoading) {
        return <div style={{position:'relative', top:'12em'}}>
                    <img src="" style={{maxWidth:'300px', margin:'auto', display:'block'}}/>
                    <h1 style={{textAlign:'center', margin:'0px', fontSize:'18px', fontWeight:'300', color:'gray'}}>Cargando productos</h1>
                </div>;
    };
    
    return (
        <>
            <ItemList products={products} /> 
        </>
    )
}

export default ItemListContainer;