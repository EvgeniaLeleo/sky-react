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

  componentDidMount() {}

  componentDidUpdate() {}

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
    const value = this.state.count;
    return (
      <div className="ReacTimer">
        <h2>React Timer</h2>
        <h3>
          <span>
            {Math.floor(value / interval / 60 / 60) % 24 < 10 ? 0 : ''}
            {`${Math.floor(value / interval / 60 / 60) % 24}`} :{' '}
          </span>

          <span>
            {Math.floor(value / interval / 60) % 60 < 10 ? 0 : ''}
            {`${Math.floor(value / interval / 60) % 60}`} :{' '}
          </span>

          <span>
            {Math.floor(value / interval) % 60 < 10 ? 0 : ''}
            {`${Math.floor(value / interval) % 60}`} .{' '}
          </span>

          <span>
            {value % interval < 10 ? 0 : ''}
            {`${value % interval}`}
          </span>
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
