import './App.css'
import NumbersTable from './NumbersTable'
import Legend from './Legend'

const num = 48

function App() {
  return (
    <div>
      <Legend />
      <NumbersTable n={num} />
    </div>
  )
}

export default App
