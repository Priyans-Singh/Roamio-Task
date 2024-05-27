import React from 'react'
import Testimonial from './testimonials'
import Slider from 'react-slick';


function testimonialContainer() {
    const data = [1,2,3,4,5,6];

    var settings = {
      dots: false,
      infinite: false,
      // speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1216,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        // {
        //   breakpoint: 480,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        //   }
        // }
      ]
    };
  return (
    <div className='container'>
       <Slider {...settings}>
         {/* {data.map( (el) =>{
          <Testimonial key={el} />
         } )} */}
         <Testimonial/>
         <Testimonial/>
         <Testimonial/>
         <Testimonial/>
         <Testimonial/>
         <Testimonial/>
       </Slider>
    </div>
  )
}

export default testimonialContainer