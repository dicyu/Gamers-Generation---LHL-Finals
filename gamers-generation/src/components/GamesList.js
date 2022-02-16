import React from "react";
import classNames from "classnames";
import GameSearch from "./GameSearch";
import testData from './testData'
import './GameList.scss'

export default function GamesList(props) {
  console.log(testData)
  return (
    <div>
      <h1 className='title'>Search for a game...</h1>
      <GameSearch data={testData} />
    </div>
  )
}
