import MinMax from './MinMax';

const OrderDetail = (props) => {
  const { book, setQuantity } = props;

  return (
    <div className="shopItem order-detail card">
      <div className="shopItem-title">{book.title} </div>
      <div className="shopItem-price">Price: {book.price} </div>
      <div className="shopItem-price">Quantity: {book.quantity} </div>
      <div>
        <MinMax
          max={book.rest}
          current={book.quantity}
          onChange={(quantity) => {
            setQuantity(book.id, quantity);
          }}
        />
      </div>
    </div>
  );
};

export default OrderDetail;
