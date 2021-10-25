import React, {useState, useContext} from 'react';
import MyButton from '../UI/MyButton/MyButton';
import MyInput from '../UI/MyInput/MyInput';
import style from './Form.module.css';
import {Context} from '../../context/ModalContext';

const Form = ({setActive, addPost}) => {
    const {error, setError} = useContext(Context);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className={style.myForm}>
            <div className={style.myForm__header}>Форма добавления пользователя</div>
            <MyInput setter={setName} error={error} setError={setError} value={name} name='name' placeholder="Введите имя"/>
            <MyInput setter={setSurname} error={error} setError={setError} value={surname} name='surname' placeholder="Введите фамилию"/>
            <MyInput setter={setEmail} error={error} setError={setError} value={email} name='email' placeholder="Введите емэил"/>
            <MyInput setter={setDescription} error={error} setError={setError} value={description} name='description' placeholder="Введите комментарий"/>
            <MyButton error={error} onClick={(event) => addPost(  event,
                                                    {name, surname, description, email}, 
                                                    [setName, setSurname, setDescription, setEmail])}
            >
                Добавить пользователя
            </MyButton>
        </div>
    );
};

export default Form;