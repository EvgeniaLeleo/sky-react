const MinMax = ({ min = 1, max, current, onChange }) => {
  function applyCurrent(num) {
    const validNum = Math.max(min, Math.min(max, num));
    onChange(validNum);
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
        value={current}
        onChange={parseCurrent}
      />
      <button type="button" disabled={Number(current) >= max} onClick={inc}>
        +
      </button>
    </div>
  );
};

export default MinMax;
