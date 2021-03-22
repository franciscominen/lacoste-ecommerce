import React from 'react';
import {Button} from 'semantic-ui-react';
import "./categories.scss"

const LacosteNational = () => {

    const videoSource = "https://static1.lacoste.com/videos/videos/marketing/homepage-FW20-component-brand-block-nationalgeographic-desk.mp4"

    return (
        <section className='nationalSection_container'>

            <div className='video_container'>
                <h2>Lacoste Inside <img src={"img/logoBlack.svg"} style={{marginLeft:'15px'}}/></h2>
                    
                <video autoPlay="autoplay" loop="loop" muted className="video">
                    <source src={videoSource}/>
                </video>
            </div>

            <div className='descrip_container'>
                <h3>COLABORACION EXCLUSIVA</h3>
                <h1>Lacoste x National Geographic</h1>

                <p>Cuatro especies increíbles se encuentran con el cocodrilo: Lacoste y National Geographic se unen para celebrar la belleza de la naturaleza y sus habitantes.</p>

                <Button>
                    Descubrir
                </Button>
            </div>
            
        </section>
    )
}

export default LacosteNational
