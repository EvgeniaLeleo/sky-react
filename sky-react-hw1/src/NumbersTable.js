import PropTypes from 'prop-types'
import isPrime from './utils'

function NumbersTable(props) {
  const { n } = props
  const arr = []

  for (let i = 0; i < n; i += 1) {
    arr.push(i)
  }

  return (
    <div className="container">
      <div className="numbers-table">
        {arr.map((el) => {
          if (Number(el) % 2 === 0 && Number(el) !== 2) {
            return (
              <div className="cell even" key={el}>
                {el}
              </div>
            )
          }

          if (isPrime(Number(el))) {
            return (
              <div className="cell prime" key={el}>
                {el}
              </div>
            )
          }

          return (
            <div className="cell odd" key={el}>
              {el}
            </div>
          )
        })}
      </div>
    </div>
  )
}

NumbersTable.propTypes = {
  n: PropTypes.number.isRequired,
}

export default NumbersTable
