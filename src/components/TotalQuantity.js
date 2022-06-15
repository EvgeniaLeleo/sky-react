import PropTypes from 'prop-types';

const TotalQuantity = ({ books }) => {
  const total = books.reduce((quantity, book) => quantity + book.quantity, 0);
  return <span>{total}</span>;
};

TotalQuantity.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      rest: PropTypes.number,
      quantity: PropTypes.number,
    }),
  ).isRequired,
};

export default TotalQuantity;
