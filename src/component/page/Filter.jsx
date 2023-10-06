import React from 'react';
import { useState } from 'react-router-dom';
import Records from '../../records.json';

const getCateory = (data) => {
    const categorys = [];
    data.map((product) => {
        if (categorys.indexOf(product.category) === 1) {
            categorys.push(product.category)
        }
    })
    return categorys;
} 


const[checked, setChecked] = useState([]);

const renderCheckBoxLists = () => Records.map((value, index) => {
    
})

const Filter = () => {
    return (
        <div>
          
        </div>
    );
};

export default Filter;