// Libs
import React, { Component } from 'react';
import Slider from 'react-slick';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={ className }
      style={{ display: 'block', background: 'red' }}
      onClick={ onClick }
    ></div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={ className }
      style={{ display: 'block', background: 'green' }}
      onClick={ onClick }
    ></div>
  );
}

const SlideShow = () => {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slideToSlide: true,
    arrows: false,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    fade: true,
  };

  return (
    <Slider {...settings}>
      <div className='img-wrapper'><img className="splash-image" src="https://res.cloudinary.com/dtluc0y85/image/upload/c_crop,g_custom:face/v1509476016/motorcycles-race-helmets-pilots-163414_kkrfeo.jpg"/>
      </div>
      <div className='img-wrapper'><img className='splash-image' src='http://res.cloudinary.com/dtluc0y85/image/upload/c_scale,w_1080/v1509476893/dirtbike_zhdljo.jpg'></img></div>
      <div className='img-wrapper'><img className='splash-image' src='https://res.cloudinary.com/dtluc0y85/image/upload/c_scale,h_370,w_615/v1500534602/homepage_test_ltezbc.gif'></img>
      </div>
    </Slider>
  );
}

export default SlideShow;
