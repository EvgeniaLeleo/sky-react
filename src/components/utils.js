import PropTypes from 'prop-types'

const isPrime = (number) => {
  if (number < 2) return false
  if (number === 2) return true

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false
  }

  return true
}

isPrime.propTypes = {
  number: PropTypes.number.isRequired,
}

export default isPrime
