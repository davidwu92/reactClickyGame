//components/Gamebox/Gamebox.js
import React, {useContext} from 'react'
import GameContext from '../../utils/GameContext'

const Gamebox = () => {
  const {imageArr, handleClick} = useContext(GameContext)

  return(
    <>
      {imageArr.map(image => <span onClick = {handleClick}>{image}</span>)}
    </>
  )
}

export default Gamebox