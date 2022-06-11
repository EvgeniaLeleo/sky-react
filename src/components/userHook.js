import { useState } from 'react';
import PropTypes from 'prop-types';

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

useInputRequired.propTypes = {
  required: PropTypes.bool,
};

useInputRequired.defaultProps = {
  required: true,
};

// useInputRequired.propTypes = {
//   errorText: PropTypes.number.isRequired,
//   onBlur: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };

export default useInputRequired;
