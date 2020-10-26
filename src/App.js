import { React, useState, useEffect} from 'react';
import './App.css';

const App = () => {
  const [count, setcount] = useState(0);

  const increamentCounter = () =>{
    setcount(count + 1);
  }
  
  return (
    <>
      <div className="container">
      <h1>This is amar - {count}</h1>
      <button className="btn btn-sm btn-primary" onClick={increamentCounter}>Increament</button>
      </div>
    </>
  );
}


export default App;
