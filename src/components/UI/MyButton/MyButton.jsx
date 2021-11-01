import React from 'react';
import style from './MyButton.module.css';

const MyButton = ({children, buttonCheck, ...props}) => {

    return (
        <button {...props} className={buttonCheck ? style.myBtnError + ' ' + style.myBtn : style.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;