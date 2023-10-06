import React, { useState } from 'react';
import '../css/sub.css';
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
// import ProductView from './ProductView';
import { commaCheck } from '../js/common';
import { useNavigate } from 'react-router-dom';

const WaterCare = () => {
    const [data, setData] = useState(Product);
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();

    const bullet = ['혁신기술의 완성, 시루직수 정수기', '편리하고 위생적인, 나노직수 정수기'];
    
    const filterResult = (cateItem) => {
        const result = Product.filter((curData) => {
            return curData.category.includes(cateItem);
        })
        setData(result);
    }
    
    const tabClickHandler = (index) => {
        setActiveIndex(index);
    }

    return (
        <Layout>
            <div className='subBanner waterCare'>
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

            <div className='productListWrap'>
                <div className='wrapper'>
                    <div className='categoryProduct'>
                        <button onClick={()=>setData(Product)}>
                            <span className={activeIndex === 0 ? "active" : ""} onClick={()=>tabClickHandler(0)}>전체</span>
                        </button>
                        <button onClick={()=>filterResult('냉정수기')}>
                            <span className={activeIndex === 1 ? "active" : ""} onClick={()=>tabClickHandler(1)}>냉정수기</span>
                        </button>
                        <button onClick={()=>filterResult('얼음')}>
                            <span className={activeIndex === 2 ? "active" : ""} onClick={()=>tabClickHandler(2)}>얼음정수기</span>
                        </button>
                        <button onClick={()=>filterResult('냉온정수기')}>
                            <span className={activeIndex === 3 ? "active" : ""} onClick={()=>tabClickHandler(3)}>냉온정수기</span>
                        </button>
                        <button onClick={()=>filterResult('정수전용')}>
                            <span className={activeIndex === 4 ? "active" : ""} onClick={()=>tabClickHandler(4)}>정수전용</span>
                        </button>
                    </div>
                    <div className='productList'> 
                        { data.filter(Product => Product.title === '정수기').map((values, index) => {
                            const {imgSrc, alt, subText, code, category} = values;
                            return ( 
                                // <Button onClick={() => {navigate("WaterCare")}} />
                                <div 
                                    className={'cell __'+index} 
                                    key={index}
                                    onClick={() => navigate(`/detail/${values.id}`)} 
                                >
                                    <img src={imgSrc} alt={alt} />
                                    <div className='productText'>
                                        <span className='category'>{category}</span>
                                        <p className='desc'>{subText}</p>
                                        <ul className='colorType'>
                                            { values.colors.map( (item, index) => {
                                                return (
                                                    <li 
                                                    key={index} 
                                                    style={{backgroundColor: `${item.colorCode}`}}
                                                    name={item.colorCode}
                                                    >
                                                        <span>{item.color}</span>
                                                    </li>
                                                )
                                            }) }
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
            <img src={images.subWcBanner} alt="깨끗한 물을 넘어 건강하고 즐거운 물이 다양한 음용 경험과 일상의 활력을 선사합니다." className='subBottomBanner'/>
        </Layout>
    );
};

export default WaterCare;