import React from 'react'
import PropTypes from 'prop-types'

const style = { display: 'inline-block', padding: '1px 5px', width: '30px' }

class MiniMaxInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { curCount: props.min }
  }

  onChange = (e) => {
    const num = parseInt(e.target.value, 10)
    const curValue = Number.isNaN(num) ? this.props.min : num

    if (Number(curValue) > this.props.max) return

    this.setState(() => ({ curCount: Number(curValue) }))
  }

  onBlur = (e) => {
    if (Number(e.target.value) < this.props.min) {
      this.setState(() => ({ curCount: this.props.min }))
    }
  }

  increment = () => {
    if (this.state.curCount >= this.props.max) return

    this.setState((prevState) => ({
      curCount: Number(prevState.curCount) + 1,
    }))
  }

  decrement = () => {
    if (this.state.curCount <= this.props.min) return

    this.setState((prevState) => ({
      curCount: Number(prevState.curCount) - 1,
    }))
  }

  render() {
    return (
      <div>
        <h3>Классовый MinMax</h3>
        <p>
          Возможные значения: от {this.props.min} до {this.props.max}:
        </p>
        <button
          type="button"
          disabled={Number(this.state.curCount) <= this.props.min}
          onClick={this.decrement}
        >
          -
        </button>
        <input
          style={style}
          value={this.state.curCount}
          onChange={this.onChange}
          onBlur={this.onBlur}
        />
        <button
          type="button"
          disabled={Number(this.state.curCount) >= this.props.max}
          onClick={this.increment}
        >
          +
        </button>
      </div>
    )
  }
}

MiniMaxInput.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
}

export default MiniMaxInput
