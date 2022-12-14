import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousel() {

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <section className='w-full'>
            <Slider {...settings}>
                <div className='h-[35vh] md:h-[55vh] px-1'>
                    <img src="/images/slider-badag.jpg" className='custom-shadow  w-full h-full object-cover rounded-lg border-2 border-transparent hover:border-gray-400' alt="slider-poster" />
                </div>
                <div className='h-[35vh] md:h-[55vh] px-1'>
                    <img src="/images/slider-badging.jpg" className='custom-shadow w-full h-full object-cover rounded-lg border-2 border-transparent hover:border-gray-400' alt="slider-poster" />
                </div>
                <div className='h-[35vh] md:h-[55vh] px-1'>
                    <img src="/images/slider-scale.jpg" className='custom-shadow w-full h-full object-cover rounded-lg border-2 border-transparent hover:border-gray-400' alt="slider-poster" />
                </div>
                <div className='h-[35vh] md:h-[55vh] px-1'>
                    <img src="/images/slider-scales.jpg" className='custom-shadow w-full h-full object-cover rounded-lg border-2 border-transparent hover:border-gray-400' alt="slider-poster" />
                </div>
            </Slider>
        </section>
    );
};

export default Carousel;