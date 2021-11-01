import React, { useState, useEffect } from "react";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import style from "./Form.module.css";

const Form = ({active, setActive, addPost }) => {
  const [submitCheck, setSubmitCheck] = useState(false);

  const validation = {
    name: {isEmpty: true, minLength: 3},
    surname: {isEmpty: true, minLength: 6},
    email: {isEmpty: true, minLength: 6},
    description: {isEmpty: false, minLength: 0}
  }

  const [formState, setFormState] = useState({
    name: { value: "", error: false, notActive: false,  key: "name" },
    surname: { value: "", error: false, notActive: false, key: "surname" },
    email: { value: "", error: false, notActive: false, key: "email" },
    description: { value: "", error: false, notActive: false, key: "description" },
  });

  const formFields = [
    {key: "name", placeholder: "Введите имя" },
    {key: "surname", placeholder: "Введите фамилию" },
    {key: "email", placeholder: "Введите почту" },
    {key: "description", placeholder: "Введите описание" },
  ];

  const onChange = (key, value, error) => {
    setFormState({ ...formState, [key]: {value: value, error: error, notActive: false, key: key}});
    console.log(formState.name.error,
      formState.surname.error, 
      formState.email.error, 
      formState.description.error);
  };

  const onBlur = (key, value, error) => {
    setFormState({ ...formState, [key]: {value: value, error: error, notActive: true, key: key}});
  }

  const checkPost = (e) => {
    if (formState.name.error || !formState.name.value || formState.surname.error || !formState.surname.value ||
      formState.email.error || !formState.email.value || formState.description.error) {
        console.log('false');
        setSubmitCheck(true);
    } else {
        console.log('true');
        setSubmitCheck(false);
        addPost(e, {name: formState.name.value,
          surname: formState.surname.value,
          email: formState.email.value,
          description: formState.description.value});
    }
  }

  return (
    <div className={style.myForm}>
      <div className={style.myForm__header}>Форма добавления пользователя</div>
      
      {formFields.map(field => 
        <MyInput
          validation={validation[field.key]}
          keyData={formState[field.key]}
          onChange={onChange}
          onBlur={onBlur}
          key={field.key}
          placeholder={field.placeholder}
        />
      )}

      <MyButton buttonCheck={submitCheck} setButtonCheck={setSubmitCheck} onClick={(e) => checkPost(e)}>
        Добавить пользователя
      </MyButton>
    </div>
  );
};

export default Form;

// disabled={formState.name.error || !formState.name.value ||
//   formState.surname.error || !formState.surname.value ||
//   formState.email.error || !formState.email.value ||
//   formState.description.error} 