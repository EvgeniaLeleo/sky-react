import React from 'react';

const date = new Date();

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.increment(), 1000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  seconds() {
    const sec = this.state.seconds + this.state.count;
    const secIsLessThan10 = sec % 60 < 10;

    if (secIsLessThan10) {
      return `0${sec % 60}`;
    }

    return sec % 60;
  }

  minutes() {
    const fullMinutes = Math.floor(
      (this.state.seconds + this.state.count) / 60,
    );
    const min = this.state.minutes + fullMinutes;
    const minIsLessThan10 = min % 60 < 10;

    if (minIsLessThan10) {
      return `0${min % 60}`;
    }

    return min % 60;
  }

  hours() {
    const fullMinutes = Math.floor(
      (this.state.seconds + this.state.count) / 60,
    );
    const hour = this.state.hours + Math.floor(fullMinutes / 60);
    const hoursIsLessThan10 = hour % 24 < 10;

    if (hoursIsLessThan10) {
      return `0${hour % 24}`;
    }

    return hour % 24;
  }

  render() {
    return (
      <div className="ReacTimer">
        <h2>Clock</h2>
        <h3>
          <span>
            {this.hours()} : {this.minutes()}: {this.seconds()}
          </span>
        </h3>
      </div>
    );
  }
}
