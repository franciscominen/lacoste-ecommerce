import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { firestore } from "../firebaseConfig";

const ItemDetailContainer = () => {

  let [item,setItem] = useState([]);
  let {id} = useParams();

  useEffect(() => {

    const db = firestore;
    const collection = db.collection("ITEMS").doc(id)
    const query = collection.get()

    .then((resultado)=>{
      setItem({id: resultado.id,...resultado.data()})})
    .catch(()=>{
      console.log("Ha ocurrido un error, intente nuevamente.")
    })

    }, [])

  return (
    <>
      {<ItemDetail item={item}/>}
    </> 
  )

}

export default ItemDetailContainer


/* import React, { useState, useEffect } from "react";
import './styles.scss'
import { useParams } from "react-router-dom";
import itemPromise from "../components/mocks/productList";
import ItemDetail from "../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams(); */

  /* useEffect(() => {
    itemPromise.then((resp) => {
      setItem(resp.find((li) => li.id === parseInt(id)))
    });
  }, []); */

  /* useEffect(() => {

    const dataBase = getFirestore(); // conexion a la bd
    const itemCollection = dataBase.collection('ITEMS'); // guardamos la referencia de la coleccion que creamos
    
    itemCollection.get().then((value) => {
       // la funcion .data convierte la data que tomamos para poder utilizarla. Es reservada de Firebase.
      let aux = value.docs.find(element => {
        return { ...element.data(), id: element.id }
      })
      console.log(aux);
      setProductos(aux);
    })
  }, []) */
  
/*   return (
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

export default ItemDetailContainer; */