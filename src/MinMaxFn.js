import { useState } from 'react';

const style = { display: 'inline-block', padding: '5px' };

const MinMaxFn = ({ min, max }) => {
  const [curCount, setCurCount] = useState(min);

  const increment = () => {
    if (curCount === max) return;
    setCurCount(curCount + 1);
  };

  const decrement = () => {
    if (curCount === min) return;
    setCurCount(curCount - 1);
  };

  return (
    <div>
      <h3>Функциональный MinMax</h3>
      <p>
        min: {min}, max: {max}
      </p>
      <button
        type="button"
        disabled={Number(curCount) <= min}
        onClick={decrement}
      >
        -
      </button>
      <span style={style}>{curCount}</span>
      <button
        type="button"
        disabled={Number(curCount) >= max}
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default MinMaxFn;
