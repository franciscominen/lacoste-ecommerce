import React, { useState, createContext } from "react";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    let [total, setTotal] = useState(0)
    let [cantidad, setCantidad] = useState(0)

    const isInCart = (id) => {

        const item = cart.filter(p => p.item.id === id);

        if ( item.length > 0 ) {
            return true
        }
        else{
            return false
        }

    }

    function addItem(newItem, quantity) {

        const idx = cart.findIndex((listI) => listI.item.id === newItem.id)

        if (idx === -1) {
            const l = [ ...cart, { item: newItem, quantity } ]
            setCart(l)
        } else {
            const newQuantity = cart[idx].quantity + quantity
            const oldI = cart.filter((oldI) => oldI.item.id !== cart[idx].item.id)
            const l = [...oldI, { item: cart[idx].item, quantity: newQuantity }]
            setCart(l)
        }
    }
    
    const removeItem = (elemento) => {
        const listaNew = cart.filter(p=> p.item.id != elemento.item.id)
        setCart(listaNew)
    }

    const actualizarTotal = () => {
        let suma = 0;
        cart.forEach(elemento => suma += elemento.item.price * elemento.quantity)
        setTotal(suma)
        return suma
    }

    const actualizarCantidad = () => {
        let cantidad = 0;
        cart.forEach(elemento => cantidad += elemento.quantity)
        setCantidad(cantidad)
        return cantidad
    }

    const clearCart = ()=>{
        setCart([])
    }

    return (
        <>
            <cartContext.Provider value={{
                clearCart: clearCart,
                addItem: addItem,
                cart: cart,
                serCart: setCart,
                removeItem: removeItem,
                Cantidad: cart.length, 
                actualizarCantidad: actualizarCantidad,
                total: total,
                actualizarTotal: actualizarTotal
                }}>

                {children}

            </cartContext.Provider>
        </>
    )

}