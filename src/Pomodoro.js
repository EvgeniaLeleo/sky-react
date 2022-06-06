import React from 'react';

const interval = 100;

const workingTime = 30 * 60;
const longBreakTime = 15 * 60;
const shortBreakTime = 7 * 60;

export default class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isCountingWorking: false,
      isCountingLongBreak: false,
      isCountingShortBreak: false,
    };
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handleStartWorking = () => {
    clearInterval(this.timerId);

    this.setState(() => ({
      count: workingTime * interval,
      isCountingWorking: true,
      isCountingLongBreak: false,
      isCountingShortBreak: false,
    }));

    this.timerId = setInterval(() => this.decrement(), 1000 / interval);
  };

  handleStartLongBreak = () => {
    clearInterval(this.timerId);

    this.setState(() => ({
      count: longBreakTime * interval,
      isCountingWorking: false,
      isCountingLongBreak: true,
      isCountingShortBreak: false,
    }));

    this.timerId = setInterval(() => this.decrement(), 1000 / interval);
  };

  handleStartShortBreak = () => {
    clearInterval(this.timerId);

    this.setState(() => ({
      count: shortBreakTime * interval,
      isCountingWorking: false,
      isCountingLongBreak: false,
      isCountingShortBreak: true,
    }));

    this.timerId = setInterval(() => this.decrement(), 1000 / interval);
  };

  handleStop = () => {
    clearInterval(this.timerId);

    this.setState(() => ({
      isCountingWorking: false,
      isCountingLongBreak: false,
      isCountingShortBreak: false,
    }));
  };

  formatMinutes = () =>
    `${Math.floor(this.state.count / interval / 60) % 60 < 10 ? 0 : ''}` +
    `${Math.floor(this.state.count / interval / 60) % 60}`;

  formatSeconds = () =>
    `${Math.floor(this.state.count / interval) % 60 < 10 ? 0 : ''}` +
    `${Math.floor(this.state.count / interval) % 60}`;

  formatSantiseconds = () =>
    `${this.state.count % interval < 10 ? 0 : ''}` +
    `${this.state.count % interval}`;

  decrement() {
    if (this.state.count === 0) {
      clearInterval(this.timerId);

      this.setState(() => ({
        isCountingWorking: false,
        isCountingLongBreak: false,
        isCountingShortBreak: false,
      }));

      return;
    }

    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  render() {
    const style = { width: '100px' };

    return (
      <div className="ReacTimer">
        <h2>Pomodoro Tracker</h2>
        <h3>
          <span>{this.formatMinutes()} : </span>
          <span>{this.formatSeconds()} . </span>
          <span>{this.formatSantiseconds()}</span>
        </h3>
        {!this.state.isCountingWorking ? (
          <button type="button" style={style} onClick={this.handleStartWorking}>
            Start Working
          </button>
        ) : (
          <button type="button" style={style} onClick={this.handleStop}>
            Stop
          </button>
        )}
        {!this.state.isCountingLongBreak ? (
          <button
            type="button"
            style={style}
            onClick={this.handleStartLongBreak}
          >
            Long break
          </button>
        ) : (
          <button type="button" style={style} onClick={this.handleStop}>
            Stop
          </button>
        )}
        {!this.state.isCountingShortBreak ? (
          <button
            type="button"
            style={style}
            onClick={this.handleStartShortBreak}
          >
            Short break
          </button>
        ) : (
          <button type="button" style={style} onClick={this.handleStop}>
            Stop
          </button>
        )}
      </div>
    );
  }
}
