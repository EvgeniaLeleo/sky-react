import React from 'react';

const style = { display: 'inline-block', padding: '5px' };

class MinMax extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curCount: props.min };
  }

  increment = () => {
    if (this.state.curCount === this.props.max) return;

    this.setState((prevState) => ({ curCount: prevState.curCount + 1 }));
  };

  decrement = () => {
    if (this.state.curCount === this.props.min) return;

    this.setState((prevState) => ({ curCount: prevState.curCount - 1 }));
  };

  render() {
    return (
      <div>
        <h3>Классовый MinMax</h3>
        <p>
          min: {this.props.min}, max: {this.props.max}
        </p>
        <button
          type="button"
          disabled={Number(this.state.curCount) <= this.props.min}
          onClick={this.decrement}
        >
          -
        </button>
        <span style={style}>{this.state.curCount}</span>
        <button
          type="button"
          disabled={Number(this.state.curCount) >= this.props.max}
          onClick={this.increment}
        >
          +
        </button>
      </div>
    );
  }
}

export default MinMax;
