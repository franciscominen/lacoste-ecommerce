import React, { useState, createContext } from "react";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {

    const [lista, setLista] = useState([])
    let [total, setTotal] = useState(0)
    let [cantidad, setCantidad] = useState(0)

    const isInCart = (id) => {

        const item = lista.filter(p => p.item.id === id);

        if ( item.length > 0 ) {
            return true
        }
        else{
            return false
        }

    }

    function addItem(newItem, quantity) {

        const idx = lista.findIndex((listI) => listI.item.id === newItem.id)

        if (idx === -1) {
            const l = [ ...lista, { item: newItem, quantity } ]
            setLista(l)
        } else {
            const newQuantity = lista[idx].quantity + quantity
            const oldI = lista.filter((oldI) => oldI.item.id !== lista[idx].item.id)
            const l = [...oldI, { item: lista[idx].item, quantity: newQuantity }]
            setLista(l)
        }
    }
    
    const removeItem = (elemento)=>{
        const listaNew = lista.filter(p=> p.item.id != elemento.item.id)
        setLista(listaNew)
    }

    const actualizarTotal = () => {
        let suma = 0;
        lista.forEach(elemento => suma += elemento.item.price*elemento.quantity)
        setTotal(suma)
        return suma
    }

    const actualizarCantidad = () => {
        let cantidad = 0;
        lista.forEach(elemento => cantidad += elemento.quantity)
        setCantidad(cantidad)
        return cantidad
    }

    const clearCart = ()=>{
        setLista([])
    }

    return (
        <>
            <cartContext.Provider value={{
                clearCart: clearCart,
                addItem: addItem,
                lista: lista,
                removeItem: removeItem,
                Cantidad: lista.length, 
                actualizarCantidad: actualizarCantidad,
                total: total,
                actualizarTotal: actualizarTotal
                }}>

                {children}

            </cartContext.Provider>
        </>
    )

}