import PropTypes from 'prop-types';

const TotalPrice = ({ books }) => {
  const totalPrice = books.reduce(
    (sum, book) => sum + book.price * book.quantity,
    0,
  );
  return <span>{totalPrice}</span>;
};

TotalPrice.propTypes = {
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

export default TotalPrice;
