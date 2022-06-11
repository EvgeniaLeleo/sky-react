import './App.css'
import NumbersTable from './components/NumbersTable'
import Legend from './components/Legend'
import MinMax from './MinMax'
import MinMaxFn from './MinMaxFn'
import MiniMaxInput from './MiniMaxInput'
import MiniMaxInputFn from './MiniMaxInputFn'

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
    </div>
  )
}

export default App
