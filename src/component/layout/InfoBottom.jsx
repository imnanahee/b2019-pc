import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Product from '../js/Product';
// import Modal from '../ui/Modal';
import '../css/detail.css';
import { faTimes, faCircleQuestion, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { commaCheck } from '../js/common';

const TipBox = styled.div`
    display: none;
    position: absolute;
    top: 5px;
    width: 300px;
    background: #fff;
    border: 2px solid #1b2529;
    border-radius: 3px;
    padding: 0 15px 15px 15px;
    box-sizing: border-box;
    z-index: 2;

    &.on {
        display: block;
    }
`

const TipBoxDl = styled.dl`
    line-height: 23px;
`

const TipBoxDt = styled.dt`
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
    margin: 15px 0 5px;
`

const TipBoxDd = styled.dd`
    word-break: keep-all;
`

const TipClose = styled.button`
    position: absolute;
    right: 0;
    text-align: center;
    width: 45px;
    height: 50px;
    line-height: 50px;
    cursor: pointer;

    > svg {
        color: #1b2529;
    }
`

const ModalBackDrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: transparent;
`

const InfoBottom = () => {
    const { id } = useParams();
    const modalRef = useRef(null);

    const [state, setState] = useState({
        activeIndex: 0,
        activeOn: 0,
        selectActive: 0,
        toggle: false,
        selectedComponent: "",
        isModalOpen: false,
    });


    const goods = Product.find((item) => {
        return item.id == id;
    });

    const updateState = (updates) => {
        setState((prevState) => ({ ...prevState, ...updates }));
    };

    const tabClickHandler = (index) => { 
        updateState({ activeIndex: index }); 
    };

    const choice = (index) => { 
        updateState({ activeOn: index }); 
    };

    const selected = (index) => { 
        updateState({ selectActive: index }); 
    };

    const clickedToggle = () => { 
        updateState({ toggle: !state.toggle });
    };

    const handleComponentSelect = (component) => {
        updateState({ selectedComponent: component, toggle: false });
    };

    // const toggleShow = () => {
    //     updateState({ isModalOpen: !state.isModalOpen });
    // }

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
        }
    }

    const openModal = () => {
        updateState({ isModalOpen: true })
    }

    const closeModal = () => {
        updateState({ isModalOpen: false })
    }

    return (
        <div className='infoBottom'>
            <ul className='tabMenu'>
                <li className={state.activeIndex === 0 ? "on": ""} onClick={()=>tabClickHandler(0)}>렌탈</li>
                <li className={state.activeIndex === 1 ? "on": ""} onClick={()=>tabClickHandler(1)}>구매</li>
            </ul>
            <div id='buyType1' className={state.activeIndex === 0 ? "on": ""} onClick={()=>tabClickHandler(0)}>
                <div className='typeInner'>
                    <div className='boxWrap'>
                        {goods.manageType.length > 0 && (
                            <div className='inBox'>
                                <h5>관리유형
                                    <span className='toolTip' onClick={openModal}><FontAwesomeIcon icon={faCircleQuestion} size="1x" /></span>
                                </h5>
                                {state.isModalOpen &&
                                    <div>
                                        <TipBox className='on' ref={modalRef}>
                                            <TipClose onClick={closeModal}>
                                                <FontAwesomeIcon icon={faTimes} size="xl" />
                                            </TipClose>
                                            <TipBoxDl>
                                                <TipBoxDt>방문관리란?</TipBoxDt>
                                                <TipBoxDd>방문관리 기간동안 코웨이 제품의 관리 전문가인 ‘코디’가 방문하여 제품별 서비스 점검시기에 방문관리 서비스를 제공합니다.</TipBoxDd>
                                                <TipBoxDt>자가관리란?</TipBoxDt>
                                                <TipBoxDd>자가관리 기간동안 제품별 필터 제공시기에 필터가 배송되면 고객님이 제품의 필터를 직접 교체하고 관리하실 수 있습니다. (일부 제품은 방문관리 전용)</TipBoxDd>
                                            </TipBoxDl>
                                        </TipBox>
                                        <ModalBackDrop onClick={handleOutsideClick}></ModalBackDrop>
                                    </div>
                                }
                                <p>
                                    {goods && goods.manageType.map((manageType, index) => 
                                        goods.manageType.length >= 2 ?
                                        <span 
                                            key={index}
                                            className={state.activeOn === index ? "on selectBtn": "selectBtn"}
                                            onClick={() => choice(index)}
                                        >
                                            {manageType}
                                        </span> : <span key={index} className='area'>{manageType}</span>
                                    )}
                                </p>
                            </div>
                        )}
                        <div className='inBox'>
                            <h5>약정기간</h5>
                            <p>
                                { goods.contract.map( (item, index) =>
                                    goods.contract.length > 1 ?
                                    <span 
                                        key={index}
                                        className={state.selectActive === index ? "on selectBtn": "selectBtn"}
                                        onClick={() => selected(index)}
                                    >  
                                        {item.period}
                                    </span> : <span key={index} className='area'>{item.period}</span>
                                ) }
                            </p>
                        </div>
                    </div>
                    <div className='totalPrice'>
                        <h5>예상 렌탈료</h5>
                        <div className='discount'>
                            { goods.contract.map( (item, index) => {
                                return (
                                    <p 
                                    key={index}
                                    className={state.selectActive === index ? "on": ""}
                                    onClick={() => selected(index)}
                                    >  
                                        월 <strong>{commaCheck(item.salePrice)}</strong>원
                                    </p>
                                )
                            }) }
                        </div>
                        <div className='cost'>
                            { goods.contract.map( (item, index) =>
                                item.price !== "" &&
                                    <i 
                                    key={index}
                                    className={state.selectActive === index ? "on": ""}
                                    onClick={() => selected(index)}
                                    >  
                                        월 {commaCheck(item.price)}원
                                    </i>
                            ) }
                        </div>
                    </div>
                </div>
            </div>
            <div id='buyType2' className={state.activeIndex === 1 ? "on": ""} onClick={()=>tabClickHandler(1)}>
                <div className='typeInner'>
                    <div className='grade'>구매 시 1년 무상 서비스 제공</div>
                    <div className='boxWrap'>
                        {goods.manageType.length > 0 && (
                            <div className='inBox'>
                                <h5>관리유형
                                    <span className='toolTip' onClick={openModal}><FontAwesomeIcon icon={faCircleQuestion} size="1x" /></span>
                                </h5>
                                {state.isModalOpen &&
                                    <div>
                                        <TipBox className='on' ref={modalRef}>
                                            <TipClose onClick={closeModal}>
                                                <FontAwesomeIcon icon={faTimes} size="xl" />
                                            </TipClose>
                                            <TipBoxDl>
                                                <TipBoxDt>방문관리란?</TipBoxDt>
                                                <TipBoxDd>방문관리 기간동안 코웨이 제품의 관리 전문가인 ‘코디’가 방문하여 제품별 서비스 점검시기에 방문관리 서비스를 제공합니다.</TipBoxDd>
                                                <TipBoxDt>자가관리란?</TipBoxDt>
                                                <TipBoxDd>자가관리 기간동안 제품별 필터 제공시기에 필터가 배송되면 고객님이 제품의 필터를 직접 교체하고 관리하실 수 있습니다. (일부 제품은 방문관리 전용)</TipBoxDd>
                                            </TipBoxDl>
                                        </TipBox>
                                        <ModalBackDrop onClick={handleOutsideClick}></ModalBackDrop>
                                    </div>
                                }
                                <p>
                                    {goods && goods.manageType.map((manageType, index) => 
                                        goods.manageType.length >= 2 ?
                                        <span 
                                            key={index}
                                            className={state.activeOn === index ? "on selectBtn": "selectBtn"}
                                            onClick={() => choice(index)}
                                        >
                                            {manageType}
                                        </span> : <span key={index} className='area'>{manageType}</span>
                                    )}
                                </p>
                            </div>  
                        )}
                        {goods.component.length > 0 && (
                            <div className='inBox'>
                                <h5>추가구성품</h5>
                                <div className='componentSelect'>
                                    <button
                                        type="button"
                                        className={state.toggle ? "noSelected on" : "noSelected"}
                                        onClick={clickedToggle}
                                    >
                                        <span>{state.selectedComponent || "선택안함"}</span>
                                        <FontAwesomeIcon icon={faCaretDown} size="1x" />
                                    </button>
                                    <ul className={state.toggle ? "componentList on" : "componentList"}>
                                    {goods.component.map((component, index) =>
                                        <li key={index} onClick={() => handleComponentSelect(component)}>
                                            {component}
                                        </li>
                                    )}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='totalPrice'>
                        <h5>예상 구매가</h5>
                        <p className='on'><strong>{commaCheck(goods.price)}</strong>원</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoBottom;