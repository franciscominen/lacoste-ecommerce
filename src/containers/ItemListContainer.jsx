import React, { useState, useEffect } from "react";
import { ItemList } from "../components/ItemList/index";
import FadeIn from 'react-fade-in';
import { useParams, Link } from "react-router-dom";
import { firestore } from "../firebaseConfig"


export default function ItemListContainer() {
  const {categoria} = useParams();
  const [productos, setProductos] = useState([]);

    useEffect(() => {

      const db = firestore;
      const collection = categoria != undefined ? db.collection("ITEMS").where('categoryId','array-contains', categoria) : db.collection("ITEMS")
      const query = collection.get()

      .then(({docs})=>{setProductos(docs.map(doc=>({id:doc.id,...doc.data()})))})
      .catch(()=>{
        console.log("Algo salio mal!")
      })
     
    }, [categoria])

    return (
    <>
      {productos.length < 1 ? 
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', position:'relative', top:'14em'}}>
        <img src="/img/Loaders/loader.gif" alt="Cargando..." style={{maxWidth:'180px'}}/> 
        <h2 style={{fontSize:'15px', fontWeight:'300', color:'gray'}}>Cargando...</h2>
      </div>
      : 
      <section style={{margin:'0 3em'}}>
        
        <FadeIn>  
        <div className='tittleContainer'>
            
            {categoria === undefined ? <h1 className='categoryTittle'> El último Look </h1> : <h1 className='categoryTittle' style={{textTransform:'capitalize'}}>{categoria}</h1> }
            {categoria === undefined ? '' : <Link to="/" className="volverCatalogoBtn"> Catalogo completo </Link> }
            {/* <Link to="/" className="volverCatalogoBtn"> Catalogo completo </Link> */}
        </div>
        </FadeIn>  
        
        <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap', margin:'0 3em'}}>
          <FadeIn>   
            <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
              <ItemList items={productos} /> 
            </div>
          </FadeIn>
        </div>
        
      </section>
      }
    </>
    );
}