import useInputRequired from './userHook';
import gendalf from './gendalf.png';

const classNames = require('classnames');

const LoginPass = () => {
  const inputChangeHandle = useInputRequired(true);
  const { errorText, onBlur, onChange, value } = inputChangeHandle;

  const loginStyles = classNames('form-input', {
    'border-red': inputChangeHandle.errorText.login,
  });

  const passwordStyles = classNames('form-input', {
    'border-red': inputChangeHandle.errorText.password,
  });

  return (
    <form>
      <div className="form-field">
        <label className="form-label" htmlFor="login">
          Login
        </label>
        <input
          className={loginStyles}
          id="login"
          name="login"
          value={value.login}
          onBlur={onBlur}
          onChange={onChange}
        />
        <div className="errorText">{errorText.login}</div>
        {errorText.login && (
          <img className="img" src={gendalf} alt="You shall not pass!" />
        )}
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          className={passwordStyles}
          type="password"
          id="password"
          name="password"
          value={value.password}
          onBlur={onBlur}
          onChange={onChange}
        />
        <div className="errorText">{errorText.password}</div>
        {errorText.password && (
          <img className="img" src={gendalf} alt="You shall not pass!" />
        )}
      </div>
    </form>
  );
};

export default LoginPass;
