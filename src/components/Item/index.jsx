import React from 'react';
import './item.scss';

const ItemComponent = ({product}) => {
    return (
        <div className='itemCard'>

            {product.img}

            <div className='itemDescription'>
                <div className='discountContainer'>
                    <p className='productVariants'>{product.discount}</p>
                    <p className='productVariants' style={{background:'gray'}}>{product.coleccion}</p>
                    <p className='productVariants' style={{background:'#496ABE'}}>{product.color}</p>
                </div>
                
                <h3 className='productName'>{product.name}</h3>
                <p className='productPrice'>$ {product.price}</p>
                <p className='productLastPrice'>$ {product.lastPrice}</p>
                <p className='stockActual'>Stock actual: {product.stock}</p>
                
            </div>

            <a href="" className='BtnVerDetalle'>Ver detalle</a>

        </div>
    )
}

export default ItemComponent 