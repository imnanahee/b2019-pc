import React, {useState} from 'react';
import Product from '../js/Product';
import { commaCheck } from '../js/common';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
    const [data, setData] = useState(Product);
    const navigate = useNavigate();

    return (
        <div className='productList'> 
            { data.filter(ProductNew => ProductNew.title === '정수기').map((values, index) => {
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
    );
};

export default ProductList;