import React, { useState, useContext } from "react";
import './style.scss'
import { NavLink } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import FadeIn from 'react-fade-in';
import {cartContext} from '../../context/CartContext';
import { Link, animateScroll as scroll } from "react-scroll";


const ItemDetail = ({ item }) => {

    const [cantidad, setCantidad] = useState(0)
    const { addItem } = useContext(cartContext)

    const onAdd = (cant)=>{
        setCantidad(cant)
        if(cant > 0){
            addItem(item, cant)
        }
    }

    return (
    <>
        <div className='itemContainer' id="itemDetail">
                                        
            <div className='imagesContainer'>
                <img src={item.img}/>
            </div>

            <div className='detailsContainer'>

                <h1 className='productName'> {item.title} </h1>
                
                <div className='discountColectionContainer' style={{display:'flex'}}>
                    <p className='productVariants'> {item.discount} </p>
                    <p className='productVariants' style={{background:'gray'}}>{item.colection}</p>
                    <p className='productVariants' style={{background:'lightblue'}}>{item.color}</p>
                </div>

                <div className='colorSize_container'>
                    <div className='selects_container'>
                        <p>Colores: </p>
                        <select name='colorSelected' id='colorSelected'>
                            {item.colors && item.colors.map((color, valueColor) => {
                                return <option key={valueColor}>{color}</option>
                            })}
                        </select>
                    </div>

                    <div className='selects_container'>
                        <p>Talla: </p>
                        <select name='sizes'>
                            {item.sizes && item.sizes.map((index, value) => {
                                return <option key={value}>{index}</option>
                            })}
                        </select>
                    </div>
                </div>
                
                <div className='precioEnvioContainer' style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'5em'}}>
                    <article className='preciosContainer'>
                        <p className='productPrice'> $ {item.price}</p>
                        <p className='productLastPrice'> $ {item.lastPrice}</p>
                    </article>
                    <article className='envioContainer' style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                        <p className='calcularEnvioBtn'>Calcular envio</p>
                        <p href="" className='devolucion'>Devolucion gratuita</p>
                    </article>
                </div>

                <div style={{marginTop:'3em', display:'flex', alignItems:'flex-end', justifyContent:'space-between'}}>

                    {cantidad >= 1 ? 
                    <FadeIn>
                        <NavLink to={'/cart'} className='irACartBtn' onClick={()=>{}}>
                            Finalizar compra <img src={"/img/CartWidget/CartIcon.svg"}/>
                        </NavLink>
                    </FadeIn> 
                    : 
                    <ItemCount stock={item.stock} onAdd={onAdd} initial={1}/> //?
                    }
                    
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <p style={{color:'gray', fontSize:'14px'}}>Stock: {item.stock}</p>
                        <Link smooth={true} duration={600} offset={485} to='itemDetail'>
                          <p href="" className='descriptionBtn'>Ver descripcion</p>  
                        </Link>
                        
                    </div>
                </div>

            </div>

        </div>

        <div className='descriptionContainer'>

        <h1>Descripcion</h1>
        <p> REFERENCIA {item.reference}</p>

        <div className="descriptionArticles_container">
            <article>
                <p>{item.description}</p>
            </article>

            <article>
                <h2>Envio y devoluciones</h2>
                <h3>DEVOLUCION GRATIS</h3>

                <p>Dispones de 1 mes para devolver tus artículos: con la etiqueta de devolución que encontrarás en tu cuenta. No se aceptan devoluciones en tiendas físicas ni outlets. Los artículos personalizados y la ropa interior no se pueden devolver.</p>
            </article>

            <article>
                <h2>Envio estandar</h2>
                <p>De acuerdo a las Medidas de Aislamiento Social Preventivo y Obligatorio que estamos enfrentando y con el fin de cuidar la salud de nuestros clientes y trabajadores, las compras realizadas del 18 al 31 de marzo se enviarán a partir del 01 de abril o hasta la fecha en la que el Gobierno Argentino deje sin efecto las medidas mencionadas.</p>
            </article>
        </div>

    </div>
    </>
  );
};

export default ItemDetail;