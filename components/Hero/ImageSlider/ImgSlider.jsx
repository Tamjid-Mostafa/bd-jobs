import React from 'react'
import cn from 'clsx'
import s from './ImgSlider.module.css'
// import Swiper core and required modules
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    FreeMode,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import Container from '@components/ui/Container';

const ImgSlider = () => {

    const img = [
        {
            img: '/slide-01.jpg'
        },
        {
            img: '/slide-02.jpg'
        },
        {
            img: '/slide-03.jpg'
        },
        {
            img: '/slide-04.jpg'
        },
        {
            img: '/slide-05.jpg'
        },
    ]

    return (
        <div className={cn(s.root)}>
            <div className="max-h-fit max-w-sm lg:max-w-lg">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, A11y, FreeMode]}
                    loop={true}
                    navigation
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >

                    {
                        img.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className='flex justify-center'>
                                    <Image
                                        width={580}
                                        height={580}
                                        src={item.img}
                                        quality={100}
                                        loading='lazy'
                                    />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default ImgSlider