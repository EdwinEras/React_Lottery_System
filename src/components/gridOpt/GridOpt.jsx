import React, { useEffect, useState } from "react";

const GridOpt = ({arrTemp, setArrCash}) => {
  const [elementId, setElementId] = useState(); //state used to trigger the useEffect function 
                                                //and change the border of the options

  useEffect(() => {
    let picture = document.getElementById(elementId); //get the image by its id
    if(picture){ //check if the picture exists
      let pictureColor = picture.style.borderColor;
      if(pictureColor==="red"){
        picture.style.border = "5px solid transparent"
      }else{
        picture.style.border = "5px solid red"
      }
    }
    setElementId("number_0"); //reset the component to an option that does not exist
  }, [elementId])

  const addOpt = (id) => {
    const index = arrTemp.findIndex(elem => elem.num === id);
    if (index !== -1) { //check repetitions and delete it from the temporary array
      arrTemp.splice(index, 1);
      setElementId(`number_${id}`);
      setArrCash([]); //reset the cash options 
    }else{
      if (arrTemp.length < 5) {   //if option is not repeated I add it to the temporary array
                                  //and change trigger the useEffect function
        arrTemp.push({num: id});
        setElementId(`number_${id}`);
      }else {
        alert("Hello! You can only choose 5 numbers");
      }
    }
  };

  return (
    <div className="container" >
      {Array.from(Array(20)).map((_, i) => (
        <div key={`opt_${i+1}`}>
          <a onClick={()=>{
              addOpt(i+1)
            }} href='#'>
            <img 
              src={`/number_${i+1}.png`} 
              id={`number_${i+1}`}
              width={50} 
              alt={`number_${i+1}`}
              style={{border: "5px solid transparent"}}
            ></img>
          </a>
        </div>
      ))}
    </div>
  );
    
};

export default GridOpt;