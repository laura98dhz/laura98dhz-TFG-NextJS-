import React from "react";
import Carousel from 'react-bootstrap/Carousel';

//import img1 from './fondoPaginaPrincipal.jpg';
import img2 from './img/hipoteca.jpg';
import img3 from './img/hipoteca2.jpg';
import img1 from './img/fondoPaginaPrincipal.jpg';
import { useState } from "react";
export default function Slider() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="slider--container">

            <Carousel.Item>
                <img
                    className="slider--img"
                    src={img2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="slider--img"
                    src={img3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="slider--img"
                    src={img1}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );

    
}