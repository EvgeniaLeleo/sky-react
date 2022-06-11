import './App.css'
import NumbersTable from './components/NumbersTable'
import Legend from './components/Legend'
import MinMax from './components/MinMax'
import MinMaxFn from './components/MinMaxFn'
import MiniMaxInput from './components/MiniMaxInput'
import MiniMaxInputFn from './components/MiniMaxInputFn'
import Textbooks from './components/Textbooks'

const num = 48
const min = 5
const max = 25

function App() {
  return (
    <div>
      <Legend />
      <NumbersTable n={num} />

      <MinMax min={min} max={max} />
      <p />
      <MinMaxFn min={min} max={max} />
      <p />
      <MiniMaxInput min={min} max={max} />
      <p />
      <MiniMaxInputFn min={min} max={max} />
      <p />
      <Textbooks />
      <p />
    </div>
  )
}

export default App
