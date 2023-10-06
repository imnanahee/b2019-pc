import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Product from '../js/Product';

const Details = styled.div`
    border-top: 1px solid #e0e0e0;
    padding-top: 15px;
    position: relative;
    overflow: hidden;
`

const InfoTop = () => {
    const { id } = useParams();
    const [isActive, setActive] = useState(0);
    const [selectSize, setSelectSize] = useState(0);
    const [selectHardness, setSelectHardness] = useState(0);

    const goods = Product.find((item) => {
        return item.id == id;
    });

    const setColor = (index) => { setActive(index); }

    const sizeChoice = (index) => { setSelectSize(index); }

    const hardnessChoice = (index) => { setSelectHardness(index); }

    return (
        <div>
            <div className='infoTop'>
                <span className='category'>{goods.category}</span>
                <div className='state'>
                    { goods.state.map( (state, index) =>
                        goods.state.length !== 0 &&
                        <span key={index}>{ index ? ' · ' : '' }{state}</span>
                    ) }
                </div>
                <div>
                    <span className='code'>{goods.code}</span>
                    <h4 className='name'>{goods.alt}</h4>
                </div>
                <p className='desc'>{goods.subText}</p>
                { goods.title === '매트리스' && (
                    <div className='mattress'>
                        <div className='inBox'>
                            <h5>사이즈</h5>
                            <p>
                                {goods.size.map((item, index) =>
                                    <span
                                        key={index}
                                        className={selectSize === index ? "on selectBtn": "selectBtn"}
                                        onClick={() => sizeChoice(index)}
                                    >
                                        {item}
                                    </span>
                                )}
                            </p>
                        </div>
                        {goods.hardness.length > 0 && (
                            <div className='inBox'>
                                <h5>경도</h5>
                                <p>
                                    {goods.hardness.map((item, index) =>
                                        goods.hardness.length >= 2?
                                        <span
                                            key={index}
                                            className={selectHardness === index ? "on selectBtn": "selectBtn"}
                                            onClick={() => hardnessChoice(index)}
                                        >
                                            {item}
                                        </span> : <span key={index} className='area'>{item}</span>
                                    )}
                                </p>
                            </div>
                        )}
                    </div>
                ) }
                {goods.colors.length > 0 && (
                <Details>
                    <h5>색상</h5>
                    <div className='colorList'>
                        { goods.colors.map( (item, index) => {
                            return (
                                <p key={index}
                                className={isActive === index ? "on": ""}
                                onClick={() => setColor(index)}
                                >
                                    {item.color}
                                </p>
                            )
                        }) }
                    </div>
                    <ul className='colorType'>
                        { goods.colors.map( (item, index) => {
                            return (
                                <li 
                                key={index} 
                                style={{backgroundColor: `${item.colorCode}`}}
                                name={item.colorCode}
                                className={isActive === index ? `${item.colorClass} on`: `${item.colorClass}`}
                                onClick={() => setColor(index)}
                                >
                                    <span>{item.color}</span>
                                </li>
                            )
                        }) }
                    </ul>
                </Details>
                )}
            </div>
        </div>
    );
};

export default InfoTop;