import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css';

import { SliderProducts } from '../../data/products'


import { Pagination, Navigation } from 'swiper';
//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


const Slider = () => {
    return (
        <div className='s-container'>
            <Swiper className="mySwiper"
                loopFillGroupWithBlank={true}
                modules={[Pagination, Navigation]}
                slidesPerView={3}
                spaceBetween={40}
                slidesPerGroup={1}
                navigation
                loop={true} >
                {SliderProducts.map((product: any, index: any) =>
                    <SwiperSlide>
                        <div className="left-s">
                            <div className="name">
                                <span>{product.name}</span>
                                <span>{product.details}</span>
                            </div>

                            <span>{product.price}$</span>
                            <div>Shop now!</div>
                        </div>
                        <img src={product.img} alt="product" className="img-p" />
                    </SwiperSlide>
                )}


            </Swiper>
        </div>
    )
}

export default Slider
