import React, { useState } from 'react'
import Data from './mock-data.json'

import './GameSearch.scss'

function GameSearch(props) {
  const [query, setQuery] = useState("")
  return (
    <div className='game-search'>
      <input className='search-bar' placeholder="Enter Post Title" onChange={e => setQuery(e.target.value)} />
      {
      Data.map((game, index) => (
      <div className="box" key={index}>
        <p>{game.name}</p>
        <p>{game.released}</p>
      </div>
        ))
      }
    </div>
  );
}

export default GameSearch;