import Minimax from './components/Minimax';
import MinimaxInput from './components/MinimaxInput';

const min = 5;
const max = 25;

const App = () => (
  <div>
    <Minimax min={min} max={max} />
    <p />
    <MinimaxInput min={min} max={max} />
  </div>
);

export default App;
