import React from 'react';

class MinimaxInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curCount: props.min };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const curValue = e.target.value.replace(/\D/gi, '');

    if (Number(curValue) > this.props.max) return;

    this.setState(() => ({ curCount: Number(curValue) }));
  }

  increment = () => {
    if (this.state.curCount >= this.props.max) return;

    this.setState((prevState) => ({
      curCount: Number(prevState.curCount) + 1,
    }));
  };

  decrement = () => {
    if (this.state.curCount <= this.props.min) return;

    this.setState((prevState) => ({
      curCount: Number(prevState.curCount) - 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Вы можете ввести только числа от 0 до {this.props.max}:</p>
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
