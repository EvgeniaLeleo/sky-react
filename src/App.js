import './App.css';
<<<<<<< HEAD
import ColorTable from './components/ColorTable';
import LoginPass from './components/LoginPass';

const number = 27;
||||||| 35db89f
import Order from './components/Order';
=======
import BookCart from './components/BookCart';
import Select from './components/Select';
import LoginPass from './components/LoginPass';
>>>>>>> main

function App() {
<<<<<<< HEAD
  return (
    <div>
      <ColorTable number={number} />
      <p></p>
      <LoginPass />
    </div>
  );
||||||| 35db89f
  return <Order />;
=======
  return (
    <div>
      <BookCart />
      <Select />
      <LoginPass />
    </div>
  );
>>>>>>> main
}

export default App;
