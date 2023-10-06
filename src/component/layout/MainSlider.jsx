import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
// import required modules
import { EffectFade, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { faAngleLeft, faAngleRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '../images/images';

const items = [
    {
        id: 1,
        imgSrc: images.wc,
        productSrc: images.wcText,
        alt: '정수기',
        comment: '당신을 위한 더 새로운 물! 더 건강한 물로 일상의 활력을 선사합니다.',
        link: 'WaterCare',
    },
    {
        id: 2,
        imgSrc: images.ac,
        productSrc: images.acText,
        alt: '공기청정기',
        comment: '당신을 위한 최상의 릴렉스! 편안한 쾌적함의 공기를 선사해드립니다.',
        link: 'AirCare',
    },
    {
        id: 3,
        imgSrc: images.bc,
        productSrc: images.bcText,
        alt: '비데',
        comment: '당신을 위한 건강한 습관! 몸에 닿는 깨끗한 물로 쾌적한 컨디션을 만듭니다.',
        link: 'BodyCare',
    },
    {
        id: 4,
        imgSrc: images.sc,
        productSrc: images.scText,
        alt: '매트리스',
        comment: '당신을 위한 최고의 수면! 개인에 꼭 맞춘 최적의 수면 환경을 제공합니다.',
        link: 'SleepCare'
    },
]

const MainSlider = () => {
    return (
        <div className='sliderWrap'>
            <div className='mainSlider'>
                <Swiper
                slidesPerView={1}
                loop={true}
                effect={'fade'}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
                modules={[Navigation, EffectFade]}
                style= {{
                    '--swiper-navigation-color': '#34b0dd',
                }}
                className="mySwiper"
                >
                    {items.map((item, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <span className="img"><img src={item.imgSrc} alt={item.alt} /></span>
                                <div className="productInfo">
                                    <span className="comment">{item.comment}</span>
                                    <img src={item.productSrc} alt={item.alt} />
                                    <Link className="detailProduct" to={item.link}>자세히 보기 <FontAwesomeIcon icon={faAnglesRight} size="lg" /></Link>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    <div className="swiperBtnWrap">
                        <div className="prev swiperBtn"><FontAwesomeIcon icon={faAngleLeft} size="xl" /></div>
                        <div className="next swiperBtn"><FontAwesomeIcon icon={faAngleRight} size="xl" /></div>
                    </div>
                </Swiper>
            </div>
            <div className='subSlider'>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    initialSlide={4}
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                    modules={[Navigation, EffectFade]}
                    style= {{
                        '--swiper-navigation-color': '#34b0dd',
                    }}
                    className="mySwiper_2"
                    >
                        {items.map((item, id) => {
                            return (
                                <SwiperSlide key={id}>
                                    <span className="img"><img src={item.imgSrc} alt={item.alt} /></span>
                                </SwiperSlide>
                            )
                        })}
                </Swiper>
            </div>
        </div>
    );
};

export default MainSlider;