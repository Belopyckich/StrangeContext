import React, {useState, useContext} from 'react';
import myStyle from './MyInput.module.css';
import {Context} from '../../../context/ModalContext';

const mailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const telReg = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;

const MyInput = ({children, error, setError, ...props}) => {
    const [message, setMessage] = useState('');


    const check = (value, name) => {
        props.setter(value);
        switch (name) {
            case 'email':
                setError(!mailReg.test(value));
                setMessage('Введите корректный емаил');
                break;
            case 'tel':
                setError(!mailReg.test(value))
                setMessage('Введите корректный телефон');
                break;
            case 'password':
                setError(!mailReg.test(value))
                setMessage('Введите корректный пароль');
                break;
            case 'name':
                console.log(value);
                setError(value.length < 3)
                setMessage('Введите корректное имя');
                break;
            case 'surname':
                setError(value.length < 6)
                setMessage('Введите корректную фамилию');
                break;
            default:
                break;
        }
    }

    return (
        <div className={myStyle.myInputDiv}>
            <div className={error ? myStyle.myError : myStyle.off}>{message}</div>
            <input {...props} className={error ? myStyle.inputError + ' ' + myStyle.myInput : myStyle.myInput} onChange={(event) => check(event.target.value, event.target.name)}>
            {children}
            </input>
        </div>
    );
};

export default MyInput;