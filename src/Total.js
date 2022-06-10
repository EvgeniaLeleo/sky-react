const Total = ({ books }) => {
  const total = books.reduce(
    (sum, book) => sum + book.price * book.quantity,
    0,
  );
  return <span>{total}</span>;
};

export default Total;
