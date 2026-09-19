
import './App.css';
import { useState } from 'react';
function App() {
const [count, setCount] = useState(0);
const increase = () =>{
  setCount(count +1);
}

const decrease = () => {
  setCount(count -1 );
}
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
         Counter App
        </p>
        <div >
          <button onClick={increase}>Increase</button>
          <p>{count}</p>
          <button onClick={decrease}> Decrease </button>
        </div>
      </header>
    </div>
  );
}

export default App;
