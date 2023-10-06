import React from 'react';
import styled from 'styled-components';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledButton = styled.button`
    text-align: center;
    cursor: pointer;
    color: #fff;
`;

const Button = (props) => {
    const { title, onClick } = props;

    return (
        <StyledButton onClick={onClick}>
            <FontAwesomeIcon icon={faCirclePlus} size='2x' />
            <span>{title || "제품 더보기"}</span>
        </StyledButton>
    );
};

export default Button;