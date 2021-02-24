import React, {createContext, useState} from "react";

export const cartContex =  createContext(); // contexto creado

function CartContext({children}) { // proveedor
    
    const [product, setProduct] = useState([]);

    const addCart = (item) => {
        console.log(item)

        let inCart = isInCart(item.item.id);
        
        if (inCart === -1){

            setProduct([...product, item]);

        } else {

            const newProductList = product.filter = (prod => product[inCart].item.id !== prod.item.id);
            const newQuantity = {...product[inCart], quantity: item.quantity + product[inCart].quantity};

            setProduct([...newProductList, {item: item.item, quantity: newQuantity}]);
        }   
    }
    
    const isInCart = (id) => {
        return product.findIndex(prod  => prod.id === id)  
    }

    return (
        <>
            <cartContex.Provider value={{
                product,
                addCart
            }}>
                {children}
            </cartContex.Provider>
        </>
    )
}

export default CartContext;