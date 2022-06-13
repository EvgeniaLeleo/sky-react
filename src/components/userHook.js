import { useState } from 'react';

const useForm = (formConfig) => {
  const [fields, setFields] = useState(formConfig);

  const onBlur = (e) => {
    if (!e.target.value && fields[e.target.name].required)
      setFields((prev) => ({
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          errorText: `Введите ${e.target.name}! Иначе...`,
        },
      }));
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
    fields,
  };
};

export default useForm;
