import React from 'react';
import Records from '../../records.json';
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
                { Records.filter(record => record.id === 1).map(record => {
                    return (
                        <div className='waterCare gridVer__1' key={record.id}>
                            {
                                record.products.filter(data => data.id <= 14).map((data, index) => {
                                    return (
                                        <div key={data.id} className={'product __'+index}>
                                            <div className='productText'>
                                                <span className='desc'>{data.subText}</span>
                                                <h4 className='name'>{data.alt}</h4>
                                                <strong className='code'>{data.code}</strong>
                                            </div>
                                            <img src={data.imgSrc} alt={data.alt} />
                                            <div className='detailInfo'>
                                                <div className='rentalInfo'>
                                                    <strong className='price'>렌탈가 월 {data.rentalPrice}원</strong>
                                                    <pre>{data.rental}</pre>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <Button onClick={() => {navigate("WaterCare");}} />
                        </div>
                    )
                }) }
                
                { Records.filter(record => record.id === 2).map(record => {
                    return (
                        <div className='airCare gridVer__2' key={record.id}>
                            {
                                record.products.filter(data => data.id <= 24).map((data,index) => {
                                    return (
                                        <div key={data.id} className={'product __'+index}>
                                            <div className='productText'>
                                                <span className='desc'>{data.subText}</span>
                                                <h4 className='name'>{data.alt}</h4>
                                                <strong className='code'>{data.code}</strong>
                                            </div>
                                            <img src={data.imgSrc} alt={data.alt} />
                                            <div className='detailInfo'>
                                                <div className='rentalInfo'>
                                                    <strong className='price'>렌탈가 월 {data.rentalPrice}원</strong>
                                                    <pre>{data.rental}</pre>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <Button onClick={() => {navigate("AirCare");}} />
                        </div>
                    )
                }) }
                { Records.filter(record => record.id === 3).map(record => {
                    return (
                        <div className='bodyCare gridVer__1' key={record.id}>
                            {
                                record.products.filter(data => data.id <= 34).map((data, index) => {
                                    return (
                                        <div key={data.id} className={'product __'+index}>
                                            <div className='productText'>
                                                <span className='desc'>{data.subText}</span>
                                                <h4 className='name'>{data.alt}</h4>
                                                <strong className='code'>{data.code}</strong>
                                            </div>
                                            <img src={data.imgSrc} alt={data.alt} />
                                            <div className='detailInfo'>
                                                <div className='rentalInfo'>
                                                    <strong className='price'>렌탈가 월 {data.rentalPrice}원</strong>
                                                    <pre>{data.rental}</pre>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <Button onClick={() => {navigate("BodyCare");}} />
                        </div>
                    )
                }) }
                { Records && Records.filter(record => record.id === 4).map(record => {
                    return (
                        <div className='sleepCare gridVer__2' key={record.id}>
                            {
                                record.products.filter(data => data.id <= 44).map((data, index) => {
                                    return (
                                        <div key={data.id} className={'product __'+index}>
                                            <div className='productText'>
                                                <span className='desc'>{data.subText}</span>
                                                <h4 className='name'>{data.alt}</h4>
                                                <strong className='code'>{data.code}</strong>
                                            </div>
                                            <img src={data.imgSrc} alt={data.alt} />
                                            <div className='detailInfo'>
                                                <div className='rentalInfo'>
                                                    <strong className='price'>렌탈가 월 {data.rentalPrice}원</strong>
                                                    <pre>{data.rental}</pre>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <Button onClick={() => {navigate("SleepCare");}} />
                        </div>
                    )
                }) }
            </div>
        </div>
    );
};

export default GoodProduct;