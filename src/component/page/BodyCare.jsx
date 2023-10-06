import React, { useState } from 'react';
import Layout from '../layout/Layout';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
// import required modules
import { EffectFade, Pagination } from 'swiper/modules';
import images from '../images/images';
import Product from '../js/Product';
import { commaCheck } from '../js/common';
import { useNavigate } from 'react-router-dom';


const WaterCare = () => {
    const [data, setData] = useState(Product);
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();

    const bullet = ['욕실을 더욱 세련되게, 스타일케어 비데', '위생적인 소재로 깨끗하게, 스스로살균 비데'];

    const filterResult = (cateItem) => {
        const result = Product.filter((curData) => {
            return curData.category === cateItem;
        })
        setData(result);
    }
    
    const tabClickHandler = (index) => {
        setActiveIndex(index);
    }


    return (
        <Layout>
            <div className='subBanner bodyCare'>
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
                    <SwiperSlide><img src={images.subBc1} alt="욕실을 더욱 세련되게, 스타일케어 비데"/></SwiperSlide>
                    <SwiperSlide><img src={images.subBc2} alt="똑똑, 깨끗, 알뜰, 비데 선택의 기준이 되다!"/></SwiperSlide>
                </Swiper>
            </div>
            <div className='productListWrap'>
                <div className='wrapper'>
                    <div className='categoryProduct'>
                        <button onClick={()=>setData(Product)}>
                            <span className={activeIndex === 0 ? "active" : ""} onClick={()=>tabClickHandler(0)}>전체</span>
                        </button>
                        <button onClick={()=>filterResult('비데')}>
                            <span className={activeIndex === 1 ? "active" : ""} onClick={()=>tabClickHandler(1)}>비데</span>
                        </button>
                        <button onClick={()=>filterResult('연수기')}>
                            <span className={activeIndex === 2 ? "active" : ""} onClick={()=>tabClickHandler(2)}>연수기</span>
                        </button>
                    </div>
                    <div className='productList'> 
                        { data.filter(Product => Product.title === '비데/연수기').map((values, index) => {
                            const {imgSrc, alt, subText, code, category} = values;
                            const priceNum = commaCheck(values.price);
                            const rentalPriceNum = commaCheck(values.rentalPrice);
                            return (
                                <div 
                                    className={'cell __'+index} 
                                    key={index}
                                    onClick={() => navigate(`/detail/${values.id}`)} 
                                >
                                    <img src={imgSrc} alt={alt} />
                                    <div className='productText'>
                                        <span className='category'>{category}</span>
                                        <p className='desc'>{subText}</p>
                                        {values.colors.length > 0 && (
                                            <ul className='colorType'>
                                                {values.colors.map((item, index) => 
                                                    <li 
                                                    key={index} 
                                                    style={{backgroundColor: `${item.colorCode}`}}
                                                    className={item.colorClass}
                                                    >
                                                        <span>{item.color}</span>
                                                    </li>
                                                )}
                                            </ul>
                                        )}
                                        <span className='code'>{code}</span>
                                        <h4 className='name'>{alt}</h4>
                                        <ul className='priceWrap'>
                                            <li><p>구매</p><span className='price'>{priceNum}원</span></li>
                                            <li><p>렌탈</p><span className='rentalPrice'>{rentalPriceNum}원~</span></li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }) }
                    </div>
                </div>
            </div>
            <img src={images.subBcBanner} alt="매일 몸에 닿는 깨끗한 물과 규칙적인 습관이 건강하고 쾌적한 컨디션을 만듭니다." className='subBottomBanner'/>
        </Layout>
    );
};

export default WaterCare;