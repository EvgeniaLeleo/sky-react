import './App.css'
import NumbersTable from './components/NumbersTable'
import Legend from './components/Legend'
import MinMax from './components/MinMax'
import MinMaxFn from './components/MinMaxFn'
import MiniMaxInput from './components/MiniMaxInput'
import MiniMaxInputFn from './components/MiniMaxInputFn'
import Textbooks from './components/Textbooks'

const number = 48
const min = 5
const max = 25

function App() {
  return (
    <div>
      <Legend />
      <NumbersTable number={number} />
      <MinMax min={min} max={max} />
      <MinMaxFn min={min} max={max} />
      <MiniMaxInput min={min} max={max} />
      <MiniMaxInputFn min={min} max={max} />
      <Textbooks />
    </div>
  )
}

export default App
