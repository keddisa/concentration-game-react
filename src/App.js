import React from 'react';
import './App.css';

import Header from './components/header';
import Game from './components/game';
import Footer from './components/footer';
import Result from './components/result';

import CardsArray from './cards-array';
import PlayersSelect from './components/players-select';

function App() {
  let[cardsDeck, setCardsDeck] = React.useState([])
  let[gameOver, setGameOver] = React.useState(false)
  let[startGame, setStartGame] = React.useState(false)
  let[playerNames, setPlayerNames] =React.useState(['Player 1', 'Player 2'])
  let [score, setScore] = React.useState([0, 0])
  React.useEffect(()=>{
    let array = CardsArray.concat(CardsArray)
    let shuffledCardSet = shuffle(array)
    setCardsDeck(shuffledCardSet)
  }, [gameOver])
  const shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
  }

  return (
    <div className="App">
      <Header />
      {!startGame && <PlayersSelect playerNames={playerNames} setPlayerNames={setPlayerNames} setStartGame={setStartGame}/>}
      {startGame && !gameOver && <Game cardsDeck={cardsDeck} score={score} setScore={setScore} setGameOver={setGameOver} playerNames={playerNames}/>}
      {startGame && gameOver && <Result score={score} setScore={setScore} setGameOver={setGameOver} playerNames={playerNames} setStartGame={setStartGame}/>}
      <Footer />
    </div>
  );
}

export default App;
