import { useState } from 'react';

const useForm = (formConfig) => {
  const [state, setState] = useState(formConfig);

  const onBlur = (e) => {
    if (!e.target.value && state[e.target.name].required)
      setState((prev) => ({
        ...prev,
        [e.target.name]: {
          value: e.target.value,
          errorText: `Введите ${e.target.name}! Иначе...`,
          required: true,
        },
      }));
  };

  const onChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: {
        value: e.target.value,
        errorText: '',
        required: true,
      },
    }));
  };

  return {
    onBlur,
    onChange,
    state,
  };
};

export default useForm;
