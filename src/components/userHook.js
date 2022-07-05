<<<<<<< HEAD
import { useState } from 'react';
import { isValidEmail } from './utils';

const useForm = (formConfig) => {
  const [fields, setFields] = useState(formConfig);

  const validateInput = (e) => {
    if (e.target.name === 'email' && !isValidEmail(e.target.value)) {
      setFields((prev) => ({
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          errorText: `Введите корректный e-mail`,
        },
      }));
    }

    if (e.target.name === 'password' && e.target.value.length < 6) {
      setFields((prev) => ({
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          errorText: `Пароль должен быть не менее 6 символов`,
        },
      }));
    }
  };

  const onBlur = (e) => {
    if (fields[e.target.name].required) {
      validateInput(e);
    }
  };

  const onKeyDown = (e) => {
    if (e.code === 'Enter') {
      onBlur(e);
    }
  };

  const onChange = (e) => {
    e.target.style.background = 'transparent';
    e.target.innerText = '';
    setFields((prev) => ({
      ...prev,
      [e.target.name]: {
        ...prev[e.target.name],
        value: e.target.value,
        errorText: '',
      },
    }));
  };

  return {
    onBlur,
    onChange,
    onKeyDown,
    fields,
  };
};

export default useForm;
||||||| 35db89f
=======
import { useState } from 'react';
import isValidEmail from './utils';

const useForm = (formConfig) => {
  const [fields, setFields] = useState(formConfig);

  const validateInput = (e) => {
    if (e.target.name === 'email' && !isValidEmail(e.target.value)) {
      setFields((prev) => ({
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          errorText: `Введите корректный e-mail`,
        },
      }));
    }

    if (e.target.name === 'password' && e.target.value.length < 6) {
      setFields((prev) => ({
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          errorText: `Пароль должен быть не менее 6 символов`,
        },
      }));
    }
  };

  const onBlur = (e) => {
    validateInput(e);
    if (!e.target.value && fields[e.target.name].required)
      setFields((prev) => ({
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          errorText: `Введите ${e.target.name}`,
        },
      }));
  };

  const onKeyDown = (e) => {
    if (e.code === 'Enter') {
      onBlur(e);
    }
  };

  const onChange = (e) => {
    setFields((prev) => ({
      ...prev,
      [e.target.name]: {
        ...prev[e.target.name],
        value: e.target.value,
        errorText: '',
      },
    }));
  };

  return {
    onBlur,
    onChange,
    onKeyDown,
    fields,
  };
};

export default useForm;
>>>>>>> main
