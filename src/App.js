import React, { useState, useEffect } from 'react';
import './App.css';
import {Display, Container} from './components';

const App = () => {
  const [ sentence, setSentence ] = useState('');
  const [ counter, setCounter ] = useState(1);

  const fetchSentence = async () => {
    const URL = `https://api.hatchways.io/assessment/sentences/${counter}`;
    // const URL = `https://api.hatchways.io/assessment/sentences/1`;
    const RESPONSE = await fetch(URL);
    const DATA = await RESPONSE.json();
    setSentence(DATA.data.sentence);
  }

  useEffect(() => {
    fetchSentence();
    console.log(sentence);
  })

  return (
    <>
      <Display
        sentence={{sentence}}
      />
      <Container
        sentence={{sentence}}
        setCounter={{setCounter}}
        counter={{counter}}
      />
    </>
  );
}

export default App;
