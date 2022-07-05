import PropTypes from 'prop-types';
import { generateColorHex, createArray } from './utils';
import { React, useRef } from 'react';

function ColorTable(props) {
  const { number } = props;
  const arr = createArray(number);
  const colorSquares = useRef([]);

  const generateColorSquares = () => {
    for (let i = 0; i < number; i++) {
      const color = generateColorHex();
      colorSquares.current[i].style.background = color;
      colorSquares.current[i].innerText = color;
    }
  };

  return (
    <div className="container">
      <div className="color-table">
        {arr.map((el, index) => {
          const color = generateColorHex();

          return (
            <div
              className="cell"
              key={el}
              style={{ background: `${color}` }}
              ref={(el) => {
                colorSquares.current[index] = el;
              }}
            >
              {color}
            </div>
          );
        })}
      </div>
      <br></br>
      <button type="button" onClick={generateColorSquares}>
        Generate
      </button>
    </div>
  );
}

ColorTable.propTypes = {
  number: PropTypes.number.isRequired,
};

export default ColorTable;
