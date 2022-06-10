import { useState } from 'react';

const LoginPass = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  // const [isEmpty, setIsEmpty] = useState(true);

  // console.log(login);
  // console.log(password);

  const loginChangeHandle = (e) => {
    setLogin(e.target.value);
  };

  const passwordChangeHandle = (e) => {
    setPassword(e.target.value);
  };

  const inputBlurHandle = () => {};

  // const useInputRequired = () => {
  //
  // };

  return (
    <form>
      <div className="form-field">
        <label className="form-label" htmlFor="login">
          Login
        </label>
        <input
          className="form-input"
          id="login"
          name="login"
          value={login}
          onChange={loginChangeHandle}
          onBlur={() => inputBlurHandle}
        />
      </div>
      <div>
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          className="form-input"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={passwordChangeHandle}
        />
      </div>
    </form>
  );
};

export default LoginPass;
