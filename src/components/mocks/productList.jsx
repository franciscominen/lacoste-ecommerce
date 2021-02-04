import React from 'react';
import remeraLisaImg from '../mocks/img/remera-lisa.svg';
import buzoHombreImg from '../mocks/img/buzo-hombre.svg';
import chombaMujerImg from '../mocks/img/chomba-mujer.svg';
import zapatillasHombreImg from '../mocks/img/zapatillas-hombre.svg';

const productList = [
    { id: 1, img:<img src={remeraLisaImg} style={{maxWidth:'350px'}}/>, discount:"25% de descuento", name: "Remera lisa con cuello diferenciado", price: '3.499,00', lastPrice: '5.699,00', stock: 27, coleccion:'Coleccion 2020', color:'+3 colores'},
    { id: 2, img:<img src={buzoHombreImg} style={{maxWidth:'350px'}}/>, discount:"10% de descuento", name: "Buzo de hombre con capucha rustico", price: '7.499,00', lastPrice: '8.699,00', stock: 8, coleccion:'Coleccion 2020', color:'+2 colores'},     
    { id: 3, img:<img src={chombaMujerImg} style={{maxWidth:'350px'}}/>, discount:"25% de descuento", name: "Polo de mujer pique clasica manga corta ", price: '3.119,00', lastPrice: '4.799,00', stock: 11, coleccion:'Nueva coleccion', color:'+1 color'},
    { id: 4, img:<img src={zapatillasHombreImg} style={{maxWidth:'350px'}}/>, discount:"35% de descuento", name: "Zapatillas de hombre G80 OG", price: '8.499,00', lastPrice: '12.999,00', stock: 7, coleccion:'Nueva coleccion', color:'+1 color'}
];

export default productList;