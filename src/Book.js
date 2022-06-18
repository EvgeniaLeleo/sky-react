function Book(props) {
  return (
    <div className="Book">
      <h2>{props.name}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
    </div>
  )
}

export default Book
