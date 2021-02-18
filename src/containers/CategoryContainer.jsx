import React, { useState, useEffect } from "react";
import "./styles.scss";
import itemPromise from "../components/mocks/productList";
import { ItemList } from "../components/ItemList/index";
import FadeIn from 'react-fade-in';
import { useParams, Link } from "react-router-dom";

const CategoryContainer = () => {
    const {categoriaId} = useParams();
    const [prod, setProd] = useState([]);
    
    useEffect(() => {
        itemPromise.then((resp) => {
        setProd(resp.filter(resp => resp.categoriaId === categoriaId))
        });
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
            <h1 style={{color:'#2C3330', fontSize:'3rem', fontWeight:'600', textTransform:'capitalize' }}>{categoriaId}</h1>
            <Link to="/" className="volverCatalogoBtn"> Catalogo completo </Link>
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
    )
}

export default CategoryContainer;
