import React, { useState } from "react";
import productDetailData from "../../components/mocks/productDetailData";
import DetailList from "../../components/ItemDetail/DetailList";

const ItemDetailContainer = (props) => {

    const [details, setDetails] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect (() => {

        setIsLoading(true);

        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => resolve(productDetailData), 2000); // 2 seg, retrasos de red.
        });

        getItems.then((result) => {
            setDetails(result);
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
            <DetailList details={details} /> 
        </>
    )
}

export default ItemDetailContainer;