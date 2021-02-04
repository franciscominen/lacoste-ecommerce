import React from 'react'
import ItemComponent from '../Item'

const ItemList = ({products}) => {
    return (
        <>

            <h1 style={{margin:'45px', textAlign:'center', fontSize:'45px', fontWeight:'300', color:'gray'}}>Novedades</h1>

            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                {products.map((product) => {
                    return <ItemComponent ket={product.id} product={product}/>
                })}
            </div>

        </>
    )
}

export default ItemList;