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

  // componentDidUpdate(prevState) {
  //   if (
  //     this.state.seconds !== prevState.seconds &&
  //     this.state.minutes !== prevState.minutes &&
  //     this.state.hours !== prevState.hours
  //   ) {
  //     const value = this.state.count;

  //     this.setState(() => ({
  //       seconds: prevState.seconds + value,
  //       minutes: Math.ceil(prevState.minutes + value / 60),
  //       hours: Math.ceil(prevState.hours + value / 3600),
  //     }));
  //   }
  // }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  // getTime() {
  //   const value = this.state.count;

  //   this.setState((prevState) => ({
  //     seconds: prevState.seconds + value,
  //     minutes: Math.ceil(prevState.minutes + value / 60),
  //     hours: Math.ceil(prevState.hours + value / 3600),
  //   }));
  // }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      seconds: prevState.seconds + 1,
      //     minutes: Math.ceil(prevState.minutes + value / 60),
      //     hours: Math.ceil(prevState.hours + value / 3600),
    }));
  }

  seconds() {
    const isLessThan10 = this.state.seconds % 60 < 10;
    if (isLessThan10) {
      return `0${this.state.seconds % 60}`;
    }
    return this.state.seconds % 60;
  }

  minutes() {
    const isLessThan10 = this.state.minutes % 60 < 10;
    if (isLessThan10) {
      return `0${this.state.minutes % 60}`;
    }
    return this.state.minutes % 60;
  }

  hours() {
    const isLessThan10 = this.state.hours % 24 < 10;
    if (isLessThan10) {
      return `0${this.state.hours % 24}`;
    }
    return this.state.hours % 24;
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
