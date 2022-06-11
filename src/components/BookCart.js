import { useState } from 'react';
import MinMax from './MinMax';
import booksStub from './booksStub';
import Total from './Total';

const BookCart = () => {
  const [books, setBooks] = useState(booksStub());

  const setQuantity = (id, quantity) => {
    setBooks(
      books.map((book) => (book.id !== id ? book : { ...book, quantity })),
    );
  };

  const deleteHandle = (i) => {
    const newBooks = books.concat();
    newBooks.splice(i, 1);
    setBooks(newBooks);
  };

  return (
    <div>
      <h1>books list</h1>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove</th>
            <th>Total</th>
          </tr>
          {books.map((book, i) => (
            <tr key={book.id}>
              <td>{i + 1} </td>
              <td>{book.title} </td>
              <td>{book.price} </td>
              <td>
                <MinMax
                  max={book.rest}
                  current={book.quantity}
                  onChange={(quantity) => {
                    setQuantity(book.id, quantity);
                  }}
                />
              </td>
              <td>
                <button
                  className="removeButton"
                  type="button"
                  onClick={() => deleteHandle(i)}
                >
                  X
                </button>
              </td>
              <td>{book.quantity * book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        <strong>
          Total: <Total books={books} />
        </strong>
      </p>
    </div>
  );
};

export default BookCart;
