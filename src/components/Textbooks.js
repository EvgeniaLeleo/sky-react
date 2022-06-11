import Book from './Book'

function Textbooks() {
  return (
    <div className="App">
      <h1 id="hello" className="class1">
        Textbooks
      </h1>
      <Book name="JS for beginners" year="2018" price="1000" />
      <Book name="React" year="2020" price="1200" />
      <Book name="Vue JS" year="2019" price="1100" />
    </div>
  )
}

export default Textbooks
