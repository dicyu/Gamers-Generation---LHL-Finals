import React, { useState } from 'react'
import Data from './mock-data.json'

import './GameSearch.scss'

function GameSearch(props) {
  const [query, setQuery] = useState("")
  return (
    <div className='game-search'>
      <input className='search-bar' placeholder="Enter Game Title" onChange={e => setQuery(e.target.value)} />
      <br></br>
      {
        Data.filter(game => {
          if (query === '') {
            return null
          } else if (game.name.toLowerCase().includes(query.toLowerCase())) {
            return game;
          }
        }).map((game, index) => (
          <div className="box" key={index}>
            <p>{game.name} {game.released}</p>
            </div>
        ))
      }
    </div>
  );
}

export default GameSearch;