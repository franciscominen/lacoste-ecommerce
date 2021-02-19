import React, { useState, useEffect } from "react";
import './styles.scss'
import { useParams } from "react-router-dom";
import itemPromise from "../components/mocks/productList";
import ItemDetail from "../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    itemPromise.then((resp) => {
      setItem(resp.find((li) => li.id === parseInt(id)))
    });
  }, []);
  
  return (
    <>
      {item.length < 1 ? 
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', position:'relative', top:'10em'}}>
          <img src="img/Loaders/loader.gif" alt="Cargando..." style={{maxWidth:'180px'}}/> 
          <h2 style={{fontSize:'15px', fontWeight:'300', color:'gray'}}>Cargando...</h2>
        </div>
      : 
        <ItemDetail item={item} />
      }
    </>
  );
};

export default ItemDetailContainer;