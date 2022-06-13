import PropTypes from 'prop-types';

const Total = ({ books }) => {
  const total = books.reduce(
    (sum, book) => sum + book.price * book.quantity,
    0,
  );
  return <span>{total}</span>;
};

Total.propTypes = {
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

export default Total;
