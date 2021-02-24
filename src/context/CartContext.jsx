import React, {createContext, useState} from "react";

export const cartContex =  createContext();

function CartContext({children}) {
    const [product, setProduct] = useState([]);

    const addCart = (item) => {
        if (isInCart(item.item.id === -1)){
            setProduct(item)
        } else {
            
        }   
    }

    const isInCart = (id) => {
        return product.findIndex(prod  => prod.id === id)  
    }

    return (
        <>
            <cartContex.Provider value={{
                product,
                addCart,
                quantity: product.length
            }}>
                {children}
            </cartContex.Provider>
        </>
    )
}

export default CartContext;