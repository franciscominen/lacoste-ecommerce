import React, { useState } from "react";
import productList from "../../components/mocks/productList";
import ItemDetail from '../../components/ItemDetail/index'

const ItemDetailContainer = (props) => {

    const [products, setProducts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect (() => {
        setIsLoading(true);
        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => resolve(productList), 2000); // 2 seg, retrasos de red.
        });
        getItems.then((result) => {
            setProducts(result);
            setIsLoading(false);
        });
    }, []);
    
    if (isLoading) {
        return <div style={{position:'relative', top:'12em'}}>
                    <img src={"/img/Loaders/loader.gif"} style={{maxWidth:'300px', margin:'auto', display:'block'}}/>
                    <h1 style={{textAlign:'center', margin:'0px', fontSize:'18px', fontWeight:'300', color:'gray'}}>Cargando producto</h1>
                </div>;
    };
    
    return (
        <>
            <ItemDetail /> 
        </>
    )
}

export default ItemDetailContainer;