import React from 'react';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import Product from '../js/Product';
import { commaCheck } from '../js/common';

const GoodProduct = () => {
    const navigate = useNavigate();

    return (
        <div className='productWrap'>
            <div className='wrapper'>
                <div className='intro'>
                    <h3>고객만족 웅진코웨이 BEST</h3>
                    <span>웅진코웨이의 BEST 제품들을 소개해드립니다.</span>
                </div>
                <div className='waterCare gridVer__1'>
                    { Product.filter(product => product.title === '정수기' && product.id <= 14).map((item, index) => {
                        const rentalPriceNum = commaCheck(item.rentalPrice);
                        return (
                            <div key={item.id} className={'product __'+index} onClick={() => navigate(`/detail/${item.id}`)}>
                                <div className='productText'>
                                    <span className='desc'>{item.subText}</span>
                                    <h4 className='name'>{item.alt}</h4>
                                    <strong className='code'>{item.code}</strong>
                                </div>
                                <img src={item.imgSrc} alt={item.alt} />
                                <div className='detailInfo'>
                                    <div className='rentalInfo'>
                                        <strong className='price'>렌탈가 월 {rentalPriceNum}원</strong>
                                        <pre>{item.rental}</pre>
                                    </div>
                                </div>
                            </div>
                        )
                    }) }
                    <Button onClick={() => {navigate("WaterCare")}} />
                </div>
                <div className='airCare gridVer__2'>
                    { Product.filter(product => product.title === '공기청정기' && product.id <= 24).map((item, index) => {
                        const rentalPriceNum = commaCheck(item.rentalPrice);
                        return (
                            <div key={item.id} className={'product __'+index} onClick={() => navigate(`/detail/${item.id}`)}>
                                <div className='productText'>
                                    <span className='desc'>{item.subText}</span>
                                    <h4 className='name'>{item.alt}</h4>
                                    <strong className='code'>{item.code}</strong>
                                </div>
                                <img src={item.imgSrc} alt={item.alt} />
                                <div className='detailInfo'>
                                    <div className='rentalInfo'>
                                        <strong className='price'>렌탈가 월 {rentalPriceNum}원</strong>
                                        <pre>{item.rental}</pre>
                                    </div>
                                </div>
                            </div>
                        )
                    }) }
                    <Button onClick={() => {navigate("WaterCare")}} />
                </div>
                <div className='bodyCare gridVer__1'>
                    { Product.filter(product => product.title === '비데/연수기' && product.id <= 34).map((item, index) => {
                        const rentalPriceNum = commaCheck(item.rentalPrice);
                        return (
                            <div key={item.id} className={'product __'+index} onClick={() => navigate(`/detail/${item.id}`)}>
                                <div className='productText'>
                                    <span className='desc'>{item.subText}</span>
                                    <h4 className='name'>{item.alt}</h4>
                                    <strong className='code'>{item.code}</strong>
                                </div>
                                <img src={item.imgSrc} alt={item.alt} />
                                <div className='detailInfo'>
                                    <div className='rentalInfo'>
                                        <strong className='price'>렌탈가 월 {rentalPriceNum}원</strong>
                                        <pre>{item.rental}</pre>
                                    </div>
                                </div>
                            </div>
                        )
                    }) }
                    <Button onClick={() => {navigate("WaterCare")}} />
                </div>
                <div className='sleepCare gridVer__2'>
                    { Product.filter(product => product.title === '매트리스' && product.id <= 44).map((item, index) => {
                        const rentalPriceNum = commaCheck(item.rentalPrice);
                        return (
                            <div key={item.id} className={'product __'+index} onClick={() => navigate(`/detail/${item.id}`)}>
                                <div className='productText'>
                                    <span className='desc'>{item.subText}</span>
                                    <h4 className='name'>{item.alt}</h4>
                                    <strong className='code'>{item.code}</strong>
                                </div>
                                <img src={item.imgSrc} alt={item.alt} />
                                <div className='detailInfo'>
                                    <div className='rentalInfo'>
                                        <strong className='price'>렌탈가 월 {rentalPriceNum}원</strong>
                                        <pre>{item.rental}</pre>
                                    </div>
                                </div>
                            </div>
                        )
                    }) }
                    <Button onClick={() => {navigate("WaterCare")}} />
                </div>
            </div>
        </div>
    );
};

export default GoodProduct;