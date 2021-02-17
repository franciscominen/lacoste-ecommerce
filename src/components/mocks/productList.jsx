const getItemsList = (id) => {
    return [
        {   id: 1,
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
        }
    ];
};

const itemPromise = new Promise((rej, res) => {
  setTimeout(() => {
    rej(getItemsList("1"));
  }, 2000);
});

export default itemPromise;