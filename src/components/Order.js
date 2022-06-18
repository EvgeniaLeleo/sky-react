import { useState } from 'react';
import booksStub from './booksStub';
import TotalPrice from './TotalPrice';
import TotalQuantity from './TotalQuantity';
import OrderDetail from './OrderDetail';

const Order = () => {
  const [books, setBooks] = useState(booksStub());

  const setQuantity = (id, quantity) => {
    setBooks(
      books.map((book) => (book.id !== id ? book : { ...book, quantity })),
    );
  };

  return (
    <div className="order">
      <div className="cardsView">
        {books.map((book, i) => (
          <OrderDetail
            book={book}
            setQuantity={setQuantity}
            key={book.id}
          ></OrderDetail>
        ))}
      </div>
      <p className="total">
        Total quantity:{' '}
        <strong>
          <TotalQuantity books={books} />
        </strong>
      </p>
      <p className="total">
        Total price:{' '}
        <strong>
          <TotalPrice books={books} />
        </strong>
      </p>
    </div>
  );
};

export default Order;
