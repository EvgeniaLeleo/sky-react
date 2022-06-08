import { useState } from 'react';

const Text = () => {
  const [isVisible, setIsVisible] = useState('true');
  const style = { width: '100px' };
  const divStyle = { height: '5rem' };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={divStyle}>
      <button type="button" style={style} onClick={toggleVisibility}>
        {isVisible ? 'Скрыть' : 'Показать'}
      </button>
      {isVisible && <p>Нажми на кнопку - получишь результат 🙂</p>}
    </div>
  );
};
export default Text;
