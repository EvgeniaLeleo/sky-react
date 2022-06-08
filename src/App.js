import Text from './Text';
import Squares from './Squares';
import MinMax from './MinMax';
import MinMaxFn from './MinMaxFn';
import MiniMaxInput from './MiniMaxInput';
import MiniMaxInputFn from './MiniMaxInputFn';

const min = 5;
const max = 25;

const App = () => (
  <div>
    <Text />
    <p />
    <Squares />
    <p />
    <MinMax min={min} max={max} />
    <p />
    <MinMaxFn min={min} max={max} />
    <p />
    <MiniMaxInput min={min} max={max} />
    <p />
    <MiniMaxInputFn min={min} max={max} />
  </div>
);

export default App;
