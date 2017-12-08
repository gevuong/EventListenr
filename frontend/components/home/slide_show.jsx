// Libs
import React, { Component } from 'react';
import Slider from 'react-slick';

// Need to create own carousel using jQuery.... no react slick ....


const SlideShow = () => {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
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
      <div className='img-wrapper'>
        <img className="splash-image" src="https://res.cloudinary.com/dtluc0y85/image/upload/c_crop,g_custom:face/v1509476016/motorcycles-race-helmets-pilots-163414_kkrfeo.jpg">
        </img>

      </div>
      <div className='img-wrapper'>
        <img className="splash-image" src="https://res.cloudinary.com/dtluc0y85/image/upload/v1509953509/cartrackday2_zqrbfa.png"/>
      </div>
      <div className='img-wrapper'>
        <img className='splash-image' src='https://res.cloudinary.com/dtluc0y85/image/upload/c_scale,w_1080/v1509476893/dirtbike_zhdljo.jpg'></img></div>
      <div className='img-wrapper'>
        <img className='splash-image' src='https://res.cloudinary.com/dtluc0y85/image/upload/v1509758695/Motobot_thunderhill_test_valentino_rossi_11_bycscn.png'></img>
      </div>
      <div className='img-wrapper'>
        <img className='splash-image' src='https://res.cloudinary.com/dtluc0y85/image/upload/v1509954631/lagunaseca_ttsqt6.png'></img>
      </div>
    </Slider>
  );
}

export default SlideShow;

// function NextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={ className }
//       style={{ display: 'block', background: 'red', padding: '50px' }}
//       onClick={ onClick }
//     >
//     </div>
//   );
// }
//
// function PrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={ className }
//       style={{ display: 'block', background: 'green', padding: '50px' }}
//       onClick={ onClick }
//     >
//     </div>
//   );
// }


// export default class CustomArrows extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       nextArrow: <NextArrow />,
//       prevArrow: <PrevArrow />
//     };
//     return (
//       <div>
//         <h2>Custom Arrows</h2>
//         <Slider {...settings}>
//           <div><h3><img className="splash-image" src="https://res.cloudinary.com/dtluc0y85/image/upload/c_crop,g_custom:face/v1509476016/motorcycles-race-helmets-pilots-163414_kkrfeo.jpg"/></h3></div>
//           <div><h3>2</h3></div>
//           <div><h3>3</h3></div>
//           <div><h3>4</h3></div>
//           <div><h3>5</h3></div>
//           <div><h3>6</h3></div>
//         </Slider>
//       </div>
//     );
//   }
// }
