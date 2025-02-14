import { useState } from 'react';
import './App.css';

function App() {
  var [arrNum, setArrNum] = useState([]);
  var [arrCash, setArrCash] = useState([]);

  const addOpt = (i) => {
    if (arrNum.length < 5) {
      setArrNum([...arrNum, i]);
      console.log([...arrNum, i]);
    } else {
      alert("Hello! You can only choose 5 numbers");
    }
  };

  const cashOpt = (i) => {
    if (arrNum.length == 5){
      setArrCash([...arrCash, i]);
      console.log([...arrCash, i]);
    }else{
      alert("Hello! You need 5 numbers");
    }
  }

  const clearOpt = () =>{
    setArrNum([]);
    setArrCash([]);
    console.log([...arrCash]);
    console.log([...arrNum]);
  }

  const randomOpt = () =>{
    setArrNum([]);
    let arrTemp = [];
    while(arrTemp.length < 5) {
      let randInt = Math.floor(Math.random() * 20);
      if (!arrTemp.includes(randInt) && randInt > 0) {
        arrTemp.push(randInt);
      }
    }
    setArrNum(arrTemp);
    console.log(arrTemp);
  }

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
          <div className='cash-buttons'>
              <div>
                <a onClick={(e)=>{cashOpt(1)}} href='#'>
                  <img src="/cash_1.png" width={80} alt='cash_1'/>
                </a>
              </div>
              <div size={6}>
                <a onClick={(e)=>{cashOpt(5)}} href='#'>
                  <img src="/cash_5.png" width={80} alt='cash_5'/>
                </a>
              </div>
              <div size={6}>
                <a onClick={(e)=>{cashOpt(10)}} href='#'>
                  <img src="/cash_10.png" width={80} alt='cash_10'/>
                </a>
              </div>
              <div size={6}>
                <a onClick={(e)=>{cashOpt(20)}} href='#'>
                  <img src="/cash_20.png" width={80} alt='cash_20'/>
                </a>
              </div>
          </div>
        </div>
        
        <div className='column2' >
          <div className="container" >
            {Array.from(Array(20)).map((_, i) => (
              <div key={i+1}>
                <a onClick={()=>{
                    addOpt(i+1);
                  }} href='#'>
                  <img src={`/number_${i+1}.png`} width={50} alt={`number_${i+1}`}></img>
                </a>
              </div>
             ))}
          </div>
          <div >
            <a onClick={(e)=>{console.log("cash")}} href='#'>
              <img src="/cash_button.png" width={100} alt='cash_button'/>
            </a>
          </div>
          <div >
            <a onClick={(e)=>{
                clearOpt();
              }} href='#'>
              <img src="/clear_button.png" width={100} alt='clear_button'/>
            </a>
          </div>
          <div >
            <a onClick={(e)=>{
                randomOpt();
              }} href='#'>
              <img src="/random_button.png" width={100} alt='random_button'/>
            </a>
          </div>
        </div>

        <div className='column3'>
          <div className='results'>
            <h3>Numbers Selected</h3>
            <p>Mark 1</p>
            <p>Mark 1</p>
            <p>Mark 1</p>
            <p>Mark 1</p>
            <p>Mark 1</p>
            <h3>Total: </h3>
          </div>
        </div>
      </div>
   </div>
  );
}

export default App;

