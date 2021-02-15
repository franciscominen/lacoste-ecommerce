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
            color:'+3 colores',
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
            color:'+2 colores',
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
            img: <img src={"/img/Items/vestidoMujer.png"} className="imgMain" style={{maxWidth:'300px'}}/>,
            imgAlt: <img src={"/img/Items/vestido-mujer-alt.svg"} className="imgAlt" />,  
            discount:"35% de descuento", 
            price: '8.449,00', 
            lastPrice: '12.999,00', 
            stock: 11, 
            coleccion:'Nueva coleccion', 
            color:'+1 color',
            referencia: <p>REFERENCIA EF5471-21</p>,
            descripcion: <ul>
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

const itemsPromise = new Promise((rej, res) => {
  setTimeout(() => {
    rej(getItemsList("1"));
  }, 2000);
});

export default itemsPromise;