import React, { useState, useEffect } from "react";
import itemsPromise from "../components/mocks/productList";
/* import ItemCount from "../ItemCount"; */
import { ItemList } from "../components/ItemList/index";
import FadeIn from 'react-fade-in';

export default function ItemListContainer() {
  console.log(itemsPromise);
  const [prod, setProd] = useState([]);

  useEffect(() => {
    itemsPromise.then((res) => setProd(res));
  }, []);

  return (
    <>
      {prod.length < 1 ? 
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', position:'relative', top:'14em'}}>
        <img src="img/Loaders/loader.gif" alt="Cargando..." style={{maxWidth:'180px'}}/> 
        <h2 style={{fontSize:'15px', fontWeight:'300', color:'gray'}}>Cargando...</h2>
      </div>
      : 
      <section style={{margin:'0 3em'}}>
        <h1 style={{color:'#2C3330', fontSize:'3rem', fontWeight:'600', margin:'50px 0 20px 0' }}>El último look</h1>
        <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap', margin:'0 3em'}}>
          <FadeIn>   
            <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
              <ItemList items={prod} /> 
            </div>
          </FadeIn>
        </div>
      </section>

      }
    </>
  );
}