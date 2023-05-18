import {useState, useEffect} from 'react';
import {slides as sliders} from '../../../components/data';
import Arrows from '../../../components/arrows';
import Dots from '../../../components/dots';

import './carousel.css';
const Carousel = () => {
    const slides = sliders;
    const[currentIndex, setCurrentIndex] = useState(0);

    const isGreater = currentIndex === slides.length-1;
    useEffect(() =>{
        const interval = setInterval(() => {
            setCurrentIndex(isGreater ? 0 : currentIndex +1 );
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handlePrev = () =>{
        const isCurrentIndex = currentIndex === 0;
        const newIndex = isCurrentIndex ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
    }

    const handleNext = () =>{
        const isCurrentIndex = currentIndex === slides.length -1;
        const newIndex = isCurrentIndex ? 0 : currentIndex +1;
        setCurrentIndex(newIndex);
    }

    const handleDotClick = slideIndex =>{
        setCurrentIndex(slideIndex);
    }

    return (
        <div className="slidesContainer" id='home'>
            
            <Arrows handlePrev={handlePrev} handleNext={handleNext}/>

            {slides.map((slide, slideIndex) => (
                <div className={currentIndex === slideIndex ? "slide slideActive fade" : "slide"} key={slide.id}>
                    <div className="txtArea">
                        <h1>{slide.title}</h1>
                        <p>{slide.description}</p>
                    </div>

                    <div className="imageArea">
                        <img src={slide.img}/>
                    </div>
                </div>
            ))}

            <Dots slides={slides} currentIndex={currentIndex} handleDotClick={handleDotClick}/>
        </div>
    );
}
 
export default Carousel;