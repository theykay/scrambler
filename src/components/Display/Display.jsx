import React from 'react';
// import './Display.css';

const Display = (props) => {
  let temp = props.scramble.join(' ');
  return (
    <>
      {/* <h1>{props.scramble}</h1> */}
      <h1>{temp}</h1>
    </>
  );
};

export default Display;