import React, {useState} from 'react';
import CarouselCategories from './CarouselCategories';
import {Icon} from "semantic-ui-react";
import {Link} from "react-scroll";
import 'semantic-ui-css/semantic.min.css';
import "./categories.scss";

const CategoriesHome = () => {
    const [scrollTop, setScrollTop] = useState(false);

    const scrollToTop = () => {
      if (window.scrollY >= 180) {
        setScrollTop(true)
      } else {
        setScrollTop(false)
      }
    };
    window.addEventListener('scroll', scrollToTop);

    return (
        <>
            <section className='categoriesLayout_home' id='categoriesHome'>

            <h1 className='title'>Encontrá tu look</h1>

                <div className='cateogries_home'>
                    <div className='category_home'>
                        <CarouselCategories/>
                    </div>
                    <div className='category_home'>
                        <img src={"/img/accesorios.svg"} alt=""/>
                        <Link className='link_btn'>ACCESORIOS</Link>
                    </div>
                </div>
                <div className='cateogries_home'>
                    <div className='category_home'>
                        <img src={"/img/calzado.svg"} alt=""/>
                        <Link className='link_btn'>CALZADO</Link>
                    </div>
                    <div className='category_home' >
                        <img src={"/img/polos.svg"} alt=""/>
                        <Link className='link_btn'>POLOS</Link> 
                    </div>
                </div>
            </section>

            <Link className={scrollTop ? 'backToTop active' : 'backToTop'} smooth={true} duration={600} to="home">
                <Icon name='chevron up'/>
            </Link>
        </>
    )
}

export default CategoriesHome
