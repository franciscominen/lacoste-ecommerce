const getItemsList = (id) => {
    return [
        {   id: 1,
            categoriaId: 'sale',
            name: "Remera lisa con cuello diferenciado",  
            img: <img src={"/img/Items/remera-lisa.svg"} className="imgMain" style={{maxWidth:'300px'}} />,
            imgAlt: <img src={"/img/Items/remera-lisa-dorso.svg"} className="imgAlt" />,  
            discount:"25% de descuento", 
            price: '3.499,00', 
            lastPrice: '5.699,00', 
            stock: 27, 
            coleccion:'Coleccion 2020', 
            color:'+6 colores',
            colorSeleccionado: 
                <div className='colorActual' style={{display:'flex', alignItems:'center'}}>
                    <p style={{marginRight:'10px'}}>Color:</p> <figure className='colorFigure' style={{background:'#E5E5E5'}}></figure> <p>Gris</p>
                </div> ,
            colorVariantes:
                <div className='colorVariantes' style={{display:'flex', alignItems:'center'}}>
                    <p style={{marginRight:'10px'}}>Colores: </p>
                    <ul style={{display:'flex'}}>
                        <li><a href=""><figure className='colorFigure' style={{background:'#EEEFBE'}}></figure></a></li>
                        <li><a href=""><figure className='colorFigure' style={{background:'#00532C'}}></figure></a></li>
                        <li><a href=""><figure className='colorFigure' style={{background:'#2D4582'}}></figure></a></li>
                        <li><a href=""><figure className='colorFigure' style={{background:'#CC2229'}}></figure></a></li>
                        <li><a href=""><figure className='colorFigure' style={{background:'#2C3330'}}></figure></a></li>
                        <li><a href=""><figure className='colorFigure' style={{background:'#FFCDE5'}}></figure></a></li>
                    </ul>
                </div>,
            referencia: <p>REFERENCIA TH4981-21</p>,
            descripcion: <ul>
                            <li> Acabados acanalados en los extremos de las mangas y la cintura.</li>
                            <li> Cocodrilo verde bordado en el pecho</li>
                            <li> Algodón (100%) </li>
                        </ul>,
            tallas: <ul style={{display:'flex', alignItems:'center'}}>
                        <li>XS</li>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                        <li>XXL</li>
                    </ul>
        
        },
        {   id: 2,
            categoriaId: 'hombre',
            name: "Buzo de hombre con capucha rustico",  
            img:<img src={"/img/Items/buzo-hombre.svg"} className="imgMain" style={{maxWidth:'300px'}}/>, 
            imgAlt: <img src={"/img/Items/buzo-hombre-dorso.webp"} className="imgAlt"/>,  
            discount:"10% de descuento", 
            price: '7.499,00', 
            lastPrice: '8.699,00', 
            stock: 8, 
            coleccion:'Coleccion 2020', 
            color:'+3 colores',
            colorSeleccionado: 
                <div className='colorActual' style={{display:'flex', alignItems:'center'}}>
                    <p style={{marginRight:'10px'}}>Color:</p> <figure className='colorFigure'></figure> <p>Negro</p>
                </div> ,
            colorVariantes:
                <div className='colorVariantes' style={{display:'flex', alignItems:'center'}}>
                    <p style={{marginRight:'10px'}}>Colores: </p>
                    <ul style={{display:'flex'}}>
                        <li><a href=""><figure className='colorFigure' style={{background:'#EEEFBE'}}></figure></a></li>
                        <li><a href=""><figure className='colorFigure' style={{background:'#00532C'}}></figure></a></li>
                        <li><a href=""><figure className='colorFigure' style={{background:'#2D4582'}}></figure></a></li>
                    </ul>
                </div>,
            referencia: <p>REFERENCIA SH5380-21</p>,
            descripcion: <ul>
                            <li> Estilo rustico con capucha y cierre.</li>
                            <li> Base principal: algodón 87%, poliester 13%</li>
                            <li> Base principal: algodón 100% </li>
                        </ul>,
            tallas: <ul style={{display:'flex', alignItems:'center'}}>
                        <li>XS</li>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                        <li>XXL</li>
                    </ul>
        },     
        { 
            id: 3,
            categoriaId: 'mujer', 
            name: "Vestido Polo De Mujer En Piqué De Algodón Con Cinturón", 
            img: <img src={"/img/Items/vestido-mujer.svg"} className="imgMain" style={{maxWidth:'300px'}}/>,
            imgAlt: <img src={"/img/Items/vestido-mujer-alt.svg"} className="imgAlt" />,  
            discount:"35% de descuento", 
            price: '8.449,00', 
            lastPrice: '12.999,00', 
            stock: 11, 
            coleccion:'Nueva coleccion', 
            color:'+2 colores',
            colorSeleccionado: 
                <div className='colorActual' style={{display:'flex', alignItems:'center'}}>
                    <p style={{marginRight:'10px'}}>Color:</p> <figure className='colorFigure' style={{background:'#2D4582'}}></figure> <p> Azul Marino </p>
                </div> ,
            colorVariantes:
                <div className='colorVariantes' style={{display:'flex', alignItems:'center'}}>
                    <p style={{marginRight:'10px'}}>Colores: </p>
                    <ul style={{display:'flex'}}>
                        <li><a href=""><figure className='colorFigure' style={{background:'#EEEFBE'}}></figure></a></li>
                        <li><a href=""><figure className='colorFigure' style={{background:'#00532C'}}></figure></a></li>
                    </ul>
                </div>,
            referencia: <p>REFERENCIA EF5471-21</p>,
            descripcion: 
                <ul>
                    <li> Estilo rustico con capucha y cierre.</li>
                    <li> Acabados acanalados en los puños y en la cintura</li>
                    <li> Cocodrilo verde bordado en el pecho </li>
                </ul>,
            tallas: <ul style={{display:'flex', alignItems:'center'}}>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                    </ul>
        },
        { 
            id: 4,
            categoriaId: 'novedades', 
            name: "Zapatillas de hombre G80 OG", 
            img:<img src={"/img/Items/zapatillas-hombre.svg"} className="imgMain" style={{maxWidth:'300px'}}/>,
            imgAlt: <img src={"/img/Items/zapatillas-alt.png"} className="imgAlt" />,   
            discount:"35% de descuento", 
            price: '8.499,00', 
            lastPrice: '12.999,00', 
            stock: 7, 
            coleccion:'Nueva coleccion', 
            color:'+1 color',
            colorSeleccionado: 
                <div className='colorActual' style={{display:'flex', alignItems:'center'}}>
                    <p style={{marginRight:'10px'}}>Color:</p> <figure className='colorFigure' style={{background:'#FFFFF4'}}></figure> <p> Blanco </p>
                </div> ,
            colorVariantes:
                <div className='colorVariantes' style={{display:'flex', alignItems:'center'}}>
                    <p style={{marginRight:'10px'}}>Colores: </p>
                    <ul style={{display:'flex'}}>
                        <li><a href=""><figure className='colorFigure' style={{background:'#2D4582'}}></figure></a></li>
                    </ul>
                </div>,
            referencia: <p>REFERENCIA 39SMA0085</p>,
            descripcion: <ul>
                            <li> Parte superior de cuero y textil.</li>
                            <li> Suela de goma.</li>
                            <li> Bolsillos laterales y bolsillos planos en la espalda.</li>
                            <li> Cintura elástica con cordón oculto y cierre.</li>
                            <li> Cocodrilo verde bordado.</li>
                        </ul>,
            tallas: <ul style={{display:'flex', alignItems:'center'}}>
                        <li>39</li>
                        <li>40</li>
                        <li>41</li>
                        <li>42</li>
                        <li>43</li>
                        <li>44</li>
                    </ul>
        },
        { 
            id: 5,
            categoriaId: 'kids', 
            name: "Camisa De Niños De Poplin A Cuadros Manga Larga", 
            img:<img src={"/img/Items/camisa-ninio.svg"} className="imgMain" style={{maxWidth:'300px'}}/>,
            imgAlt: <img src={"/img/Items/camisa-ninio-alt.svg"} className="imgAlt" />,   
            discount:"5% de descuento", 
            price: '5.200,00', 
            lastPrice: '6.199,00', 
            stock: 16, 
            coleccion: 'Coleccion 2020', 
            color:'+1 color',
            colorSeleccionado: 
                <div className='colorActual' style={{display:'flex', alignItems:'center'}}>
                    <p style={{marginRight:'10px'}}>Color:</p> <figure className='colorFigure' style={{background:'linear-gradient(90deg, rgba(254,31,31,1) 0%, rgba(4,15,94,1) 100%)'}}></figure> <p style={{fontSize:'12px', marginLeft:'10px'}}> Azul Marino / Rojo </p>
                </div> ,
            colorVariantes:
                <div className='colorVariantes' style={{display:'flex', alignItems:'center'}}>
                    <p style={{marginRight:'10px'}}>Colores: </p>
                    <ul style={{display:'flex'}}>
                        <li>
                            <figure className='colorFigure' style={{background:'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(5,25,166,1) 38%, rgba(25,43,173,1) 64%, rgba(255,255,255,1) 100%)'}}></figure>
                        </li>
                    </ul>
                </div>,
            referencia: <p>REFERENCIA CJ3388-21</p>,
            descripcion: <ul>
                            <li> - Forma relajada. </li>
                            <li> - Cocodrilo de silicona en el pecho.</li>
                        </ul>,
            tallas: <ul style={{display:'flex', alignItems:'center'}}>
                        <li>4 </li>
                        <li>6 </li>
                        <li>10 </li>
                        <li>12 </li>
                    </ul>
        }
    ];
};

const itemPromise = new Promise((rej, res) => {
  setTimeout(() => {
    rej(getItemsList());
  }, 2000);
});

export default itemPromise;