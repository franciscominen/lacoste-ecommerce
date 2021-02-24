import React, { useState, useContext } from "react";
import './style.scss'
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import FadeIn from 'react-fade-in';
import {cartContex} from '../../context/CartContext';

const ItemDetail = ({ item }) => {

    const [irCart, setIrCart] = useState(false);

    const {addCart, product, quantity} = useContext(cartContex);
  
    const onAdd = (contador) => {
      setIrCart(true);
      addCart( {item: item, quantity: contador} );
    };

    console.log([product])

    return (
    <>
        <div className='itemContainer' style={{margin:'80px 0'}}>

            <div className='imagesContainer'>
                {item.imgAlt}
                {item.img}
            </div>

            <div className='detailsContainer'>

                <h1 className='productName'> {item.name} </h1>
                
                <div className='discountColectionContainer' style={{display:'flex'}}>
                    <p className='productVariants'> {item.discount} </p>
                    <p className='productVariants' style={{background:'gray'}}>{item.coleccion}</p>
                </div>

                <div className='colorsContainer' style={{display:'flex', justifyContent:'space-between'}}>
                    {item.colorSeleccionado}
                    {item.colorVariantes}
                </div>

                <div className='tallasContainer' style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <p>Talla:</p>
                        {item.tallas}
                    </div>
                    <a href="">Guia de tallas</a>
                </div>

                <div className='precioEnvioContainer' style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'5em'}}>
                    <article className='preciosContainer'>
                        <p className='productPrice'> $ {item.price}</p>
                        <p className='productLastPrice'> $ {item.lastPrice}</p>
                    </article>
                    <article className='envioContainer' style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                        <a href="" className='calcularEnvioBtn'>Calcular envio</a>
                        <a href="" className='devolucion'>Devolucion gratuita</a>
                    </article>
                </div>

                <div style={{marginTop:'3em', display:'flex', alignItems:'flex-end', justifyContent:'space-between'}}>

                    {irCart ? 
                    <FadeIn>
                        <Link to={'/cart'} className='irACartBtn'>
                            Finalizar compra <img src={"/img/CartWidget/CartIcon.svg"}/>
                        </Link>
                    </FadeIn> 
                    : 
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                    }
                    
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <p style={{color:'gray', fontSize:'14px'}}>Stock: {item.stock}</p>
                        <a href="" className='descriptionBtn'>Ver descripcion</a>
                    </div>
                </div>

            </div>

        </div>

        <div className='descriptionContainer' >

        <h1>Descripcion</h1>
        <p> {item.referencia}</p>

        <div style={{display:'flex', justifyContent:'space-between', marginTop:'2em'}}>
            <article style={{width:'30em'}}>
                {item.descripcion}
            </article>

            <article style={{width:'30em', margin:'0 40px'}}>
                <h2>Envio y devoluciones</h2>
                <h3>DEVOLUCION GRATIS</h3>

                <p>Dispones de 1 mes para devolver tus artículos: con la etiqueta de devolución que encontrarás en tu cuenta. No se aceptan devoluciones en tiendas físicas ni outlets. Los artículos personalizados y la ropa interior no se pueden devolver.</p>
            </article>

            <article style={{width:'30em'}}>
                <h2>Envio estandar</h2>
                <p>De acuerdo a las Medidas de Aislamiento Social Preventivo y Obligatorio que estamos enfrentando y con el fin de cuidar la salud de nuestros clientes y trabajadores, las compras realizadas del 18 al 31 de marzo se enviarán a partir del 01 de abril o hasta la fecha en la que el Gobierno Argentino deje sin efecto las medidas mencionadas.</p>
            </article>
        </div>

    </div>
    </>
  );
};

export default ItemDetail;