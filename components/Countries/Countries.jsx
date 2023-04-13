import cn from 'clsx'
import s from './Countries.module.css'
import React from 'react'
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
import Text from '@components/ui/Text';

const Countries = () => {

    const countries = [
        {
            name: 'United States',
            img: '',
            vacancies: '45',
        },
        {
            name: 'United States',
            img: '',
            vacancies: '45',
        },
        {
            name: 'United States',
            img: '',
            vacancies: '45',
        },
        {
            name: 'United States',
            img: '',
            vacancies: '45',
        },
        {
            name: 'United States',
            img: '',
            vacancies: '45',
        },
        {
            name: 'United States',
            img: '',
            vacancies: '45',
        },
        {
            name: 'United States',
            img: '',
            vacancies: '45',
        },
        {
            name: 'United States',
            img: '',
            vacancies: '45',
        },
    ]

    return (
        <div
            className={cn(s.root)}
        >
            <div className={cn(s.countrys_job)}>
                <Container >
                    <Text variant='pageHeading' className='text-center text-accent-0'>
                    Jobs in different countries
                    </Text>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, A11y, FreeMode]}
                        loop={true}
                        navigation
                        pagination={{
                            clickable: true,
                        }}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints= {{
                            // when window width is >= 320px
                            320: {
                              slidesPerView: 1,
                              spaceBetween: 20
                            },
                            // when window width is >= 480px
                            480: {
                              slidesPerView: 3,
                              spaceBetween: 30
                            },
                            // when window width is >= 640px
                            640: {
                              slidesPerView: 4,
                              spaceBetween: 40
                            },
                            780: {
                                slidesPerView: 6,
                              spaceBetween: 40
                            }
                          }}
                    >

                        {
                            countries.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className='my-10'>
                                        <a className={cn(s.country_wrap, "")} href=""

                                        >
                                            <div className={cn(s.vacancy)} style={{
                                                backgroundImage: "url(/United-Arab-Emirates.svg)"
                                            }}>
                                                <h3 className={cn(s.number)}>45 </h3>
                                                <p className={cn(s.text)}>vacancies</p>
                                            </div>
                                            <p className={cn(s.name)}>United Arab Emirates</p>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Container>
            </div>
        </div>
    )
}

export default Countries