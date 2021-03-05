import React, { useState, useContext } from "react";
import './style.scss'
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import FadeIn from 'react-fade-in';
import {cartContext} from '../../context/CartContext';

const ItemDetail = ({ item }) => {

    const [cantidad, setCantidad] = useState(0)
    const { actualizarTotal, addItem, actualizarCantidad, lista, Cantidad } = useContext(cartContext)
    const colorSelected = item.colorSelected

    const onAdd = (cant)=>{
        setCantidad(cant)
        if(cant > 0){
            addItem(item, cant)
        }

    }

    return (
    <>
        <div className='itemContainer' style={{margin:'80px 0'}}>

            <div className='imagesContainer'>
                <img src={item.img} style={{maxWidth:'500px'}}/>
            </div>

            <div className='detailsContainer'>

                <h1 className='productName'> {item.title} </h1>
                
                <div className='discountColectionContainer' style={{display:'flex'}}>
                    <p className='productVariants'> {item.discount} </p>
                    <p className='productVariants' style={{background:'gray'}}>{item.colection}</p>
                    <p className='productVariants' style={{background:'lightblue'}}>{item.color}</p>
                </div>

                <div className='colorsContainer' style={{display:'flex'}}>
                    <p>Color: </p><figure className='colorFigure' style={{background:`{item.colorSelected}`}}></figure>
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

                    {cantidad >= 1 ? 
                    <FadeIn>
                        <Link to={'/cart'} className='irACartBtn' onClick={()=>{}}>
                            Finalizar compra <img src={"/img/CartWidget/CartIcon.svg"}/>
                        </Link>
                    </FadeIn> 
                    : 
                    <ItemCount stock={item.stock} onAdd={onAdd} initial={1}/> //?
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
        <p> REFERENCIA {item.reference}</p>

        <div style={{display:'flex', justifyContent:'space-between', marginTop:'2em'}}>
            <article style={{width:'30em'}}>
                <p>{item.description}</p>
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