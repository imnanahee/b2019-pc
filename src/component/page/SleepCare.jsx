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
// import Records from '../../records.json';
import Product from '../js/Product';
import { commaCheck } from '../js/common';
import { useNavigate } from 'react-router-dom';

const WaterCare = () => {
    const [data, setData] = useState(Product);
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();
    
    const bullet = ['합리적인 매트리스, 탑퍼교체 매트리스 프라임(퀸)', '분리·결합을 자유롭게, 단매트리스 패밀리 프레임'];

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
            <div className='subBanner sleepCare'>
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
                    <SwiperSlide><img src={images.subSc1} alt="코웨이 탑퍼교체 매트리스 프라임(퀸)"/></SwiperSlide>
                    <SwiperSlide><img src={images.subSc2} alt="코웨이 단매트리스 패밀리 프레임"/></SwiperSlide>
                </Swiper>
            </div>
            <div className='productListWrap'>
                <div className='wrapper'>
                    <div className='categoryProduct'>
                        <button onClick={()=>setData(Product)}>
                            <span className={activeIndex === 0 ? "active" : ""} onClick={()=>tabClickHandler(0)}>전체</span>
                        </button>
                        <button onClick={()=>filterResult('매트리스')}>
                            <span className={activeIndex === 1 ? "active" : ""} onClick={()=>tabClickHandler(1)}>매트리스</span>
                        </button>
                        <button onClick={()=>filterResult('프레임')}>
                            <span className={activeIndex === 2 ? "active" : ""} onClick={()=>tabClickHandler(2)}>프레임</span>
                        </button>
                    </div>
                    <div className='productList'> 
                        { data.filter(Product => Product.title === '매트리스').map((values, index) => {
                            const {imgSrc, alt, subText, code, category} = values;
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
                                        {/* {values.colors.length > 0 && (
                                            <ul className='colorType'>
                                                {values.colors.map((item, index) => 
                                                    <li 
                                                    key={index} 
                                                    style={{backgroundColor: `${item.colorCode}`}}
                                                    name={item.colorCode}
                                                    >
                                                        <span>{item.color}</span>
                                                    </li>
                                                )}
                                            </ul>
                                        )} */}
                                        <ul className='colorType'>
                                            {values.colors.map((item, index) => 
                                                values.colors.length > 0 ?
                                                <li
                                                key={index}
                                                style={{backgroundColor: `${item.colorCode}`}}
                                                >
                                                    <span>{item.color}</span>
                                                </li> : <span>나오지말아봐</span>
                                            )}
                                        </ul>
                                        <span className='code'>{code}</span>
                                        <h4 className='name'>{alt}</h4>
                                        <ul className='priceWrap'>
                                            <li><p>구매</p><span className='price'>{commaCheck(values.price)}원</span></li>
                                            <li><p>렌탈</p><span className='rentalPrice'>{commaCheck(values.rentalPrice)}원~</span></li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }) }
                    </div>
                </div>
            </div>
            <img src={images.subScBanner} alt="개인의 체형과 라이프 스테이지에 꼭 맞춘 최적의 수면 솔루션을 제공합니다." className='subBottomBanner'/>
        </Layout>
    );
};

export default WaterCare;