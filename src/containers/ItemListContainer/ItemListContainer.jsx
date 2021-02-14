import React, { useState, useEffect } from "react";
import itemsPromise from "../../components/mocks/productList";
/* import ItemCount from "../ItemCount"; */
import { ItemList } from "../../components/ItemList/index";

export default function ItemListContainer() {
  console.log(itemsPromise);
  const [prod, setProd] = useState([]);

  useEffect(() => {
    itemsPromise.then((res) => setProd(res));
  }, []);

  return (
    <>
      {prod.length < 1 ? 
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', position:'relative', top:'10em'}}>
        <img src="img/Loaders/loader.gif" alt="Cargando..." style={{maxWidth:'300px'}}/> 
        <h2 style={{fontSize:'20px', fontWeight:'300', color:'gray'}}>Cargando...</h2>
      </div>
      : <ItemList items={prod} />}
    </>
  );
}