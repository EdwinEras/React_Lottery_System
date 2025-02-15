import React from "react";

const GridCash = ({arrTemp, arrCash, setArrCash}) => {

  const valueOpt = (i) => {
    if (arrTemp.length === 5){ //check temporary aray has 5 elements to click cash options
        setArrCash([...arrCash, {cash: i}]);
      }else{
        alert("Hello! You need 5 numbers");
      }
    }

  return (
      <div className='cash-buttons'>
          <div>
            <a onClick={(e)=>{valueOpt(1)}} href='#'>
              <img src="/cash_1.png" width={80} alt='cash_1'/>
            </a>
          </div>
          <div size={6}>
            <a onClick={(e)=>{valueOpt(5)}} href='#'>
              <img src="/cash_5.png" width={80} alt='cash_5'/>
            </a>
          </div>
          <div size={6}>
            <a onClick={(e)=>{valueOpt(10)}} href='#'>
              <img src="/cash_10.png" width={80} alt='cash_10'/>
            </a>
          </div>
          <div size={6}>
            <a onClick={(e)=>{valueOpt(20)}} href='#'>
              <img src="/cash_20.png" width={80} alt='cash_20'/>
            </a>
          </div>
      </div>
  );
    
};

export default GridCash;