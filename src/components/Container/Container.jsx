import React from 'react';
import { Tile } from '../index';
// import './Container.css';

const Container = (props) => {
  let temp = props.sentence.split('');
  return (
    <>
    {temp.map((char, index) => {
        return (
          <Tile
            char={char}
            key={char + index}
          />
        )
    })}
    </>
  );
};

export default Container;