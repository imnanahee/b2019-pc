import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SrchForm from './SrchForm';

const ModalBackDrop = styled.div`
    position: fixed;
    top: 162px;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    z-index: 2;
`

const Nav = () => {
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const modalRef = useRef(null);
  
    const openModal = () => {
        setIsModalOpen(true);
        setFadeIn(true);
    };

    const closeModal = () => {
        setFadeIn(false);
        setTimeout(() => {
            setIsModalOpen(false);
        }, 130)
    }
    
    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal()
        }
    };

    const buttonBtn = isModalOpen ? (
        <button onClick={closeModal} className='frmSrch'>
            <FontAwesomeIcon icon={faTimes} size="xl" /> 
        </button>
    ) : (
        <button onClick={openModal} className='frmSrch'>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
        </button>
    )
    
    // 검색창 열려있을 시 검색창 외부 클릭 시 닫힘
    useEffect(() => {
        if (isModalOpen) {
            setFadeIn(true);
            document.body.classList.add('modalOpen');
        } else {
            document.body.classList.remove('modalOpen');
        }
    }, [isModalOpen])

    // URL 변경 감지 시 검색창 닫기
    useEffect(() => {
        closeModal();
    }, [location.pathname]); 


    return (
        <div className="nav">
            <div className="wrapper">
                <Link className="menuList" to={'/WaterCare'}>정수기</Link>
                <Link className="menuList" to={'/AirCare'}>청정기</Link>
                <Link className="menuList" to={'/BodyCare'}>비데/연수기</Link>
                <Link className="menuList" to={'/SleepCare'}>매트리스/프레임</Link>
                {buttonBtn}
            </div>
            {isModalOpen && (
                <div>
                    <div className={`srchForm ${fadeIn ? 'fadeIn' : 'fadeOut'}`} ref={modalRef}>
                        {<SrchForm />}
                    </div>
                    <ModalBackDrop onClick={handleOutsideClick}></ModalBackDrop>
                </div>
            )}
        </div>
    );
};

export default Nav;