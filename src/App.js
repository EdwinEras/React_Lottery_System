import { useState } from 'react';
import './App.css';
import GridOpt from './components/gridOpt/GridOpt';
import GridCash from './components/gridCash/GridCash';
import ResultArea from './components/resultArea/ResultArea';
import MainOpt from './components/mainOpt/MainOpt';

var arrTemp = []; //temporary global array of number

function App() {
  var [arrNum, setArrNum] = useState([]); 
  var [arrCash, setArrCash] = useState([]);
  var [total, setTotal] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div className='title'>
          <h1>WHE WHE on D' Avenue</h1>
        </div>
      </header>
      <div className='multi-columns'>
        <div className='column1'>
          <div className='logo'>
            <img src='/logo.jpeg' alt='logo' width={300}></img>
          </div>
          <GridCash arrTemp={arrTemp} arrCash={arrCash} setArrCash={setArrCash} />
        </div>
        
        <div className='column2' >
          <GridOpt arrTemp={arrTemp} setArrCash={setArrCash}/>
          <MainOpt 
            arrTemp={arrTemp}   
            setArrNum={setArrNum} 
            arrCash={arrCash} 
            setArrCash={setArrCash} 
            setTotal={setTotal}
          />
        </div>

        <div className='column3'>
          <ResultArea arrNum={arrNum} total={total}/>
        </div>
      </div>
   </div>
  );
}

export default App;

