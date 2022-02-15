import React, { useState } from 'react'

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';

import './GameSearch.scss'

function GameSearch({ placeholder, data }) {
  const [filteredGame, setFilteredGame] = useState([]);
  const [query, setQuery] = useState('');

  const gameFilter = (e) => {
    const queryWord = e.target.value;
    setQuery(queryWord);

    const newGameSearched = data.filter((game) => {
      return game.name.toLowerCase().includes(queryWord.toLowerCase());
    });

    if (queryWord === '') {
      setFilteredGame([]);
    } else {
      setFilteredGame(newGameSearched);
    }
  };

  const clearQuery = () => {
    setFilteredGame([]);
    setQuery('');
  };

    function handleClick(event, value) {
      event.preventDefault();
      console.log(value.id);
      console.log(value.released)
    }
  

  return (
    <div className='search'>
      <div className='searchInputs'>
        <input
          type='text'
          placeholder={placeholder}
          value={query}
          onChange={gameFilter}
        />
        <div className='searchIcon'>
          {filteredGame.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id='clearBtn' onClick={clearQuery} />
          )}
        </div>
      </div>
      {filteredGame.length != 0 && (
        <div>
          {filteredGame.slice(0, 15).map((value, key) => {
            return (
              <div key={key} className='styles'>
                <p className='innertext'>{value.name}</p>
                <button onClick={((event) => handleClick(event, value))} 
                type='submit' className='findbtn'>Find a Gamer!</button>
              </div>
            );
          })}
    </div>
    )}
    </div>
  );
}



export default GameSearch;
