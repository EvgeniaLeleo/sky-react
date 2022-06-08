/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';

const Squares = () => {
  const [isVisible, setIsVisible] = useState('true');
  const styleFlex = {
    display: 'grid',
    maxWidth: '320px',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '10px',
    justifyContent: 'space-between',
  };
  const styleSquare = {
    boxSizing: 'border-box',
    width: '100px',
    height: '100px',
    padding: '15px 5px',
    fontFamily: 'Scada, sans-serif',
    lineHeight: '1.5rem',
    textAlign: 'center',
    borderRadius: '5px',
  };
  const styleBlue = {
    background: '#000986',
    color: '#b9e1ff',
  };
  const styleGreen = {
    gridColumn: '2/3',
    background: '#009030',
    color: '#cdffdd',
    cursor: 'pointer',
  };
  const styleRed = {
    gridColumn: '3/4',
    background: '#ff5353',
    color: '#ffecec',
    cursor: 'pointer',
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div style={styleFlex}>
        <div style={Object.assign(styleBlue, styleSquare)}>
          А я тут для массовки
        </div>
        {isVisible && (
          <div
            style={Object.assign(styleGreen, styleSquare)}
            onClick={toggleVisibility}
          >
            Click!
          </div>
        )}
        {!isVisible && (
          <div
            style={Object.assign(styleRed, styleSquare)}
            onClick={toggleVisibility}
          >
            Click!
          </div>
        )}
      </div>
      {/* <button type="button" style={style} onClick={toggleVisibility}>
        {isVisible ? 'Скрыть' : 'Показать'}
      </button>
      {isVisible && <p>Вы нажали кнопку раз 😃</p>} */}
    </div>
  );
};
export default Squares;
