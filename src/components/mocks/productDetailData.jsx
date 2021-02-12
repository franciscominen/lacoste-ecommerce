import React from 'react';

const productDetailData = [
    {   id: 1,
        name: "Buzo de hombre con capucha rustico", 
        img:<img src={"/img/Items/buzo-hombre.svg"} style={{maxWidth:'350px'}}/>, 
        imgAlt: <img src={"img/Items/buzo-hombre-dorso.webp"} />, 
        discount:"10% de descuento",
        colection: 'Coleccion 2020', 
        price: '7.499,00', 
        lastPrice: '8.699,00', 
        stock: 16, 
        color: <figure className='colorFigure'></figure>
    },
    {   id: 2,
        name: "Campera", 
        img:<img src={"/img/Items/buzo-hombre.svg"} style={{maxWidth:'350px'}}/>, 
        imgAlt: <img src={"img/Items/buzo-hombre-dorso.webp"} />, 
        discount:"10% de descuento",
        colection: 'Coleccion 2020', 
        price: '7.499,00', 
        lastPrice: '8.699,00', 
        stock: 16, 
        color: <figure className='colorFigure'></figure>
    },
    {   id: 3,
        name: "Zapatillas", 
        img:<img src={"/img/Items/buzo-hombre.svg"} style={{maxWidth:'350px'}}/>, 
        imgAlt: <img src={"img/Items/buzo-hombre-dorso.webp"} />, 
        discount:"10% de descuento",
        colection: 'Coleccion 2020', 
        price: '7.499,00', 
        lastPrice: '8.699,00', 
        stock: 16, 
        color: <figure className='colorFigure'></figure>
    },       
];

export default productDetailData;