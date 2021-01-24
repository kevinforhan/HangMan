import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Notification from './components/Notification'
import Popup from './components/Popup'
import {showNotification as show} from './Helpers/Helpers'


import "./App.css";

const words = ['blackhawks', 'potato', 'bears', 'chicago', 'brody', 'rex', 'catherine', 'brian', 'italy', 'ireland', 'dawson', 'forhan', 'romano', 'hinsdale', 'silverthorne'];
let selectedWord = words[Math.floor(Math.random() * words.length)];


function App() {
  const [playable, setPlayable] = useState(true); 
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [showNotification, setShowNotification] = useState(false)
  useEffect(() => {
    const handleKeyDown = event => {
     const {key, keyCode} = event
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
  
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification)
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters => [...wrongLetters, letter]);
          } else {
            show(setShowNotification)
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown) 
    return () => window.removeEventListener('keydown', handleKeyDown)
    
  }, [correctLetters, wrongLetters, playable]); 

  return ( 
    <div>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup />
        <Notification showNotification={showNotification} />
    </div>
  );
}

export default App;
