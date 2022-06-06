import React from 'react';

const interval = 100;

export default class ReacTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isCounting: false,
    };
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handleStart = () => {
    this.timerId = setInterval(() => this.increment(), 1000 / interval);
    this.setState(() => ({ isCounting: true }));
  };

  handleStop = () => {
    clearInterval(this.timerId);
    this.setState(() => ({ isCounting: false }));
  };

  handleReset = () => {
    clearInterval(this.timerId);
    this.setState(() => ({ count: 0, isCounting: false }));
  };

  formatHours = () =>
    `${Math.floor(this.state.count / interval / 60 / 60) % 24 < 10 ? 0 : ''}` +
    `${Math.floor(this.state.count / interval / 60 / 60) % 24}`;

  formatMinutes = () =>
    `${Math.floor(this.state.count / interval / 60) % 60 < 10 ? 0 : ''}` +
    `${Math.floor(this.state.count / interval / 60) % 60}`;

  formatSeconds = () =>
    `${Math.floor(this.state.count / interval) % 60 < 10 ? 0 : ''}` +
    `${Math.floor(this.state.count / interval) % 60}`;

  formatSantiseconds = () =>
    `${this.state.count % interval < 10 ? 0 : ''}` +
    `${this.state.count % interval}`;

  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div className="ReacTimer">
        <h2>React Timer</h2>
        <h3>
          <span>{this.formatHours()} : </span>
          <span>{this.formatMinutes()} : </span>
          <span>{this.formatSeconds()} . </span>
          <span>{this.formatSantiseconds()}</span>
        </h3>
        {!this.state.isCounting ? (
          <button type="button" onClick={this.handleStart}>
            Start
          </button>
        ) : (
          <button type="button" onClick={this.handleStop}>
            Stop
          </button>
        )}
        <button type="button" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}
