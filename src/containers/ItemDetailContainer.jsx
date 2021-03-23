import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { getFirestore } from "../firebaseConfig";
import Footer from '../layout/Footer';

const ItemDetailContainer = () => {

  let [item,setItem] = useState([]);
  let {id} = useParams();
  const [loading, setIsloading] = useState(false)

  useEffect(() => {

    setIsloading(true);

    const fsDB = getFirestore();
    const itemsCollection = fsDB.collection("ITEMS").doc(id)
    const query = itemsCollection.get()

    .then((resultado)=>{
      setItem({ id: resultado.id, ...resultado.data() })
      setIsloading(false);
    })
    .catch(()=>{
      console.log("Ha ocurrido un error, intente nuevamente.")
    })

  }, [])

  return (
    <>
      {loading ? 
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', position:'relative', top:'17em'}}>
          <img src="/img/Loaders/loader.gif" alt="Cargando..." style={{maxWidth:'180px'}}/> 
        </div>
      : 
        <>
          <ItemDetail item={item}/>
          <>
            <Footer/>
          </>
        </>
      } 
    </> 
  )

}

export default ItemDetailContainer