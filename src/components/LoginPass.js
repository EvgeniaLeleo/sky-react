import useForm from './userHook';
import gendalf from './gendalf.png';

const classNames = require('classnames');

const LoginPass = () => {
  const form = useForm({
    email: { value: '', errorText: '', required: true },
    password: { value: '', errorText: '', required: true },
  });

  const { onBlur, onChange, fields } = form;

  const loginClasses = classNames('form-input', {
    error: fields.email.errorText,
  });

  const passwordStyles = classNames('form-input', {
    error: fields.password.errorText,
  });

  return (
    <form>
      <div className="form-field">
        <label className="form-label" htmlFor="login">
          Login
        </label>
        <input
          className={loginClasses}
          id="email"
          name="email"
          value={fields.email.value}
          onBlur={onBlur}
          onChange={onChange}
        />
        <div className="errorText">{fields.email.errorText}</div>
        {fields.email.errorText && (
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
          value={fields.password.value}
          onBlur={onBlur}
          onChange={onChange}
        />
        <div className="errorText">{fields.password.errorText}</div>
        {fields.password.errorText && (
          <img className="img" src={gendalf} alt="You shall not pass!" />
        )}
      </div>
    </form>
  );
};

export default LoginPass;
