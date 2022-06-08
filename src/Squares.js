/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import './squares.css';

const Squares = () => {
  const [isVisible, setIsVisible] = useState('true');

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className="styleFlex">
        <div className="styleBlue styleSquare">А я тут для массовки</div>
        {isVisible && (
          <div className="styleGreen styleSquare" onClick={toggleVisibility}>
            Click!
          </div>
        )}
        {!isVisible && (
          <div className="styleRed styleSquare" onClick={toggleVisibility}>
            Click!
          </div>
        )}
      </div>
    </div>
  );
};

export default Squares;
