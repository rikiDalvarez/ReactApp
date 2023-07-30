
import './App.css';
import Header from './Header';
import Functional from './functional';
import ClickComponent from './ClickComponent';
import { useState } from 'react';


function App() {
  const [data, setData] = useState('hello There, welcome to routes in catalonia')

  const test = (dataFromChild) => {
    console.log(dataFromChild);
    setData(dataFromChild);
  }

  return (
    <>
      <div >
        <h1>{data}</h1>
        <Functional
          returnData={test}
        />
        <ClickComponent />

      </div>
    </>
  );
}

export default App;
