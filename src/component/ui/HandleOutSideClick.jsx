// 사용안함
import { useState, useRef } from 'react';

const HandleOutSideClick = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);

    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          closeModal();
        }
    };
    

    return (
        <div>
            
        </div>
    );
};

export default HandleOutSideClick;