import React from 'react';

class MinimaxInput extends React.Component {
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
        <button type="button" onClick={this.decrement}>
          -
        </button>
        <input value={this.state.curCount} className="input" />
        <button type="button" onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}

export default MinimaxInput;
