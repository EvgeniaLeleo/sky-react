import React from 'react';
import {
  formatHours,
  formatMinutes,
  formatSeconds,
  formatSantiseconds,
} from './utils';

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

  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div className="ReacTimer">
        <h2>React Timer</h2>
        <h3>
          <span>{formatHours(this.state.count, interval)} : </span>
          <span>{formatMinutes(this.state.count, interval)} : </span>
          <span>{formatSeconds(this.state.count, interval)} . </span>
          <span>{formatSantiseconds(this.state.count, interval)}</span>
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
