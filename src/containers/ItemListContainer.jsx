import React, { useState, useEffect } from "react";
import itemPromise from "../components/mocks/productList";
import { ItemList } from "../components/ItemList/index";
import FadeIn from 'react-fade-in';
import { useParams, Link } from "react-router-dom";

/* 
  useEffect(() => {
    itemPromise.then((res) => setProd(res));
  }, []); */
      
  /* useEffect(() => {
      itemPromise.then((resp) => {
      setProd(resp.filter(resp => resp.categoriaId === categoriaId))
      });
  }, [categoriaId]); */


export default function ItemListContainer() {
  const {categoriaId} = useParams();
  const [prod, setProd] = useState([]);

  useEffect(() => {

    if ( categoriaId === undefined ) {

      return itemPromise.then((res) => setProd(res))

    } else {

      return itemPromise.then((resp) => { setProd(resp.filter(resp => resp.categoriaId === categoriaId)) })
      
    }

  }, [categoriaId]);


    return (
    <>
      {prod.length < 1 ? 
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', position:'relative', top:'14em'}}>
        <img src="/img/Loaders/loader.gif" alt="Cargando..." style={{maxWidth:'180px'}}/> 
        <h2 style={{fontSize:'15px', fontWeight:'300', color:'gray'}}>Cargando...</h2>
      </div>
      : 
      <section style={{margin:'0 3em'}}>
        
        <FadeIn>  
        <div className='tittleContainer'>
            
            {categoriaId === undefined ? <h1 className='categoryTittle'> El último Look </h1> : <h1 className='categoryTittle' style={{textTransform:'capitalize'}}>{categoriaId}</h1> }
            {categoriaId === undefined ? '' : <Link to="/" className="volverCatalogoBtn"> Catalogo completo </Link> }
            {/* <Link to="/" className="volverCatalogoBtn"> Catalogo completo </Link> */}
        </div>
        </FadeIn>  
        
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