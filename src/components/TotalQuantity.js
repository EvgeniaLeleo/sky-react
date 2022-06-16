import PropTypes from 'prop-types';

const TotalQuantity = ({ books }) => {
  const totalQuantity = books.reduce(
    (quantity, book) => quantity + book.quantity,
    0,
  );
  return <span>{totalQuantity}</span>;
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
