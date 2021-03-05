import React from 'react';
import {Link} from 'react-router-dom';
import "./styles.scss";
import FadeIn from 'react-fade-in';
import {Icon} from 'semantic-ui-react';

const Home = () => {

    const videoSource = "https://static1.lacoste.com/videos/videos/marketing/StrateWindow-Desk-NewHorizons-10s.mp4"

    return (
        <FadeIn>
        <section className='home_container'>

            <video autoPlay="autoplay" loop="loop" muted className="video">
                <source src={videoSource}/>
            </video>
            
            <div className="title_container">
                <h1 className='home_title'>New horizons</h1>
                <p className='home_subtitle'>Nueva colección</p>
            </div>
            
            <Link to="/catalogo" className="catalogo_btn">Conocer catálogo <Icon name='tags'style={{marginLeft:'7px'}}/></Link>
            
        </section>
        </FadeIn>
    )
}

export default Home
