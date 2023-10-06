import React from 'react';
import '../css/Common.css';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <div>
            <Header />
                <main id="main">
                    {props.children}
                </main>
            <Footer />
        </div>
    );
};

export default Layout;
