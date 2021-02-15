import React, { useState, useEffect } from "react";
import './style.scss'
import ItemCount from "../ItemCount/index";

const ItemDetail = ({ item }) => {

    const [contador, setContador] = useState(1);

    const incrementar = (stock) => {
        if(contador < stock) {
            setContador(contador + 1);
        }else {
            alert('No hay stock disponible.')
        }
    }

    const decrementar = () => {
        if(contador > 1){
            setContador(contador - 1);
        }
    }

    const onAdd = () => {
        alert(`Producto agregado al carrito`)
    }

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
                    {item.tallas}
                </div>
                <a href="">Guia de tallas</a>
            </div>

            <div className='precioEnvioContainer' style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'5em'}}>
                <article className='preciosContainer'>
                    <p className='productPrice'> {item.price}</p>
                    <p className='productLastPrice'> {item.lastPrice}</p>
                </article>
                <article className='envioContainer' style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                    <a href="" className='calcularEnvioBtn'>Calcular envio</a>
                    <a href="" className='devolucion'>Devolucion gratuita</a>
                </article>
            </div>

            <div style={{marginTop:'3em', display:'flex', alignItems:'flex-end', justifyContent:'space-between'}}>
                <ItemCount stock={item.stock} contador={contador} incrementar={incrementar} decrementar={decrementar} onAdd={onAdd} />
                
                <div>
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