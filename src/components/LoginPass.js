import useForm from './userHook';
import { React, useRef } from 'react';
import { isValidEmail } from './utils';

const classNames = require('classnames');

const LoginPass = () => {
  const form = useForm({
    email: { value: '', errorText: '', required: true },
    password: { value: '', errorText: '', required: true },
  });

  const { onBlur, onChange, onKeyDown, fields } = form;

  const loginClasses = classNames('form-input', {
    error: fields.email.errorText,
  });

  const passwordClasses = classNames('form-input', {
    error: fields.password.errorText,
  });

  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  const inputEmailErrorText = useRef(null);
  const inputPasswordErrorText = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidEmail(inputEmail.current.value)) {
      inputEmail.current.style.background = '#ffacae';
      inputEmail.current.focus();
      inputEmailErrorText.current.innerText = 'Введите корректный e-mail';
    }

    if (inputPassword.current.value.trim().length <= 6) {
      inputPassword.current.style.background = '#ffacae';
      inputPassword.current.focus();
      inputPasswordErrorText.current.innerText =
        'Пароль должен быть не менее 6 символов';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label className="form-label" htmlFor="login">
          E-mail
        </label>
        <input
          className={loginClasses}
          id="email"
          name="email"
          placeholder="Введите e-mail"
          value={fields.email.value}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          ref={inputEmail}
        />
        <div className="errorText" ref={inputEmailErrorText}>
          {fields.email.errorText}
        </div>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          className={passwordClasses}
          type="password"
          id="password"
          name="password"
          placeholder="Пароль не менее 6 символов"
          value={fields.password.value}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          ref={inputPassword}
        />
        <div className="errorText" ref={inputPasswordErrorText}>
          {fields.password.errorText}
        </div>
      </div>
      <button className="button-submit" type="submit">
        Отправить
      </button>
    </form>
  );
};

export default LoginPass;
