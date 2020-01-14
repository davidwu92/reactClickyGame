import React, {useState} from 'react';

import Navbar from './components/Navbar'
import Header from './components/Header'
import Gamebox from './components/Gamebox'
import Footer from './components/Footer'

import GameContext from './utils/GameContext'

function App() {
  const [gameState, setGameState] = useState({
    score: 0,
    topScore: 0,
    clickedArr: [],
    imageArr: [
      <img id = "img1" alt = "click me" src={require("./images/black.jpg")}/>,
      <img id = "img2" alt = "click me" src={require("./images/blue.jpg")}/>,
      <img id = "img3" alt = "click me" src={require("./images/green.jpg")}/>,
      <img id = "img4" alt = "click me" src={require("./images/orange.jpg")}/>,
      <img id = "img5" alt = "click me" src={require("./images/pink.jpg")}/>,
      <img id = "img6" alt = "click me" src={require("./images/purple.jpg")}/>,
      <img id = "img7" alt = "click me" src={require("./images/red.jpg")}/>,
      <img id = "img8" alt = "click me" src={require("./images/grey.jpg")}/>,
    ]
  })

  gameState.handleClick = event => {
    //SHUFFLE imageArr
    const shuffle = (arr) => {
      let i = arr.length
      let temp, rand
      while (0 !== i) {
        rand = Math.floor(Math.random()*i)
        i--
        temp = arr[i]
        arr[i] = arr[rand]
        arr[rand] = temp
      }
      return arr
    }
    let imageArr = shuffle(gameState.imageArr)
    setGameState({...gameState, imageArr})
    if(gameState.clickedArr.indexOf(event.target.id)===-1){      //SUCCESSFUL CLICK
      let clickedArr = JSON.parse(JSON.stringify(gameState.clickedArr))
      clickedArr.push(event.target.id)
      setGameState({...gameState, clickedArr, score: gameState.score + 1})
    } else {  //FAIL CLICK
      alert('You lost.')
      console.log("Your Score:" + gameState.score)
      if(gameState.score > gameState.topScore){
        setGameState({...gameState, score: 0, clickedArr: [], topScore: gameState.score})
      } else {
        setGameState({...gameState, score: 0, clickedArr: []})
      }
    }
  }

  return (
    <GameContext.Provider value={gameState}>
      <Navbar/>
      <Header/>
      <Gamebox/>
      <Footer/>
    </GameContext.Provider>
  );
}

export default App;
