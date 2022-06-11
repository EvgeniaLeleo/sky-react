function Legend() {
  return (
    <div className="legend">
      <ul className="legend__items">
        <li className="legend__item">
          <span className="square even" /> - четные числа
        </li>
        <li className="legend__item">
          <span className="square odd" /> - нечетные числа
        </li>
        <li className="legend__item">
          <span className="square prime" /> - простые числа
        </li>
      </ul>
    </div>
  )
}

export default Legend
