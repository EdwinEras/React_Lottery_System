import React from "react";

const MainOpt = ({arrTemp, setArrNum, arrCash, setArrCash, setTotal}) => {
  
  const changeColor = (id, color) => { //change the border color of an option with its id and a given color
    let picture = document.getElementById(id);
    if(picture){
      picture.style.border = "5px solid "+color;
    }
  }

  const cashOpt = () => { //check that the temporary array has 5 elements, update the state arrNum and 
                          //calculate the total state
    if (arrTemp.length === 5){
      setArrNum(arrTemp);
      let totalTemp = 0;
      arrCash.map((elem) => {
        totalTemp += elem.cash;
      });
      setTotal(totalTemp);
    }else{
      alert("Hello! You need 5 numbers");
    }
  }
  
  const clearOpt = () =>{ //reset the border colors and the arrays in the system
    for(let c=0; c<20; c++){
      changeColor(`number_${c}`, "transparent");
    }
    setArrNum([]);
    setArrCash([]);
    setTotal(0);
    while(arrTemp.length) {arrTemp.pop()};
  }
  
  const randomOpt = () => {   
    clearOpt();
    while(arrTemp.length < 5) {
      let randInt = Math.floor(Math.random() * 19) + 1;
      const index = arrTemp.findIndex(elem => elem.num === randInt); //create 5 random unique options 
      if (index === -1) {
        arrTemp.push({num: randInt}); //add the options to the temporary array
        changeColor(`number_${randInt}`, "red"); //change the border color of the options
      }
    }
  }

  return (
      <div className='main-opt'>
          <div >
              <a onClick={(e)=>{
                cashOpt();
              }} href='#'>
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
          <div>
              <a onClick={(e)=>{
                randomOpt();
              }} href='#'>
              <img src="/random_button.png" width={100} alt='random_button'/>
              </a>
          </div>
      </div>
  );
};

export default MainOpt;