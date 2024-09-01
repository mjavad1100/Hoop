import React, { useRef, useState } from 'react';
import { GiCoffeeCup } from "react-icons/gi";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

 


  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='myicon'>
                <GiCoffeeCup style={{fontSize:"1.9rem", color:"lightblue"}} />
                 <p style={{margin:"0", color:"lightblue", fontWeight:"bold"}}>بار سرد </p>
        </div></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        
      </Swiper>

    </>
  );
}
