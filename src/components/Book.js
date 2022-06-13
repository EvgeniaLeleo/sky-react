import PropTypes from 'prop-types'

function Book(props) {
  return (
    <div className="Book">
      <h2>{props.name}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
    </div>
  )
}

Book.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  price: PropTypes.string,
}

Book.defaultProps = {
  name: '',
  year: '',
  price: '',
}

export default Book
