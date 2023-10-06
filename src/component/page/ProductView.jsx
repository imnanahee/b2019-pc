import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../js/Product';
import Layout from '../layout/Layout';
import InfoTop from '../layout/InfoTop';
import InfoBottom from '../layout/InfoBottom';
import '../css/detail.css';

const ProductView = () => {
    const { id } = useParams();

    const goods = Product.find((item) => {
        return item.id == id;
    });

    return (
        <Layout>
            <div className='detailView'>
                <div className='wrapper'>
                    <div className='cell'>
                        <img src={goods.imgSrc} alt={goods.alt} />
                        <div className='productText'>
                            <InfoTop />
                            <InfoBottom />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductView;