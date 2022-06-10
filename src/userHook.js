import { useState } from 'react';

const useInputRequired = (required) => {
  const [value, setValue] = useState({ login: '', password: '' });
  const [errorText, setErrorText] = useState({ login: '', password: '' });

  return {
    onBlur: (e) => {
      if (!e.target.value && required)
        setErrorText((prev) => ({
          ...prev,
          [e.target.name]: 'Введите данные! Иначе...',
        }));
    },
    onChange: (e) => {
      setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      if (value && required)
        setErrorText((prev) => ({
          ...prev,
          [e.target.name]: '',
        }));
    },
    value,
    errorText,
  };
};

export default useInputRequired;
