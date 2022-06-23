import './App.css';
import ColorTable from './components/ColorTable';
import LoginPass from './components/LoginPass';

const number = 27;

function App() {
  return (
    <div>
      <ColorTable number={number} />
      <p></p>
      <LoginPass />
    </div>
  );
}

export default App;
