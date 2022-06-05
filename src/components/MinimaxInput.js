import React from 'react';

class MinimaxInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curCount: props.min };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let curValue = e.target.value.replace(/\D/gi, '');

    while (Number(curValue) > this.props.max) {
      curValue = curValue.slice(0, -1);
    }

    this.setState(() => ({ curCount: Number(curValue) }));
  }

  increment = () => {
    if (this.state.curCount === this.props.max) return;

    this.setState((prevState) => ({
      curCount: Number(prevState.curCount) + 1,
    }));
  };

  decrement = () => {
    if (this.state.curCount === this.props.min) return;

    if (this.state.curCount < this.props.min) {
      this.setState(() => ({
        curCount: this.props.min,
      }));
      return;
    }

    this.setState((prevState) => ({
      curCount: Number(prevState.curCount) - 1,
    }));
  };

  render() {
    return (
      <div>
        <button
          type="button"
          disabled={Number(this.state.curCount) <= this.props.min}
          onClick={this.decrement}
        >
          -
        </button>
        <input value={this.state.curCount} onChange={this.onChange} />
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

export default MinimaxInput;
