import { useState } from 'react'
import PropTypes from 'prop-types'

const style = { display: 'inline-block', padding: '1px 5px', width: '30px' }

function MiniMaxInputFn({ min, max }) {
  const [curCount, setCurCount] = useState(min)

  const onChange = (e) => {
    const num = parseInt(e.target.value, 10)
    const curValue = Number.isNaN(num) ? min : num

    if (Number(curValue) > max) return

    setCurCount(Number(curValue))
  }

  const onBlur = (e) => {
    if (Number(e.target.value) < min) {
      setCurCount(min)
    }
  }

  const increment = () => {
    if (curCount >= max) return

    setCurCount(Number(curCount) + 1)
  }

  const decrement = () => {
    if (curCount <= min) return

    setCurCount(Number(curCount) - 1)
  }

  return (
    <div>
      <h3>Функциональный MinMax</h3>
      <p>
        Возможные значения: от {min} до {max}:
      </p>
      <button
        type="button"
        disabled={Number(curCount) <= min}
        onClick={decrement}
      >
        -
      </button>
      <input
        style={style}
        value={curCount}
        onChange={onChange}
        onBlur={onBlur}
      />
      <button
        type="button"
        disabled={Number(curCount) >= max}
        onClick={increment}
      >
        +
      </button>
    </div>
  )
}

MiniMaxInputFn.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
}

export default MiniMaxInputFn
