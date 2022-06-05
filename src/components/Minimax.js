import React from 'react';

class Minimax extends React.Component {
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
        <p>
          min: {this.props.min}, max: {this.props.max}
        </p>
        <button type="button" onClick={this.decrement}>
          -
        </button>
        <span>{this.state.curCount}</span>
        <button type="button" onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}

export default Minimax;
