//components/Navbar/Navbar.js
import React, {useContext} from 'react'
import GameContext from '../../utils/GameContext'

const Navbar = () => {
  const {score, topScore} = useContext(GameContext)
  return(
    <div>
      <p>score: {score}</p>
      <p>topScore: {topScore}</p>
    </div>
  )
}

export default Navbar