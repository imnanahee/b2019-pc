import React, {useState} from 'react';
import Product from './Product';


const filterResult = () => {
    const [data, setData] = useState(Product);

    const filterResult = (cateItem) => {
        const result = Product.filter((curData) => {
            return curData.category.includes(cateItem);
        })
        setData(result);
    }

    return (
        <></>
    );
};

export default filterResult;