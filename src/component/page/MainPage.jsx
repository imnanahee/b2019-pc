import React from 'react';
import '../css/main.css';
import Layout from '../layout/Layout';
import MainSlider from '../layout/MainSlider';
import Event from '../layout/Event';
import GoodProduct from '../layout/GoodProduct';

const MainPage = () => {
    return (
        <Layout>
            <div className="bannerWrap">
                <div className="wrapper">
                    <div className='intro'>
                        <h3>당신을 위한 라이프케어, <span>웅진코웨이</span></h3>
                    </div>
                    <MainSlider />
                </div>
            </div>
            <GoodProduct />
            <Event />
        </Layout>
    );
};

export default MainPage;