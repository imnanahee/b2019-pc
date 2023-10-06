import React from 'react';
import images from '../images/images';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
// import required modules
import { EffectFade, Pagination } from 'swiper/modules';

const banner = [
    {
        id: 1,
        title: "정수기",
        img: [
            images.subWc1,
            images.subWc2
        ],
        bullet: [
            "혁신기술의 완성, 시루직수 정수기",
            "편리하고 위생적인, 나노직수 정수기"
        ]
    },
    {
        id: 2,
        title: "청정기",
        img: [
            images.subAc1,
            images.subAc2,
        ],
        bullet: [
            "강력한 청정에 편리함까지, 공기청정기",
            "의료청정부터 의류건조까지, 사계절 의류청정기"
        ]
    },
    {
        id: 3,
        title: "비데/연수기",
        img: [
            images.subBc1,
            images.subBc2,
        ],
        bullet: [
            "욕실을 더욱 세련되게, 스타일케어 비데",
            "위생적인 소재로 깨끗하게, 스스로살균 비데"
        ]
    },
    {
        id: 4,
        title: "매트리스",
        img: [
            images.subSc1,
            images.subSc2,
        ],
        bullet: [
            "합리적인 매트리스, 탑퍼교체 매트리스 프라임(퀸)",
            "분리·결합을 자유롭게, 단매트리스 패밀리 프레임"
        ]
    },
]

const BannerSlide = () => {
    return (
        <div className='subBanner'>
            {banner.bullet.map((item, index) => {
                <Swiper
                    key={index}
                    className='subSwiper'
                    slidesPerView={1}
                    loop={true}
                    effect={'fade'}
                    modules={[Pagination, EffectFade]}
                    pagination={{
                        clickable: true,
                        renderBullet: (className, index) => {
                            return `<div class=${className}><span>${item[index]}</span></div>`;
                        }
                    }}>
                    
                </Swiper>
            })}
            <Swiper
                slidesPerView={1}
                loop={true}
                effect={'fade'}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<div class=${className}><span>${bullet[index]}</span></div>`;
                    }
                }}
                modules={[Pagination, EffectFade]}
                className="subSwiper"
                >
                <SwiperSlide><img src={images.subWc1} alt="혁신 기술로 완성한 시루필터와 직수의 만남, 코웨이 시루직수 정수기"/></SwiperSlide>
                <SwiperSlide><img src={images.subWc2} alt="위생걱정 없이 똑! 소리나는 편안함 코웨이 나노직수 정수기(헤이지블루)"/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerSlide;