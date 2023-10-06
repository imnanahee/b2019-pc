import React from 'react';
import { HashRouter, Routes, Route} from 'react-router-dom';
// import styled from 'styled-components'
import MainPage from './component/page/MainPage';
import WaterCare from './component/page/WaterCare';
import AirCare from './component/page/AirCare';
import BodyCare from './component/page/BodyCare';
import SleepCare from './component/page/SleepCare';
import ProductView from './component/page/ProductView';
import ScrollTop from './component/ui/ScrollTop';

const App = () => {
  return (   
      <HashRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="WaterCare" element={<WaterCare />} />
          <Route path="AirCare" element={<AirCare />} />
          <Route path="BodyCare" element={<BodyCare />} />
          <Route path="SleepCare" element={<SleepCare />} />
          <Route path="/detail/:id" element={<ProductView />} />
        </Routes>
      </HashRouter>
  );
};

export default App;