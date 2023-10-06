import { useEffect } from 'react';
import { Route, Link, Routes, useLocation } from 'react-router-dom';

let currentPath = "";

const Refresh = () => {
    let location = useLocation();

    useEffect(() => {
      if (currentPath === location.pathname) window.location.reload();
      currentPath = location.pathname;
    }, [location]);
};

export default Refresh;