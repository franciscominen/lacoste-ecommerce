import React, { useState } from "react";
import './style.scss';
import ItemCountComponent from '../ItemCount/index';

const ItemDetail = ({ detail }) => {
    
    // ITEM COUNT
    const [contador, setContador] = useState(1); 
    const onAdd = (stock) => {
        if (contador < stock) {
            setContador(contador + 1)
        }else{
            alert("Stock maximo de producto.")
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
    }

    return (
        <>
            <div className='itemContainer'>

                <div className='imagesContainer'>
                    {detail.img}
                    {detail.imgAlt}
                </div>

                <div className='detailsContainer'>

                    <h1 className='productName'>{detail.name}</h1>
                    <div className='discountColectionContainer' style={{display:'flex'}}>
                        <p className='productVariants'>{detail.discount}</p>
                        <p className='productVariants' style={{background:'gray'}}>Coleccion 2020</p>
                    </div>

                    <div className='colorsContainer' style={{display:'flex', justifyContent:'space-between'}}>

                        <div className='colorActual' style={{display:'flex', alignItems:'center'}}>
                            <p style={{marginRight:'10px'}}>Color:</p> <figure className='colorFigure'></figure> <p> Negro </p>
                        </div>
                        
                        <div className='colorVariantes' style={{display:'flex', alignItems:'center'}}>
                            <p style={{marginRight:'10px'}}>Colores: </p>
                            <ul style={{display:'flex'}}>
                                <li><a href=""><figure className='colorFigure' style={{background:'#E03E3E'}}></figure></a></li>
                                <li><a href=""><figure className='colorFigure' style={{background:'#EEEFBE'}}></figure></a></li>
                                <li><a href=""><figure className='colorFigure' style={{background:'#00532C'}}></figure></a></li>
                                <li><a href=""><figure className='colorFigure' style={{background:'#2D4582'}}></figure></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='tallasContainer' style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <p>Talla:</p>
                            <ul style={{display:'flex', alignItems:'center', marginLeft:'10px'}}>
                                <li>XS</li>
                                <li>S</li>
                                <li>M</li>
                                <li>L</li>
                                <li>XL</li>
                                <li>XXL</li>
                            </ul>
                        </div>
                        <a href="">Guia de tallas</a>
                    </div>

                    <div className='precioEnvioContainer' style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'5em'}}>
                        <article className='preciosContainer'>
                            <p className='productPrice'>{detail.Price}</p>
                            <p className='productLastPrice'>{detail.lastPrice}</p>
                        </article>
                        <article className='envioContainer' style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                            <a href="" className='calcularEnvioBtn'>Calcular envio</a>
                            <a href="" className='devolucion'>Devolucion gratuita</a>
                        </article>
                    </div>

                    <div style={{marginTop:'3em', display:'flex', alignItems:'flex-end', justifyContent:'space-between'}}>
                        <ItemCountComponent stock={14} contador={contador} onAdd={onAdd} onSubstract={onSubstract} addCart={addCart}/> 
                        <a href="" className='descriptionBtn'>Ver descripcion</a>
                    </div>

                </div>

            </div>

            <div className='descriptionContainer' >

            <h1>Descripcion</h1>
            <p>{detail.referencia}</p>

            <div style={{display:'flex', justifyContent:'space-between', marginTop:'2em'}}>
                <article style={{width:'30em'}}>
                    <h2>{detail.name}</h2>
                    {detail.descripcion}
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
    )
}

export default ItemDetail