import React from 'react';
import "./styles/carousel.scss";
import { Button, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

const CarouselCategories = () => {
    return (
        <div className='carousel_container' style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>

            <CarouselProvider className='carouselPure'
                naturalSlideWidth={2000}
                naturalSlideHeight={2000}
                totalSlides={3}
                isPlaying={true}
                interval={2000}
                infinite={true}
                isIntrinsicHeight={true}
            >
                <Slider className='sliderPure'>
                    <Slide index={0} className='slide'>
                        <div className='slidePure'>   
                            <img src={"/img/sectionHombre.svg"} />
                            <div className='descrip'>
                                <h3>COLECCION SELECCIONADA</h3>
                                <h2>Coleccion para hombres</h2>
                                <Link to={`/categories/${'hombre'}`} >
                                    <Button>Descubrir<Icon name='arrow right'/></Button>
                                </Link>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={1}>
                        <div className='slidePure'>   
                            <img src={"/img/sectionMujer.svg"} />
                            <div className='descrip'>
                                <h3>COLECCION SELECCIONADA</h3>
                                <h2>Coleccion para mujeres</h2>
                                <Link to={`/categories/${'mujer'}`} >
                                    <Button>Descubrir<Icon name='arrow right'/></Button>
                                </Link>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={2}>
                        <div className='slidePure'>   
                            <img src={"/img/sectionNinio.svg"} />
                            <div className='descrip'>
                                <h3>COLECCION SELECCIONADA</h3>
                                <h2>Coleccion para niños</h2>
                                <Link to={`/categories/${'kids'}`} >
                                    <Button>Descubrir<Icon name='arrow right'/></Button>
                                </Link>
                            </div>
                        </div>
                    </Slide>


                </Slider>
                                    
                <div className='carousel_btns'>
                        <ButtonBack className='button_nextPrev'><Icon name='caret square left outline'/></ButtonBack>
                        <ButtonNext className='button_nextPrev'><Icon name='caret square right outline'/></ButtonNext>
                </div>
                
            </CarouselProvider>
        </div>
    )
}

export default CarouselCategories