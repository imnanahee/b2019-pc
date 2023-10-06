import React, { useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SrchBtn = ( {children} ) => {
    const [show, setShow] = useState();

    const toggleShow = () => {
        setShow(!show);
    }

    return (
        <div className="srch-container">
            <button onClick={toggleShow} className="frmSrch">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
            </button>
            {show && children}
        </div>
    );
};

export default SrchBtn;