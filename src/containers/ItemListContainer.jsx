import React, { useState, useEffect } from "react";
import Footer from "../layout/Footer"
import "./styles.scss"
import { ItemList } from "../components/ItemList/index";
import FadeIn from 'react-fade-in';
import {Icon} from 'semantic-ui-react';
import { useParams, Link } from "react-router-dom";
import { getFirestore } from "../firebaseConfig";

export default function ItemListContainer() {

  const {categoriaId} = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setIsloading] = useState(false)

    useEffect(() => {

      setIsloading(true)

      const fsDB = getFirestore();
      const productList = fsDB.collection("ITEMS");

      const loadProductList = new Promise((resolve, reject) => {
        productList.get().then((value) => {
            let aux = value.docs.map(e => {
                return { ...e.data(), id: e.id }
            })
            resolve(aux.sort((a, b) => { if (a.name < b.name) { return -1 }; if (a.name > b.name) { return 1 }; return 0 }));
          })
      });

      loadProductList.then((database) => {
        const filterProductList = database.filter((e) => e.categoryId === categoriaId)
        const result = (filterProductList.length === 0) ? database : filterProductList
        setProductos(result)
        setIsloading(false)
      })

    }, [categoriaId])

    return (
    <>
      { loading ? 

        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', position:'relative', top:'20em'}}>
          <img src="/img/Loaders/loader.gif" alt="Cargando..." style={{maxWidth:'140px'}}/> 
        </div>
        : 
        <>
          <section style={{margin:'7.5em 3em'}}>
            
            <FadeIn>  
              <div className='tittleContainer'>

                {categoriaId === undefined ? <h1 className='categoryTittle'> El último Look </h1> : 
                <h1 className='categoryTittle' style={{textTransform:'capitalize'}}> {categoriaId} </h1>}

                {categoriaId === undefined ? '' : <Link to="/catalogo" className="volverCatalogoBtn"> Catalogo completo </Link>}
                {categoriaId === undefined ? '' : <Link to="/catalogo" className="volverCatalogoBtn_mobile"> <Icon name='arrow alternate circle left'/></Link>}
                
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
          
          <>
            <Footer/>
          </>
        
        </>
      }
    </>
    );
}