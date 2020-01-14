//utils/GameContext/GameContext.js
import React, { createContext } from 'react'

const GameContext = createContext({
  score: 0,
  topScore: 0,
  clickedArr: [],
  handleClick: () => {},
  imageArr: []
})
export default GameContext