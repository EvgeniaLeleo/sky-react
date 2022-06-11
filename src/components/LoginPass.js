import useForm from './userHook';
import gendalf from './gendalf.png';

const classNames = require('classnames');

const LoginPass = () => {
  const form = useForm({
    email: { value: '', errorText: '', required: true },
    password: { value: '', errorText: '', required: true },
  });

  const { onBlur, onChange, state } = form;

  const loginStyles = classNames('form-input', {
    'border-red': state.email.errorText,
  });

  const passwordStyles = classNames('form-input', {
    'border-red': state.password.errorText,
  });

  return (
    <form>
      <div className="form-field">
        <label className="form-label" htmlFor="login">
          Login
        </label>
        <input
          className={loginStyles}
          id="email"
          name="email"
          value={state.email.value}
          onBlur={onBlur}
          onChange={onChange}
        />
        <div className="errorText">{state.email.errorText}</div>
        {state.email.errorText && (
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
          value={state.password.value}
          onBlur={onBlur}
          onChange={onChange}
        />
        <div className="errorText">{state.password.errorText}</div>
        {state.password.errorText && (
          <img className="img" src={gendalf} alt="You shall not pass!" />
        )}
      </div>
    </form>
  );
};

export default LoginPass;
