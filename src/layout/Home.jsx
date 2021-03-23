import React from 'react';
import {NavLink} from 'react-router-dom';
import "./styles/styles.scss";
import FadeIn from 'react-fade-in';
import { Icon } from 'semantic-ui-react';
import Footer from './Footer';
import CategoriesHome from './CategoriesHome';
import LacosteNational from './LacosteNational';
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {

    const videoSource = "https://static1.lacoste.com/videos/videos/marketing/StrateWindow-Desk-NewHorizons-10s.mp4"

    return (
        <FadeIn>
        <section className='home_container' id='home'>

            <video autoPlay="autoplay" loop="loop" muted className="video">
                <source src={videoSource}/>
            </video> 
            
            <div className="title_container">
                <h1 className='home_title'>New horizons</h1>
                <p className='home_subtitle'>Nueva colección</p>
            </div>
            
            <NavLink to="/catalogo" className="catalogo_btn">Descubrir catálogo <Icon name='tags'style={{marginLeft:'7px'}}/></NavLink>

            <div className='icon_container'>
                <Link smooth={true} duration={600} offset={-75} to="categoriesHome">
                    <Icon name='chevron down' className='down_icon'/>
                </Link>
            </div>

        </section>
        <>
            <CategoriesHome />
        </>
        <>
            <LacosteNational />
        </>
        <>
            <Footer />
        </>
        </FadeIn>
    )
}

export default Home