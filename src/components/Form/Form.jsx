import React, { useState, useEffect } from "react";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import style from "./Form.module.css";

const formFields = [
  {key: "name", placeholder: "Введите имя" },
  {key: "surname", placeholder: "Введите фамилию" },
  {key: "email", placeholder: "Введите почту" },
  {key: "description", placeholder: "Введите описание" },
];

const validation = {
  name: {isEmpty: true, minLength: 3},
  surname: {isEmpty: true, minLength: 6},
  email: {isEmpty: true, minLength: 6},
  description: {isEmpty: false, minLength: 0}
}


const Form = ({addPost}) => {
  const [submitCheck, setErrorCheck] = useState(false);

  const [formState, setFormState] = useState({
    name: { value: "", error: false, notActive: false,  key: "name" },
    surname: { value: "", error: false, notActive: false, key: "surname" },
    email: { value: "", error: false, notActive: false, key: "email" },
    description: { value: "", error: false, notActive: false, key: "description" },
  });

  const onChange = (key, value, error) => {
    setFormState({ ...formState, [key]: {value: value, error: error, notActive: false, key: key}});
  };

  const onBlur = (key, value, error) => {
    setFormState({ ...formState, [key]: {value: value, error: error, notActive: true, key: key}});
  }

  const checkPost = (e) => {
    if (Object.entries(formState).find(input => input[1].error === true || input[1].value === "")) {
      setErrorCheck(true);
    } else {
        setErrorCheck(false);
        addPost(e, {
          name: formState.name.value,
          surname: formState.surname.value,
          email: formState.email.value,
          description: formState.description.value}
        );
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

      <MyButton buttonCheck={submitCheck} setButtonCheck={setErrorCheck} onClick={(e) => checkPost(e)}>
        Добавить пользователя
      </MyButton>
    </div>
  );
};

export default Form;