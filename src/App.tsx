import React, {useState} from 'react';
import './App.module.css';
import {Counter} from "./components/Counter";


function App() {

    const [counter, setCounter] = useState<number>(0)

    const incrHandler = () => {
        setCounter(counter + 1)
    }

    const descrHandler = () => {
        setCounter(0)
    }

  return (
    <div className="App">
     <Counter
         counter={counter}
         incrHandler={incrHandler}
         descrHandler={descrHandler}

     />
    </div>
  );
}

export default App;
