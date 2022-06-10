// import { useState } from 'react';
import useInputRequired from './userHook';
import gendalf from './gendalf.png';

const LoginPass = () => {
  const inputChangeHandle = useInputRequired(true);

  const loginStyle = `form-input ${
    inputChangeHandle.errorText.login && 'border-red'
  }`;

  const passwordStyle = `form-input ${
    inputChangeHandle.errorText.password && 'border-red'
  }`;

  return (
    <form>
      <div className="form-field">
        <label className="form-label" htmlFor="login">
          Login
        </label>
        <input
          className={loginStyle}
          id="login"
          name="login"
          value={inputChangeHandle.value.login}
          onBlur={inputChangeHandle.onBlur}
          onChange={inputChangeHandle.onChange}
        />
        <div className="errorText">{inputChangeHandle.errorText.login}</div>
        {inputChangeHandle.errorText.login && (
          <img className="img" src={gendalf} alt="You shall not pass!" />
        )}
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          className={passwordStyle}
          type="password"
          id="password"
          name="password"
          value={inputChangeHandle.value.password}
          onBlur={inputChangeHandle.onBlur}
          onChange={inputChangeHandle.onChange}
        />
        <div className="errorText">{inputChangeHandle.errorText.password}</div>
        {inputChangeHandle.errorText.password && (
          <img className="img" src={gendalf} alt="You shall not pass!" />
        )}
      </div>
    </form>
  );
};

export default LoginPass;
