import React from 'react';
import Slider from "react-slick";
import Spaghetti from '../images/Spaghetti.jpg'
import Strawberries from '../images/Strawberries.jpg'
import ChessePlatter from '../images/ChessePlatter.jpg'
import Donuts from '../images/Donuts.jpg'
import Croissant from '../images/Croissant.jpg'

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '20px', zIndex: 1 }} // Customize style here
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i> {/* Use FontAwesome or any icon */}
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '40px', zIndex: 1 }} // Customize style here
      onClick={onClick}
    >
      <i className="fas fa-chevron-right"></i> {/* Use FontAwesome or any icon */}
    </div>
  );
};

const ImageSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.6,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div id='Home' className='whiteBackground pb-5 pt-4 scrollToSection'>
      <div className="slider-container">
        <Slider {...settings}>
          <img src={Spaghetti} alt='Spaghetti' className='foodImage pe-4' />
          <img src={Strawberries} alt='Strawberries' className='foodImage pe-4' />
          <img src={ChessePlatter} alt='ChessePlatter' className='foodImage pe-4' />
          <img src={Donuts} alt='Donuts' className='foodImage pe-4' />
          <img src={Croissant} alt='Croissant' className='foodImage pe-4' />
        </Slider>
      </div>
    </div>
  )
}

export default ImageSlider;
