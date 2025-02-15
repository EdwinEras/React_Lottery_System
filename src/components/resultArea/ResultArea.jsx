import React from "react";

const ResultArea = ({arrNum, total}) => {
  return (
    <div className='results'>
        <h3>Numbers Selected</h3>
        {arrNum.map((elem) => (
        <div key={`num_${elem.num}`}>
            <h5>Mark: {elem.num}</h5>
        </div>
        ))}
        <h3>Total: ${total}</h3>
    </div>
  );
};

export default ResultArea;