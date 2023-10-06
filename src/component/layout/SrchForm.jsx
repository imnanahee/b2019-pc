import React, { useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import Product from '../js/Product';

const SrchForm = () => {
    const navigate = useNavigate();
    const [searchKeyword, setSearchKeyword] = useState('');

    const handleSearch = () => {
        const matchingProduct = Product.find(product => product.alt.includes(searchKeyword));
        // console.log(matchingProduct);
        
        if (matchingProduct) {
            // 검색어와 일치하는 제품이 있으면 해당 제품의 페이지로 이동
            navigate(`/detail/${matchingProduct.id}`);
        } else {
            alert('검색 결과를 찾을 수 없습니다.');
        }
    };

    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className="srchWrap">
            <div className="wrapper">
                <h2><span>웅진코웨이</span> 키워드검색</h2>
                <input 
                  type="text" 
                  id="form" 
                  placeholder="검색어를 입력하세요"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  onKeyUp={handleKeyUp}
                />
                <button className="srchBtn" onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass} size="1x" /></button>
                <div className='recommend'>
                    <strong>추천검색어</strong>
                    <Link to={'/detail/12'}>아이콘얼음정수기</Link>
                    <Link to={'/detail/22'}>멀티액션공기청정기</Link>
                    <Link to={'/detail/33'}>스타일케어비데</Link>
                </div>
            </div>
        </div>
    );
};

export default SrchForm;