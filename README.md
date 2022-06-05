# Задание 1

**Используя скелет компоненты, допишите код таймера до рабочего:** - Исправьте ошибки. - В методах жизненных циклов определите взаимодействие с состоянием. - Повесьте события на кнопки. Допишите хендлеры.

```jsx
import React from 'react';
import './styles.css';

export default class ReacTimer extends React.Component {
  state = {
    count: 0,
    isCounting: false,
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="ReacTimer">
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (
          <button onClick={this.handleStart}>Start</button>
        ) : (
          <button onClick={this.handleStop}>Stop</button>
        )}
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
```

# Задание 2

**Написать классовый компонент Часы.**

- Часы должны отображать реальное время и обновляться каждую секунду.
- Используйте методы жизненного цикла.
- Не забудьте очистить компонент перед размонтированием.

# Задание 3

⭐ (задача со звездочкой) **Написать компонент Pomodoro Tracker.**

- Компонент из 3х кнопок и отображения обратного отсчёта:
  Work Time - запускает таймер обратного отсчёта на 30 мин.
  Long Break - запускает таймер обратного отсчёта на 15 мин.
  Short Break - запускает таймер обратного отсчёта на 7 мин.
