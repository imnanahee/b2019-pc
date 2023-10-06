import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const WaterCare = () => {
    const [data, setData] = useState(Product);
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();
    
    const bullet = ['강력한 청정에 편리함까지, 공기청정기', '의료청정부터 의류건조까지, 사계절 의류청정기'];
    
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
            <div className='subBanner airCare'>
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
                    <SwiperSlide><img src={images.subAc1} alt="강력한 청정 성능에 편리함까지 핵심기능을 담다!"/></SwiperSlide>
                    <SwiperSlide><img src={images.subAc2} alt="의류케어에서 공간케어까지 두 배로 넓어진 능력"/></SwiperSlide>
                </Swiper>
            </div>
            <div className='productListWrap'>
                <div className='wrapper'>
                    <div className='categoryProduct'>
                        <button onClick={()=>setData(Product)}>
                            <span className={activeIndex === 0 ? "active" : ""} onClick={()=>tabClickHandler(0)}>전체</span>
                        </button>
                        <button onClick={()=>filterResult('공기청정기')}>
                            <span className={activeIndex === 1 ? "active" : ""} onClick={()=>tabClickHandler(1)}>공기청정기</span>
                        </button>
                        <button onClick={()=>filterResult('가습')}>
                            <span className={activeIndex === 2 ? "active" : ""} onClick={()=>tabClickHandler(2)}>가습기</span>
                        </button>
                        <button onClick={()=>filterResult('의류청정기')}>
                            <span className={activeIndex === 3 ? "active" : ""} onClick={()=>tabClickHandler(3)}>의류청정기</span>
                        </button>
                    </div>
                    <div className='productList'> 
                        { data.filter(Product => Product.title === '공기청정기').map((values, index) => {
                            const {imgSrc, alt, subText, code, category} = values;
                            const priceNum = commaCheck(values.price);
                            const rentalPriceNum = commaCheck(values.rentalPrice);
                            // const productClickHandler = () => {
                            //     navigate(`${location.pathname}/detail/${values.id}`, { state:values });
                            // }
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
                                                    name={item.colorCode}
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
            <img src={images.subAcBanner} alt="눈으로 확인할 수 있는 깨끗한 공기가 편안한 쾌적함을 선사하고 안심할 수 있게 합니다." className='subBottomBanner'/>
        </Layout>
    );
};

export default WaterCare;