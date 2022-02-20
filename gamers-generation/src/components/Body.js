import React from 'react'
import './Body.scss'

function Body(props) {
  return (
    <div className='container'>
      <div className='container__one'>
        <h2 className='container__header'>Matching</h2>
        <p className='container__title'>Testing info here</p>
        <p>More Info</p>
      </div>
      <div className='container__two'>
        <h2>Why use our platform</h2>
        <p>Testing info here</p>
        <p>More Info</p>
      </div>
      <div className='container__three'>
        <h2>Dunno</h2>
        <p>Testing info here</p>
        <p>More Info</p>
      </div>
    </div>
  )
}

export default Body;