import React from 'react';
import style from './MyButton.module.css';

const MyButton = ({children, error, ...props}) => {

    return (
        <button {...props} className={error ? style.error + ' ' + style.MyBtn : style.MyBtn}>
            {children}
        </button>
    );
};

export default MyButton;