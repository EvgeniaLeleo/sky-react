import PropTypes from 'prop-types';
import { useState } from 'react';

const MinMax = (props) => {
  const { min, max, current, onChange } = props;

  const [value, setValue] = useState(current);

  function applyCurrent(num) {
    const validNum = Math.max(min, Math.min(max, num));
    onChange(validNum);
    setValue(validNum);
  }

  function parseCurrent(e) {
    const num = parseInt(e.target.value, 10);
    applyCurrent(Number.isNaN(num) ? min : num);
  }

  const inc = () => applyCurrent(current + 1);
  const dec = () => applyCurrent(current - 1);
  const style = { width: '2rem' };

  return (
    <div>
      <button type="button" disabled={Number(current) <= min} onClick={dec}>
        -
      </button>
      <input
        type="text"
        style={style}
        value={value}
        onChange={(e) => {
          setValue(e.target.value.replace(/\D/gi, ''));
        }}
        onBlur={parseCurrent}
        onKeyDown={(e) => {
          if (e.code === 'Enter') {
            parseCurrent(e);
          }
        }}
      />
      <button type="button" disabled={Number(current) >= max} onClick={inc}>
        +
      </button>
    </div>
  );
};

MinMax.propTypes = {
  max: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
};

MinMax.defaultProps = {
  min: 1,
};

export default MinMax;
