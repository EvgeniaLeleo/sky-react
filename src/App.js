import Text from './Text';
import Squares from './Squares';
import MinMax from './MinMax';
import MinMaxFn from './MinMaxFn';
import MiniMaxInput from './MiniMaxInput';

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
  </div>
);

export default App;
