import React, { useState, useEffect } from 'react';
import './App.css';
import {Display, Container} from './components';

const App = () => {
  const [ sentence, setSentence ] = useState('');
  const [ scramble, setScramble ] = useState([]);
  const [ counter, setCounter ] = useState(1);
  const [ showBtn, setShowBtn ] = useState(true);

  const fetchSentence = async () => {
    console.log("btn clicked");
    const URL = `https://api.hatchways.io/assessment/sentences/${counter}`;
    const RESPONSE = await fetch(URL);
    const DATA = await RESPONSE.json();
    setSentence(DATA.data.sentence);
    if (counter <= 10) {
      setCounter(counter + 1);
    } else {
      // show message saying there are no more sentences left,
      // refresh page to play again
    }
    setShowBtn(false);
    return DATA.data.sentence;
  }

  const Scrambler = (sentence) => {
    let sentArray = sentence.split(' ');
    let result = [];
    sentArray.forEach(word => {
      console.log(word)
      let temp = word.split('');
      if (temp.length > 3) {
        for (let i = temp.length - 2; i > 1; i--) {
          let j = 1 + Math.floor(Math.random() * i);
          [temp[i], temp[j]] = [temp[j], temp[i]];
        }
      }
      result.push(temp.join(""));
    })
    console.log(result);
    return result;
  }

  useEffect(() => {
    setScramble(Scrambler(sentence));
  }, [sentence])

  return (
    <>
    {showBtn && <button onClick={fetchSentence}>new scramble</button>}
      <Display
        sentence={sentence}
        scramble={scramble}
      />
      <Container
        sentence={sentence}
        setCounter={setCounter}
        counter={counter}
      />
    </>
  );
}

export default App;
