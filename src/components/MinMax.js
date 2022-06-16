import PropTypes from 'prop-types';

const MinMax = (props) => {
  const { min, max, current, onChange } = props;

  function applyCurrent(num) {
    const validNum = Math.max(min, Math.min(max, num));
    onChange(validNum);
  }

  const inc = () => applyCurrent(current + 1);
  const dec = () => applyCurrent(current - 1);

  return (
    <div>
      <button
        className="removeButton"
        type="button"
        disabled={Number(current) <= min}
        onClick={dec}
      >
        -
      </button>
      <button
        className="addButton"
        type="button"
        disabled={Number(current) >= max}
        onClick={inc}
      >
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
