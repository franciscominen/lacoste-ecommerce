import {createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [cart, setCart] = useState([{ id: 1, name:'eskas', price: 1989 }])

    return  <GlobalContext.Provider value={cart}> {children} </GlobalContext.Provider>
}